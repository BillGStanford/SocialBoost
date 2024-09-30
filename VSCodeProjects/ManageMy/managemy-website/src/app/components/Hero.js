// components/Hero.js
import React from 'react';

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-100 to-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-6xl font-bold text-indigo-800 mb-8">
        Elevate Your Brand with Strategic Social Media Marketing
      </h2>
      <p className="text-indigo-600 text-2xl mb-12 max-w-3xl mx-auto">
        Unlock the full potential of your online presence. We craft tailored strategies to boost your engagement, grow your audience, and drive real business results.
      </p>
      <a href="#services" className="bg-purple-600 text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
        Discover Our Services
      </a>
    </div>
  </section>
);

export default Hero;