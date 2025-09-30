import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/home/HeroSlider'
import TrustBadges from '../components/home/TrustBadges'
import CategoryTiles from '../components/home/CategoryTiles'
import ProductCarousel from '../components/product/ProductCarousel'
import BrandGuarantees from '../components/home/BrandGuarantees'
import FandomMerchandise from '../components/home/FandomMerchandise'

// Best sellers products with real images
const bestSellers = [
  {
    id: 1,
    name: "Men's Flat Knit Polo Slim Fit T-Shirt",
    price: 899,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "mens-flat-knit-polo-slim-fit-t-shirt",
    badge: "bestseller"
  },
  {
    id: 2,
    name: "Women's Casual Cotton Top",
    price: 799,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "womens-casual-cotton-top",
    badge: "sale"
  },
  {
    id: 3,
    name: "Men's Slim Fit Jeans",
    price: 1299,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "mens-slim-fit-jeans",
    badge: null
  },
  {
    id: 4,
    name: "Women's Printed Maxi Dress",
    price: 1499,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "womens-printed-maxi-dress",
    badge: "new"
  },
  {
    id: 5,
    name: "Men's Casual Shirt",
    price: 999,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "mens-casual-shirt",
    badge: null
  },
  {
    id: 6,
    name: "Women's Denim Jacket",
    price: 1799,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "womens-denim-jacket",
    badge: "sale"
  },
  {
    id: 7,
    name: "Men's Formal Trousers",
    price: 1199,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "mens-formal-trousers",
    badge: null
  },
  {
    id: 8,
    name: "Women's Crop Top",
    price: 599,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "womens-crop-top",
    badge: "bestseller"
  },
  {
    id: 9,
    name: "Men's Graphic T-Shirt",
    price: 699,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "mens-graphic-t-shirt",
    badge: null
  },
  {
    id: 10,
    name: "Women's Palazzo Pants",
    price: 899,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "womens-palazzo-pants",
    badge: "new"
  },
  {
    id: 11,
    name: "Men's Hooded Sweatshirt",
    price: 1299,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "mens-hooded-sweatshirt",
    badge: "sale"
  },
  {
    id: 12,
    name: "Women's Floral Blouse",
    price: 799,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80",
    slug: "womens-floral-blouse",
    badge: null
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Slider with Trust Badges */}
      <section>
        <HeroSlider />
        <TrustBadges />
      </section>

      {/* Category Tiles */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Shop by Category</h2>
          <CategoryTiles />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100">
        <div className="max-w-[80%] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-0">Best Sellers</h2>
            <Link 
              to="/product/bestsellers" 
              className="text-accent hover:text-accent/80 font-medium text-lg sm:text-xl flex items-center group transition-all"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <ProductCarousel products={bestSellers} />
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[80%] mx-auto">
          <div className="bg-neutral-900 text-neutral-100 rounded-lg overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                  New Arrivals
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-100/80 mb-6 sm:mb-8 md:mb-10 max-w-lg">
                  Discover the latest styles that just dropped. Refresh your wardrobe with our newest collection.
                </p>
                <div>
                  <Link 
                    to="/new-drops" 
                    className="inline-block bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-neutral-100 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-md font-medium text-base sm:text-lg md:text-xl transition-all hover:shadow-lg hover:scale-105"
                  >
                    Shop New Drops
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="aspect-square w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80" 
                    alt="New Arrivals Collection" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fandom Merchandise */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-50">
        <div className="max-w-[80%] mx-auto">
          <FandomMerchandise />
        </div>
      </section>

      {/* Brand Guarantees */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-16 text-center">Why Shop With Us</h2>
          <BrandGuarantees />
        </div>
      </section>
    </div>
  )
}

export default Home