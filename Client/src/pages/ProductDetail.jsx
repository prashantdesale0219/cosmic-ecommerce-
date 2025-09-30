import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import product images
import tshirtManImage from '../assets/images/tshirt-man.webp';
import tshirtWomanImage from '../assets/images/tshirt-woman.jpg';

// Mock product data - in a real app, this would come from an API
const mockProduct = {
  id: 1,
  name: 'Premium Cotton T-Shirt',
  price: 1299,
  originalPrice: 1999,
  discount: 35,
  rating: 4.5,
  reviewCount: 128,
  description: 'Our premium cotton t-shirt offers unmatched comfort with a modern fit. Made from 100% organic cotton that\'s both sustainable and durable. Perfect for everyday wear or casual outings.',
  features: [
    'Made from 100% organic cotton',
    'Breathable and lightweight fabric',
    'Reinforced stitching for durability',
    'Pre-shrunk to maintain size and shape',
    'Available in multiple colors'
  ],
  colors: ['Black', 'White', 'Navy', 'Grey', 'Red'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    tshirtManImage,
    tshirtWomanImage,
    tshirtManImage,
    tshirtWomanImage
  ],
  stock: 45,
  sku: 'TS-BLK-L-001',
  category: 'Clothing',
  subcategory: 'T-Shirts',
  tags: ['cotton', 'casual', 'summer', 'organic'],
  isBestseller: true,
  isNew: false,
  isSale: true
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Fetch product data
  useEffect(() => {
    // Simulate API call
    const fetchProduct = () => {
      setTimeout(() => {
        setProduct(mockProduct);
        setSelectedColor(mockProduct.colors[0]);
        setSelectedSize(mockProduct.sizes[1]); // Default to M size
        setLoading(false);
      }, 500);
    };
    
    fetchProduct();
  }, [productId]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg h-96"></div>
              <div className="flex mt-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 rounded-lg h-20 w-20"></div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <a href="/" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
          Continue Shopping
        </a>
      </div>
    );
  }
  
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };
  
  const handleAddToCart = () => {
    // In a real app, this would dispatch an action to add the item to cart
    console.log('Adding to cart:', {
      product: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    
    // Show a toast notification
    alert(`Added ${quantity} ${product.name} to cart`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="text-gray-500 hover:text-primary">Home</a></li>
          <li><span className="text-gray-400 mx-1">/</span></li>
          <li><a href={`/category/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-primary">{product.category}</a></li>
          <li><span className="text-gray-400 mx-1">/</span></li>
          <li><a href={`/category/${product.subcategory.toLowerCase()}`} className="text-gray-500 hover:text-primary">{product.subcategory}</a></li>
          <li><span className="text-gray-400 mx-1">/</span></li>
          <li className="text-gray-800 font-medium">{product.name}</li>
        </ol>
      </nav>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[500px] flex items-center justify-center">
            {/* Product badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              {product.isNew && (
                <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              )}
              {product.isSale && (
                <span className="bg-danger text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </span>
              )}
              {product.isBestseller && (
                <span className="bg-success text-white text-xs font-bold px-2 py-1 rounded">
                  BESTSELLER
                </span>
              )}
            </div>
            
            {/* Main product image */}
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="object-contain max-h-full max-w-full"
            />
            
            {/* Image navigation arrows */}
            <button 
              onClick={() => setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Thumbnail images */}
          <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`rounded-md overflow-hidden border-2 min-w-[80px] h-20 ${activeImage === index ? 'border-primary' : 'border-transparent'}`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Price */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-primary mr-2">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-gray-500 line-through mr-2">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-danger/10 text-danger text-sm font-medium px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">{product.rating} ({product.reviewCount} reviews)</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border rounded-full text-sm ${selectedColor === color ? 'border-primary text-primary' : 'border-gray-300 text-gray-700'}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <button className="text-sm text-primary hover:text-primary-dark">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center border rounded-md text-sm font-medium ${selectedSize === size ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                onClick={() => handleQuantityChange(quantity - 1)}
                className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                disabled={quantity <= 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <input 
                type="number" 
                min="1" 
                max={product.stock}
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-16 h-10 border-t border-b border-gray-300 text-center"
              />
              <button 
                onClick={() => handleQuantityChange(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                disabled={quantity >= product.stock}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <span className="ml-4 text-sm text-gray-500">{product.stock} available</span>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <div className="flex gap-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          
          {/* Product Details */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">SKU: {product.sku}</span>
              <span className="text-sm text-gray-500">Category: {product.category} / {product.subcategory}</span>
            </div>
            <div className="flex flex-wrap gap-1 text-sm text-gray-500">
              Tags: 
              {product.tags.map((tag, index) => (
                <a key={tag} href={`/tag/${tag}`} className="text-primary hover:underline">
                  {tag}{index < product.tags.length - 1 ? ',' : ''}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Features */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Product Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Related Products - Placeholder */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden relative mb-4">
                <div className="absolute top-2 right-2 z-10">
                  {i === 1 && <span className="bg-success text-white text-xs font-bold px-2 py-1 rounded">BESTSELLER</span>}
                  {i === 2 && <span className="bg-danger text-white text-xs font-bold px-2 py-1 rounded">SALE</span>}
                </div>
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 py-2 px-4 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-gray-100">
                  Quick View
                </button>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Related Product {i}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-bold text-primary">₹1,299.00</span>
                  {i === 2 && (
                    <>
                      <span className="ml-2 text-gray-500 line-through text-sm">₹1,999.00</span>
                      <span className="ml-2 text-danger text-sm">-35%</span>
                    </>
                  )}
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;