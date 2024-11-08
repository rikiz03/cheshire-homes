import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* The About Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">About Us</h3>
        <p className="text-gray-300">
          Cheshire Homes is dedicated to supporting individuals with disabilities, helping them live fulfilling lives with respect and independence.
        </p>
      </div>

      {/* Links Section */}
      <div className="md:ml-28">
        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#about" className="hover:text-gray-300 transition-colors">About Us</a></li>
          <li><a href="#services" className="hover:text-gray-300 transition-colors">Our Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
          <li><a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Contacts Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Contact</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center justify-center md:justify-start">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-400" />
            <span>26 Kenyetta, Enugu State, Nigeria</span>
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-400" />
            <span>+234 703 577 8141</span>
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-400" />
            <a href="mailto:enquiries@cheshirehomes.com" className="hover:text-gray-300 transition-colors">enquiries@cheshirehomes.com</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Cheshire Homes. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;