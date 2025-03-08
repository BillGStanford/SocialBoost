import React from 'react';

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70">
      <div className="h-full w-72 bg-white overflow-y-auto transform transition-transform duration-300">
        <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-blue-900 text-white">
          <span className="font-bold text-xl">FreeMediaSociety</span>
          <button 
            onClick={closeSidebar}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <nav className="p-5">
          <ul className="space-y-4">
            <li>
              <a href="/articles" className="block py-3 text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 font-medium rounded transition-colors">
                NEWS & ANALYSIS
              </a>
            </li>
            <li>
              <a href="/FreeRadioEritrea" className="block py-3 text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 font-medium rounded transition-colors">
                RADIO FREE ERITREA
              </a>
            </li>
            <li>
              <a href="/media-freedom" className="block py-3 text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 font-medium rounded transition-colors">
                MEDIA FREEDOM
              </a>
            </li>
            <li>
              <a href="/our-mission" className="block py-3 text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 font-medium rounded transition-colors">
                OUR MISSION
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-3 text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 font-medium rounded transition-colors">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="p-5 border-t border-gray-200">
          <h3 className="font-bold text-blue-900 mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com" aria-label="Facebook" className="text-blue-900 hover:text-blue-600 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-blue-900 hover:text-blue-600 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-blue-900 hover:text-red-600 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-blue-900 hover:text-pink-600 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
              </svg>
            </a>
            <a href="https://telegram.org" aria-label="Telegram" className="text-blue-900 hover:text-blue-600 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.568 7.383c-.115.54-.404.674-.819.419l-2.254-1.664-1.088 1.049c-.12.12-.222.222-.458.222l.164-2.326 4.23-3.823c.184-.161-.04-.25-.283-.089l-5.223 3.288-2.249-.704c-.49-.151-.498-.49.103-.726l8.809-3.396c.411-.156.771.104.636 1.367z"></path>
              </svg>
            </a>
          </div>
          <div className="pt-4">
            <a href="/support-us" className="inline-block bg-blue-900 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors">
              Support Independent Media
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;