import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiPackage, FiHeart } from 'react-icons/fi';

const AboutUsPage = () => {
  const strengths = [
    {
      icon: FiAward,
      title: "Premium Quality Products",
      description: "We source only the finest hardware from trusted manufacturers, ensuring durability and excellence in every product."
    },
    {
      icon: FiUsers,
      title: "Expert Guidance",
      description: "Our experienced team provides professional advice and recommendations to help you choose the perfect hardware solutions."
    },
    {
      icon: FiPackage,
      title: "Wide Selection",
      description: "From handles to hinges, sliding systems to specialty hardware, we offer an extensive range to meet all your needs."
    },
    {
      icon: FiHeart,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We're committed to providing exceptional service and building lasting relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://picsum.photos/1600/400)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Story Since 1997
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Building excellence in hardware solutions for over two decades
          </motion.p>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://picsum.photos/600/400"
                alt="Company History"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1997, Jageshwar Hardware & Interiors began as a small family business 
                  with a vision to provide premium hardware solutions to the growing interior design 
                  industry in Mumbai.
                </p>
                <p>
                  Over the years, we have built strong relationships with leading manufacturers 
                  like Godrej, Hettich, Hafele, and many others, establishing ourselves as a 
                  trusted partner for architects, interior designers, and homeowners.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer satisfaction has helped us 
                  grow from a small local business to a recognized name in the hardware industry. 
                  We continue to evolve with changing trends while maintaining our core values 
                  of integrity and excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg">
              What sets us apart in the hardware industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <strength.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {strength.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-text mb-4">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product in our inventory 
                meets the highest standards and comes with our quality guarantee.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-text mb-4">
                Customer Trust
              </h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency, reliability, 
                and exceptional service. Your trust is our most valuable asset.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-text mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay ahead of industry trends and continuously update our 
                product range to offer the latest innovations in hardware solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
