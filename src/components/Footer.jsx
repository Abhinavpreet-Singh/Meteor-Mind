import React from 'react';
import { motion } from 'framer-motion';
// Import React Icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1526] text-white overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.max(1, Math.random() * 2)}px`,
              height: `${Math.max(1, Math.random() * 2)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7
            }}
          />
        ))}
        
        {/* Large cosmic glow */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-900 opacity-20 blur-3xl"></div>
        <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-blue-900 opacity-10 blur-3xl"></div>
      </div>
      
      {/* Top wave/curve effect */}
      <div className="relative w-full overflow-hidden">
        <svg
          className="fill-white w-full h-12 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,175.3,67.45,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and social media section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="text-[#3b82f6] mr-2">★</span>
              <a href="#" className="hover:text-[#3b82f6] transition-colors">Meteor Mind</a>
            </h3>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#3b82f6] to-transparent mb-4"></div>
            <p className="mb-6 text-blue-100 opacity-80">Dive deep into the cosmos and explore the wonders of space through our interactive quizzes and learning experiences.</p>
            
            {/* Social icons with white hover color */}
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebook size={18} />, url: "https://www.facebook.com/" },
                { icon: <FaInstagram size={18} />, url: "https://www.instagram.com/" },
                { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/" },
                { icon: <FaTwitter size={18} />, url: "https://twitter.com/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0d1d37] hover:bg-white hover:text-[#0a1526] text-white transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links columns */}
          {[
            {
              title: "Explore",
              links: ["Our Mission", "The Team", "Technology", "Privacy Policy"]
            },
            {
              title: "Learn",
              links: ["Start Quiz", "Space Tracks", "Latest News", "Articles", "Get Certified"]
            },
            {
              title: "Connect",
              links: ["Contact Us", "Support", "FAQ", "Community"]
            }
          ].map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * (colIndex + 1) }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-[#3b82f6] mr-2">•</span>
                <span className="hover:text-[#3b82f6] transition-colors">{column.title}</span>
              </h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#3b82f6] to-transparent mb-4"></div>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center"
                  >
                    <span className="text-[#3b82f6] mr-2 text-xs opacity-0 group-hover:opacity-100">›</span>
                    <a href="#" className="text-blue-100 opacity-80 hover:text-[#3b82f6] transition-all duration-300 group">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Copyright section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center pt-8 mt-8 border-t border-blue-900/30 text-blue-200 opacity-60 flex flex-col md:flex-row md:justify-between items-center text-sm"
        >
          <p>&copy; {currentYear} Meteor Mind. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom decoration element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"></div>
    </footer>
  );
}

export default Footer;