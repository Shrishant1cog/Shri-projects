import React from "react";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <h2>Why Shop With Us? 🤝</h2>
            <p>
              We are a small team focused on building a clean, fast, and modern
              shopping experience. Every product is hand-picked so you don't have
              to scroll forever.
            </p>
            <p>
              This demo store is built with React + Vite, and is a perfect
              starting point for your own e-commerce idea.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px' }}>
              <div className="hero-card" style={{ background: '#e8f5e9', color: '#333' }}>
                <strong>⚡ Fast Delivery</strong>
              </div>
              <div className="hero-card" style={{ background: '#e3f2fd', color: '#333' }}>
                <strong>🔒 Secure Payments</strong>
              </div>
              <div className="hero-card" style={{ background: '#f3e5f5', color: '#333' }}>
                <strong>24/7 Support</strong>
              </div>
              <div className="hero-card" style={{ background: '#fff3e0', color: '#333' }}>
                <strong>✅ Quality Guaranteed</strong>
              </div>
            </div>
          </div>
          <img
            alt="about"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop"
            style={{ borderRadius: 'var(--radius)' }}
          />
        </div>
      </div>
    </section>
  );
}
