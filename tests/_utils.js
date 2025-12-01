// Minimal test helpers to call serverless handlers that accept (req,res)
function createReq({ method = 'POST', body = null, headers = {} } = {}) {
  return { method, body, headers }
}

function createRes() {
  const res = {}
  res.status = jest.fn().mockImplementation((code) => { res._status = code; return res })
  res.json = jest.fn().mockImplementation((obj) => { res._json = obj; return res })
  res.text = jest.fn().mockImplementation((t) => { res._text = t; return res })
  res.send = jest.fn().mockImplementation((d) => { res._send = d; return res })
  res.setHeader = jest.fn()
  return res
}

module.exports = { createReq, createRes }
