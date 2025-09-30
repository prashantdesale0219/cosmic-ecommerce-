import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#002742] text-neutral-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="mb-4">
              <img 
                src="/src/assets/images/cosmiclogo.png" 
                alt="Cosmic Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-neutral-300 mb-6 text-base leading-relaxed">
              Cosmic Power Tech - Leading the way in sustainable solar solutions. Quality solar products at competitive prices.
            </p>
            <div className="flex space-x-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/men" className="text-neutral-300 hover:text-white transition-colors duration-200">Men</Link></li>
              <li><Link to="/women" className="text-neutral-300 hover:text-white transition-colors duration-200">Women</Link></li>
              <li><Link to="/new-drops" className="text-neutral-300 hover:text-white transition-colors duration-200">New Drops</Link></li>
              <li><Link to="/product/sale" className="text-neutral-300 hover:text-white transition-colors duration-200">Sale</Link></li>
              <li><Link to="/product/bestsellers" className="text-neutral-300 hover:text-white transition-colors duration-200">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-neutral-100/80 hover:text-primary-300">Customer Support</Link></li>
              <li><Link to="/legal/shipping" className="text-neutral-100/80 hover:text-primary-300">Shipping Information</Link></li>
              <li><Link to="/legal/returns" className="text-neutral-100/80 hover:text-primary-300">Returns & Exchanges</Link></li>
              <li><Link to="/legal/size-guide" className="text-neutral-100/80 hover:text-primary-300">Size Guide</Link></li>
              <li><Link to="/legal/faq" className="text-neutral-100/80 hover:text-primary-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-neutral-100/80 hover:text-primary-300">About Us</Link></li>
              <li><Link to="/blog" className="text-neutral-100/80 hover:text-primary-300">Blog</Link></li>
              <li><Link to="/legal/careers" className="text-neutral-100/80 hover:text-primary-300">Careers</Link></li>
              <li><Link to="/legal/terms" className="text-neutral-100/80 hover:text-primary-300">Terms & Conditions</Link></li>
              <li><Link to="/legal/privacy" className="text-neutral-100/80 hover:text-primary-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 border-t border-neutral-100/20 pt-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-neutral-100/60">
                &copy; {currentYear} Serconst - The Indian Garage Co. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <span className="text-neutral-100/60">Payment Methods:</span>
              <div className="flex space-x-2">
                <span className="bg-neutral-100 text-neutral-900 rounded px-2 py-1 text-xs font-medium">Visa</span>
                <span className="bg-neutral-100 text-neutral-900 rounded px-2 py-1 text-xs font-medium">Mastercard</span>
                <span className="bg-neutral-100 text-neutral-900 rounded px-2 py-1 text-xs font-medium">UPI</span>
                <span className="bg-neutral-100 text-neutral-900 rounded px-2 py-1 text-xs font-medium">COD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer