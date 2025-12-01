const { createReq, createRes } = require('./_utils')
const handler = require('../api/admin/orders').default

describe('admin/orders API', () => {
  test('returns 401 if no auth header', async () => {
    const req = createReq({ method: 'GET', body: {} })
    const res = createRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(401)
  })

  test('returns 500 if no FIREBASE_SERVICE_ACCOUNT', async () => {
    const req = createReq({ method: 'GET', headers: { Authorization: 'Bearer token' } })
    const res = createRes()
    // ensure not configured
    delete process.env.FIREBASE_SERVICE_ACCOUNT
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(500)
  })
})
