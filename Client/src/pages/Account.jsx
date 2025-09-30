import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import product images
import tshirtManImage from '../assets/images/tshirt-man.webp';
import tshirtWomanImage from '../assets/images/tshirt-woman.jpg';

// Mock user data - in a real app, this would come from an API or state management
const mockUser = {
  id: 1,
  firstName: 'Rahul',
  lastName: 'Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 9876543210',
  avatar: null, // No avatar image
  addresses: [
    {
      id: 1,
      type: 'Home',
      isDefault: true,
      street: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India'
    },
    {
      id: 2,
      type: 'Office',
      isDefault: false,
      street: '456 Business Park, Building C',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400051',
      country: 'India'
    }
  ]
};

// Mock order data
const mockOrders = [
  {
    id: 'ORD123456',
    date: '2023-06-15',
    status: 'Delivered',
    total: 399800,
    items: [
      {
        id: 1,
        name: 'Premium Cotton T-Shirt',
        price: 1299,
        quantity: 2,
        image: tshirtManImage
      },
      {
        id: 2,
        name: 'Slim Fit Jeans',
        price: 2499,
        quantity: 1,
        image: tshirtWomanImage
      }
    ]
  },
  {
    id: 'ORD789012',
    date: '2023-05-28',
    status: 'Delivered',
    total: 549900,
    items: [
      {
        id: 3,
        name: 'Leather Jacket',
        price: 5499,
        quantity: 1,
        image: tshirtManImage
      }
    ]
  },
  {
    id: 'ORD345678',
    date: '2023-06-20',
    status: 'Processing',
    total: 299700,
    items: [
      {
        id: 4,
        name: 'Running Shoes',
        price: 2997,
        quantity: 1,
        image: tshirtWomanImage
      }
    ]
  }
];

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(mockUser);
  const [orders, setOrders] = useState(mockOrders);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update the user profile via an API
    setUser({
      ...user,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone
    });
    setEditMode(false);
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-success/10 text-success';
      case 'Processing':
        return 'bg-primary/10 text-primary';
      case 'Shipped':
        return 'bg-accent/10 text-accent';
      case 'Cancelled':
        return 'bg-danger/10 text-danger';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-bold mr-4">
                  {user.avatar ? (
                    <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`
                  )}
                </div>
                <div>
                  <h2 className="font-bold text-lg">{user.firstName} {user.lastName}</h2>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'orders' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('addresses')}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'addresses' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    Addresses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    Account Details
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'wishlist' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                  >
                    Wishlist
                  </button>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 rounded-md text-danger hover:bg-danger/10"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <p className="mb-6">Hello {user.firstName}, welcome to your account dashboard!</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Recent Orders</h3>
                    {orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.slice(0, 2).map((order) => (
                          <div key={order.id} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{order.id}</p>
                              <p className="text-sm text-gray-600">{formatDate(order.date)}</p>
                            </div>
                            <div>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">You haven't placed any orders yet.</p>
                    )}
                    <button
                      onClick={() => setActiveTab('orders')}
                      className="mt-4 text-primary hover:text-primary-dark text-sm font-medium"
                    >
                      View All Orders
                    </button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Account Details</h3>
                    <div className="space-y-2">
                      <p><span className="text-gray-600">Name:</span> {user.firstName} {user.lastName}</p>
                      <p><span className="text-gray-600">Email:</span> {user.email}</p>
                      <p><span className="text-gray-600">Phone:</span> {user.phone}</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className="mt-4 text-primary hover:text-primary-dark text-sm font-medium"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Default Shipping Address</h3>
                  {user.addresses.find(addr => addr.isDefault) ? (
                    <div>
                      <p className="font-medium">{user.addresses.find(addr => addr.isDefault).type}</p>
                      <p>{user.addresses.find(addr => addr.isDefault).street}</p>
                      <p>{user.addresses.find(addr => addr.isDefault).city}, {user.addresses.find(addr => addr.isDefault).state} {user.addresses.find(addr => addr.isDefault).pincode}</p>
                      <p>{user.addresses.find(addr => addr.isDefault).country}</p>
                    </div>
                  ) : (
                    <p className="text-gray-600">No default address set.</p>
                  )}
                  <button
                    onClick={() => setActiveTab('addresses')}
                    className="mt-4 text-primary hover:text-primary-dark text-sm font-medium"
                  >
                    Manage Addresses
                  </button>
                </div>
              </div>
            )}
            
            {/* Orders */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-bold mb-6">My Orders</h2>
                
                {orders.length > 0 ? (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 flex flex-wrap justify-between items-center">
                          <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-sm text-gray-600">{formatDate(order.date)}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                            <span className="font-medium">{formatPrice(order.total)}</span>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="space-y-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center">
                                <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-4">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium">{item.name}</h4>
                                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                                  <p className="text-sm text-gray-600">{formatPrice(item.price)} each</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 flex justify-between items-center border-t">
                          <button className="text-primary hover:text-primary-dark text-sm font-medium">
                            View Order Details
                          </button>
                          {order.status === 'Delivered' && (
                            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dark transition-colors">
                              Buy Again
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                    <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
                    <Link to="/" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {/* Addresses */}
            {activeTab === 'addresses' && (
              <div>
                <h2 className="text-xl font-bold mb-6">My Addresses</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {user.addresses.map((address) => (
                    <div key={address.id} className="border rounded-lg p-4 relative">
                      {address.isDefault && (
                        <span className="absolute top-2 right-2 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          Default
                        </span>
                      )}
                      <h3 className="font-medium mb-2">{address.type}</h3>
                      <div className="space-y-1 text-gray-700">
                        <p>{address.street}</p>
                        <p>{address.city}, {address.state} {address.pincode}</p>
                        <p>{address.country}</p>
                      </div>
                      <div className="mt-4 flex space-x-4">
                        <button className="text-primary hover:text-primary-dark text-sm font-medium">
                          Edit
                        </button>
                        {!address.isDefault && (
                          <>
                            <span className="text-gray-300">|</span>
                            <button className="text-primary hover:text-primary-dark text-sm font-medium">
                              Set as Default
                            </button>
                            <span className="text-gray-300">|</span>
                            <button className="text-danger hover:text-danger-dark text-sm font-medium">
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {/* Add New Address Card */}
                  <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center h-48">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <h3 className="font-medium mb-2">Add New Address</h3>
                    <p className="text-gray-600 text-sm mb-4">Add a new delivery address for your orders</p>
                    <button className="text-primary hover:text-primary-dark text-sm font-medium">
                      Add Address
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Profile */}
            {activeTab === 'profile' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Account Details</h2>
                  {!editMode && (
                    <button
                      onClick={() => setEditMode(true)}
                      className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dark transition-colors"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
                
                {!editMode ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-1">Name</h3>
                      <p>{user.firstName} {user.lastName}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-1">Email</h3>
                      <p>{user.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-1">Phone</h3>
                      <p>{user.phone}</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <h3 className="font-medium mb-4 border-b pb-2">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditMode(false)}
                        className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
            
            {/* Wishlist */}
            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-xl font-bold mb-6">My Wishlist</h2>
                
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-600 mb-6">Add items you love to your wishlist. Review them anytime and easily move them to the cart.</p>
                  <Link to="/" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;