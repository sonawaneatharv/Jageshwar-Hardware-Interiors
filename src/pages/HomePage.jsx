import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage = () => {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];


  const categoryImages = {
  "Handles": "/product_images/1.webp",
  "Hinges": "/product_images/2.png",
  "Sliding Systems": "/product_images/3.webp",
  "Bottle Pull Outs": "/categoryImages/4.webp",
  "Hydraulic Fittings": "/categoryImages/5.webp",
  "Kitchen Accessories": "/categoryImages/6.webp",
  "Stainless Steel Racks": "/categoryImages/7.webp",
  "Kitchen Baskets":"/categoryImages/8.webp",
  "Telescopic Channel":"/categoryImages/9.webp",

   "Kitchen Corner Shelves":"/product_images/1.webp",
  "Kitchen Drawers":"/product_images/4.webp",
  "Kitchen Shutter Rolling Cabinets": "/categoryImages/4.webp",
  "Pantry Units, Cabinets & Cupboards": "/categoryImages/5.webp",
  "PVC Legs":"/categoryImages/6.webp",
  "Skirting":"/categoryImages/7.webp",
  "Sliding Fitting": "/categoryImages/8.webp",
  "Wardrobe Accessories": "/categoryImages/9.webp",
}; 



  // Brand partners
  const brands = [
  { name: 'Godrej', logo: '/brand_images/1.jpeg' },
  { name: 'Hettich', logo: '/brand_images/2.jpg' },
  { name: 'Everwin', logo: '/brand_images/3.jpeg' },
  { name: 'Hafele', logo: '/brand_images/4.jpeg' },
  { name: 'Onyx', logo:'/brand_images/5.jpeg' },
];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-800">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-32 w-80 h-1 bg-yellow-400 opacity-40 rounded"></div>
        <div className="absolute top-40 right-40 w-60 h-1 bg-yellow-400 opacity-30 rounded"></div>
        
        {/* Hardware icons */}
        <div className="absolute top-24 left-80 w-10 h-10 bg-yellow-400 opacity-60 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-green-800 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-32 right-80 w-9 h-9 bg-yellow-400 opacity-50 rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-green-800 rounded"></div>
        </div>
        
        <div className="absolute top-36 left-1/2 w-8 h-8 bg-yellow-400 opacity-40 rounded flex items-center justify-center">
          <div className="w-2 h-2 bg-green-800 rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Complete Hardware Solutions for Modern Interiors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Premium quality hardware and interior solutions since 1997
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/products"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Explore Our Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Bestsellers
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our most popular hardware solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="w-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Brands We Trust
            </h2>
            <p className="text-gray-600 text-lg">
              Partnering with industry-leading manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className=" rounded-lg  hover:bg-gray-200 transition-colors duration-300">
                   <img
                src={brand.logo} // Use the image path from the data
                alt={`${brand.name} Logo`}
                // Adjust w-auto and h-16 to control logo size
                className="max-w-full max-h-20 w-auto object-contain  hover:grayscale-0 transition-all duration-500"
              />
                  {/* <h3 className="text-lg font-semibold text-text">{brand.name}</h3> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Product Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive range of hardware solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
            to={`/products?category=${category}`}
            // 💡 UPDATED CARD STYLING FOR BACKGROUND IMAGE
            className="relative block h-48 rounded-xl shadow-lg overflow-hidden group transition-shadow duration-300"
            style={{
              // Inject the background image URL as an inline style
              backgroundImage: `url(${categoryImages[category]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
            
            {/* Content (Text) - Centered and Visible */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white text-center">
              
              {/* Optional: Icon/Initial placeholder (can be removed, but kept here if you want a visual element) */}
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 opacity-80">
                <span className="font-extrabold text-lg text-black">
                  {category.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                {category}
              </h3>
              <p className="text-sm text-gray-200">
                {products.filter(p => p.category === category).length} products
              </p>
            </div>
          </Link>
        </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
