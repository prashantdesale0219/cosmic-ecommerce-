import { useRef, useEffect } from 'react'
import ProductCard from './ProductCard'

const ProductCarousel = ({ products }) => {
  const scrollContainerRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return
    
    isDragging.current = true
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft
    scrollLeft.current = scrollContainerRef.current.scrollLeft
    scrollContainerRef.current.style.cursor = 'grabbing'
  }

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return
    
    isDragging.current = false
    scrollContainerRef.current.style.cursor = 'grab'
  }

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp()
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current || !scrollContainerRef.current) return
    
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX.current) * 2 // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk
  }

  const scrollNext = () => {
    if (!scrollContainerRef.current) return
    
    const containerWidth = scrollContainerRef.current.clientWidth
    scrollContainerRef.current.scrollBy({ left: containerWidth * 0.8, behavior: 'smooth' })
  }

  const scrollPrev = () => {
    if (!scrollContainerRef.current) return
    
    const containerWidth = scrollContainerRef.current.clientWidth
    scrollContainerRef.current.scrollBy({ left: -containerWidth * 0.8, behavior: 'smooth' })
  }

  // Add touch support
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleTouchStart = (e) => {
      isDragging.current = true
      startX.current = e.touches[0].pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
    }

    const handleTouchMove = (e) => {
      if (!isDragging.current) return
      
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX.current) * 2
      container.scrollLeft = scrollLeft.current - walk
    }

    const handleTouchEnd = () => {
      isDragging.current = false
    }

    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div className="relative">
      {/* Carousel Navigation Buttons */}
      <button 
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-100 shadow-md hover:bg-neutral-200 text-neutral-900 p-2 rounded-full transition-colors -ml-4"
        aria-label="Previous products"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-100 shadow-md hover:bg-neutral-200 text-neutral-900 p-2 rounded-full transition-colors -mr-4"
        aria-label="Next products"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 py-4 px-2 -mx-2 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {products.map(product => (
          <div 
            key={product.id} 
            className="flex-none w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel