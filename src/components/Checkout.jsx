// src/components/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = getTotalPrice();
  const deliveryCharge = 0; // Free temporarily
  const grandTotal = total + deliveryCharge;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all the delivery details.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Later we can send grandTotal to Razorpay via backend.
    // For now, just open your payment link and let user enter amount manually.
    window.open("https://razorpay.me/@Shri1888", "_blank");

    // Optional: clear cart after redirect
    // clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <section className="checkout-page fade-in" style={{ padding: 40 }}>
        <div className="container">
          <h2>Checkout</h2>
          <p>Your cart is empty. Add items before checking out.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page fade-in" style={{ padding: 40 }}>
      <div className="container">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-layout">
          {/* LEFT: delivery form */}
          <form className="checkout-form card" onSubmit={handleSubmit}>
            <h3>Delivery Details</h3>

            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Address
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                required
              />
            </label>

            <div className="checkout-row">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Pincode
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <button type="submit" className="btn pay-button bounce-button">
              Proceed to Payment (₹{grandTotal.toLocaleString()})
            </button>
            <p className="small-note">
              Delivery charges: <strong>FREE</strong> for now.
            </p>
          </form>

          {/* RIGHT: order summary */}
          <aside className="checkout-summary card slide-up">
            <h3>Order Summary</h3>
            <ul className="summary-items">
              {cartItems.map((i) => {
                const qty = i.qty ?? i.quantity ?? 1;
                return (
                  <li key={i.id} className="summary-item">
                    <span>
                      {i.name} × {qty}
                    </span>
                    <span>₹{(i.price * qty).toLocaleString()}</span>
                  </li>
                );
              })}
            </ul>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <div className="summary-line">
              <span>Delivery</span>
              <span className="free">FREE</span>
            </div>
            <div className="summary-line summary-total">
              <span>Total to pay</span>
              <span>₹{grandTotal.toLocaleString()}</span>
            </div>

            <button
              className="btn secondary-btn bounce-button"
              type="button"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <p className="small-note">
              On Razorpay, please enter this total amount manually for now.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
