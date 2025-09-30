import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import OfferStrip from './OfferStrip'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSearchDrawer, setShowSearchDrawer] = useState(false)
  const [showCartDrawer, setShowCartDrawer] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinkClasses = ({ isActive }) => 
    `px-3 py-2 rounded-md transition-colors ${isActive ? 'text-primary-600 font-medium' : 'text-neutral-900 hover:text-primary-600'}`

  return (
    <>
      {/* OfferStrip always at the very top, all breakpoints */}
    
      {isMobile ? (
        <>
          <header className="w-full bg-white sticky top-0 z-50 shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] mb-3">
            <div className="flex items-center justify-between w-full px-4 py-3">
              {/* Hamburger */}
              <button onClick={toggleMenu} aria-label="Open Menu" className="p-1">
                <svg width="32" height="32" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round">
                  <line x1="7" y1="11" x2="25" y2="11" />
                  <line x1="7" y1="16" x2="25" y2="16" />
                </svg>
              </button>
              {/* Centered Serconst Logo */}
        <div className="flex-1 flex justify-center">
          <span className="bg-[#D22B2B] text-white font-bold text-xl px-3 py-1 rounded-sm tracking-tight">Serconst</span>
        </div>
              {/* Icons */}
              <div className="flex items-center space-x-4">
                <button aria-label="Search" className="p-1" onClick={() => setShowSearchDrawer(true)}>
                  <svg width="26" height="26" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="8" />
                    <line x1="19" y1="19" x2="16" y2="16" />
                  </svg>
                </button>
                <button aria-label="Cart" className="p-1" onClick={() => setShowCartDrawer(true)}>
                  <svg width="26" height="26" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="6" y="8" width="14" height="10" rx="2" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Off-canvas menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-50">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" onClick={closeMenu}></div>
                {/* Drawer */}
                <div className="absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg transition-transform duration-300 ease-in-out">
                  {/* Close button and logo */}
                  <div className="flex items-center justify-between px-4 py-4 border-b">
                    <span className="bg-[#D22B2B] text-white font-bold text-xl px-3 py-1 rounded-sm tracking-tight mx-auto">Serconst</span>
                    <button onClick={closeMenu} aria-label="Close Menu" className="p-1">
                      <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2">
                        <line x1="8" y1="8" x2="20" y2="20" />
                        <line x1="20" y1="8" x2="8" y2="20" />
                      </svg>
                    </button>
                  </div>
                  {/* Menu Items */}
                  <nav className="flex flex-col px-6 py-4 space-y-4">
                    <a href="/bestsellers" className="text-lg font-semibold text-gray-900">Bestsellers</a>
                    <a href="/new-arrivals" className="text-lg font-semibold text-gray-900">New Arrivals</a>
                    <a href="/top-wear" className="text-lg font-semibold text-gray-900">Top Wear</a>
                    <a href="/bottom-wear" className="text-lg font-semibold text-gray-900">Bottom Wear</a>
                    <a href="/account" className="text-lg font-normal text-gray-800">My Account</a>
                    <a href="/return-exchange" className="text-lg font-normal text-gray-800">Return & Exchange</a>
                    <a href="/track-order" className="text-lg font-normal text-gray-800">Track Order</a>
                    <a href="/contact" className="text-lg font-normal text-gray-800">Contact Us</a>
                  </nav>
                </div>
              </div>
            )}
          </header>

          {/* Search Drawer */}
          {showSearchDrawer && (
            <div className="fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/30" onClick={() => setShowSearchDrawer(false)} />
              <div className="ml-auto w-full max-w-sm bg-white h-full shadow-lg flex flex-col animate-slide-in-right">
                <div className="flex items-center px-3 py-4 border-b bg-white">
                  {/* Left Arrow */}
                  <button onClick={() => setShowSearchDrawer(false)} className="p-1 mr-2">
                    <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                      <line x1="7" y1="12" x2="17" y2="12" />
                      <polyline points="12 7 7 12 12 17" />
                    </svg>
                  </button>
                  {/* Search Input */}
                  <div className="flex-1 flex items-center border border-[#E0E0E0] rounded bg-white h-12">
                    <input
                      type="text"
                      placeholder="Try searching for 'Jeans'"
                      className="flex-1 px-4 py-2 text-lg text-[#222] bg-transparent outline-none border-0 placeholder:text-[#888]"
                      autoFocus
                    />
                    <button className="px-3" aria-label="Search">
                      <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round">
                        <circle cx="10" cy="10" r="8" />
                        <line x1="17" y1="17" x2="14.5" y2="14.5" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Optionally: search results here */}
              </div>
            </div>
          )}

          {/* Cart Drawer */}
          {showCartDrawer && (
            <div className="fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/30" onClick={() => setShowCartDrawer(false)} />
              <div className="ml-auto w-full max-w-sm bg-white h-full shadow-lg flex flex-col animate-slide-in-right">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <span className="font-semibold text-lg">My Cart</span>
                  <button onClick={() => setShowCartDrawer(false)} className="p-1">
                    <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2">
                      <line x1="8" y1="8" x2="20" y2="20" />
                      <line x1="20" y1="8" x2="8" y2="20" />
                    </svg>
                  </button>
                </div>
                {/* Optionally: cart items here */}
                <div className="flex-1 flex items-center justify-center text-neutral-500">
                  Your cart is empty.
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <header 
          className={`sticky top-0 z-50 bg-neutral-100 transition-shadow duration-300 shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] mb-3`}
        >
          <div className="w-[80%] mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-2xl font-bold text-primary-600">Serconst</span>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="hidden md:flex items-center space-x-1">
                {/* Solar Module Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('solar-module')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink to="/men" className={navLinkClasses}>Solar Module</NavLink>
                  {openDropdown === 'solar-module' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      <Link to="/solar-module/poly-crystalline" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100">Poly-Crystalline</Link>
                      <Link to="/solar-module/mono-perc" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100">Mono PERC</Link>
                      <Link to="/solar-module/bifacial" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100">Bifacial</Link>
                    </div>
                  )}
                </div>

                {/* Solar Inverter Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('solar-inverter')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink to="/women" className={navLinkClasses}>Solar Inverter</NavLink>
                  {openDropdown === 'solar-inverter' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      <Link to="/solar-inverter/on-grid" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100">On-Grid</Link>
                      <Link to="/solar-inverter/off-grid" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100">Off-Grid</Link>
                      <Link to="/solar-inverter/hybrid" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100">Hybrid</Link>
                    </div>
                  )}
                </div>

                {/* Li-ion Battery Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('li-ion-battery')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink to="/new-drops" className={navLinkClasses}>Li-ion Battery</NavLink>
                  {openDropdown === 'li-ion-battery' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      <Link to="/li-ion-battery/lithium-ion" className="block px-4 py-2 text-neutral-900 hover:bg-neutral-100">Lithium-ion</Link>
                    </div>
                  )}
                </div>

                <NavLink to="/blog" className={navLinkClasses}>Radiance Solar Kit</NavLink>
                <NavLink to="/about-us" className={navLinkClasses}>Save More</NavLink>
              </nav>
            )}

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button 
                aria-label="Search"
                className="p-2 rounded-full hover:bg-neutral-900/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <Link 
                to="/account"
                aria-label="My Account"
                className="p-2 rounded-full hover:bg-neutral-900/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              
              <Link 
                to="/cart"
                aria-label="Shopping Cart"
                className="p-2 rounded-full hover:bg-neutral-900/5 relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-primary-600 text-neutral-100 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Link>
              
              {/* Mobile Menu Button */}
              {isMobile && (
                <button 
                  aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                  className="p-2 rounded-md md:hidden"
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              )}
            </div>
          </div>
        </header>
      )}
      
    </>
  )
}

export default Header;