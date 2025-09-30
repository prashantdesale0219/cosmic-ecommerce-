import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './FandomMerchandise.css'

const FandomMerchandise = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  // Fandom merchandise products with real images
  const fandomProducts = [
    {
      id: 1,
      name: "Daffy Duck Baseball Jersey",
      price: 1299,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      slug: "daffy-duck-baseball-jersey",
      badge: "new",
      franchise: "Looney Tunes"
    },
    {
      id: 2,
      name: "Marvel Avengers Graphic Tee",
      price: 899,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      slug: "marvel-avengers-graphic-tee",
      badge: "bestseller",
      franchise: "Marvel"
    },
    {
      id: 3,
      name: "Harry Potter Hogwarts Hoodie",
      price: 1599,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      slug: "harry-potter-hogwarts-hoodie",
      badge: "sale",
      franchise: "Harry Potter"
    },
    {
      id: 4,
      name: "Star Wars Mandalorian Cap",
      price: 699,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
      slug: "star-wars-mandalorian-cap",
      badge: null,
      franchise: "Star Wars"
    }
  ];

  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('fandom-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const franchises = [
    { id: 'all', name: 'All Franchises' },
    { id: 'marvel', name: 'Marvel' },
    { id: 'dc', name: 'DC Comics' },
    { id: 'starwars', name: 'Star Wars' },
    { id: 'harrypotter', name: 'Harry Potter' },
    { id: 'looneytunes', name: 'Looney Tunes' }
  ];

  const filteredProducts = activeTab === 'all' 
    ? fandomProducts 
    : fandomProducts.filter(product => 
        product.franchise.toLowerCase().replace(' ', '') === activeTab
      );

  return (
    <div id="fandom-section" className={`bg-white rounded-xl overflow-hidden shadow-lg ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
      {/* Header with background image */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-r from-purple-600 to-indigo-700 overflow-hidden rounded-t-xl">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            Fandom Merchandise
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl">
            Statement prints, nostalgic hits, premium fabric
          </p>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap px-4 py-2 franchise-tabs">
          {franchises.map(franchise => (
            <button
              key={franchise.id}
              onClick={() => setActiveTab(franchise.id)}
              className={`franchise-tab px-3 sm:px-4 py-2 font-medium text-sm sm:text-base transition-colors rounded-t-lg mr-1 sm:mr-2 ${activeTab === franchise.id ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {franchise.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative transition-all duration-300 hover:shadow-md rounded-lg p-2">
              {/* Product Image */}
              <Link to={`/product/${product.slug}`} className="block">
                <div className="aspect-square overflow-hidden rounded-lg bg-neutral-200 mb-3 shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-2 left-2">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${product.badge === 'sale' ? 'bg-red-500 text-white' : product.badge === 'new' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                    {product.badge.toUpperCase()}
                  </span>
                </div>
              )}

              {/* Quick Add Button - Visible on hover */}
              <div 
                className={`absolute bottom-[4.5rem] left-0 right-0 flex justify-center transition-opacity duration-200 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <button 
                  className="bg-neutral-900 text-neutral-100 py-2 px-4 rounded-full text-xs sm:text-sm font-medium hover:bg-primary-600 transition-colors shadow-md"
                  aria-label={`Quick add ${product.name} to cart`}
                >
                  Quick Add
                </button>
              </div>

              {/* Product Info */}
              <div>
                <Link to={`/product/${product.slug}`} className="block">
                  <h3 className="text-base font-medium text-neutral-900 mb-1 line-clamp-2">{product.name}</h3>
                </Link>
                
                <div className="flex items-center">
                  <span className="font-semibold text-neutral-900">₹{product.price}</span>
                  
                  {product.originalPrice && (
                    <>
                      <span className="ml-2 text-neutral-500 line-through text-sm">₹{product.originalPrice}</span>
                      <span className="ml-2 text-primary-600 text-sm font-medium">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link 
            to="/fandom-merchandise" 
            className="inline-flex items-center justify-center px-5 sm:px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-8 transition-all hover:shadow-lg hover:scale-105"
          >
            View All Merchandise
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FandomMerchandise