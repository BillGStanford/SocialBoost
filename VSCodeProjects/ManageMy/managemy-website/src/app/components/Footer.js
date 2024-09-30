// components/Footer.js
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-indigo-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">SocialBoost</h3>
          <p className="text-indigo-200">Elevating brands through strategic social media marketing.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Services', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors duration-300">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-indigo-200">contact@nilecomun@gmail.com</p>
          <p className="text-indigo-200">240-733-8024</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex">
            <a href="https://www.instagram.com/richsocietynetwork/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-200">
        <p>&copy; 2024 SocialBoost. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;