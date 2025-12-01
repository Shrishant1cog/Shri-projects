import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <div className="brand">MyViteSite</div>
        <nav>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="btn btn--primary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Get Started</button>
          </div>
          <button onClick={() => setOpen(v => !v)} style={{ marginLeft: 12 }} className="btn btn--secondary">Menu</button>
          {/* small cart link for the header (keeps existing design but adds cart count) */}
          <Link to="/cart" style={{ marginLeft: 12 }} className="nav-action-btn cart-btn">
            🛒 Cart
            <CartCount />
          </Link>
        </nav>
      </div>
    </header>
  )
}

function CartCount() {
  const { getTotalItems } = useCart()
  const count = getTotalItems()
  return count > 0 ? <span className="cart-badge">{count}</span> : null
}
