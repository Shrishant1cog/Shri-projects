import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signup(email, password, name)
    if (res.ok) navigate('/')
  }

  return (
    <section style={{ padding: 40 }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <h2>Create account</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <input aria-label="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Full name (optional)" />
          <input aria-label="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
          <input aria-label="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          <button className="btn" type="submit">Sign up</button>
        </form>
      </div>
    </section>
  )
}
