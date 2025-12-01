const { createReq, createRes } = require('./_utils')
const handler = require('../api/razorpay-order').default

describe('razorpay-order', () => {
  test('returns 400 when amount missing', async () => {
    const req = createReq({ body: {} })
    const res = createRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('creates order and returns order object', async () => {
    // Mock Razorpay constructor
    jest.mock('razorpay', () => {
      return jest.fn().mockImplementation(() => ({ orders: { create: async (opts) => ({ id: 'r123', amount: opts.amount, currency: opts.currency }) } }))
    })
    // re-require handler fresh
    jest.resetModules()
    const handlerFresh = require('../api/razorpay-order').default

    const req = createReq({ body: { amount: 1000, currency: 'INR' } })
    const res = createRes()
    await handlerFresh(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res._json).toHaveProperty('id', 'r123')
  })
})
