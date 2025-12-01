import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  // initialize from localStorage so cart persists across refreshes
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('shri_cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      console.warn('Failed to parse cart from localStorage', e)
      return []
    }
  })
  const [wishlist, setWishlist] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev => prev.map(item => 
      item.id === productId ? { ...item, qty } : item
    ))
  }

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    )
  }

  const getTotalPrice = () => cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0)
  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.qty, 0)

  // persist cart to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('shri_cart', JSON.stringify(cartItems))
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e)
    }
  }, [cartItems])

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, wishlist, toggleWishlist, getTotalPrice, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
