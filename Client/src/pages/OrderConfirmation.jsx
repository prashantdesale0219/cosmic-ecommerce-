import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mock order data
  useEffect(() => {
    // Simulate API call to fetch order details
    setTimeout(() => {
      const mockOrder = {
        id: orderId || 'ORD' + Math.floor(Math.random() * 10000000),
        date: new Date().toISOString(),
        status: 'Confirmed',
        paymentMethod: 'Credit Card',
        paymentStatus: 'Paid',
        shippingAddress: {
          name: 'John Doe',
          street: '123 Main Street',
          city: 'Mumbai',
          state: 'Maharashtra',
          pincode: '400001',
          country: 'India',
          phone: '+91 9876543210'
        },
        items: [
          {
            id: 'PROD1',
            name: 'Premium Cotton T-Shirt',
            color: 'Black',
            size: 'L',
            price: 89900,
            quantity: 2,
            image: '/src/assets/product-1-1.jpg'
          },
          {
            id: 'PROD2',
            name: 'Slim Fit Jeans',
            color: 'Blue',
            size: '32',
            price: 149900,
            quantity: 1,
            image: '/src/assets/product-2-1.jpg'
          }
        ],
        subtotal: 329700,
        shipping: 9900,
        discount: 50000,
        tax: 28970,
        total: 318570,
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
      };
      
      setOrder(mockOrder);
      setLoading(false);
    }, 1000);
  }, [orderId]);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };
  
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your order details...</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Order Confirmation Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Thank You For Your Order!</h1>
        <p className="text-gray-600 mb-4">Your order has been confirmed and will be shipping soon.</p>
        <div className="bg-gray-100 inline-block px-4 py-2 rounded-md">
          <span className="text-gray-700 font-medium">Order Number: </span>
          <span className="text-primary font-bold">{order.id}</span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        {/* Order Status */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/4 px-3 mb-4 md:mb-0">
              <div className="mb-1 text-gray-500 text-sm">Order Date</div>
              <div className="font-medium">{formatDate(order.date)}</div>
            </div>
            <div className="w-full md:w-1/4 px-3 mb-4 md:mb-0">
              <div className="mb-1 text-gray-500 text-sm">Order Status</div>
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {order.status}
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-3 mb-4 md:mb-0">
              <div className="mb-1 text-gray-500 text-sm">Payment</div>
              <div className="font-medium">{order.paymentMethod}</div>
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {order.paymentStatus}
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-3">
              <div className="mb-1 text-gray-500 text-sm">Estimated Delivery</div>
              <div className="font-medium">{formatDate(order.estimatedDelivery)}</div>
            </div>
          </div>
        </div>
        
        {/* Order Items */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold mb-4">Order Items</h2>
          <div className="divide-y divide-gray-200">
            {order.items.map((item) => (
              <div key={item.id} className="py-4 flex flex-wrap md:flex-nowrap">
                <div className="md:w-16 md:h-16 w-full h-24 bg-gray-100 rounded-md overflow-hidden mb-4 md:mb-0 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="md:ml-4 flex-grow">
                  <div className="flex flex-wrap justify-between">
                    <div>
                      <h3 className="text-base font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.color}, {item.size} | Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="p-6 bg-gray-50">
          <div className="w-full md:w-1/2 md:ml-auto">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">{formatPrice(order.shipping)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium text-green-600">-{formatPrice(order.discount)}</span>
              </div>
            )}
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">{formatPrice(order.tax)}</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-200 mt-2 pt-2">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg">{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shipping Address */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
          <address className="not-italic">
            <p className="font-medium">{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.street}</p>
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}
            </p>
            <p>{order.shippingAddress.country}</p>
            <p className="mt-2">{order.shippingAddress.phone}</p>
          </address>
        </div>
      </div>
      
      {/* Next Steps */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">What's Next?</h2>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-base font-medium">Order Confirmation Email</h3>
                <p className="text-gray-600">We've sent you an email with your order details and tracking information.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-base font-medium">Track Your Order</h3>
                <p className="text-gray-600">You can track your order status in your <Link to="/account/orders" className="text-primary hover:text-primary-dark">account dashboard</Link>.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-base font-medium">Need Help?</h3>
                <p className="text-gray-600">If you have any questions about your order, please visit our <Link to="/help" className="text-primary hover:text-primary-dark">Help Center</Link> or <Link to="/contact" className="text-primary hover:text-primary-dark">Contact Us</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link 
          to="/"
          className="btn-secondary px-6 py-3"
        >
          Continue Shopping
        </Link>
        <Link 
          to="/account/orders"
          className="btn-primary px-6 py-3"
        >
          View Order Status
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;