import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup
} from 'firebase/auth'

const USE_SERVER_AUTH = import.meta.env.VITE_USE_SERVER_AUTH === 'true'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (USE_SERVER_AUTH) {
      // Try to load user from server via token
      const token = localStorage.getItem('token')
      if (!token) { setLoading(false); return }
      fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json())
        .then(data => {
          if (data && !data.error) setUser({ id: data.id, email: data.email, name: data.name })
        })
        .catch(() => {})
        .finally(() => setLoading(false))
      return
    }

    if (!auth) { setLoading(false); return }
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u ? { uid: u.uid, email: u.email, displayName: u.displayName } : null)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const login = async (email, password) => {
    if (USE_SERVER_AUTH) {
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (!res.ok) return { ok: false, error: data.error || 'login_failed' }
        localStorage.setItem('token', data.token)
        setUser(data.user)
        return { ok: true }
      } catch (err) {
        return { ok: false, error: err.message }
      }
    }
    if (!auth) return { ok: false, error: 'auth_not_configured' }
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      setUser({ uid: cred.user.uid, email: cred.user.email })
      return { ok: true }
    } catch (err) {
      return { ok: false, error: err.message }
    }
  }

  const signup = async (email, password, name) => {
    if (USE_SERVER_AUTH) {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name })
        })
        const data = await res.json()
        if (!res.ok) return { ok: false, error: data.error || 'signup_failed' }
        localStorage.setItem('token', data.token)
        setUser(data.user)
        return { ok: true }
      } catch (err) {
        return { ok: false, error: err.message }
      }
    }
    if (!auth) return { ok: false, error: 'auth_not_configured' }
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      setUser({ uid: cred.user.uid, email: cred.user.email })
      return { ok: true }
    } catch (err) {
      return { ok: false, error: err.message }
    }
  }

  const signInWithGoogle = async () => {
    if (USE_SERVER_AUTH) return { ok: false, error: 'google_not_supported_in_server_mode' }
    if (!auth) return { ok: false, error: 'auth_not_configured' }
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const u = result.user
      setUser({ uid: u.uid, email: u.email, displayName: u.displayName })
      return { ok: true }
    } catch (err) {
      return { ok: false, error: err.message }
    }
  }

  const logout = async () => {
    if (USE_SERVER_AUTH) {
      localStorage.removeItem('token')
      setUser(null)
      return
    }
    if (!auth) { setUser(null); return }
    await signOut(auth)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
