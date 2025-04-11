import React from 'react';
import { motion } from 'framer-motion';
import ap1 from '../../assets/images/ap1.jpg';
import ap2 from '../../assets/images/ap2.jpg';
import ap3 from '../../assets/images/ap3.jpg';
import ap4 from '../../assets/images/ap4.jpg';

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      img: ap1,
      title: "Latest Quiz: Rocket Madness!",
      date: "September 24, 2024",
      content: "Swoop into our latest quiz about Rockets! Are you ready with your seat belts for a very expeditious escapade?",
      link: "https://blogs.nasa.gov/"
    },
    {
      id: 2,
      img: ap2,
      title: "Weekly Board: Top Scorers!",
      date: "September 20, 2024",
      content: "Check out the top scorers! Are you ready to topple them off? Be the victor and receive personalized goodies.",
      link: "https://blogs.nasa.gov/"
    },
    {
      id: 3,
      img: ap3,
      title: "Beyond Cosmos!",
      date: "September 18, 2024",
      content: "Let's talk about the things beyond our intellect. Get ready to meet Dr. AK and Dr. APS from ISRO. Registrations Open!",
      link: "https://blogs.nasa.gov/"
    },
    {
      id: 4,
      img: ap4,
      title: "Be the curator of our quizzes!",
      date: "September 10, 2024",
      content: "Buckle up your thoughts and let them float! Help us create the ultimate quiz experience!",
      link: "https://blogs.nasa.gov/"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-[#0a1526] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Meteor Mind Latest News
          </h2>
          <div className="h-1 w-28 bg-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="relative rounded-lg overflow-hidden h-full"
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              {/* Specific #3b82f6 blue border */}
              <div className="absolute inset-0 p-[2px] rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-[#3b82f6] opacity-70 animate-pulse"></div>
              </div>
              
              {/* Card Content */}
              <div className="relative bg-[#0d1c30] h-full rounded-lg flex flex-col overflow-hidden z-10">
                {/* Image with cosmic-themed overlay */}
                <div className="relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526] to-transparent opacity-70"></div>
                  
                  {/* Date badge with #3b82f6 accent */}
                  <div className="absolute top-3 right-3 bg-[#0a1526] text-white text-xs px-3 py-1 rounded-md border-l-2 border-[#3b82f6]">
                    {post.date}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {post.title}
                  </h3>
                  
                  {/* Content */}
                  <p className="text-gray-300 mb-5 text-sm flex-grow">
                    {post.content}
                  </p>
                  
                  {/* Button with NO hover effect */}
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center bg-transparent border border-[#3b82f6] text-white py-2 rounded-md"
                  >
                    Launch
                  </a>
                </div>
                
                {/* Bottom accent line */}
                <div className="h-1 w-full bg-[#3b82f6]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;