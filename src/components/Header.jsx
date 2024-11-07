import React from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Cheshire Homes Nigeria</h1>
    <nav className="space-x-4">
      <a href="#about" className="hover:underline">About Us</a>
      <a href="#services" className="hover:underline">Our Services</a>
      <a href="#contact" className="hover:underline">Contact Us</a>
    </nav>
  </header>
);

export default Header;
