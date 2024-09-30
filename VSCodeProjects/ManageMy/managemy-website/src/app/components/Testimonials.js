'use client';

import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const Testimonials = () => {
  const testimonials = [
    { name: 'RichSocietyNetWork', role: 'Founder', quote: 'SocialBoost catapulted our online presence, resulting in a 300% increase in engagement and a significant boost in lead generation!' },
    { name: 'CoolHistorian', role: 'Founder', quote: 'Their strategies transformed our social media from dormant to dominant in our niche. We\'ve seen a 150% increase in organic reach and a 200% growth in our follower base.' },
    { name: 'AddisMeda', role: 'Founder', quote: 'The personalized approach and data-driven decisions have been invaluable to our growth. Our conversion rates from social media have doubled since partnering with SocialBoost.' },
    { name: 'AlicMemes', role: 'Founder', quote: 'SocialBoost\'s expertise in B2B social media marketing has opened new channels for lead generation, resulting in a 40% increase in qualified leads.' },
  ];

  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="testimonials" className="min-h-screen flex items-center bg-indigo-50 py-20">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-5xl font-bold text-center text-indigo-800 mb-16">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-indigo-600 text-lg mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-2xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-indigo-800">{testimonial.name}</h4>
                  <p className="text-indigo-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;