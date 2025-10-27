import React from 'react';

// ProductCard receives a single prop named 'product'
// We destructure the required properties (including image) from it
const ProductCard = ({ product }) => {
    const { id, name, price, description, category, brand, image } = product;

    return (
        <div 
            key={id} 
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
            
            {/* 💡 IMAGE DISPLAY CODE */}
            {image && ( // Check if the image path exists before rendering
                <div className="h-56 overflow-hidden">
                    <img 
                        src={image} // Uses the image path from the data file
                        alt={`Image of ${name}`}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}
            
            <div className="p-5 min-h-[170px]">
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 mb-1">{name}</h3>
                <p className="text-2xl font-bold text-primary mb-3">₹{price}</p>
                <p className="text-sm text-gray-500 line-clamp-4">{description}</p>
                
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <span>Category: <span className="font-medium text-gray-700">{category}</span></span>
                    <span>Brand: <span className="font-medium text-gray-700">{brand}</span></span>
                </div>
                
                <button
                    className="w-full mt-5 bg-accent text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;