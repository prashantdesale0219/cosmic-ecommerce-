import { useState, useEffect } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoadingSpinner from '../components/ui/LoadingSpinner'

// Lazy-loaded blog components
const BlogPost = lazy(() => import('./blog/BlogPost'))

const Blog = () => {
  const location = useLocation()
  const [posts, setPosts] = useState([])
  const [featuredPost, setFeaturedPost] = useState(null)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    // Simulate API call to fetch blog posts
    setLoading(true)
    setTimeout(() => {
      const mockCategories = [
        { id: 'fashion', name: 'Fashion' },
        { id: 'trends', name: 'Trends' },
        { id: 'style-tips', name: 'Style Tips' },
        { id: 'sustainability', name: 'Sustainability' },
        { id: 'behind-the-scenes', name: 'Behind the Scenes' }
      ]

      const mockPosts = Array(12).fill().map((_, index) => ({
        id: `post-${index + 1}`,
        slug: `blog-post-${index + 1}`,
        title: [
          'The Ultimate Guide to Summer Fashion',
          'How to Style Oversized Clothing',
          'Sustainable Fashion: Making Better Choices',
          'Color Trends for the Upcoming Season',
          'Capsule Wardrobe Essentials',
          'The History of Denim: From Workwear to High Fashion',
          'How to Care for Your Luxury Items',
          'Fashion Week Highlights',
          'Styling Tips for Petite Frames',
          'The Psychology of Fashion',
          'Vintage Shopping: Tips and Tricks',
          'Accessorizing 101: Elevate Any Outfit'
        ][index],
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>Heading Level 2</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p><h3>Heading Level 3</h3><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
        image: `https://source.unsplash.com/random/800x600/?fashion&sig=${index}`,
        category: mockCategories[Math.floor(Math.random() * mockCategories.length)].id,
        author: {
          name: ['Sophia Chen', 'Marcus Williams', 'Aisha Patel', 'James Rodriguez', 'Emma Thompson'][Math.floor(Math.random() * 5)],
          avatar: `https://source.unsplash.com/random/100x100/?portrait&sig=${index}`
        },
        date: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000).toISOString(),
        readTime: Math.floor(Math.random() * 10) + 3,
        comments: Math.floor(Math.random() * 20),
        likes: Math.floor(Math.random() * 50) + 5
      }))

      // Set featured post (most recent)
      const sortedPosts = [...mockPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
      setFeaturedPost(sortedPosts[0])
      setPosts(mockPosts)
      setCategories([{ id: 'all', name: 'All Posts' }, ...mockCategories])
      setLoading(false)
    }, 1000)
  }, [])

  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // Check if we're on the blog list page
  const isBlogListPage = location.pathname === '/blog' || location.pathname === '/blog/'

  if (!isBlogListPage) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/:slug" element={<BlogPost posts={posts} />} />
        </Routes>
      </Suspense>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2">
          <li><Link to="/" className="text-gray-500 hover:text-primary">Home</Link> /</li>
          <li className="text-gray-900 font-medium">Blog</li>
        </ul>
      </div>

      {/* Blog Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover the latest fashion trends, styling tips, and behind-the-scenes stories from our team.</p>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-8">
          {/* Featured post skeleton */}
          <div className="h-96 bg-gray-200 rounded-xl mb-8"></div>
          {/* Category skeleton */}
          <div className="flex justify-center space-x-4 mb-8">
            {Array(5).fill().map((_, i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          {/* Posts grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill().map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-48 bg-gray-200 rounded-lg"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="relative rounded-xl overflow-hidden group">
                <Link to={`/blog/${featuredPost.slug}`}>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-96 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full mb-3">
                        Featured
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{featuredPost.title}</h2>
                      <p className="text-white/80 mb-4 max-w-2xl">{featuredPost.excerpt}</p>
                      <div className="flex items-center">
                        <img 
                          src={featuredPost.author.avatar} 
                          alt={featuredPost.author.name} 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <p className="text-white font-medium">{featuredPost.author.name}</p>
                          <p className="text-white/70 text-sm">{formatDate(featuredPost.date)} · {featuredPost.readTime} min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                    />
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition">{post.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-500">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs">{post.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-xs">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No posts found</h3>
              <p className="text-gray-500 mb-4">We couldn't find any blog posts in this category.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                View All Posts
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                  <span className="sr-only">Previous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-md bg-primary text-white font-medium">1</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Blog</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Get the latest posts delivered right to your inbox.</p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default Blog