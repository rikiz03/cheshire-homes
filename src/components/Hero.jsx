import React from 'react';

const HeroSection = () => (
  <section className="hero-bg relative text-center text-white py-32">
    {/* Overlay for darkening effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
    
    <div className="relative z-10 max-w-3xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-6 tracking-wide drop-shadow-lg">
        Empowering Lives with Care and Compassion
      </h2>
      <p className="text-lg font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
        We provide top-notch support and services for people with disabilities, ensuring their dignity and comfort.
      </p>
    </div>
  </section>
);

export default HeroSection;
