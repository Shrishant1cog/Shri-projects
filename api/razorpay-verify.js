import crypto from 'crypto'
let admin
let adminInited = false

function initAdminOnce() {
  if (adminInited) return true
  const saRaw = process.env.FIREBASE_SERVICE_ACCOUNT || ''
  if (!saRaw) return false
  try {
    const saJson = saRaw.startsWith('{') ? JSON.parse(saRaw) : JSON.parse(Buffer.from(saRaw, 'base64').toString('utf8'))
    // lazy import to keep cold-start small
    admin = require('firebase-admin')
    if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(saJson) })
    adminInited = true
    return true
  } catch (e) {
    console.warn('Failed to init firebase admin', e)
    return false
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {}
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const key_secret = process.env.RAZORPAY_KEY_SECRET
  if (!key_secret) return res.status(500).json({ error: 'Missing Razorpay secret on server' })

  try {
    const generated = crypto.createHmac('sha256', key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')

    const verified = generated === razorpay_signature
    if (!verified) return res.status(400).json({ ok: false, error: 'Signature mismatch' })

    // optionally persist order if caller included order payload and if admin is configured
    const saved = { persisted: false }
    if (initAdminOnce()) {
      try {
        // If client provided an ID token, verify it to get a trusted uid
        let uid = null
        const authHeader = (req.headers.authorization || req.headers.Authorization || '')
        if (authHeader.startsWith('Bearer ')) {
          const token = authHeader.split(' ')[1]
          try {
            const decoded = await admin.auth().verifyIdToken(token)
            uid = decoded.uid
          } catch (e) {
            console.warn('Failed to verify ID token in verify endpoint', e)
          }
        }

        const { orderData } = req.body || {}
        // allow saving orderData provided by caller
        if (orderData) {
          const db = admin.firestore()
          const payload = {
            ...orderData,
            razorpay_order_id,
            razorpay_payment_id,
            uid: uid || orderData.uid || null,
            status: 'verification_received',
            verified: true,
            verifiedAt: admin.firestore.FieldValue.serverTimestamp()
          }
          // if an order document already exists for this razorpay_order_id, update it instead of creating a duplicate
          const existing = await db.collection('orders').where('razorpay_order_id', '==', razorpay_order_id).get()
          let docRef
          if (!existing.empty) {
            const docId = existing.docs[0].id
            await db.collection('orders').doc(docId).update({ ...payload, updatedAt: admin.firestore.FieldValue.serverTimestamp() })
            docRef = { id: docId }
          } else {
            // Do NOT create a new authoritative order here. The webhook is the canonical writer and will create/finalize orders.
            // Record a verification_attempts entry so admins can inspect stray verifications.
            try {
              await db.collection('verification_attempts').add({
                razorpay_order_id,
                razorpay_payment_id,
                payload: orderData,
                receivedAt: admin.firestore.FieldValue.serverTimestamp()
              })
            } catch (e) {
              console.warn('Failed to record verification attempt', e)
            }
            // leave docRef undefined so saved.persisted remains false
          }
          saved.persisted = true
          saved.id = docRef.id
        }
      } catch (e) {
        console.warn('Failed to persist order with admin', e)
      }
    }

    return res.status(200).json({ ok: true, saved })
  } catch (err) {
    console.error('Verification error', err)
    return res.status(500).json({ ok: false, error: 'Server error during verification' })
  }
}
