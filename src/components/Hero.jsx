import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-inner">
            <h1>🛍️ Everything you need in one modern store</h1>
            <p>Shop curated gadgets, apparel, and accessories with fast delivery and secure checkout. Get up to 40% off on selected items!</p>
            <div className="hero-actions">
              <button className="btn btn-buy-now">🚀 Shop Now</button>
              <button className="btn btn-add-cart">📦 View Deals</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <h3>New Arrivals 🆕</h3>
              <p>Latest products every week</p>
            </div>
            <div className="hero-card">
              <h3>Up to 40% OFF 🎉</h3>
              <p>Limited time offers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
