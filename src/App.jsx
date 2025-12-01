// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/products.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Checkout = lazy(() => import("./components/Checkout.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Admin = lazy(() => import("./admin/Admin.jsx"));
import RequireAuth from "./components/RequireAuth.jsx";
import "./styles.css";

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
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Suspense fallback={<div className="loading">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Checkout – only logged in users */}
              <Route
                path="/checkout"
                element={
                  <RequireAuth>
                    <>
                      <Navbar />
                      <Checkout />
                      <Footer />
                    </>
                  </RequireAuth>
                }
              />

              <Route
                path="/login"
                element={
                  <>
                    <Navbar />
                    <Login />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/signup"
                element={
                  <>
                    <Navbar />
                    <Signup />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/admin"
                element={
                  <RequireAuth>
                    <>
                      <Navbar />
                      <Admin />
                      <Footer />
                    </>
                  </RequireAuth>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
