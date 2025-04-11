import React from 'react';
import { motion } from 'framer-motion';
import backgroundVideo from '../../assets/videos/video4.mp4';

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-wide text-white drop-shadow-lg">
          Meteor Mind
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-10 font-medium opacity-90 tracking-wide text-white">
          Where Curiosity Meets the Cosmos!
        </p>

        {/* Button with prominent animated border */}
        <div className="inline-block relative">
          {/* Animated Border Container */}
          <div className="absolute -inset-0.5 rounded-full overflow-hidden">
            <motion.div 
              className="w-[200%] h-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #ffffff, #4a9fff, #ffffff, transparent)',
              }}
              animate={{
                x: ['-100%', '0%']
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            />
          </div>
          
          {/* Button itself */}
          <motion.a 
            href="/topics"
            className="relative inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-bold text-lg bg-[#0a1526] z-10 overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 mr-2">Get Started</span>
            
            {/* Arrow icon */}
            <motion.svg 
              className="relative z-10 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </motion.svg>
            
            {/* Hover overlay */}
            <motion.div 
              className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100"
              style={{ borderRadius: '9999px' }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;