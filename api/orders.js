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
    console.warn('Failed to init firebase admin in orders API', e)
    return false
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  // require authorization header with ID token
  const authHeader = (req.headers.authorization || req.headers.Authorization || '')
  if (!authHeader.startsWith('Bearer ')) return res.status(401).json({ error: 'Missing or invalid Authorization header' })
  const token = authHeader.split(' ')[1]

  if (!initAdminOnce()) return res.status(500).json({ error: 'Server missing FIREBASE_SERVICE_ACCOUNT' })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const uid = decoded.uid

    const db = admin.firestore()
    const snap = await db.collection('orders').where('uid', '==', uid).orderBy('createdAt', 'desc').get()
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    return res.status(200).json({ ok: true, orders: list })
  } catch (err) {
    console.error('Failed to fetch user orders', err)
    return res.status(500).json({ error: 'Failed to fetch orders' })
  }
}
