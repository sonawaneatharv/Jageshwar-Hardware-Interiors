import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-text mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Address</h3>
                  <p className="text-gray-600">
                    Sai Paradise, Shop No.109, Behind Zudio,<br />
                    Mumbai Banglore Highway,<br />
                    Punawale, Pune, <br />
                    411033
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Phone</h3>
                  <p className="text-gray-600">
                    +91 94032 43240<br />
                    +91 80878 53550
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Email</h3>
                  <p className="text-gray-600">
                    jageshwarhardware1997@gmail.com<br />
                    
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    ALL DAYS  10:00 AM - 10:00 PM<br />
                    
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                {/* Google Maps iFrame Embed */}
                <iframe
                  width="100%"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Jageshwar Hardware & Interiors Location Map"
                  // NOTE: We use the business name for an accurate pin location
                  src="https://maps.google.com/maps?q=Jageshwar+Hardware+%26+Interiors,+Sai+Paradise,+Punawale,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Direct Directions Link */}
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Jageshwar+Hardware+%26+Interiors+Sai+Paradise+Punawale+Pune" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-primary hover:text-yellow-600 transition-colors duration-200 font-semibold"
              >
                <FiMapPin className="w-5 h-5 mr-2" />
                Get Directions on Google Maps
              </a>
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-text mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
