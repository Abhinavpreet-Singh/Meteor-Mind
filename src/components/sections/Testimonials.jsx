import { useState, useEffect } from 'react';

function TestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
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

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
  };
  
  // Previous testimonial
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  // Next testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-primary"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-primary"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-primary"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary">Cosmic Voyagers Speak</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Hear from our community of space enthusiasts who have embarked on the MeteorMind journey</p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                      />
                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-gray-700 mb-4 italic">"{testimonial.text}"</blockquote>
                        <div className="text-primary font-bold">{testimonial.name}</div>
                        <div className="text-gray-500">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-opacity-80 focus:outline-none transition-all"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-opacity-80 focus:outline-none transition-all"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-primary' : 'bg-gray-300'} focus:outline-none transition-all`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;