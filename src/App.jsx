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
const CartPage = lazy(() => import("./pages/CartPage.jsx"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess.jsx"));
const Orders = lazy(() => import("./pages/Orders.jsx"));
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

              {/* Cart page (persistent route) */}
              <Route
                path="/cart"
                element={
                  <>
                    <Navbar />
                    <CartPage />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/order-success"
                element={
                  <>
                    <Navbar />
                    <OrderSuccess />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/orders"
                element={
                  <RequireAuth>
                    <>
                      <Navbar />
                      <Orders />
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
