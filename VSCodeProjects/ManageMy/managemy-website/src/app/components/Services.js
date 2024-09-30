'use client';

import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const Services = () => {
  const services = [
    { title: "Content Creation", description: "Engaging, shareable content tailored to your brand voice and audience preferences.", icon: "📝" },
    { title: "Social Media Management", description: "Comprehensive management across all major platforms to maintain a consistent brand presence.", icon: "🌐" },
    { title: "Analytics & Reporting", description: "In-depth performance tracking and actionable insights to continuously improve your strategy.", icon: "📊" },
    { title: "Video Editing", description: "Connect with key influencers in your niche to amplify your brand message.", icon: "🤝" },
    { title: "Graphic Designs", description: "Strategic planning and execution of paid social media campaigns for maximum ROI.", icon: "📈" },
    { title: "Community Engagement", description: "Foster meaningful connections with your audience through active community management.", icon: "💬" },
  ];

  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="min-h-screen flex items-center bg-white py-20">
      <div ref={ref} className={`container mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-5xl font-bold text-center text-indigo-800 mb-16">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h4 className="text-2xl font-semibold text-indigo-700 mb-4">{service.title}</h4>
              <p className="text-indigo-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;