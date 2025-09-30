import React from 'react'

const BrandGuarantees = () => {
  const guarantees = [
    {
      id: 1,
      title: 'Secure Payment',
      description: 'All transactions are processed securely',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Easy Returns',
      description: '30-day easy return policy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Genuine Products',
      description: '100% authentic products guaranteed',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Why Shop with Us?</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">We're committed to providing the best shopping experience</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {guarantees.map(guarantee => (
            <div 
              key={guarantee.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 text-primary-600 bg-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                {React.cloneElement(guarantee.icon, { className: 'h-8 w-8' })}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">{guarantee.title}</h3>
              <p className="text-neutral-600 text-center">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandGuarantees