import Razorpay from 'razorpay'
let admin
let adminInited = false

function initAdminOnce() {
  if (adminInited) return true
  const saRaw = process.env.FIREBASE_SERVICE_ACCOUNT || ''
  if (!saRaw) return false
  try {
    const saJson = saRaw.startsWith('{') ? JSON.parse(saRaw) : JSON.parse(Buffer.from(saRaw, 'base64').toString('utf8'))
    admin = require('firebase-admin')
    if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(saJson) })
    adminInited = true
    return true
  } catch (e) {
    console.warn('Failed to init firebase admin in order API', e)
    return false
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { amount, currency = 'INR', receipt } = req.body || {}
  if (!amount) return res.status(400).json({ error: 'Missing amount' })

  const key_id = process.env.RAZORPAY_KEY_ID
  const key_secret = process.env.RAZORPAY_KEY_SECRET

  if (!key_id || !key_secret) {
    return res.status(500).json({ error: 'Razorpay keys are not configured on server' })
  }

  try {
    const rz = new Razorpay({ key_id, key_secret })

    const options = {
      amount: Number(amount),
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1
    }

    const order = await rz.orders.create(options)

    // persist an initial pending order doc (server-side only) so webhook can finalize later
    let localPendingId = null
    if (initAdminOnce()) {
      try {
        // try to get a uid from Authorization bearer token
        const authHeader = (req.headers.authorization || req.headers.Authorization || '')
        let uid = null
        if (authHeader.startsWith('Bearer ')) {
          const token = authHeader.split(' ')[1]
          try {
            const decoded = await admin.auth().verifyIdToken(token)
            uid = decoded.uid
          } catch (e) {
            console.warn('Failed to verify ID token in create-order', e)
          }
        }

        const { orderData } = req.body || {}
        const db = admin.firestore()
        const payload = {
          razorpay_order_id: order.id,
          amount: order.amount || options.amount,
          currency: order.currency || options.currency,
          items: orderData?.items || [],
          customer: orderData?.customer || null,
          uid: uid || null,
          status: 'created',
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        }

        // store in pending_orders instead of final orders — webhook will be the canonical writer
        const docRef = await db.collection('pending_orders').add(payload)
        localPendingId = docRef.id
      } catch (e) {
        console.warn('Failed to persist initial order via admin', e)
      }
    }

    // return the razorpay order and any pending id if created
    return res.status(200).json({ ...order, localPendingId })
  } catch (err) {
    console.error('Razorpay order creation failed', err)
    return res.status(500).json({ error: 'Failed to create order' })
  }
}
