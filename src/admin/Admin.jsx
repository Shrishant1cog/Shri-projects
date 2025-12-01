import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

const STATUSES = ['pending','paid','processing','shipped','delivered','cancelled','failed']

export default function Admin() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const token = await auth.currentUser?.getIdToken()
        if (!token) throw new Error('Not authenticated')
        const resp = await fetch('/api/admin/orders', { headers: { Authorization: `Bearer ${token}` } })
        if (!resp.ok) throw new Error('Not authorized or failed')
        const body = await resp.json()
        if (mounted) setOrders(body.orders || [])
      } catch (e) {
        console.error('Failed to fetch admin orders', e)
        if (mounted) setError(e.message)
      } finally {
        if (mounted) setLoading(false)
      }
    })()

    return () => { mounted = false }
  }, [])

  const updateStatus = async (orderId, status) => {
    try {
      const token = await auth.currentUser?.getIdToken()
      const resp = await fetch('/api/admin/update-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ orderId, status })
      })
      if (!resp.ok) throw new Error('Failed to update')
      setOrders(o => o.map(x => x.id === orderId ? { ...x, status } : x))
    } catch (e) {
      console.error('Update failed', e)
      alert('Failed to update order status')
    }
  }

  return (
    <section style={{ padding: 40 }}>
      <div className="container">
        <h2>Admin Dashboard — Orders</h2>
        {loading && <div className="loading">Loading…</div>}
        {error && <div className="card" style={{ padding: 12, color: 'red' }}>{error}</div>}

        {!loading && !error && orders.length === 0 && (
          <div className="card" style={{ padding: 12 }}>No orders found.</div>
        )}

        {!loading && !error && orders.length > 0 && (
          <div className="orders-list">
            {orders.map(o => (
              <div key={o.id} className="card" style={{ padding: 12, marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div><strong>Order:</strong> {o.razorpay_order_id || o.order_id || o.id}</div>
                    <div style={{ marginTop: 6 }}><small>Payment ID: {o.razorpay_payment_id || '-'}</small></div>
                    <div style={{ marginTop: 6 }}><small>Customer: {o.customer?.name || o.customer?.email || o.uid || '—'}</small></div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div>₹{(o.amount/100).toLocaleString()}</div>
                    <div style={{ marginTop: 8 }}>
                      <select value={o.status || 'pending'} onChange={(e) => updateStatus(o.id, e.target.value)}>
                        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
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
