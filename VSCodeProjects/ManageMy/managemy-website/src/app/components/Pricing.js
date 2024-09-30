'use client';

import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "$25", features: ["2 social platforms", "Weekly content calendar", "Monthly performance report"] },
    { name: "Growth", price: "$50", features: ["4 social platforms", "Daily engagement", "Bi-weekly strategy calls", "Custom graphics"] },
    { name: "Enterprise", price: "$250", features: ["All social platforms", "24/7 account management", "Advanced analytics", "Influencer outreach"] },
  ];

  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-4xl font-bold text-center text-indigo-800 mb-12">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <h4 className="text-2xl font-bold text-indigo-700 mb-4">{plan.name}</h4>
              <p className="text-4xl font-semibold text-purple-600 mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center text-indigo-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="mailto:info@socialboost.com" className="bg-purple-600 text-white py-2 px-4 rounded-full text-center hover:bg-purple-700 transition-colors duration-300">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;