// src/context/AuthContext.jsx
// Auth is disabled in this project (no Firebase).
// This file just provides a safe dummy context so the rest of the app works.

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading] = useState(false);

  // Dummy login/logout functions so components won't crash if they call them
  const loginWithGoogle = async () => {
    alert("Login is disabled in this demo build.");
  };

  const logout = async () => {
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
