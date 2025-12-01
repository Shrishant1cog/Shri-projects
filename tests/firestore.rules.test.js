const fs = require('fs')
const { initializeTestEnvironment, assertFails, assertSucceeds } = require('@firebase/rules-unit-testing')

const RULES = fs.readFileSync('firestore.rules', 'utf8')

let testEnv

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({ projectId: 'shri-tests', firestore: { rules: RULES } })
})

afterAll(async () => {
  await testEnv.cleanup()
})

describe('Firestore rules', () => {
  test('unauthenticated cannot write orders', async () => {
    const unauth = testEnv.unauthenticatedContext().firestore()
    await assertFails(unauth.collection('orders').doc('o1').set({ uid: 'u1', amount: 100 }))
  })

  test('user can create and read own profile, cannot create other user', async () => {
    // authenticated user
    const alice = testEnv.authenticatedContext('alice').firestore()
    await assertSucceeds(alice.collection('users').doc('alice').set({ email: 'alice@example.com' }))
    await assertSucceeds(alice.collection('users').doc('alice').get())
    // cannot write another user
    await assertFails(alice.collection('users').doc('bob').set({ email: 'bob@example.com' }))
  })

  test('clients cannot create final orders', async () => {
    const user = testEnv.authenticatedContext('user1').firestore()
    await assertFails(user.collection('orders').doc('order1').set({ uid: 'user1', amount: 123 }))
  })
})
