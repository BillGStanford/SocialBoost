import React from 'react';
import ArticleList from './ArticleList';
import articles from '../content-data/articles-data';

const MainContent = () => {
  // Filter articles by importance for different sections
  const featuredArticles = articles.filter(article => article.importance === "High");
  const sidebarArticles = articles.filter(article => article.importance === "Low");

  return (
    <main className="flex-grow bg-gray-50 py-8">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-blue-900 text-white rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Radio Free Eritrea</h1>
              <p className="text-lg mb-6 text-blue-100">Amplifying voices for freedom, democracy, and human rights in Eritrea and beyond.</p>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/radiofree.jpg" 
                alt="Radio Free Eritrea" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Content Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Featured Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feature Articles (High Importance) */}
          <div className="lg:col-span-2 space-y-8">
            {featuredArticles.map(article => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <a href={`/article/${article.slug}`}>
                  <img 
                    src={article.thumbnail || "/api/placeholder/800/450"} 
                    alt={article.title} 
                    className="w-full h-64 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{article.category}</span>
                    <span className="text-gray-500 text-sm ml-3">{article.date}</span>
                  </div>
                  <a href={`/article/${article.slug}`}>
                    <h2 className="text-2xl font-semibold mb-3 text-blue-900 hover:text-blue-700 transition-colors">
                      {article.title}
                    </h2>
                  </a>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">By {article.author}</span>
                    <a href={`/article/${article.slug}`} className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center">
                      Read full article
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Articles (Low Importance) */}
          <div className="space-y-8">
            {sidebarArticles.map(article => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <a href={`/article/${article.slug}`}>
                  <img 
                    src={article.thumbnail || "/api/placeholder/400/225"} 
                    alt={article.title} 
                    className="w-full h-40 object-cover"
                  />
                </a>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <span className={`bg-${getCategoryColor(article.category)}-100 text-${getCategoryColor(article.category)}-800 text-xs font-semibold px-3 py-1 rounded-full`}>
                      {article.category}
                    </span>
                  </div>
                  <a href={`/article/${article.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 text-blue-900 hover:text-blue-700 transition-colors">
                      {article.title}
                    </h3>
                  </a>
                  <p className="text-gray-700 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">By {article.author}</span>
                    <a href={`/article/${article.slug}`} className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            

          </div>
        </div>
      </div>
      
      {/* Regular Articles List */}
      <ArticleList />
    </main>
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

export default MainContent;