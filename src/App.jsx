import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/products.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Lazy load heavier routes for faster initial load
const Checkout = lazy(() => import('./components/Checkout.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Signup = lazy(() => import('./pages/Signup.jsx'))
const Admin = lazy(() => import('./admin/Admin.jsx'))
import RequireAuth from './components/RequireAuth.jsx'
import './styles.css'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Suspense fallback={<div className="loading">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<>
                <Navbar />
                <Checkout />
                <Footer />
              </>} />
              <Route path="/login" element={<>
                <Navbar />
                <Login />
                <Footer />
              </>} />
              <Route path="/signup" element={<>
                <Navbar />
                <Signup />
                <Footer />
              </>} />
              <Route path="/admin" element={<RequireAuth>
                <Navbar />
                <Admin />
                <Footer />
              </RequireAuth>} />
            </Routes>
          </Suspense>
        </div>
    </CartProvider>
    </AuthProvider>
  )
}