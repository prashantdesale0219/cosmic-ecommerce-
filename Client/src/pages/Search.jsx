import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';

// Import product images
import tshirtManImage from '../assets/images/tshirt-man.webp';
import tshirtWomanImage from '../assets/images/tshirt-woman.jpg';

// Product images array
const productImages = [tshirtManImage, tshirtWomanImage];

// Mock product data generator
const generateMockProducts = (query, count = 20) => {
  const products = [];
  const categories = ['clothing', 'footwear', 'accessories'];
  
  for (let i = 1; i <= count; i++) {
    const isOnSale = Math.random() > 0.7;
    const isNew = !isOnSale && Math.random() > 0.8;
    const isBestseller = !isOnSale && !isNew && Math.random() > 0.8;
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    products.push({
      id: `search-${i}`,
      name: `${query} Product ${i}`,
      price: Math.floor(Math.random() * 5000) + 499,
      originalPrice: isOnSale ? Math.floor(Math.random() * 8000) + 999 : null,
      discount: isOnSale ? Math.floor(Math.random() * 40) + 10 : null,
      image: productImages[i % productImages.length],
      slug: `search-${i}`,
      badge: isNew ? 'new' : isBestseller ? 'bestseller' : isOnSale ? 'sale' : null,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviewCount: Math.floor(Math.random() * 200),
      category,
      colors: ['Black', 'White', 'Blue', 'Red', 'Green'].slice(0, Math.floor(Math.random() * 4) + 1),
      sizes: ['S', 'M', 'L', 'XL', 'XXL'].slice(0, Math.floor(Math.random() * 4) + 1),
      isNew,
      isSale: isOnSale,
      isBestseller
    });
  }
  
  return products;
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    price: searchParams.get('price') || '',
    sort: searchParams.get('sort') || 'relevance',
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Fetch products based on search query
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (!query.trim()) {
        setProducts([]);
        setLoading(false);
        return;
      }
      
      let mockProducts = generateMockProducts(query, Math.floor(Math.random() * 15) + 5);
      
      // Apply filters
      if (filters.category) {
        mockProducts = mockProducts.filter(product => product.category === filters.category);
      }
      
      if (filters.price) {
        const [min, max] = filters.price.split('-').map(Number);
        mockProducts = mockProducts.filter(product => {
          const price = product.price / 100;
          return price >= min && (max ? price <= max : true);
        });
      }
      
      // Apply sorting
      switch (filters.sort) {
        case 'price-low':
          mockProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          mockProducts.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          mockProducts.sort((a, b) => a.isNew ? -1 : b.isNew ? 1 : 0);
          break;
        case 'rating':
          mockProducts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
          break;
        default: // 'relevance'
          // No sorting for relevance as it's the default
          break;
      }
      
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, [query, filters]);
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (query) params.set('q', query);
    if (filters.category) params.set('category', filters.category);
    if (filters.price) params.set('price', filters.price);
    if (filters.sort) params.set('sort', filters.sort);
    
    setSearchParams(params);
  }, [filters, query, setSearchParams]);
  
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      category: '',
      price: '',
      sort: 'relevance',
    });
  };
  
  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(value => value && value !== 'relevance');
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          {query ? `Search Results for "${query}"` : 'Search Products'}
        </h1>
        {products.length > 0 && (
          <p className="text-gray-600">{products.length} products found</p>
        )}
      </div>
      
      {query ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Filters</h2>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-primary hover:text-primary-dark text-sm font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {['clothing', 'footwear', 'accessories'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === category}
                        onChange={() => handleFilterChange('category', category)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-2 capitalize">{category}</span>
                    </label>
                  ))}
                  {filters.category && (
                    <button 
                      onClick={() => handleFilterChange('category', '')}
                      className="text-primary hover:text-primary-dark text-sm mt-2"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
              
              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under ₹500', value: '0-500' },
                    { label: '₹500 - ₹1000', value: '500-1000' },
                    { label: '₹1000 - ₹2000', value: '1000-2000' },
                    { label: '₹2000 - ₹5000', value: '2000-5000' },
                    { label: 'Over ₹5000', value: '5000-' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.price === option.value}
                        onChange={() => handleFilterChange('price', option.value)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-2">{option.label}</span>
                    </label>
                  ))}
                  {filters.price && (
                    <button 
                      onClick={() => handleFilterChange('price', '')}
                      className="text-primary hover:text-primary-dark text-sm mt-2"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="lg:w-3/4">
            {/* Sort and Filter Controls */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center">
                <button 
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center text-gray-700 mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters
                  {hasActiveFilters && (
                    <span className="ml-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {Object.values(filters).filter(v => v && v !== 'relevance').length}
                    </span>
                  )}
                </button>
                <span className="text-gray-600">
                  {loading ? 'Loading products...' : `${products.length} products`}
                </span>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-700 mr-2">Sort by:</label>
                <select
                  id="sort"
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
            
            {/* Mobile Filters Modal */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileFiltersOpen(false)}></div>
                <div className="absolute inset-y-0 right-0 max-w-full flex">
                  <div className="relative w-screen max-w-md">
                    <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-bold">Filters</h2>
                          <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        {hasActiveFilters && (
                          <button 
                            onClick={clearFilters}
                            className="text-primary hover:text-primary-dark text-sm font-medium mt-2"
                          >
                            Clear All Filters
                          </button>
                        )}
                      </div>
                      
                      <div className="p-4 space-y-6">
                        {/* Mobile Category Filter */}
                        <div>
                          <h3 className="font-medium mb-3">Category</h3>
                          <div className="space-y-2">
                            {['clothing', 'footwear', 'accessories'].map((category) => (
                              <label key={category} className="flex items-center">
                                <input
                                  type="radio"
                                  name="category-mobile"
                                  checked={filters.category === category}
                                  onChange={() => handleFilterChange('category', category)}
                                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                />
                                <span className="ml-2 capitalize">{category}</span>
                              </label>
                            ))}
                            {filters.category && (
                              <button 
                                onClick={() => handleFilterChange('category', '')}
                                className="text-primary hover:text-primary-dark text-sm mt-2"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                        </div>
                        
                        {/* Mobile Price Filter */}
                        <div>
                          <h3 className="font-medium mb-3">Price</h3>
                          <div className="space-y-2">
                            {[
                              { label: 'Under ₹500', value: '0-500' },
                              { label: '₹500 - ₹1000', value: '500-1000' },
                              { label: '₹1000 - ₹2000', value: '1000-2000' },
                              { label: '₹2000 - ₹5000', value: '2000-5000' },
                              { label: 'Over ₹5000', value: '5000-' }
                            ].map((option) => (
                              <label key={option.value} className="flex items-center">
                                <input
                                  type="radio"
                                  name="price-mobile"
                                  checked={filters.price === option.value}
                                  onChange={() => handleFilterChange('price', option.value)}
                                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                />
                                <span className="ml-2">{option.label}</span>
                              </label>
                            ))}
                            {filters.price && (
                              <button 
                                onClick={() => handleFilterChange('price', '')}
                                className="text-primary hover:text-primary-dark text-sm mt-2"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border-t mt-auto">
                        <button
                          onClick={() => setMobileFiltersOpen(false)}
                          className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                    image={product.image}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    isNew={product.isNew}
                    isSale={product.isSale}
                    isBestseller={product.isBestseller}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-medium mb-4">No products found</h2>
                <p className="text-gray-600 mb-8">Try adjusting your search term or filters.</p>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h2 className="text-2xl font-medium mb-4">Enter a search term</h2>
          <p className="text-gray-600">Use the search bar at the top to find products.</p>
        </div>
      )}
    </div>
  );
};

export default Search;