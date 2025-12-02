// netlify/functions/create-order.js
const Razorpay = require("razorpay");

exports.handler = async (event) => {
  try {
    // Parse body sent from frontend
    const { amount, currency, orderData } = JSON.parse(event.body || "{}");

    if (!amount || !currency) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Amount and currency are required" }),
      };
    }

    // Create Razorpay instance
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Razorpay expects amount in paise
    const options = {
      amount: Math.round(amount * 100),
      currency: currency || "INR",
      receipt: `order_rcptid_${Date.now()}`,
      notes: {
        customerName: orderData?.customer?.name || "",
        customerEmail: orderData?.customer?.email || "",
        customerPhone: orderData?.customer?.phone || "",
      },
    };

    const order = await instance.orders.create(options);

    // Send order back to frontend
    return {
      statusCode: 200,
      body: JSON.stringify(order),
    };
  } catch (error) {
    console.error("Razorpay create-order error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to create payment order" }),
    };
  }
};
