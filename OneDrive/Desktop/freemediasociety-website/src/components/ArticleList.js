import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../content-data/articles-data';

const ArticleList = () => {
  // Filter articles by importance (excluding those already shown in featured sections)
  const regularArticles = articles.filter(article => article.importance === "None");

  return (
    <div className="container mx-auto px-4 mb-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Latest News</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Link to={`/article/${article.slug}`}>
              <img 
                src={article.thumbnail || "/api/placeholder/400/225"} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-5">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm ml-3">{article.date}</span>
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
      
      <div className="mt-8 text-center">
        <Link 
          to="/articles" 
          className="bg-blue-700 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors inline-flex items-center"
        >
          View all articles
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleList;