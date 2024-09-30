'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-white text-indigo-800 shadow-lg' : 'bg-transparent text-white'} transition-all duration-300 py-4 fixed top-0 left-0 right-0 z-50`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">
          <span className="text-purple-600">Social</span>Boost
        </h1>
        <nav>
          <ul className="flex space-x-6">
            {['Services', 'Pricing', 'Testimonials',].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={`hover:text-purple-600 transition-colors duration-300 flex items-center ${isScrolled ? 'text-indigo-800' : 'text-white'}`}>
                  {item}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;