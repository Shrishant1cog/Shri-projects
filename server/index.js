require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Stripe = require('stripe')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Low } = require('lowdb')
const { JSONFile } = require('lowdb/node')

const app = express()
const port = process.env.PORT || 4242
const stripe = new Stripe(process.env.STRIPE_SECRET || 'sk_test_replace')

app.use(cors())
app.use(express.json())

// lowdb for simple demo storage (server/users.json)
const dbFile = new JSONFile('./server/users.json')
const db = new Low(dbFile)
async function initDB() {
  await db.read()
  db.data = db.data || { users: [] }
  await db.write()
}
initDB()

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me'

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

async function authMiddleware(req, res, next) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' })
  const token = auth.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

app.get('/api/health', (req, res) => res.json({ ok: true }))

// --- Auth endpoints (demo JWT-backed) ---
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body
    if (!email || !password) return res.status(400).json({ error: 'email and password required' })
    await db.read()
    const exists = db.data.users.find(u => u.email === email)
    if (exists) return res.status(409).json({ error: 'User already exists' })
    const hashed = await bcrypt.hash(password, 10)
    const user = { id: Date.now().toString(), email, password: hashed, name: name || '' }
    db.data.users.push(user)
    await db.write()
    const token = generateToken({ id: user.id, email: user.email, name: user.name })
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'server_error' })
  }
})

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ error: 'email and password required' })
    await db.read()
    const user = db.data.users.find(u => u.email === email)
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' })
    const token = generateToken({ id: user.id, email: user.email, name: user.name })
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    await db.read()
    const user = db.data.users.find(u => u.id === req.user.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json({ id: user.id, email: user.email, name: user.name })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'server_error' })
  }
})

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Starter UI Kit', price: 2900 },
    { id: 2, name: 'Components Pack', price: 7900 },
    { id: 3, name: 'Full Design System', price: 19900 }
  ]
  res.json(products)
})

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, successUrl, cancelUrl } = req.body
    const line_items = (items || []).map(it => ({
      price_data: {
        currency: 'inr',
        product_data: { name: it.name },
        unit_amount: Math.round(Number(it.price) * 100)
      },
      quantity: it.qty
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: successUrl || 'http://localhost:5173/?success=true',
      cancel_url: cancelUrl || 'http://localhost:5173/?canceled=true'
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'server_error' })
  }
})

app.listen(port, () => console.log(`API server running on http://localhost:${port}`))
