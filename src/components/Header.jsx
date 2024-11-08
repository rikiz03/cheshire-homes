import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo as SVG */}
        <div className="flex items-center space-x-2">
          <svg
            width="150"
            height="40"
            viewBox="0 0 150 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <text
              x="0"
              y="28"
              fill="currentColor"
              fontSize="28"
              fontFamily="'Brush Script MT', cursive"
              fontWeight="bold"
            >
              Cheshire Homes
            </text>
          </svg>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#about" className="hover:text-gray-300 transition-colors">About Us</a>
          <a href="#services" className="hover:text-gray-300 transition-colors">Our Services</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact Us</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 space-y-2 text-center text-lg">
          <a href="#about" className="block hover:text-gray-300 transition-colors">About Us</a>
          <a href="#services" className="block hover:text-gray-300 transition-colors">Our Services</a>
          <a href="#contact" className="block hover:text-gray-300 transition-colors">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
