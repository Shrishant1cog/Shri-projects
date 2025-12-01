import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const allProducts = [
  { id: 1, name: "Wireless Headphones", price: 2499, category: "electronics", rating: 4.5, reviews: 128 },
  { id: 2, name: "Smartwatch Pro", price: 3999, category: "electronics", rating: 4.7, reviews: 95 },
  { id: 3, name: "Gaming Keyboard", price: 1799, category: "electronics", rating: 4.3, reviews: 212 },
  { id: 4, name: "Casual T-Shirt", price: 699, category: "clothing", rating: 4.2, reviews: 45 },
  { id: 5, name: "Leather Wallet", price: 899, category: "accessories", rating: 4.6, reviews: 78 },
  { id: 6, name: "Bluetooth Speaker", price: 1299, category: "electronics", rating: 4.4, reviews: 156 },
  { id: 7, name: "Running Shoes", price: 3499, category: "clothing", rating: 4.5, reviews: 189 },
  { id: 8, name: "Phone Case", price: 399, category: "accessories", rating: 4.1, reviews: 267 },
  { id: 9, name: "USB-C Cable", price: 299, category: "electronics", rating: 4.3, reviews: 512 },
  { id: 10, name: "Screen Protector", price: 149, category: "accessories", rating: 4.0, reviews: 341 },
  { id: 11, name: "Laptop Stand", price: 1999, category: "electronics", rating: 4.6, reviews: 89 },
  { id: 12, name: "Desk Lamp", price: 899, category: "electronics", rating: 4.4, reviews: 134 },
]

export default function Products() {
  const { addToCart, wishlist, toggleWishlist } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState('popular')

  const filteredProducts = useMemo(() => {
    let result = allProducts

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    } else {
      result.sort((a, b) => b.reviews - a.reviews)
    }

    return result
  }, [selectedCategory, priceRange, sortBy])

  const categories = ['all', 'electronics', 'clothing', 'accessories']

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">🛒 Featured Products</h2>

        {/* Mobile filter bar (visible on small screens) */}
        <div className="mobile-filters" role="region" aria-label="Filters">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All' : c.charAt(0).toUpperCase()+c.slice(1)}</option>)}
          </select>
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="products-wrapper">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <div className="filter-group">
              <h3>Category</h3>
              {categories.map(cat => (
                <label key={cat} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>Price Range</h3>
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="price-slider"
                />
                <p>₹0 - ₹{priceRange[1].toLocaleString()}</p>
              </div>
            </div>

            <div className="filter-group">
              <h3>Sort By</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.length === 0 ? (
              <p className="no-products">No products found. Try adjusting filters.</p>
            ) : (
              filteredProducts.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddCart={addToCart}
                  isWishlisted={wishlist.includes(p.id)}
                  onToggleWishlist={toggleWishlist}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddCart, isWishlisted, onToggleWishlist }) {
  const [showNotification, setShowNotification] = useState(false)
  const navigate = useNavigate()

  const handleAddCart = () => {
    onAddCart(product)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
  }

  const handleBuyNow = () => {
    onAddCart(product)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
    navigate('/checkout')
  }

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={`https://picsum.photos/seed/prod-${product.id}/600/400`}
          srcSet={
            `https://picsum.photos/seed/prod-${product.id}/300/200 300w, ` +
            `https://picsum.photos/seed/prod-${product.id}/600/400 600w, ` +
            `https://picsum.photos/seed/prod-${product.id}/900/600 900w`
          }
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => onToggleWishlist(product.id)}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={isWishlisted}
        >
          ❤️
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
          <span className="reviews">({product.reviews} reviews)</span>
        </div>
        <p className="product-price">₹{product.price.toLocaleString()}</p>

        <div className="product-buttons">
          <button className="btn btn-add-cart" onClick={handleAddCart}>
            🛒 Add to Cart
          </button>
          <button className="btn btn-buy-now" onClick={handleBuyNow}>
            ⚡ Buy Now
          </button>
        </div>

        {showNotification && (
          <div className="notification">✓ Added to cart!</div>
        )}
      </div>
    </div>
  )
}