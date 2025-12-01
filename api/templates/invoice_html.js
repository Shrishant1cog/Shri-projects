function invoiceHTML(order) {
  const itemsHtml = (order.items || []).map(i => `<tr><td>${i.name}</td><td>${i.qty}</td><td>₹${(i.price).toLocaleString()}</td><td>₹${(i.price*i.qty).toLocaleString()}</td></tr>`).join('')
  const total = order.amount ? `₹${(order.amount/100).toLocaleString()}` : ''
  return `<!doctype html>
  <html>
  <head>
  <meta charset="utf-8" />
  <style>
    body{font-family: Arial, Helvetica, sans-serif; color:#333}
    .header{background:#6f42c1;color:#fff;padding:12px;border-radius:6px}
    .card{border:1px solid #e6e6e6;padding:12px;margin-top:12px;border-radius:6px}
    table{width:100%;border-collapse:collapse}
    td,th{border:1px solid #ddd;padding:8px;text-align:left}
    th{background:#f6f6f6}
  </style>
  </head>
  <body>
    <div class="header"><h2>ShriStore - Order Confirmation</h2></div>
    <div style="margin-top:8px">Order id: <strong>${order.razorpay_order_id || ''}</strong></div>
    <div style="margin-top:8px">Payment id: <strong>${order.razorpay_payment_id || ''}</strong></div>
    <div class="card">
      <h3>Customer</h3>
      <div>${order.customer?.name || ''}</div>
      <div>${order.customer?.email || ''}</div>
      <div style="margin-top:8px">Total: <strong>${total}</strong></div>
    </div>

    <div class="card">
      <h3>Items</h3>
      <table>
        <thead><tr><th>Item</th><th>Qty</th><th>Unit</th><th>Subtotal</th></tr></thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
    </div>

    <p style="margin-top:12px;">Thanks for shopping with us!</p>
  </body>
  </html>`
}

module.exports = invoiceHTML
