function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Meteor Mind</a>
            </h3>
            <p className="mb-4 text-gray-300">Dive deep to learn more about Meteor Mind and explore exciting discoveries!</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Idea</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Team</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Know our Tech</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Services</a>
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Begin Quiz</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Updates</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Tracks</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Blogs</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Certificates</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Other</a>
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Help</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Privacy</li>
            </ul>
          </div>
        </div>
        
        <p className="text-center pt-8 border-t border-gray-800 mt-8 text-gray-400">
          &copy; 2024 Meteor Mind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;