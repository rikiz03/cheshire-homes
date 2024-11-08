// AboutUs.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const About = () => (
  <section id="about" className="py-16 px-4 bg-gray-100 text-center">
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center mb-4">
        {/* Icon */}
        <div className="text-blue-600 text-5xl">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Cheshire Homes is dedicated to supporting individuals with disabilities, assisting them in living fulfilling lives with respect and independence. Our commitment is to empower, uplift, and integrate them into the community with dignity.
      </p>
    </div>
  </section>
);

export default About;

