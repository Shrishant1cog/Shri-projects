import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await login(email, password)
    if (res.ok) navigate('/')
  }

  const handleGoogle = async () => {
    const res = await signInWithGoogle()
    if (res.ok) navigate('/')
  }

  return (
    <section style={{ padding: 40 }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <input aria-label="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
          <input aria-label="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          <button className="btn" type="submit">Sign in</button>
          <button type="button" className="btn" onClick={handleGoogle}>Sign in with Google</button>
        </form>
      </div>
    </section>
  )
}
