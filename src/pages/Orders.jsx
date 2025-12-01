import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Orders() {
  const { user, loading: authLoading } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setOrders([])
      setLoading(false)
      return
    }
    if (authLoading) {
      // wait until auth finishes
      setLoading(true)
      return
    }

    let cancelled = false
    ;(async () => {
      try {
        const token = await auth.currentUser.getIdToken()
        const resp = await fetch('/api/orders', { headers: { Authorization: `Bearer ${token}` } })
        if (!resp.ok) throw new Error('Failed to fetch orders')
        const body = await resp.json()
        if (cancelled) return
        setOrders(body.orders || [])
      } catch (e) {
        console.error('Failed to fetch orders', e)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => { cancelled = true }
  }, [user])

  if (!user) {
    return (
      <section style={{ padding: 40 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h2>My Orders</h2>
          <p>Please <Link to="/login">log in</Link> to see your orders.</p>
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: 40 }}>
      <div className="container" style={{ maxWidth: 920 }}>
        <h2>My Orders</h2>
        {loading ? (
          <div className="loading">Loading…</div>
        ) : orders.length === 0 ? (
          <div className="empty-cart" style={{ padding: 40 }}>
            <p>No orders yet. Start shopping!</p>
            <Link to="/" className="buy-button">Browse products</Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map(o => (
              <div key={o.id} className="card" style={{ padding: 12, marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong>Order:</strong> {o.razorpay_order_id || o.order_id || o.id}
                  </div>
                  <div>₹{(o.amount/100).toLocaleString()}</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <small>Payment id: {o.razorpay_payment_id}</small>
                </div>

                <div style={{ marginTop: 12 }}>
                  <strong>Items</strong>
                  <ul>
                    {(o.items || []).map(i => (
                      <li key={i.id}>{i.name} × {i.qty} — ₹{(i.price * i.qty).toLocaleString()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
