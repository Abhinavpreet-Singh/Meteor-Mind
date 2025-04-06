import { useState } from 'react';
import logo from '../assets/images/logo2.jpg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="ml-2 text-xl font-bold">eteorMind</span>
          </a>
        </div>
        
        <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-gray-900 p-4 z-50' : 'hidden md:flex'}`}>
          <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
          <li><a href="/topics" className="hover:text-blue-400 transition-colors">Quizzes</a></li>
          <li><a href="#stats" className="hover:text-blue-400 transition-colors">Stats</a></li>
          <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
        </ul>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex flex-col space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;