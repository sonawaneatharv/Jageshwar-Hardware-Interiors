import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Mission */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-accent text-primary font-bold text-xl px-3 py-2 rounded-lg inline-block mb-4"
            >
              JH
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing premium hardware solutions for modern interiors since 1997. 
              We are committed to quality, innovation, and customer satisfaction.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=Handles"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Handles
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Hinges"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Hinges
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Sliding Systems"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Sliding Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">
               Sai Paradise, Shop No.109, Behind Zudio,<br />
                Mumbai Banglore Highway,<br />
                Punawale, Pune, <br />
                411033
              </p>
              <p className="text-sm">
                Phone:+91 94032 43240  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 80878 53550 <br />
                Email: jageshwarhardware1997@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-gray-300 text-sm">
            © 2025 Jageshwar Hardware & Interiors. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
