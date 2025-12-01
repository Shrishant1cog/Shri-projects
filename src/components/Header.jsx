import React, { useState } from 'react'

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
        </nav>
      </div>
    </header>
  )
}
