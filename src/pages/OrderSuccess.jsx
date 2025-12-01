import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderSuccess() {
  let last = null
  try { last = JSON.parse(localStorage.getItem('shri_last_order')) } catch (e) { last = null }

  if (!last) {
    return (
      <section style={{ padding: 40 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h2>Order not found</h2>
          <p>We couldn't find an order — maybe you didn't complete the payment. Go back to <Link to="/">shop</Link>.</p>
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: 40 }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <h2>Payment Success</h2>
        <p>Thank you — your payment completed successfully.</p>

        <div className="card" style={{ padding: 18, marginTop: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>Order id</div>
            <div style={{ fontWeight: 700 }}>{last.razorpay_order_id}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <div>Payment id</div>
            <div style={{ fontWeight: 700 }}>{last.razorpay_payment_id}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <div>Amount</div>
            <div style={{ fontWeight: 700 }}>₹{(last.amount/100).toLocaleString()}</div>
          </div>

          <h4 style={{ marginTop: 14 }}>Items</h4>
          <ul>
            {(last.items || []).map(i => (
              <li key={i.id}>{i.name} × {i.qty} — ₹{(i.price * i.qty).toLocaleString()}</li>
            ))}
          </ul>

          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <Link to="/" className="buy-button">Back to shop</Link>
            <Link to="/orders" className="btn">My Orders</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
