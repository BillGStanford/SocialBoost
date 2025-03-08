import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ArticleSearch from '../components/ArticleSearch';

const SearchResults = ({ articles }) => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const q = searchParams.get('q');
  const category = searchParams.get('category');
  const author = searchParams.get('author');

  useEffect(() => {
    setLoading(true);
    const searchResults = performSearch(q, category, author);
    setResults(searchResults);
    setLoading(false);
  }, [q, category, author, articles]);

  const performSearch = (term, categoryFilter, authorFilter) => {
    let filteredArticles = [...articles];
    
    // Filter by search term if provided
    if (term) {
      const normalizedTerm = term.toLowerCase().trim();
      filteredArticles = filteredArticles.filter(article => {
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
    }
    
    // Filter by category if provided
    if (categoryFilter) {
      filteredArticles = filteredArticles.filter(article => 
        article.category === categoryFilter
      );
    }
    
    // Filter by author if provided
    if (authorFilter) {
      filteredArticles = filteredArticles.filter(article => 
        article.author === authorFilter
      );
    }
    
    return filteredArticles;
  };

  const highlightText = (text, term) => {
    if (!term || !text) return text;
    
    const normalizedTerm = term.toLowerCase();
    const parts = text.split(new RegExp(`(${normalizedTerm})`, 'gi'));
    
    return parts.map((part, i) => 
      part.toLowerCase() === normalizedTerm ? 
        <span key={i} className="bg-yellow-200">{part}</span> : part
    );
  };

  // Build a description of the current search
  const getSearchDescription = () => {
    const filters = [];
    
    if (q) filters.push(`"${q}"`);
    if (category) filters.push(`in category "${category}"`);
    if (author) filters.push(`by "${author}"`);
    
    if (filters.length === 0) return "All articles";
    return filters.join(" ");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <ArticleSearch articles={articles} />
      </div>
      
      <h1 className="text-3xl font-bold mb-2">Search Results</h1>
      <p className="text-gray-600 mb-6">Showing results for {getSearchDescription()}</p>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="loader animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <p className="mb-6 text-gray-600">{results.length} results found</p>
          
          {results.length > 0 ? (
            <div className="grid gap-8">
              {results.map(article => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                        {category ? highlightText(article.category, category) : article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                    </div>
                    
                    <Link to={`/article/${article.slug}`}>
                      <h2 className="text-2xl font-bold mb-2 text-blue-900 hover:text-blue-700 transition-colors">
                        {q ? highlightText(article.title, q) : article.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 mb-4">
                      By <span className="font-medium">{author ? highlightText(article.author, author) : article.author}</span>
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                      {q ? highlightText(article.excerpt, q) : article.excerpt}
                    </p>
                    
                    <Link to={`/article/${article.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No results found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or browse our categories.
              </p>
              <Link to="/articles" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                Browse all articles
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;