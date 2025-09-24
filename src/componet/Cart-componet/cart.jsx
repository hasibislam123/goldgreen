import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className="relative w-full max-w-sm mx-auto my-8 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:translate-y-[-8px] cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 opacity-75 rounded-3xl blur-md"></div>
      
      {/* Card Content */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 transition-transform duration-500 hover:scale-[1.01]">
        
        {/* Image with subtle animation */}
        <div className="overflow-hidden rounded-2xl mb-4">
          <img 
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
            src={imageUrl} 
            alt={title} 
          />
        </div>
        
        {/* Text Content */}
        <div className="text-center">
          <h2 className="font-extrabold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            {description}
          </p>
        </div>
        
        {/* Tags Section */}
        <div className="flex flex-wrap justify-center">
          {tags && tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 m-1 transition-all duration-300 hover:bg-pink-300 hover:text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Cart;