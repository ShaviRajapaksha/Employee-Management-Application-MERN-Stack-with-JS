import React, { useState, useEffect } from 'react';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Activate blur after 10px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 py-6 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-white/10' : ''
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-3xl font-bold z-20">
            <span className="text-yellow-300">Employee Management System</span> 
          </a>
          <a
            href="#"
            className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-full transition font-medium text-lg"
          >
            Contact Us
          </a>

          <button
            className="md:hidden text-white z-40 p-2 fixed top-6 right-4 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 relative flex justify-center items-center">
              <span className="absolute h-1 w-8 bg-white rounded-full transform transition-all duration-300 -translate-y-2"></span>
              <span className="absolute h-1 w-8 bg-white rounded-full transition-all duration-300"></span>
              <span className="absolute h-1 w-8 bg-white rounded-full transform transition-all duration-300 translate-y-2"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Spacer to prevent content hiding under fixed nav */}
      <div className="pt-[100px]"></div>
    </div>
  );
}

export default Navigation;
