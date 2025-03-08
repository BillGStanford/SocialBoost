import React, { useState } from 'react';
import ArticleSearch from './ArticleSearch';
import articles from '../content-data/articles-data';

const Header = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);
  
  const toggleSearch = (e) => {
    e.stopPropagation();
    setShowSearch(!showSearch);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="mr-4 p-2 text-blue-900 hover:bg-blue-50 rounded-full focus:outline-none transition-colors" 
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <div className="hidden md:flex space-x-6 ml-4">
            <a href="/articles" className="text-blue-900 hover:text-blue-700 font-medium">News</a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a href="/" className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <div className="text-lg font-bold text-blue-900">FreeMediaSociety</div>
              <div className="text-xs text-blue-600">Truth • Freedom • Change</div>
            </div>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 text-blue-900 hover:bg-blue-50 rounded-full focus:outline-none transition-colors"
            onClick={toggleSearch}
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Search Overlay */}
      {showSearch && (
        <div className="container mx-auto px-4 py-3 border-t border-gray-100">
          <ArticleSearch articles={articles} />
        </div>
      )}
    </header>
  );
};

export default Header;