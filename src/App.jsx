import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchProvider } from './contexts/SearchContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HomePage />
                  </motion.div>
                } 
              />
              <Route 
                path="/products" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductsPage />
                  </motion.div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AboutUsPage />
                  </motion.div>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ContactPage />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;