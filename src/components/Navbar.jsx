import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import { useSearch } from "../contexts/SearchContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    searchProducts,
    clearSearch,
  } = useSearch();
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) {
        setShowSearchResults(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchProducts(query);
    setShowSearchResults(query.length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSearchResults(false);
    }
  };

  const handleResultClick = (product) => {
    navigate(`/products?search=${encodeURIComponent(product.name)}`);
    setShowSearchResults(false);
    clearSearch();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      // }`}
      className="fixed top-0 left-0 right-0 z-50 bg-teal-950 transition-all duration-300" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/images/logo.png" // ASSUMING your logo is at /public/logo.png
                alt="JH Logo"
                className="h-10 w-auto" // Set the height for the logo image
              />
            </motion.div>
            <h2 className="text-yellow-500 , font-extrabold , pl-6">
              {" "}
              Jageshwar Hardware & Interiors
            </h2>
          </Link>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              

               className={`${
                location.pathname === '/' // Check if current path is '/' (Home)
                  ? 'text-yellow-500 font-extrabold' 
                  : 'text-white font-medium'
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${
                location.pathname.startsWith('/products') // Use startsWith for paths with queries like /products?search=...
                  ? 'text-yellow-500 font-extrabold' 
                  : 'text-white font-medium'
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Products
            </Link>
            <Link
              to="/about"
             className={`${
                location.pathname === '/about' 
                  ? 'text-yellow-500 font-extrabold' 
                  : 'text-white font-medium'
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname === '/contact' 
                  ? 'text-yellow-500 font-extrabold' 
                  : 'text-white font-medium'
              } hover:text-yellow-300 transition-colors duration-200`}
            >
              Contact Us
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative search-container">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSearchResults(searchQuery.length > 0)}
                  className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FiX size={16} />
                  </button>
                )}
              </form>

              {/* Search Results Dropdown */}
              {showSearchResults && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
                >
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.slice(0, 5).map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleResultClick(product)}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {product.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {product.brand} • {product.category}
                              </p>
                            </div>
                            <div className="text-primary font-semibold">
                              ₹{product.price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                      {searchResults.length > 5 && (
                        <div className="px-4 py-2 text-center text-sm text-gray-500 border-t">
                          {searchResults.length - 5} more results...
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">
                      No products found for "{searchQuery}"
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-text hover:text-primary transition-colors duration-200 p-2"
            >
              <FiSearch className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-text hover:text-primary transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FiX size={16} />
                    </button>
                  )}
                </form>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={() => setShowMobileMenu(false)}
                  className="block px-4 py-2 text-text hover:text-primary transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  onClick={() => setShowMobileMenu(false)}
                  className="block px-4 py-2 text-text hover:text-primary transition-colors duration-200 font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  onClick={() => setShowMobileMenu(false)}
                  className="block px-4 py-2 text-text hover:text-primary transition-colors duration-200 font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setShowMobileMenu(false)}
                  className="block px-4 py-2 text-text hover:text-primary transition-colors duration-200 font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
