import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';

// Mock category data
const categoryData = {
  clothing: {
    name: 'Clothing',
    description: 'Explore our latest collection of trendy and comfortable clothing for all occasions.',
    subcategories: ['T-Shirts', 'Shirts', 'Jeans', 'Trousers', 'Dresses', 'Jackets'],
    banner: '/src/assets/category-clothing.jpg'
  },
  footwear: {
    name: 'Footwear',
    description: 'Step out in style with our range of footwear for every occasion and season.',
    subcategories: ['Casual Shoes', 'Formal Shoes', 'Sports Shoes', 'Sandals', 'Boots'],
    banner: '/src/assets/category-footwear.jpg'
  },
  accessories: {
    name: 'Accessories',
    description: 'Complete your look with our stylish accessories that add the perfect finishing touch.',
    subcategories: ['Watches', 'Belts', 'Sunglasses', 'Bags', 'Wallets'],
    banner: '/src/assets/category-accessories.jpg'
  }
};

// Mock product data
const generateMockProducts = (category, count = 20) => {
  const products = [];
  const subcategories = categoryData[category]?.subcategories || [];
  
  for (let i = 1; i <= count; i++) {
    const isOnSale = Math.random() > 0.7;
    const isNew = !isOnSale && Math.random() > 0.8;
    const isBestseller = !isOnSale && !isNew && Math.random() > 0.8;
    
    products.push({
      id: `${category}-${i}`,
      name: `${categoryData[category]?.name || 'Product'} Item ${i}`,
      price: Math.floor(Math.random() * 5000) + 499,
      originalPrice: isOnSale ? Math.floor(Math.random() * 8000) + 999 : null,
      discount: isOnSale ? Math.floor(Math.random() * 40) + 10 : null,
      image: `/src/assets/product-${Math.floor(Math.random() * 4) + 1}-1.jpg`,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviewCount: Math.floor(Math.random() * 200),
      subcategory: subcategories[Math.floor(Math.random() * subcategories.length)],
      colors: ['Black', 'White', 'Blue', 'Red', 'Green'].slice(0, Math.floor(Math.random() * 4) + 1),
      sizes: ['S', 'M', 'L', 'XL', 'XXL'].slice(0, Math.floor(Math.random() * 4) + 1),
      isNew,
      isSale: isOnSale,
      isBestseller
    });
  }
  
  return products;
};

const CategoryListing = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    subcategory: searchParams.get('subcategory') || '',
    price: searchParams.get('price') || '',
    sort: searchParams.get('sort') || 'featured',
    color: searchParams.get('color') || '',
    size: searchParams.get('size') || ''
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Get category info
  const categoryInfo = categoryData[category] || {
    name: category.charAt(0).toUpperCase() + category.slice(1),
    description: 'Explore our collection of products.',
    subcategories: [],
    banner: '/src/assets/category-default.jpg'
  };
  
  // Fetch products
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let mockProducts = generateMockProducts(category);
      
      // Apply filters
      if (filters.subcategory) {
        mockProducts = mockProducts.filter(product => product.subcategory === filters.subcategory);
      }
      
      if (filters.price) {
        const [min, max] = filters.price.split('-').map(Number);
        mockProducts = mockProducts.filter(product => {
          const price = product.price / 100;
          return price >= min && (max ? price <= max : true);
        });
      }
      
      if (filters.color) {
        mockProducts = mockProducts.filter(product => product.colors.includes(filters.color));
      }
      
      if (filters.size) {
        mockProducts = mockProducts.filter(product => product.sizes.includes(filters.size));
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
        default: // 'featured'
          mockProducts.sort((a, b) => {
            if (a.isBestseller && !b.isBestseller) return -1;
            if (!a.isBestseller && b.isBestseller) return 1;
            return 0;
          });
      }
      
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, [category, filters]);
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.subcategory) params.set('subcategory', filters.subcategory);
    if (filters.price) params.set('price', filters.price);
    if (filters.sort) params.set('sort', filters.sort);
    if (filters.color) params.set('color', filters.color);
    if (filters.size) params.set('size', filters.size);
    
    setSearchParams(params);
  }, [filters, setSearchParams]);
  
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      subcategory: '',
      price: '',
      sort: 'featured',
      color: '',
      size: ''
    });
  };
  
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };
  
  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(value => value && value !== 'featured');
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="text-gray-500 hover:text-primary">Home</a></li>
          <li><span className="text-gray-400 mx-1">/</span></li>
          <li className="text-gray-800 font-medium">{categoryInfo.name}</li>
        </ol>
      </nav>
      
      {/* Category Banner */}
      <div className="relative rounded-lg overflow-hidden mb-8 h-48 md:h-64">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{categoryInfo.name}</h1>
            <p className="max-w-2xl mx-auto">{categoryInfo.description}</p>
          </div>
        </div>
        <img 
          src={categoryInfo.banner} 
          alt={categoryInfo.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
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
            
            {/* Subcategory Filter */}
            {categoryInfo.subcategories.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-3">Subcategory</h3>
                <div className="space-y-2">
                  {categoryInfo.subcategories.map((subcategory) => (
                    <label key={subcategory} className="flex items-center">
                      <input
                        type="radio"
                        name="subcategory"
                        checked={filters.subcategory === subcategory}
                        onChange={() => handleFilterChange('subcategory', subcategory)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-2">{subcategory}</span>
                    </label>
                  ))}
                  {filters.subcategory && (
                    <button 
                      onClick={() => handleFilterChange('subcategory', '')}
                      className="text-primary hover:text-primary-dark text-sm mt-2"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            )}
            
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
            
            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {['Black', 'White', 'Blue', 'Red', 'Green'].map((color) => (
                  <button
                    key={color}
                    onClick={() => handleFilterChange('color', filters.color === color ? '' : color)}
                    className={`px-3 py-1 border rounded-full text-sm ${filters.color === color ? 'border-primary text-primary' : 'border-gray-300 text-gray-700'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleFilterChange('size', filters.size === size ? '' : size)}
                    className={`w-10 h-10 flex items-center justify-center border rounded-md text-sm font-medium ${filters.size === size ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                  >
                    {size}
                  </button>
                ))}
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
                    {Object.values(filters).filter(v => v && v !== 'featured').length}
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
                <option value="featured">Featured</option>
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
                      {/* Mobile Subcategory Filter */}
                      {categoryInfo.subcategories.length > 0 && (
                        <div>
                          <h3 className="font-medium mb-3">Subcategory</h3>
                          <div className="space-y-2">
                            {categoryInfo.subcategories.map((subcategory) => (
                              <label key={subcategory} className="flex items-center">
                                <input
                                  type="radio"
                                  name="subcategory-mobile"
                                  checked={filters.subcategory === subcategory}
                                  onChange={() => handleFilterChange('subcategory', subcategory)}
                                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                />
                                <span className="ml-2">{subcategory}</span>
                              </label>
                            ))}
                            {filters.subcategory && (
                              <button 
                                onClick={() => handleFilterChange('subcategory', '')}
                                className="text-primary hover:text-primary-dark text-sm mt-2"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                      
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
                      
                      {/* Mobile Color Filter */}
                      <div>
                        <h3 className="font-medium mb-3">Color</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Black', 'White', 'Blue', 'Red', 'Green'].map((color) => (
                            <button
                              key={color}
                              onClick={() => handleFilterChange('color', filters.color === color ? '' : color)}
                              className={`px-3 py-1 border rounded-full text-sm ${filters.color === color ? 'border-primary text-primary' : 'border-gray-300 text-gray-700'}`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Mobile Size Filter */}
                      <div>
                        <h3 className="font-medium mb-3">Size</h3>
                        <div className="flex flex-wrap gap-2">
                          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <button
                              key={size}
                              onClick={() => handleFilterChange('size', filters.size === size ? '' : size)}
                              className={`w-10 h-10 flex items-center justify-center border rounded-md text-sm font-medium ${filters.size === size ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                            >
                              {size}
                            </button>
                          ))}
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
              <p className="text-gray-600 mb-8">Try adjusting your filters or search criteria.</p>
              <button 
                onClick={clearFilters}
                className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryListing;