'use client';

import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const Founders = () => {
  const founders = [
    { name: 'John Doe', role: 'CEO & Co-founder', image: '/john-doe.jpg', bio: 'Visionary leader with 15+ years in digital marketing.' },
    { name: 'Jane Smith', role: 'CTO & Co-founder', image: '/jane-smith.jpg', bio: 'Tech innovator specializing in AI-driven social media strategies.' },
    { name: 'Mike Johnson', role: 'CMO & Co-founder', image: '/mike-johnson.jpg', bio: 'Creative genius behind our most successful campaigns.' },
  ];

  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="founders" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-5xl font-bold text-center text-indigo-800 mb-16">Meet Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={founder.image} alt={founder.name} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover" />
              <h3 className="text-2xl font-semibold text-indigo-700 mb-2 text-center">{founder.name}</h3>
              <p className="text-purple-600 text-lg mb-4 text-center">{founder.role}</p>
              <p className="text-indigo-600 text-center">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;