import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const MenCategory = lazy(() => import('./pages/categories/MenCategory'))
const WomenCategory = lazy(() => import('./pages/categories/WomenCategory'))
const NewDrops = lazy(() => import('./pages/categories/NewDrops'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Account = lazy(() => import('./pages/Account'))
const Blog = lazy(() => import('./pages/Blog'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Support = lazy(() => import('./pages/Support'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men/*" element={<MenCategory />} />
          <Route path="/women/*" element={<WomenCategory />} />
          <Route path="/new-drops" element={<NewDrops />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/*" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/legal/*" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App