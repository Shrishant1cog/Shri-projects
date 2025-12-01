import React from 'react'

const items = [
  { title: 'Fast to build', body: 'Lightweight, focused components so you can prototype and ship quickly.' },
  { title: 'Responsive', body: 'Layouts that adapt to mobile, tablet, and desktop automatically.' },
  { title: 'Accessible', body: 'Built with accessibility and semantics in mind for real users.' }
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 18 }}>Features</h2>
        <div className="features-grid">
          {items.map((it, idx) => (
            <div className="card" key={idx}>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
