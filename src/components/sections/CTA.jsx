import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import video5 from '../../assets/videos/video5.mp4';

function MeteorSection() {
  const videoRef = useRef(null);
  
  // Ensure video plays on mobile devices with playsinline attribute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={video5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1526] via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-[#0a1526] opacity-20"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        {/* Line decoration above title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent mb-8"
        />
        
        {/* Title with animation - Added space after "Into" */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
        >
          <span className="inline-block">Dive Into&nbsp;</span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#3b82f6]">Infinity</span>
          <motion.span
            animate={{ 
              rotateY: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="inline-block ml-2 text-[#3b82f6]"
          >
            ∞
          </motion.span>
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-blue-200 max-w-xl mx-auto mb-10 text-lg"
        >
          Explore the vast cosmos and test your astronomical knowledge
        </motion.p>
        
        {/* Button with hero section style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
        </motion.div>
      </div>
      
      {/* Bottom wave/curve effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="fill-[#0a1526] w-full h-12 md:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,175.3,67.45,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default MeteorSection;