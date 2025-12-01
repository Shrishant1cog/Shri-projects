import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const { cartItems, updateQty, removeFromCart, getTotalPrice, clearCart } = useCart()

  const total = getTotalPrice()

  return (
    <section className="cart-page fade-in" style={{ padding: 40 }}>
      <div className="container">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart" style={{ padding: 60, textAlign: 'center' }}>
            <p>Your cart is empty.</p>
            <Link to="/" className="buy-button">Continue shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-list card">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="price">₹{(item.price * item.qty).toLocaleString()}</p>
                    <div className="small-muted">Price: ₹{item.price.toLocaleString()} each</div>
                  </div>

                  <div className="cart-item-controls">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary card">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <strong>₹{total.toLocaleString()}</strong>
              </div>

              <div className="summary-line">
                <span>Delivery</span>
                <span className="free">FREE</span>
              </div>

              <div className="summary-line summary-total">
                <span>Total</span>
                <strong>₹{total.toLocaleString()}</strong>
              </div>

              <Link to="/checkout" className="pay-button" style={{ display: 'block', marginTop: 12 }}>Proceed to Payment</Link>

              <button className="pay-button secondary-btn" style={{ marginTop: 10 }} onClick={clearCart}>
                Clear Cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
