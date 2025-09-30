import React from 'react'

const OfferStrip = () => {

  return (
    <div className="text-neutral-100 pt-1 relative overflow-hidden text-center" style={{backgroundColor: '#92c51b'}}>
      <marquee 
        behavior="scroll" 
        direction="left" 
        scrollamount="5"
        className="font-normal mx-auto" style={{fontFamily: 'familyRegular, sans-serif', fontWeight: 400, fontSize: '14px'}}
      >
        SALE IS LIVE | Buy any 2 products and get extra 10% off | Buy any 3 products and get an extra 15% off | 5% additional off on prepaid orders | Offers are auto-applied
      </marquee>
    </div>
  )
}

export default OfferStrip