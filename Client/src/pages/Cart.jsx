import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import product images
import tshirtManImage from '../assets/images/tshirt-man.webp';
import tshirtWomanImage from '../assets/images/tshirt-woman.jpg';

// Mock cart data - in a real app, this would come from a state management solution
const initialCartItems = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirt',
    price: 1299,
    originalPrice: 1999,
    color: 'Black',
    size: 'M',
    quantity: 2,
    image: tshirtManImage,
    stock: 10
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 2499,
    originalPrice: 2499,
    color: 'Blue',
    size: '32',
    quantity: 1,
    image: tshirtWomanImage,
    stock: 5
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 9900 : 0; // Free shipping over ₹999
  const discount = couponApplied ? couponDiscount : 0;
  const total = subtotal + shipping - discount;
  
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };
  
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, Math.min(newQuantity, item.stock)) };
      }
      return item;
    }));
  };
  
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const handleApplyCoupon = () => {
    // In a real app, this would validate the coupon with an API
    if (couponCode.toUpperCase() === 'DISCOUNT20') {
      setCouponApplied(true);
      setCouponDiscount(Math.round(subtotal * 0.2)); // 20% discount
    } else {
      alert('Invalid coupon code');
    }
  };
  
  const handleRemoveCoupon = () => {
    setCouponApplied(false);
    setCouponDiscount(0);
    setCouponCode('');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b">
                <div className="col-span-6">
                  <span className="font-medium">Product</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="font-medium">Price</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="font-medium">Quantity</span>
                </div>
                <div className="col-span-2 text-right">
                  <span className="font-medium">Subtotal</span>
                </div>
              </div>
              
              {cartItems.map((item) => (
                <div key={item.id} className="border-b last:border-b-0 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-1 md:col-span-6">
                      <div className="flex items-center">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-4">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <div className="text-sm text-gray-600 mt-1">
                            <span>Color: {item.color}</span>
                            <span className="mx-2">|</span>
                            <span>Size: {item.size}</span>
                          </div>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-sm text-primary hover:text-primary-dark mt-2 md:hidden"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-span-1 md:col-span-2 md:text-center">
                      <div className="flex items-center justify-between md:block">
                        <span className="md:hidden">Price:</span>
                        <div>
                          <span className="font-medium">{formatPrice(item.price)}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-gray-500 line-through ml-2">
                              {formatPrice(item.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-1 md:col-span-2 md:text-center">
                      <div className="flex items-center justify-between md:justify-center">
                        <span className="md:hidden">Quantity:</span>
                        <div className="flex items-center">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <input 
                            type="number" 
                            min="1" 
                            max={item.stock}
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                            className="w-10 h-8 border-t border-b border-gray-300 text-center text-sm"
                          />
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                            disabled={item.quantity >= item.stock}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtotal */}
                    <div className="col-span-1 md:col-span-2 md:text-right">
                      <div className="flex items-center justify-between md:block">
                        <span className="md:hidden">Subtotal:</span>
                        <div className="flex items-center">
                          <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="ml-4 text-gray-400 hover:text-danger hidden md:block"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Link to="/" className="text-primary hover:text-primary-dark flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-6">Order Summary</h2>
              
              {/* Coupon Code */}
              {!couponApplied ? (
                <div className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Try "DISCOUNT20" for 20% off</p>
                </div>
              ) : (
                <div className="mb-6 bg-green-50 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <span className="text-green-800 font-medium">{couponCode}</span>
                    <p className="text-green-700 text-sm">20% discount applied</p>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-green-700 hover:text-green-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              
              {/* Summary Details */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-700">
                    <span>Discount (20%)</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-gray-200 pt-3">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-lg">{formatPrice(total)}</span>
                </div>
              </div>
              
              {/* Checkout Button */}
              <div className="mt-6">
                <Link 
                  to="/checkout"
                  className="block w-full bg-primary text-white text-center py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </div>
              
              {/* Payment Methods */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">We Accept</p>
                <div className="flex justify-center space-x-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;