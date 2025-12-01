import React from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/products.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './styles.css'

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
