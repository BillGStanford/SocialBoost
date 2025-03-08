import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleSearch = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
    } else {
      setIsSearching(true);
      performSearch(value);
    }
  };

  // Search through articles based on keywords
  const performSearch = (term) => {
    const normalizedTerm = term.toLowerCase().trim();
    
    const results = articles.filter(article => {
      // Search in title
      if (article.title.toLowerCase().includes(normalizedTerm)) return true;
      
      // Search in author
      if (article.author.toLowerCase().includes(normalizedTerm)) return true;
      
      // Search in category
      if (article.category.toLowerCase().includes(normalizedTerm)) return true;
      
      // Search in excerpt
      if (article.excerpt.toLowerCase().includes(normalizedTerm)) return true;
      
      // Search in content paragraphs
      const contentMatch = article.content && article.content.some(item => {
        if (item.type === 'p' || item.type === 'h1' || item.type === 'h2') {
          return item.content.toLowerCase().includes(normalizedTerm);
        }
        return false;
      });
      
      return contentMatch;
    });
    
    setSearchResults(results);
  };

  // Handle clicking on a search result
  const handleResultClick = (slug) => {
    navigate(`/article/${slug}`);
    setSearchTerm('');
    setIsSearching(false);
  };

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsSearching(false);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container')) {
        setIsSearching(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative search-container" onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative w-full">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <button 
          type="submit" 
          className="ml-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>

      {isSearching && searchResults.length > 0 && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <ul>
            {searchResults.map(article => (
              <li key={article.id} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => handleResultClick(article.slug)}
                  className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors"
                >
                  <div className="font-medium text-blue-900">{article.title}</div>
                  <div className="text-sm text-gray-600 flex items-center justify-between">
                    <span>{article.author}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{article.category}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isSearching && searchTerm.trim() !== '' && searchResults.length === 0 && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-50 p-4 text-center">
          <p className="text-gray-600">No results found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;