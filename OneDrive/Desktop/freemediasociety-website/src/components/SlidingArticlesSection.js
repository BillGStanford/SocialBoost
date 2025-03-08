import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import articles from '../content-data/articles-data';

const SlidingArticlesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = articles.length - 1;
  const slidesContainerRef = useRef(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [maxIndex]);
  
  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Latest Articles</h2>
        <div className="flex items-center space-x-3">
          <button 
            onClick={goToPrevious}
            className="bg-blue-100 text-blue-800 p-2 rounded-full hover:bg-blue-200 transition-colors"
            aria-label="Previous article"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="bg-blue-100 text-blue-800 p-2 rounded-full hover:bg-blue-200 transition-colors"
            aria-label="Next article"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div 
          ref={slidesContainerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="w-full flex-shrink-0"
            >
              <div className="relative h-96">
                <img 
                  src={article.thumbnail || "/api/placeholder/1200/600"} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="mb-2">
                    <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-300 text-sm ml-3">{article.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-200 mb-4 max-w-2xl">{article.excerpt}</p>
                  <Link 
                    to={`/article/${article.slug}`} 
                    className="bg-white text-blue-900 py-2 px-5 rounded-md font-medium hover:bg-blue-50 transition-colors inline-flex items-center self-start"
                  >
                    Read article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicator dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingArticlesSection;