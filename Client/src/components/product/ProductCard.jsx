import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const { id, name, price, originalPrice, image, slug, badge } = product
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  const getBadgeClass = (badgeType) => {
    switch (badgeType) {
      case 'sale':
        return 'badge-sale'
      case 'new':
        return 'badge-new'
      case 'bestseller':
        return 'badge-bestseller'
      default:
        return ''
    }
  }

  const getBadgeText = (badgeType) => {
    switch (badgeType) {
      case 'sale':
        return 'SALE'
      case 'new':
        return 'NEW'
      case 'bestseller':
        return 'BESTSELLER'
      default:
        return ''
    }
  }

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link to={`/product/${slug}`} className="block">
        <div className="aspect-square overflow-hidden rounded-lg bg-neutral-200 mb-3">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Badge */}
      {badge && (
        <div className="absolute top-2 left-2">
          <span className={getBadgeClass(badge)}>{getBadgeText(badge)}</span>
        </div>
      )}

      {/* Quick Add Button - Visible on hover */}
      <div 
        className={`absolute bottom-[4.5rem] left-0 right-0 flex justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <button 
          className="bg-primary text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          aria-label={`Quick add ${name} to cart`}
        >
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div>
        <Link to={`/product/${slug}`} className="block">
          <h3 className="text-base font-medium text-neutral-900 mb-1 line-clamp-2">{name}</h3>
        </Link>
        
        <div className="flex items-center">
          <span className="font-semibold text-neutral-900">₹{price}</span>
          
          {originalPrice && (
            <>
              <span className="ml-2 text-neutral-500 line-through text-sm">₹{originalPrice}</span>
              <span className="ml-2 text-accent text-sm font-medium">{discount}% off</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard