import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{ textAlign: 'center', color: '#ccc' }}>
          <h3 style={{ marginBottom: 16 }}>🛍️ ShriStore</h3>
          <p style={{ margin: '8px 0' }}>The ultimate destination for quality products and great deals.</p>
          <p style={{ margin: '8px 0', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} ShriStore. All rights reserved. | Built with React + Vite
          </p>
          <div style={{ marginTop: 20, fontSize: '1.5rem' }}>
            📱 💬 🔗 📧
          </div>
        </div>
      </div>
    </footer>
  );
}
