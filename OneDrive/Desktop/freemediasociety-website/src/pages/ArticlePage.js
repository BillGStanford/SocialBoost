import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../content-data/articles-data';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find(article => article.slug === slug);
  
  useEffect(() => {
    // Scroll to top when article page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = article ? `${article.title} | Radio Free Eritrea` : 'Article Not Found | Radio Free Eritrea';
  }, [article]);
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Article Not Found</h1>
          <p className="text-gray-700 mb-8">The article you are looking for doesn't exist or has been moved.</p>
          <Link to="/" className="bg-blue-700 text-white py-2 px-6 rounded-md font-bold hover:bg-blue-800 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Link to="/" className="text-blue-700 hover:text-blue-900 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </Link>
            <span className="text-gray-500">|</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <article>
              {article.content.map((item, index) => {
                if (item.type === 'h1') {
                  return <h1 key={index} className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{item.content}</h1>;
                } else if (item.type === 'h2') {
                  return <h2 key={index} className="text-2xl font-bold text-blue-800 mt-8 mb-4">{item.content}</h2>;
                } else if (item.type === 'p') {
                  return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{item.content}</p>;
                } else if (item.type === 'image') {
                  return (
                    <figure key={index} className="my-6">
                      <img src={item.src || "/api/placeholder/800/450"} alt={item.alt} className="w-full h-auto rounded-lg shadow-sm" />
                      {item.caption && <figcaption className="text-sm text-gray-500 mt-2 text-center">{item.caption}</figcaption>}
                    </figure>
                  );
                }
                return null;
              })}
            </article>
            
            {/* Article Footer */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">By <span className="font-medium text-blue-900">{article.author}</span></p>
                  <p className="text-gray-500 text-sm">{article.date}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="text-gray-600 hover:text-blue-700" aria-label="Share on Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-blue-700" aria-label="Share on Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-blue-700" aria-label="Share via Email">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter(relatedArticle => relatedArticle.id !== article.id)
              .slice(0, 3)
              .map(relatedArticle => (
                <div key={relatedArticle.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/article/${relatedArticle.slug}`}>
                    <img 
                      src={relatedArticle.thumbnail || "/api/placeholder/400/200"} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-xs font-semibold text-blue-700">{relatedArticle.category}</span>
                      <h4 className="text-lg font-semibold text-blue-900 mt-1 mb-2">{relatedArticle.title}</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;