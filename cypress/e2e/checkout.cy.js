describe('Checkout flow (mocked)', () => {
  it('adds product, goes to checkout and completes mocked payment', () => {
    cy.visit('/')

    // add first product to cart
    cy.get('.btn-add-cart').first().click()

    // go to checkout page
    cy.visit('/checkout')

    // fill delivery form
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('input[name="phone"]').type('9999999999')
    cy.get('textarea[name="address"]').type('123 Test Street')
    cy.get('input[name="city"]').type('Testville')
    cy.get('input[name="pincode"]').type('123456')

    // stub order creation
    cy.intercept('POST', '/api/razorpay-order', {
      statusCode: 200,
      body: { id: 'order_test', amount: 1000, currency: 'INR', localPendingId: 'pending_test' }
    }).as('createOrder')

    // stub verify to succeed
    cy.intercept('POST', '/api/razorpay-verify', { statusCode: 200, body: { ok: true } }).as('verify')

    // stub window.Razorpay to simulate immediate success
    cy.window().then((win) => {
      win.Razorpay = function (options) {
        return { open: () => { options.handler({ razorpay_order_id: 'order_test', razorpay_payment_id: 'pay_test', razorpay_signature: 'sig' }) } }
      }
    })

    // click proceed to payment
    cy.get('button.pay-button').click()

    // wait for order create and verify
    cy.wait('@createOrder')
    cy.wait('@verify')

    // should be redirected to order-success
    cy.url().should('include', '/order-success')

    // localStorage should contain last order
    cy.window().its('localStorage').invoke('getItem', 'shri_last_order').should('exist')
  })
})
