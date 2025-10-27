import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { useSearch } from '../contexts/SearchContext';
import { products } from '../data/products';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { searchQuery, setSearchQuery, searchProducts } = useSearch();

  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    // Check if category is specified in URL
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }

    // Check if search query is specified in URL
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      searchProducts(searchFromUrl);
    }
  }, [searchParams, setSearchQuery, searchProducts]);

  useEffect(() => {
    // Filter products based on selected category and search query
    let filtered = products;

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Collection'}
          </h1>
          <p className="text-gray-600 text-lg">
            {searchQuery 
              ? `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} matching your search`
              : 'Discover our comprehensive range of premium hardware solutions'
            }
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-text mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'text-text hover:bg-gray-100'
                    }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className="ml-2 text-sm opacity-75">
                        ({products.filter(p => p.category === category).length})
                      </span>
                    )}
                    {category === 'All' && (
                      <span className="ml-2 text-sm opacity-75">
                        ({products.length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                {searchQuery ? (
                  <>
                    Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  </>
                ) : (
                  <>
                    Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  </>
                )}
              </p>
            </motion.div>

            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}  
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  {searchQuery ? 'No products found for your search' : 'No products found'}
                </h3>
                <p className="text-gray-600">
                  {searchQuery 
                    ? `Try searching for something else or browse all products.`
                    : 'Try selecting a different category or browse all products.'
                  }
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Clear Search
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
