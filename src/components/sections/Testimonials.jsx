import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const intervalRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      text: "MeteorMind expanded my cosmic knowledge beyond what I thought possible. The quizzes are challenging yet accessible, making learning about space an adventure!",
      name: "Aditya Sharma",
      title: "Astrophysics Student",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      text: "As a space enthusiast, I've tried many astronomy quiz platforms. MeteorMind stands out with its beautiful design and scientifically accurate content. It's my go-to recommendation for fellow stargazers.",
      name: "Priya Malhotra",
      title: "Amateur Astronomer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      text: "I use MeteorMind with my high school science class and the students absolutely love it! The content aligns perfectly with our curriculum while keeping them engaged through gamification.",
      name: "Rajiv Mehta",
      title: "Science Educator",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
      id: 4,
      text: "The depth of content on MeteorMind is impressive. From basic planetary facts to advanced astrophysics concepts, this platform makes learning the cosmos accessible and fun for everyone.",
      name: "Meera Kapoor",
      title: "Planetarium Director",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  // Reset interval on testimonial change
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length, activeTestimonial]);

  // Handle manual navigation
  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
    resetInterval();
  };
  
  // Previous testimonial
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    resetInterval();
  };
  
  // Next testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
    resetInterval();
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${Math.max(1, Math.random() * 3)}px`,
              height: `${Math.max(1, Math.random() * 3)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15
            }}
          />
        ))}
        
        {/* Planets/Celestial Bodies */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 -right-10 w-56 h-56 rounded-full bg-gradient-to-tr from-blue-100 to-white opacity-20 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-blue-300 to-blue-100 opacity-5 blur-md"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1526] mb-3">
            Stellar Testimonials
          </h2>
          <div className="h-1 w-28 bg-[#3b82f6] mx-auto rounded-full"></div>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Hear from our interstellar community of space enthusiasts who have embarked on the MeteorMind journey
          </p>
        </motion.div>
        
        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-6 text-[#3b82f6] opacity-20 z-0">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm15 3c1.7 0 3 1.3 3 3h-7v10h10V14c0-3.3-2.7-6-6-6v3z"></path>
              </svg>
            </div>
            
            {/* Testimonial Cards */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div 
                className="flex transition-transform duration-700 ease-out" 
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 bg-white">
                    <div className="p-8 md:p-12">
                      {/* Testimonial Content */}
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        {/* Avatar with Cosmic Border */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-blue-300 p-1 animate-pulse"></div>
                          <div className="absolute inset-1 rounded-full bg-white"></div>
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="relative w-24 h-24 rounded-full object-cover border-4 border-white z-10"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-[#0a1526] text-white text-xs rounded-full h-8 w-8 flex items-center justify-center border-2 border-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-grow">
                          {/* Star Rating */}
                          <div className="flex mb-4 justify-center md:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          
                          {/* Quote */}
                          <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed text-center md:text-left relative">
                            "{testimonial.text}"
                          </blockquote>
                          
                          {/* Author Info */}
                          <div className="text-center md:text-left">
                            <div className="text-[#0a1526] font-bold text-lg">{testimonial.name}</div>
                            <div className="text-[#3b82f6]">{testimonial.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Border Accent */}
                    <div className="h-1 bg-gradient-to-r from-[#3b82f6] via-blue-400 to-[#3b82f6]"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons - Refined */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white text-[#0a1526] rounded-full p-3 shadow-lg hover:bg-[#3b82f6] hover:text-white focus:outline-none transition-all duration-300 border border-gray-100"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white text-[#0a1526] rounded-full p-3 shadow-lg hover:bg-[#3b82f6] hover:text-white focus:outline-none transition-all duration-300 border border-gray-100"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Enhanced Pagination */}
          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative mx-2 focus:outline-none group`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span 
                  className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                    ? 'bg-[#3b82f6]' 
                    : 'bg-gray-300 group-hover:bg-[#3b82f6] group-hover:opacity-50'
                  }`}
                />
                {index === activeTestimonial && (
                  <motion.span 
                    className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full border border-[#3b82f6]"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 2 }}
                    exit={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;