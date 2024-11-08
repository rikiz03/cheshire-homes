import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-10 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* About Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">About Us</h3>
        <p className="text-gray-300">
          Cheshire Homes is dedicated to supporting individuals with disabilities, helping them lead fulfilling lives with respect and independence.
        </p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#services" className="hover:text-gray-300">Our Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
          <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Cheshire Homes. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
