import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faHeart, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Services = () => (
  <section id="services" className="py-16 px-4 bg-gray-100 text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Services</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Service 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        <div className="first-grid w-full h-40 rounded-md mb-4"></div>
        <div className="flex justify-center items-center text-blue-600 text-3xl mb-2">
          <FontAwesomeIcon icon={faHandsHelping} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Personal Care Assistance</h3>
        <p className="text-gray-700">Helping with daily activities and personalized care.</p>
      </div>

      {/* Service 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        <div className="second-grid w-full h-40 rounded-md mb-4"></div>
        <div className="flex justify-center items-center text-blue-600 text-3xl mb-2">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Therapeutic Support</h3>
        <p className="text-gray-700">Providing emotional and mental health support.</p>
      </div>

      {/* Service 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        <div className="third-grid w-full h-40 rounded-md mb-4"></div>
        <div className="flex justify-center items-center text-blue-600 text-3xl mb-2">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Community and Social Integration</h3>
        <p className="text-gray-700">Promoting community engagement and inclusion.</p>
      </div>

      {/* Service 4 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        <div className="fourth-grid w-full h-40 rounded-md mb-4"></div>
        <div className="flex justify-center items-center text-blue-600 text-3xl mb-2">
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Skill Development Programs</h3>
        <p className="text-gray-700">Building skills for independence and growth.</p>
      </div>
    </div>
  </section>
);

export default Services;
