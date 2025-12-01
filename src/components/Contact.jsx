import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>📧 Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="input"
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" className="btn btn-checkout" style={{ maxWidth: '300px' }}>
              Send Message 🚀
            </button>
          </div>
          {submitted && (
            <p style={{ textAlign: 'center', color: '#27ae60', marginTop: 12, fontWeight: 600 }}>
              ✓ Message sent! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
