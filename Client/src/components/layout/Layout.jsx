import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import OfferStrip from './OfferStrip'
import BottomNav from './BottomNav'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showBottomNav = location.pathname === '/'

  return (
    <div className="flex flex-col min-h-screen">
      <OfferStrip />
      <Header isScrolled={isScrolled} />
      <main className={`flex-grow ${showBottomNav ? 'pb-0' : ''}`}>
        {children}
      </main>
      {showBottomNav && <div className="block md:hidden" style={{ height: '64px' }} />}
      <Footer />
      {showBottomNav && <BottomNav />}
    </div>
  )
}

export default Layout