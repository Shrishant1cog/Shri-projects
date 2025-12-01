import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { getTotalItems } = useCart()
  const { user, logout } = useAuth()
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

            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <button className="hamburger" aria-label="Open menu" onClick={() => setShowMenu(v=>!v)}>☰</button>
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
            </div>

            <div className="navbar-actions">
              {user ? (
                <div className="user-dropdown">
                  <button className="user-btn" onClick={() => setShowMenu(v => !v)}>
                    👤 {user.name || user.displayName || user.email}
                  </button>
                  {showMenu && (
                    <div className="menu-dropdown desktop-menu">
                      <Link to="/profile">My Profile</Link>
                      <Link to="/orders">My Orders</Link>
                      <Link to="/wishlist">Wishlist</Link>
                      <button className="logout-btn" onClick={async () => { await logout(); setShowMenu(false) }}>Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="auth-links">
                  <Link to="/login" className="nav-link">Login</Link>
                  <Link to="/signup" className="nav-link">Sign up</Link>
                </div>
              )}

              <button className="nav-action-btn cart-btn" onClick={() => setShowCart(!showCart)}>
                🛒 Cart
                {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
              </button>
            </div>
          </div>

          {showMenu && (
            <>
              <div className="menu-dropdown desktop-menu">
                <a href="#profile">My Profile</a>
                <a href="#orders">My Orders</a>
                <a href="#wishlist">Wishlist</a>
                <a href="#settings">Settings</a>
                {user ? <button className="logout-btn" onClick={async () => { await logout(); setShowMenu(false) }}>Logout</button> : <a href="/login">Login</a>}
              </div>

              {/* Mobile slide-out nav + overlay */}
              <div className="mobile-nav-overlay" onClick={() => setShowMenu(false)} />

              <aside className={`mobile-nav ${showMenu ? 'open' : ''}`} aria-hidden={!showMenu}>
                <div className="mobile-nav-header">
                  <h3>Menu</h3>
                  <button className="mobile-close" aria-label="Close menu" onClick={() => setShowMenu(false)}>✕</button>
                </div>
                <nav className="mobile-nav-links">
                  <a href="#profile" onClick={() => setShowMenu(false)}>My Profile</a>
                  <a href="#orders" onClick={() => setShowMenu(false)}>My Orders</a>
                  <a href="#wishlist" onClick={() => setShowMenu(false)}>Wishlist</a>
                  <a href="#settings" onClick={() => setShowMenu(false)}>Settings</a>
                  {user ? (
                    <button className="logout-btn" onClick={async () => { await logout(); setShowMenu(false) }}>Logout</button>
                  ) : (
                    <a href="/login" onClick={() => setShowMenu(false)}>Login</a>
                  )}
                </nav>
              </aside>
            </>
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
              <Link to="/checkout" className="btn btn-checkout" onClick={onClose}>Proceed to Checkout</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}