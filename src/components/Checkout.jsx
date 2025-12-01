import React from 'react'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart()

  return (
    <section id="checkout" className="checkout" style={{ padding: 40 }}>
      <div className="container">
        <h2>Checkout</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty. Add items before checking out.</p>
        ) : (
          <>
            <div style={{ margin: '18px 0' }}>
              <strong>Items:</strong>
              <ul>
                {cartItems.map(i => (
                  <li key={i.id}>{i.name} × {i.qty} — ₹{(i.price * i.qty).toLocaleString()}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: 18 }}>
              <strong>Total: ₹{getTotalPrice().toLocaleString()}</strong>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a href="https://razorpay.me/@Shri1888" target="_blank" rel="noopener noreferrer" className="btn btn-buy-now">
                Pay Now
              </a>
              <button className="btn" onClick={() => clearCart()}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}