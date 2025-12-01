const { createReq, createRes } = require('./_utils')
const handler = require('../api/razorpay-verify').default
const crypto = require('crypto')

describe('razorpay-verify', () => {
  beforeEach(() => {
    process.env.RAZORPAY_KEY_SECRET = 'testsecret'
  })

  test('returns 400 when missing fields', async () => {
    const req = createReq({ body: {} })
    const res = createRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('returns 400 on signature mismatch', async () => {
    const req = createReq({ body: { razorpay_order_id: 'o1', razorpay_payment_id: 'p1', razorpay_signature: 'bad' } })
    const res = createRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('returns 200 when signature matches', async () => {
    const order_id = 'o2'
    const payment_id = 'p2'
    const sig = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(`${order_id}|${payment_id}`).digest('hex')
    const req = createReq({ body: { razorpay_order_id: order_id, razorpay_payment_id: payment_id, razorpay_signature: sig } })
    const res = createRes()
    await handler(req, res)
    // 200 and ok true returned
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res._json).toHaveProperty('ok', true)
  })
})
