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
    console.warn('Failed to init firebase admin in admin export API', e)
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
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const authHeader = (req.headers.authorization || req.headers.Authorization || '')
  if (!authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'Missing Authorization header' })
  const token = authHeader.split(' ')[1]

  if (!initAdminOnce()) return res.status(500).json({ error: 'Server missing FIREBASE_SERVICE_ACCOUNT' })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    if (!isAdminEmail(decoded.email)) return res.status(403).json({ error: 'Forbidden' })

    const db = admin.firestore()
    const snap = await db.collection('orders').orderBy('createdAt', 'desc').get()
    let csv = 'orderId,razorpay_order_id,amount,currency,status,uid,createdAt,customerEmail\n'
    snap.forEach(doc => {
      const d = doc.data()
      const row = [doc.id, d.razorpay_order_id || '', d.amount || '', d.currency || '', d.status || '', d.uid || '', (d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toISOString() : ''), (d.customer?.email || '')]
      csv += row.map(val => (typeof val === 'string' ? `"${val.replace(/"/g, '""')}"` : val)).join(',') + '\n'
    })

    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment; filename="orders-export.csv"')
    res.status(200).send(csv)
  } catch (err) {
    console.error('Admin export failed', err)
    res.status(500).json({ error: 'Failed to export orders' })
  }
}
