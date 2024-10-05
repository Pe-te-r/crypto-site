import React from 'react';

const Footer = () => {
  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-4 w-full mt-auto">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <button 
            onClick={scrollToTop} 
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
            Back to Top
          </button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 Peer Mining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
