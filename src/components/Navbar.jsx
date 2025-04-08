import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo2.jpg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  
  // Current user info
  const currentTime = "2025-04-08 07:53:50";
  const currentUser = "Abhinavpreet-Singh";
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Detect active section
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(`#${sectionId}`);
        }
      });
      
      if (scrollPosition < 300) {
        setActiveLink("/");
      }
    };
    
    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#blog", label: "Blog" },
    { href: "/topics", label: "Quizzes" },
    { href: "#stats", label: "Stats" },
    { href: "/about", label: "About Us" }
  ];
  
  // Get greeting based on time
  const getGreeting = () => {
    const hours = parseInt(currentTime.split(' ')[1].split(':')[0], 10);
    if (hours >= 5 && hours < 12) return "Good Morning";
    if (hours >= 12 && hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-2">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="max-w-4xl w-full transition-all duration-500 backdrop-blur-sm"
        style={{
          backgroundColor: scrolled ? 'rgba(var(--color-primary), 0.95)' : 'rgba(0, 0, 0, 0.2)',
          borderRadius: '40px',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        }}
      >
        {/* Background for scrolled state */}
        {scrolled && (
          <div className="absolute inset-0 rounded-[40px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />
            
            {/* Subtle Ripple Effects - Only when scrolled */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/5"
                initial={{ scale: 0, x: Math.random() * 100 - 50 + "%", y: Math.random() * 100 - 50 + "%" }}
                animate={{ 
                  scale: [0, 1.5],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4 + i,
                  delay: i * 2,
                  ease: "easeInOut",
                  repeatDelay: i 
                }}
                style={{
                  width: `${40 + i * 20}px`,
                  height: `${40 + i * 20}px`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="flex items-center"
              animate={scrolled ? { y: [0, -3, 0] } : { y: 0 }}
              transition={scrolled ? { 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              } : {}}
            >
              <a href="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto object-contain mr-2" />
                <span className={`text-xl font-bold text-white ${!scrolled ? 'drop-shadow-md' : ''}`}>MeteorMind</span>
              </a>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Navigation Links with Enhanced Visibility */}
              <div className={`flex rounded-full ${scrolled ? 'bg-white/10' : 'bg-black/30'} p-1`}>
                {navLinks.map((link) => (
                  <motion.div key={link.href} className="relative">
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="navPill"
                        className={`absolute inset-0 rounded-full ${
                          scrolled ? 'bg-white/20' : 'bg-white/30'
                        }`}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <a 
                      href={link.href} 
                      className={`relative z-10 px-4 py-1.5 rounded-full font-medium text-sm block transition-colors ${
                        !scrolled 
                          ? `text-white font-semibold drop-shadow-sm ${activeLink === link.href ? 'text-white' : 'text-gray-100'}` 
                          : `text-white ${activeLink === link.href ? 'text-white' : 'text-gray-200'}`
                      }`}
                      style={{
                        textShadow: !scrolled ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              {/* Join Button with Enhanced Visibility */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`ml-4 px-6 py-1.5 rounded-full text-sm font-medium ${
                  scrolled ? 'bg-white/10' : 'bg-black/40'
                } text-white hover:bg-white/20 transition-colors relative overflow-hidden group`}
                style={{
                  textShadow: !scrolled ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
                  boxShadow: !scrolled ? '0 2px 4px rgba(0,0,0,0.2)' : 'none'
                }}
              >
                <span className="relative z-10 font-semibold">Join the Cosmos</span>
                
                {/* Fill animation on hover */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0 bg-white/10 group-hover:h-full transition-all duration-300 ease-in-out"
                  style={{ borderRadius: "9999px" }}
                />
              </motion.button>
            </div>
            
            {/* Mobile Menu Button with Enhanced Visibility */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  !scrolled ? 'bg-black/30' : ''
                }`}
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-5 relative">
                  <motion.span
                    animate={{ 
                      top: isMenuOpen ? "50%" : "10%", 
                      rotate: isMenuOpen ? 45 : 0,
                      width: isMenuOpen ? '100%' : '80%'
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute h-0.5 w-full bg-white transform origin-center"
                    style={{
                      translateY: isMenuOpen ? '-50%' : '0',
                      filter: !scrolled ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))' : 'none'
                    }}
                  />
                  <motion.span
                    animate={{ 
                      opacity: isMenuOpen ? 0 : 1,
                      width: '100%'
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute h-0.5 w-full bg-white top-[50%] transform translate-y-[-50%]"
                    style={{
                      filter: !scrolled ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))' : 'none'
                    }}
                  />
                  <motion.span
                    animate={{ 
                      bottom: isMenuOpen ? "50%" : "10%", 
                      rotate: isMenuOpen ? -45 : 0,
                      width: isMenuOpen ? '100%' : '60%'
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute h-0.5 w-full bg-white transform origin-center"
                    style={{
                      translateY: isMenuOpen ? '50%' : '0',
                      filter: !scrolled ? 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))' : 'none'
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu with Enhanced Visibility */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden border-t ${
                scrolled ? 'border-white/10 bg-primary/90' : 'border-white/10 bg-black/40'
              }`}
            >
              <div className="px-4 py-4">
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <a 
                        href={link.href}
                        className={`block py-2 px-4 rounded-lg ${
                          activeLink === link.href 
                            ? 'bg-white/20 text-white font-semibold' 
                            : 'text-gray-200'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          textShadow: !scrolled ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                        }}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-2 mt-2 border-t border-white/10"
                  >
                    <a 
                      href="#"
                      className="block py-2 px-4 rounded-lg text-center font-semibold bg-white/20 text-white"
                      style={{
                        textShadow: !scrolled ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                      }}
                    >
                      Join the Cosmos
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Bottom glow border - only when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
            <motion.div
              animate={{ 
                x: ["-100%", "100%"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "linear"
              }}
              className="absolute h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            />
          </div>
        )}
      </motion.nav>
    </div>
  );
}

export default Navbar;