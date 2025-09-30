import React from 'react';

const TrustBadges = () => {
  return (
    <div className="w-full border-b border-gray-200 pb-4  bg-white">
      <div className="flex flex-row justify-around items-center py-4 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Safe & Secure Payment */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 md:w-16 md:h-16 relative mb-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600 rounded-full opacity-90"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Safe & Secure</h3>
          <p className="text-gray-600 text-xs md:text-sm">Payment</p>
        </div>

        {/* Hassle Free Returns */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 md:w-16 md:h-16 relative mb-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600 rounded-full opacity-90"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">Hassle Free</h3>
          <p className="text-gray-600 text-xs md:text-sm">Returns</p>
        </div>

        {/* 100% Genuine Quality */}
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 md:w-16 md:h-16 relative mb-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600 rounded-full opacity-90"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-800 text-sm md:text-base">100% Genuine</h3>
          <p className="text-gray-600 text-xs md:text-sm">Quality</p>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;