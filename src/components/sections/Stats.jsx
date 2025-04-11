import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function StatsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  
  // Simple intersection observer using useEffect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Statistics data
  const stats = [
    { value: "1000+", label: "Quizzes Taken", icon: "📊" },
    { value: "500+", label: "Galactic Questions", icon: "🌌" },
    { value: "99%", label: "Satisfaction Rate", icon: "🌟" }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-blue-50 text-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0a1526]">Our Cosmic Impact</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the universe of learning through our growing community of space enthusiasts.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(10, 21, 38, 0.1), 0 10px 10px -5px rgba(10, 21, 38, 0.04)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl opacity-10">
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-blue-200"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-blue-200"></div>
              </div>
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                className="flex justify-center text-4xl mb-4"
              >
                {stat.icon}
              </motion.div>
              
              {/* Stat number */}
              <div className="relative">
                <motion.h2 
                  className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#0a1526]"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h2>
                
                {/* Animated underline */}
                <motion.div 
                  className="h-1 w-12 bg-blue-400 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: 48 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                ></motion.div>
              </div>
              
              {/* Label */}
              <motion.p 
                className="text-xl text-gray-600 mt-3 font-medium"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
              
              {/* Border effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;