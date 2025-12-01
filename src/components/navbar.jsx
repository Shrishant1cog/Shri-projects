import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { getTotalItems } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <div className="navbar-brand">
              <h1 className="brand-logo">🛍️ ShriStore</h1>
            </div>

            <div className="navbar-search">
              <input
                type="text"
                className="search-input"
                placeholder="Search products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">🔍</button>
            </div>

            <div className="navbar-actions">
              <button className="nav-action-btn" onClick={() => setShowMenu(!showMenu)}>
                👤 Account
              </button>
              <button className="nav-action-btn cart-btn" onClick={() => setShowCart(!showCart)}>
                🛒 Cart
                {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
              </button>
            </div>
          </div>

          {showMenu && (
            <div className="menu-dropdown">
              <a href="#profile">My Profile</a>
              <a href="#orders">My Orders</a>
              <a href="#wishlist">Wishlist</a>
              <a href="#settings">Settings</a>
              <a href="#logout">Logout</a>
            </div>
          )}
        </div>
      </header>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  )
}

function CartModal({ onClose }) {
  const { cartItems, removeFromCart, updateQty, getTotalPrice } = useCart()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Shopping Cart</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="price">₹{(item.price * item.qty).toLocaleString()}</p>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total: ₹{getTotalPrice().toLocaleString()}</strong>
              </div>
              <button className="btn btn-checkout">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
