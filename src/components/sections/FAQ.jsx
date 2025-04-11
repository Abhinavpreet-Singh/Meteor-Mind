import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function QueriesSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is this Meteor Mind about?",
      answer: "The Meteor Mind is a space quiz web-application that tests your knowledge about the cosmos, planets, stars, and the mysteries of space in a fun and interactive way."
    },
    {
      question: "How do I start the quiz?",
      answer: "To start the quiz, click the 'Start Quiz' button on the homepage and follow the on-screen instructions."
    },
    {
      question: "Can I retake the quiz?",
      answer: "Yes, you can retake the quiz as many times as you like to improve your score."
    },
    {
      question: "Is it suitable for all ages?",
      answer: "Absolutely! Our quiz is designed to be enjoyed by space enthusiasts of all ages."
    },
    {
      question: "What if I get stuck?",
      answer: "If you get stuck, don't worry! You can skip a question or refer to our helpful hints section."
    }
  ];

  return (
    <section id="queries" className="py-20 bg-[#0a1526] text-white relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.max(1, Math.random() * 3)}px`,
              height: `${Math.max(1, Math.random() * 3)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Large Celestial Body */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-900 opacity-20 blur-3xl"></div>
        
        {/* Small Orbiting Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-blue-500 opacity-10 blur-sm"></div>
        </motion.div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Cosmic Queries
          </h2>
          <div className="h-1 w-24 bg-[#3b82f6] mx-auto rounded-full"></div>
          <p className="mt-4 text-white max-w-xl mx-auto">
            Explore the mysteries of the MeteorMind universe through our frequently asked questions
          </p>
        </motion.div>
        
        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Glowing Border Effect */}
              <div className={`absolute inset-0 rounded-xl ${openFaq === index ? 'bg-gradient-to-r from-white to-[#3b82f6] blur-[1px]' : ''}`}></div>
              
              {/* FAQ Card */}
              <div className={`relative overflow-hidden rounded-xl bg-[#0d1c30] border ${openFaq === index ? 'border-white' : 'border-white/30'}`}>
                {/* Question Button */}
                <button
                  className="w-full p-5 text-left font-medium flex justify-between items-center text-white group transition-all"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-colors ${openFaq === index ? 'bg-[#3b82f6]' : 'bg-white/30 group-hover:bg-white/50'}`}>
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className={`text-lg ${openFaq === index ? 'text-white' : 'text-white group-hover:text-white'} transition-colors`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Animated Toggle Icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${openFaq === index ? 'border-[#3b82f6] bg-[#3b82f6]/10' : 'border-white/50'}`}>
                    <motion.span 
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                  </div>
                </button>
                
                {/* Answer Content with Animation */}
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent my-4"></div>
                        <motion.p 
                          className="text-white"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Question Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white mb-4">Still have questions?</p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border-2 border-[#3b82f6] text-white hover:bg-[#3b82f6] transition-all duration-300 group"
          >
            <span>Contact Us</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default QueriesSection;