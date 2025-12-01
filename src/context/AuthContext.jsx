// src/context/AuthContext.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // try to restore cached user quickly from localStorage so UI doesn't flash
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('shri_user')
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      return null
    }
  });
  const [loading, setLoading] = useState(true); // true until we know if logged in

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoading(false);

      // persist a small user snapshot for fast rehydration
      try {
        if (firebaseUser) {
          const snapshot = { uid: firebaseUser.uid, displayName: firebaseUser.displayName, email: firebaseUser.email }
          localStorage.setItem('shri_user', JSON.stringify(snapshot))
          // write user document to Firestore for server-side storage
          ;(async () => {
            try {
              await setDoc(doc(db, 'users', firebaseUser.uid), { ...snapshot, lastSeen: serverTimestamp() }, { merge: true })
            } catch (e) {
              console.warn('Failed to write user to Firestore', e)
            }
          })()
        } else {
          localStorage.removeItem('shri_user')
        }
      } catch (e) {
        console.warn('Failed to persist user', e)
      }
    });

    return () => unsub();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // onAuthStateChanged will handle setting the user and persistence
      try {
        const u = result.user
        const snapshot = { uid: u.uid, displayName: u.displayName, email: u.email }
        await setDoc(doc(db, 'users', u.uid), { ...snapshot, createdAt: serverTimestamp(), lastSeen: serverTimestamp() }, { merge: true })
      } catch (e) {
        console.warn('Failed to write google profile to Firestore', e)
      }
      return { ok: true, user: result.user }
    } catch (error) {
      console.error("Google sign-in error:", error);
      return { ok: false, error }
    }
  };

  const signInWithGoogle = loginWithGoogle // keep both names available

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      // set user snapshot and persist
      const u = res.user
      const snapshot = { uid: u.uid, displayName: u.displayName, email: u.email }
      try { localStorage.setItem('shri_user', JSON.stringify(snapshot)) } catch (e) {}
      // store profile in Firestore
      try {
        await setDoc(doc(db, 'users', u.uid), { ...snapshot, lastSeen: serverTimestamp() }, { merge: true })
      } catch (e) {
        console.warn('Failed to write profile to Firestore', e)
      }

      // set full firebase user object when available (so callers can getIdToken())
      setUser(res.user)
      return { ok: true, user: snapshot }
    } catch (error) {
      console.error('Email sign-in failed', error)
      return { ok: false, error }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      try { localStorage.removeItem('shri_user') } catch (e) {}
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
      login,
      signInWithGoogle,
      loginWithGoogle,
      logout,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
