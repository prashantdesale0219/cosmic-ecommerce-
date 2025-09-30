import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'

// Import product images
import tshirtManImage from '../../assets/images/tshirt-man.webp'
import tshirtWomanImage from '../../assets/images/tshirt-woman.jpg'

const WomenCategory = () => {
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    subcategory: '',
    priceRange: [0, 10000],
    sortBy: 'newest',
    colors: [],
    sizes: []
  })
  const [showFilters, setShowFilters] = useState(false)

  // Subcategories for women
  const subcategories = [
    { id: 'all', name: 'All Products' },
    { id: 'tops', name: 'Tops & Blouses' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'jeans', name: 'Jeans' },
    { id: 'skirts', name: 'Skirts' },
    { id: 'jackets', name: 'Jackets & Coats' },
    { id: 'activewear', name: 'Activewear' },
    { id: 'accessories', name: 'Accessories' }
  ]

  // Available colors
  const availableColors = [
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'blue', name: 'Blue', hex: '#0000FF' },
    { id: 'red', name: 'Red', hex: '#FF0000' },
    { id: 'pink', name: 'Pink', hex: '#FFC0CB' },
    { id: 'purple', name: 'Purple', hex: '#800080' },
    { id: 'beige', name: 'Beige', hex: '#F5F5DC' }
  ]

  // Available sizes
  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  // Sort options
  const sortOptions = [
    { id: 'newest', name: 'Newest' },
    { id: 'price-low-high', name: 'Price: Low to High' },
    { id: 'price-high-low', name: 'Price: High to Low' },
    { id: 'popularity', name: 'Popularity' }
  ]

  // Product images array
  const productImages = [tshirtManImage, tshirtWomanImage]

  // Generate mock products
  useEffect(() => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockProducts = Array(16).fill().map((_, index) => ({
        id: `women-product-${index + 1}`,
        name: `Women's ${['Elegant Blouse', 'Summer Dress', 'Skinny Jeans', 'Pleated Skirt', 'Leather Jacket'][index % 5]} ${index + 1}`,
        price: Math.floor(Math.random() * 3000) + 999,
        originalPrice: Math.floor(Math.random() * 4000) + 1499,
        discount: Math.floor(Math.random() * 40) + 10,
        image: productImages[index % productImages.length],
        colors: availableColors.slice(0, Math.floor(Math.random() * 4) + 2).map(c => c.id),
        sizes: availableSizes.slice(0, Math.floor(Math.random() * 5) + 2),
        rating: (Math.random() * 2 + 3).toFixed(1),
        reviewCount: Math.floor(Math.random() * 200) + 10,
        isNew: index < 4,
        isBestseller: index >= 4 && index < 8,
        isOnSale: index >= 8 && index < 12,
        badge: index < 4 ? 'New' : index >= 4 && index < 8 ? 'Bestseller' : index >= 8 && index < 12 ? 'Sale' : null,
        slug: `women-product-${index + 1}`,
        subcategory: subcategories[Math.floor(Math.random() * subcategories.length)].id
      }))

      setProducts(mockProducts)
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

  // Toggle filter visibility on mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      subcategory: '',
      priceRange: [0, 10000],
      sortBy: 'newest',
      colors: [],
      sizes: []
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2">
          <li><Link to="/" className="text-gray-500 hover:text-primary">Home</Link> /</li>
          <li className="text-gray-900 font-medium">Women</li>
        </ul>
      </div>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Women's Collection</h1>
        <p className="text-gray-600">Explore our latest women's fashion collection with elegant designs and premium quality.</p>
      </div>

      {/* Subcategory Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {subcategories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 whitespace-nowrap ${filters.subcategory === category.id ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-full transition`}
              onClick={() => handleFilterChange('subcategory', category.id === 'all' ? '' : category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Section - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹{filters.priceRange[0]}</span>
                  <span>₹{filters.priceRange[1]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="10000" 
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-medium mb-3">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {availableColors.map(color => (
                  <button
                    key={color.id}
                    className={`w-8 h-8 rounded-full border ${filters.colors.includes(color.id) ? 'ring-2 ring-primary ring-offset-2' : 'ring-1 ring-gray-300'}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => {
                      const newColors = filters.colors.includes(color.id)
                        ? filters.colors.filter(c => c !== color.id)
                        : [...filters.colors, color.id]
                      handleFilterChange('colors', newColors)
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-medium mb-3">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map(size => (
                  <button
                    key={size}
                    className={`w-10 h-10 flex items-center justify-center border ${filters.sizes.includes(size) ? 'bg-gray-900 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => {
                      const newSizes = filters.sizes.includes(size)
                        ? filters.sizes.filter(s => s !== size)
                        : [...filters.sizes, size]
                      handleFilterChange('sizes', newSizes)
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid and Sort */}
        <div className="flex-1">
          {/* Sort and Filter Controls */}
          <div className="flex justify-between items-center mb-6">
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

            {/* Mobile Filter Button */}
            <button 
              className="lg:hidden flex items-center space-x-1 text-gray-700 bg-gray-100 px-3 py-2 rounded-md"
              onClick={toggleFilters}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filters</span>
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-auto p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={toggleFilters} className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹{filters.priceRange[0]}</span>
                      <span>₹{filters.priceRange[1]}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="10000" 
                      value={filters.priceRange[1]}
                      onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="font-medium mb-3">Colors</h3>
                  <div className="flex flex-wrap gap-3">
                    {availableColors.map(color => (
                      <button
                        key={color.id}
                        className={`w-10 h-10 rounded-full border ${filters.colors.includes(color.id) ? 'ring-2 ring-primary ring-offset-2' : 'ring-1 ring-gray-300'}`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => {
                          const newColors = filters.colors.includes(color.id)
                            ? filters.colors.filter(c => c !== color.id)
                            : [...filters.colors, color.id]
                          handleFilterChange('colors', newColors)
                        }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="font-medium mb-3">Sizes</h3>
                  <div className="flex flex-wrap gap-3">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        className={`w-12 h-12 flex items-center justify-center border ${filters.sizes.includes(size) ? 'bg-gray-900 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
                        onClick={() => {
                          const newSizes = filters.sizes.includes(size)
                            ? filters.sizes.filter(s => s !== size)
                            : [...filters.sizes, size]
                          handleFilterChange('sizes', newSizes)
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button 
                  onClick={clearFilters}
                  className="flex-1 py-3 border border-gray-300 rounded-md text-gray-700"
                >
                  Clear All
                </button>
                <button 
                  onClick={toggleFilters}
                  className="flex-1 py-3 bg-primary text-white rounded-md"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Products */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {Array(9).fill().map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-64 md:h-80 mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
              <p className="text-gray-500 mb-4">Try changing your filters or check back later for new arrivals.</p>
              <button 
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {!loading && products.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                  <span className="sr-only">Previous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-md bg-primary text-white font-medium">1</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">8</button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WomenCategory