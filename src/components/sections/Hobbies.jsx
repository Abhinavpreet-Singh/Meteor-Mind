import React from 'react';
import { motion } from 'framer-motion';
import video2 from '../../assets/videos/video2.mp4';

function VideoSection() {
  return (
    <section className="relative py-24 bg-[#0a1526] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1526] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a1526] to-transparent z-10"></div>
      
      {/* Section title */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Explore The Cosmos
          </h2>
          <div className="h-1 w-28 bg-[#3b82f6] mx-auto rounded-full"></div>
        </motion.div>
      </div>
      
      {/* Full-width video container with increased height */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        {/* Blue border glow effect */}
        <div className="absolute inset-0 p-[3px] z-10">
          <div className="absolute inset-0 bg-[#3b82f6] opacity-50 blur-sm"></div>
        </div>
        
        {/* Video */}
        <motion.div 
          className="relative w-full h-full z-20"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <video 
            autoPlay 
            loop 
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
        {/* Caption */}
        <div className="absolute bottom-6 left-0 right-0 text-center z-30">
          <div className="inline-block bg-[#0a1526] bg-opacity-70 px-5 py-3 rounded-full border border-[#3b82f6]">
            <p className="text-white text-sm md:text-base">
              Experience the wonders of space exploration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;