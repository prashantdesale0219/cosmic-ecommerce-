import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'

// Import product images
import tshirtManImage from '../../assets/images/tshirt-man.webp'
import tshirtWomanImage from '../../assets/images/tshirt-woman.jpg'

const NewDrops = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'newest'
  })

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'accessories', name: 'Accessories' }
  ]

  // Sort options
  const sortOptions = [
    { id: 'newest', name: 'Newest First' },
    { id: 'price-low-high', name: 'Price: Low to High' },
    { id: 'price-high-low', name: 'Price: High to Low' }
  ]

  // Product images array
  const productImages = [tshirtManImage, tshirtWomanImage]

  // Generate mock products
  useEffect(() => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockProducts = Array(12).fill().map((_, index) => ({
        id: `new-product-${index + 1}`,
        name: `${['New Season', 'Limited Edition', 'Exclusive', 'Premium', 'Designer'][index % 5]} ${['T-Shirt', 'Dress', 'Jeans', 'Jacket', 'Sneakers'][index % 5]} ${index + 1}`,
        price: Math.floor(Math.random() * 5000) + 1499,
        originalPrice: Math.floor(Math.random() * 6000) + 2499,
        discount: Math.floor(Math.random() * 30) + 10,
        image: productImages[index % productImages.length],
        category: ['men', 'women', 'accessories'][Math.floor(Math.random() * 3)],
        rating: (Math.random() * 1 + 4).toFixed(1), // Higher ratings for new products
        reviewCount: Math.floor(Math.random() * 50) + 5, // Fewer reviews as they're new
        isNew: true, // All are new
        isBestseller: false,
        isOnSale: Math.random() > 0.7, // Some might be on introductory sale
        badge: 'New',
        slug: `new-product-${index + 1}`,
        dateAdded: new Date(Date.now() - Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000) // Added within last 14 days
      }))

      // Filter by category if selected
      const filteredProducts = filters.category 
        ? mockProducts.filter(p => p.category === filters.category)
        : mockProducts

      // Sort products
      const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (filters.sortBy === 'newest') {
          return new Date(b.dateAdded) - new Date(a.dateAdded)
        } else if (filters.sortBy === 'price-low-high') {
          return a.price - b.price
        } else if (filters.sortBy === 'price-high-low') {
          return b.price - a.price
        }
        return 0
      })

      setProducts(sortedProducts)
      setLoading(false)
    }, 1000)
  }, [filters])

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2">
          <li><Link to="/" className="text-gray-500 hover:text-primary">Home</Link> /</li>
          <li className="text-gray-900 font-medium">New Drops</li>
        </ul>
      </div>

      {/* Page Header */}
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
        <p className="text-gray-600">Discover our latest collection of fresh styles and trends. Be the first to shop our newest arrivals before they're gone.</p>
      </div>

      {/* Featured New Drop Banner */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img 
          src="https://source.unsplash.com/random/1200x400/?fashion-runway" 
          alt="New Collection" 
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Summer 2023 Collection</h2>
            <p className="text-sm md:text-base mb-4 max-w-md">Our latest collection has just landed. Featuring vibrant colors and lightweight fabrics perfect for the season.</p>
            <Link 
              to="/product/summer-collection-featured" 
              className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full ${filters.category === (category.id === 'all' ? '' : category.id) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              onClick={() => handleFilterChange('category', category.id === 'all' ? '' : category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Sort by:</span>
          <select
            className="border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* New Arrivals Date Filter */}
      <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
        {['Last 7 Days', 'Last 14 Days', 'Last 30 Days'].map((period, index) => (
          <button
            key={index}
            className={`px-4 py-2 whitespace-nowrap rounded-md ${index === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Products */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array(8).fill().map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-64 md:h-80 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No new products found</h3>
          <p className="text-gray-500 mb-4">Check back soon for our latest arrivals.</p>
          <button 
            onClick={() => setFilters({ category: '', sortBy: 'newest' })}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All Products
          </button>
        </div>
      )}

      {/* Coming Soon Section */}
      {!loading && products.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array(3).fill().map((_, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img 
                  src={`https://source.unsplash.com/random/400x500/?fashion-teaser&sig=${index}`} 
                  alt="Coming Soon" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
                  <span className="text-white/80 text-sm font-medium mb-2">Coming {['Next Week', 'in 2 Weeks', 'This Month'][index]}</span>
                  <h3 className="text-xl text-white font-bold mb-1">{['Fall Collection', 'Designer Collaboration', 'Limited Edition Pieces'][index]}</h3>
                  <p className="text-white/80 text-sm mb-4">{['Prepare for the season ahead with our new fall styles.', 'An exclusive collaboration with renowned designer.', 'One-of-a-kind pieces that will elevate your wardrobe.'][index]}</p>
                  <button className="text-sm text-white border border-white/50 rounded-full px-4 py-1 hover:bg-white hover:text-gray-900 transition">
                    Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter for New Drops */}
      <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Be The First To Know</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">Subscribe to our newsletter and be the first to know about new product drops, exclusive offers and more.</p>
        <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            required
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewDrops