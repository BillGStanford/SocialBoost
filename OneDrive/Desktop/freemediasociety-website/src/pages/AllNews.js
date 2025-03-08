import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articles from '../content-data/articles-data';

const AllNews = () => {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImportance, setSelectedImportance] = useState('All');
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [sortOption, setSortOption] = useState('newest');

  // Get unique categories from articles data
  const categories = ['All', ...new Set(articles.map(article => article.category))];
  const importanceLevels = ['All', 'High', 'Low', 'None'];

  // Apply filters and search whenever dependencies change
  useEffect(() => {
    let results = [...articles];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(article => 
        article.title.toLowerCase().includes(searchLower) || 
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.author.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      results = results.filter(article => article.category === selectedCategory);
    }

    // Apply importance filter
    if (selectedImportance !== 'All') {
      results = results.filter(article => article.importance === selectedImportance);
    }

    // Apply sorting
    results = sortArticles(results, sortOption);

    setFilteredArticles(results);
  }, [searchTerm, selectedCategory, selectedImportance, sortOption]);

  // Function to sort articles
  const sortArticles = (articlesToSort, option) => {
    const articlesClone = [...articlesToSort];

    switch (option) {
      case 'newest':
        return articlesClone.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return articlesClone.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'a-z':
        return articlesClone.sort((a, b) => a.title.localeCompare(b.title));
      case 'z-a':
        return articlesClone.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return articlesClone;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">All News</h1>

        {/* Search and Filters Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search input */}
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="pl-10 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search articles by title, content or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                id="category"
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Importance filter */}
            <div>
              <label htmlFor="importance" className="block text-sm font-medium text-gray-700 mb-1">Importance</label>
              <select
                id="importance"
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={selectedImportance}
                onChange={(e) => setSelectedImportance(e.target.value)}
              >
                {importanceLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort options */}
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mr-2">Sort by:</label>
              <select
                id="sort"
                className="p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
            <div className="text-sm text-gray-500">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Link to={`/article/${article.slug}`}>
                  <img 
                    src={article.thumbnail || "/api/placeholder/400/225"} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex flex-wrap items-center mb-3 gap-2">
                    <span className={`bg-${getCategoryColor(article.category)}-100 text-${getCategoryColor(article.category)}-800 text-xs font-semibold px-3 py-1 rounded-full`}>
                      {article.category}
                    </span>
                    {article.importance !== "None" && (
                      <span className={`bg-${article.importance === "High" ? "red" : "yellow"}-100 text-${article.importance === "High" ? "red" : "yellow"}-800 text-xs font-semibold px-3 py-1 rounded-full`}>
                        {article.importance} Priority
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <Link to={`/article/${article.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 text-blue-900 hover:text-blue-700 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">By {article.author}</span>
                    <Link 
                      to={`/article/${article.slug}`} 
                      className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h2>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedImportance('All');
                setSortOption('newest');
              }}
              className="bg-blue-700 text-white py-2 px-4 rounded font-medium hover:bg-blue-800 transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to get appropriate color for category tags
const getCategoryColor = (category) => {
  const colorMap = {
    "Human Rights": "red",
    "Technology": "indigo",
    "Analysis": "blue",
    "Opinion": "green",
    "Culture": "purple",
    "Health": "yellow",
    "Politics": "orange"
  };
  
  return colorMap[category] || "blue";
};

export default AllNews;