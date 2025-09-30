import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Categories with real images
const categories = [
  {
    id: 1,
    name: 'Men\'s Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/men/shirts'
  },
  {
    id: 2,
    name: 'Men\'s T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/men/t-shirts'
  },
  {
    id: 3,
    name: 'Men\'s Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/men/jeans'
  },
  {
    id: 4,
    name: 'Women\'s Tops',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/women/tops'
  },
  {
    id: 5,
    name: 'Women\'s Dresses',
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/women/dresses'
  },
  {
    id: 6,
    name: 'Women\'s Bottoms',
    image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/women/bottoms'
  },
  {
    id: 7,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/accessories'
  },
  {
    id: 8,
    name: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
    link: '/new-drops'
  }
]

const CategoryTiles = () => {
  const tilesRef = useRef([])

  // Use Intersection Observer for lazy loading
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    tilesRef.current.forEach(tile => {
      if (tile) {
        observer.observe(tile)
      }
    })

    return () => {
      tilesRef.current.forEach(tile => {
        if (tile) {
          observer.unobserve(tile)
        }
      })
    }
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {categories.map((category, index) => (
        <Link 
          key={category.id}
          to={category.link}
          className="block group"
        >
          <div 
            ref={el => tilesRef.current[index] = el}
            className="bg-neutral-200 rounded-lg overflow-hidden aspect-square relative opacity-0 translate-y-4 transition-all duration-500 ease-out shadow-md hover:shadow-xl"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent flex items-end p-4 sm:p-5 md:p-6">
              <h3 className="text-neutral-100 font-semibold text-lg sm:text-xl md:text-2xl transform transition-transform group-hover:translate-y-[-4px]">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryTiles