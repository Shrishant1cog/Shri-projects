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
    console.warn('Failed to init firebase admin in admin update API', e)
    return false
  }
}

function isAdminEmail(email) {
  const raw = process.env.ADMIN_EMAILS || ''
  if (!raw) return false
  const list = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean)
  return list.includes((email || '').toLowerCase())
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const authHeader = (req.headers.authorization || req.headers.Authorization || '')
  if (!authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'Missing Authorization header' })
  const token = authHeader.split(' ')[1]

  if (!initAdminOnce()) return res.status(500).json({ error: 'Server missing FIREBASE_SERVICE_ACCOUNT' })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    if (!isAdminEmail(decoded.email)) return res.status(403).json({ error: 'Forbidden' })

    const { orderId, status } = req.body || {}
    if (!orderId || !status) return res.status(400).json({ error: 'Missing orderId or status' })

    const db = admin.firestore()
    await db.collection('orders').doc(orderId).update({ status, updatedAt: admin.firestore.FieldValue.serverTimestamp() })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Admin update order failed', err)
    return res.status(500).json({ error: 'Failed to update order' })
  }
}
