import crypto from 'crypto'

let admin
let adminInited = false

function initAdminOnce() {
  if (adminInited) return true
  const saRaw = process.env.FIREBASE_SERVICE_ACCOUNT || ''
  if (!saRaw) return false
  try {
    const saJson = saRaw.startsWith('{') ? JSON.parse(saRaw) : JSON.parse(Buffer.from(saRaw, 'base64').toString('utf8'))
    admin = require('firebase-admin')
    if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(saJson) })
    adminInited = true
    return true
  } catch (e) {
    console.warn('Failed to init firebase admin (webhook)', e)
    return false
  }
}

export default async function handler(req, res) {
  // Razorpay sends POST with raw body; ensure the signature header is present
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const signature = req.headers['x-razorpay-signature'] || req.headers['X-Razorpay-Signature']
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET
  if (!signature || !secret) return res.status(400).json({ error: 'Missing signature or webhook secret' })

  // Attempt to compute signature from raw body
  const payload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
  try {
    const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex')
    if (expected !== signature) {
      return res.status(400).json({ ok: false, error: 'Invalid signature' })
    }
  } catch (e) {
    console.error('Webhook signature check failed', e)
    return res.status(500).json({ ok: false, error: 'Signature check failed' })
  }

  // Save event to Firestore for auditing / processing
  if (initAdminOnce()) {
    try {
      const db = admin.firestore()
      const docRef = await db.collection('webhook_events').add({
        payload: req.body,
        receivedAt: admin.firestore.FieldValue.serverTimestamp()
      })

      // process well-known events and update order status
      try {
        const ev = req.body || {}
        const type = ev.event || ev.event_type || ''
        if (type === 'payment.captured' || type === 'payment.captured' || type === 'order.paid') {
          // try to extract order id
          const orderId = ev.payload?.payment?.entity?.order_id || ev.payload?.order?.entity?.id || null
          const paymentId = ev.payload?.payment?.entity?.id || ev.payload?.order?.entity?.payment_id || null
          if (orderId) {
            // update any existing final order docs matching this order id
            const q = await db.collection('orders').where('razorpay_order_id', '==', orderId).get()
            if (!q.empty) {
              q.forEach(async (d) => {
                await db.collection('orders').doc(d.id).update({ status: 'paid', razorpay_payment_id: paymentId || d.data().razorpay_payment_id || null, updatedAt: admin.firestore.FieldValue.serverTimestamp() })
              })
            } else {
              // no final order exists yet — try to find a pending order and promote it
              const pend = await db.collection('pending_orders').where('razorpay_order_id', '==', orderId).get()
              if (!pend.empty) {
                const pd = pend.docs[0]
                const p = pd.data()
                const payloadOrder = {
                  ...p,
                  razorpay_payment_id: paymentId || null,
                  status: 'paid',
                  finalizedAt: admin.firestore.FieldValue.serverTimestamp(),
                }
                const newDoc = await db.collection('orders').add(payloadOrder)
                // remove pending
                await db.collection('pending_orders').doc(pd.id).delete()
                // use this newDoc for sending email
                const d = { id: newDoc.id }
                // send confirmation below using newDoc
                try {
                  const sgKey = process.env.SENDGRID_API_KEY
                  const fromEmail = process.env.SENDGRID_FROM_EMAIL
                  if (sgKey && fromEmail) {
                    const orderDoc = (await db.collection('orders').doc(newDoc.id).get()).data()
                    const to = orderDoc?.customer?.email
                    if (to) {
                      const sg = require('@sendgrid/mail')
                      sg.setApiKey(sgKey)
                      const subject = `Your order ${orderDoc.razorpay_order_id || newDoc.id} is confirmed`
                      const text = `Hi ${orderDoc.customer?.name || ''},\n\nThanks — your payment was received and your order is confirmed. Order id: ${orderDoc.razorpay_order_id || newDoc.id}.\n\nAmount: ₹${(orderDoc.amount/100).toLocaleString()}\n\nWe will update you when the order ships.\n\nThanks!`;
                      await sg.send({ to, from: fromEmail, subject, text })
                    }
                  }
                } catch (e) {
                  console.warn('Failed to send order confirmation email for promoted order', e)
                }
              } else {
                // no pending order either — create a minimal final order doc using data from webhook
                const webhookAmount = ev.payload?.payment?.entity?.amount || ev.payload?.order?.entity?.amount || null
                const finalPayload = {
                  razorpay_order_id: orderId,
                  amount: webhookAmount || null,
                  currency: ev.payload?.payment?.entity?.currency || ev.payload?.order?.entity?.currency || 'INR',
                  items: [],
                  customer: null,
                  uid: null,
                  status: 'paid',
                  createdAt: admin.firestore.FieldValue.serverTimestamp(),
                  finalizedAt: admin.firestore.FieldValue.serverTimestamp(),
                  razorpay_payment_id: paymentId || null
                }
                const newDoc = await db.collection('orders').add(finalPayload)
                // send confirmation only if we can determine an email from webhook (rare)
                try {
                  const orderDoc = (await db.collection('orders').doc(newDoc.id).get()).data()
                  const to = orderDoc?.customer?.email
                  const sgKey = process.env.SENDGRID_API_KEY
                  const fromEmail = process.env.SENDGRID_FROM_EMAIL
                  if (to && sgKey && fromEmail) {
                    const sg = require('@sendgrid/mail')
                    sg.setApiKey(sgKey)
                    const subject = `Your order ${orderDoc.razorpay_order_id || newDoc.id} is confirmed`
                    const text = `Hi ${orderDoc.customer?.name || ''},\n\nThanks — your payment was received and your order is confirmed. Order id: ${orderDoc.razorpay_order_id || newDoc.id}.\n\nAmount: ₹${(orderDoc.amount/100).toLocaleString()}\n\nWe will update you when the order ships.\n\nThanks!`;
                    await sg.send({ to, from: fromEmail, subject, text })
                  }
                } catch (e) {
                  console.warn('Failed to send order confirmation email for minimal created order', e)
                }
              }
            }

              // send confirmation email (if SendGrid config is available and we have customer email)
              try {
                const sgKey = process.env.SENDGRID_API_KEY
                const fromEmail = process.env.SENDGRID_FROM_EMAIL
                if (sgKey && fromEmail) {
                  const orderDoc = (await db.collection('orders').doc(d.id).get()).data()
                  const to = orderDoc?.customer?.email
                  if (to) {
                    const sg = require('@sendgrid/mail')
                    sg.setApiKey(sgKey)
                    const subject = `Your order ${orderDoc.razorpay_order_id || d.id} is confirmed`
                    const text = `Hi ${orderDoc.customer?.name || ''},\n\nThanks — your payment was received and your order is confirmed. Order id: ${orderDoc.razorpay_order_id || d.id}.\n\nAmount: ₹${(orderDoc.amount/100).toLocaleString()}\n\nWe will update you when the order ships.\n\nThanks!`;
                    // generate invoice PDF and attach it (pdfkit)
                    try {
                      const PDFDocument = require('pdfkit')
                      const buffers = []
                      const doc = new PDFDocument({ size: 'A4', margin: 40 })
                      doc.on('data', (chunk) => buffers.push(chunk))
                      doc.on('end', async () => {
                        const pdfData = Buffer.concat(buffers)
                        const base64 = pdfData.toString('base64')
                        const msg = {
                          to,
                          from: fromEmail,
                          subject,
                          text,
                          html: `<div>${text.replace(/\n/g,'<br/>')}</div>`,
                          attachments: [
                            { content: base64, filename: `invoice-${orderDoc.razorpay_order_id || d.id}.pdf`, type: 'application/pdf', disposition: 'attachment' }
                          ]
                        }
                        await sg.send(msg)
                      })
                      // simple invoice PDF
                      doc.fontSize(20).text('ShriStore Invoice', { align: 'center' })
                      doc.moveDown()
                      doc.fontSize(12).text(`Order: ${orderDoc.razorpay_order_id || d.id}`)
                      doc.text(`Payment: ${orderDoc.razorpay_payment_id || ''}`)
                      doc.text(`Customer: ${orderDoc.customer?.name || ''} - ${orderDoc.customer?.email || ''}`)
                      doc.moveDown()
                      doc.text('Items:', { underline: true })
                      (orderDoc.items || []).forEach(i => {
                        doc.text(`${i.name} x${i.qty} - ₹${(i.price * i.qty).toLocaleString()}`)
                      })
                      doc.moveDown()
                      doc.text(`Total: ₹${(orderDoc.amount/100).toLocaleString()}`)
                      doc.end()
                    } catch (e) {
                      console.warn('Failed to attach invoice PDF', e)
                      await sg.send({ to, from: fromEmail, subject, text })
                    }
                  }
                }
              } catch (e) {
                console.warn('Failed to send order confirmation email', e)
              }
            })
          }
        } else if (type === 'payment.failed') {
          const orderId = ev.payload?.payment?.entity?.order_id || null
          if (orderId) {
            const q = await db.collection('orders').where('razorpay_order_id', '==', orderId).get()
            q.forEach(async (d) => {
              await db.collection('orders').doc(d.id).update({ status: 'failed', updatedAt: admin.firestore.FieldValue.serverTimestamp() })
              // optionally send failed payment notice to customer
              try {
                const orderDoc = (await db.collection('orders').doc(d.id).get()).data()
                const to = orderDoc?.customer?.email
                const sgKey = process.env.SENDGRID_API_KEY
                const fromEmail = process.env.SENDGRID_FROM_EMAIL
                if (to && sgKey && fromEmail) {
                  const sg = require('@sendgrid/mail')
                  sg.setApiKey(sgKey)
                  const subject = `Payment failed for order ${orderDoc.razorpay_order_id || d.id}`
                  const text = `Hi ${orderDoc.customer?.name || ''},\n\nUnfortunately your payment attempt failed for order ${orderDoc.razorpay_order_id || d.id}. Please try again or contact support.\n\nThanks!`;
                  await sg.send({ to, from: fromEmail, subject, text })
                }
              } catch (e) {
                console.warn('Failed to send payment failed email', e)
              }
            })
          }
        }
      } catch (e) {
        console.warn('Webhook processing failed', e)
      }
    } catch (e) {
      console.warn('Failed to save webhook to Firestore', e)
    }
  }

  // You may choose to respond 200 quickly and process async
  res.status(200).json({ ok: true })
}
