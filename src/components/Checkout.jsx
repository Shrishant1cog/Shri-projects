// src/components/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom'

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

    // Create Razorpay order via serverless API and open checkout popup
    proceedToPay(grandTotal)
  };

  const navigate = useNavigate()

  async function loadRazorpayScript() {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true)
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  async function proceedToPay(amountNumber) {
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return
    }

    // create order on the server
    try {
      // include order details and ID token (if available) so server can persist an initial order doc
      let idToken = null
      try { const { auth } = await import('../firebase'); idToken = await auth.currentUser.getIdToken() } catch(e) { /* ignore */ }
      const headers = { 'Content-Type': 'application/json' }
      if (idToken) headers.Authorization = `Bearer ${idToken}`

      const resp = await fetch('/api/razorpay-order', {
        method: 'POST',
        headers,
        body: JSON.stringify({ amount: Math.round(amountNumber * 100), currency: 'INR', orderData: { items: cartItems, customer: { name: form.name, email: form.email, phone: form.phone } } })
      })

      if (!resp.ok) {
        const text = await resp.text()
        console.error('Order API failed', text)
        alert('Failed to create payment order. Try again later.')
        return
      }

      const order = await resp.json()

      const loaded = await loadRazorpayScript()
      if (!loaded) {
        alert('Unable to load payment SDK. Try again later.')
        return
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'ShriStore',
        description: 'Order payment',
        order_id: order.id,
        handler: function (response) {
          // payment success
          const orderRecord = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount: order.amount,
            currency: order.currency,
            createdAt: Date.now(),
            items: cartItems
          }

          // verify payment server-side before saving the order
          ;(async () => {
            try {
              // include id token so server can verify user and persist order server-side
              let idToken = null
              try { const { auth } = await import('../firebase'); idToken = await auth.currentUser.getIdToken() } catch(e) { /* ignore */ }

              const headers = { 'Content-Type': 'application/json' }
              if (idToken) headers.Authorization = `Bearer ${idToken}`

              const verifyResp = await fetch('/api/razorpay-verify', {
                method: 'POST',
                headers,
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature
                    })
              })

              if (!verifyResp.ok) {
                // if verification indicates no existing order (server returns 200 with saved=false or 404), allow flow to continue;
                if (verifyResp.status === 400) {
                  const txt = await verifyResp.text()
                  console.error('Verification failed:', txt)
                  alert('Payment verification failed on server. Please contact support.')
                  return
                }
                // for 404/other non-critical statuses, continue; finalization will be processed by webhook
              }

              // verification succeeded — server will persist securely when possible; persist to localStorage as client-side record
              try {
                const prev = JSON.parse(localStorage.getItem('shri_orders') || '[]')
                prev.push(orderRecord)
                localStorage.setItem('shri_orders', JSON.stringify(prev))
                localStorage.setItem('shri_last_order', JSON.stringify(orderRecord))
              } catch (e) {
                console.warn('Failed to save order locally', e)
              }

              clearCart()
              navigate('/order-success')
            } catch (err) {
              console.error('Error verifying order', err)
              alert('Error while verifying order. Please contact support.')
            }
          })()
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone
        },
        theme: { color: '#6f42c1' }
      }

      const rzp = new window.Razorpay(options)
      rzp.on('payment.failed', function (resp) {
        console.error('Payment failed', resp)
        alert('Payment failed. Please try again.')
      })
      rzp.open()
    } catch (err) {
      console.error(err)
      alert('Payment failed. Try again later.')
    }
  }

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
