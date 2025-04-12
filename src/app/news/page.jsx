'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, Link2, Clock, ChevronRight, Loader, AlertCircle } from 'lucide-react';

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredNews, setFeaturedNews] = useState(null);
  const API_URL = 'http://13.51.85.192:1337/api/newss?populate=News_media';
  const BASE_URL = 'http://13.51.85.192:1337';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          // Set the first item as featured news and the rest as regular news items
          setFeaturedNews(data.data[0]);
          setNewsItems(data.data.slice(1));
        }
        
        setError(null);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Unable to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get the appropriate image URL from News_media object
  const getImageUrl = (newsMedia) => {
    if (!newsMedia) return '/assets/default-news-image.jpg';
    
    // Try to get medium format or fallback to original
    const imageUrl = newsMedia.formats?.medium?.url || newsMedia.url;
    return `${BASE_URL}${imageUrl}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <nav className="text-sm">
          <ol className="list-none p-0 flex text-gray-500">
            <li className="flex items-center">
              <a href="#" className="hover:text-amber-700">Home</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-amber-800 font-medium">News & Announcements</li>
          </ol>
        </nav>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          {/* Hero section */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img 
              src="/assets/sample_news.jpg"
              alt="Latest News and Events" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">College News</h2>
              <p className="text-sm md:text-base">Latest updates and announcements</p>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">LATEST NEWS</h1>
            <div className="w-16 h-1 bg-amber-800 mb-8"></div>
            
            {/* Loading state */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader className="w-10 h-10 text-amber-600 animate-spin mb-4" />
                <p className="text-gray-600">Loading news...</p>
              </div>
            )}
            
            {/* Error state */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-600">{error}</span>
                </div>
              </div>
            )}
            
            {/* Featured News */}
            {!loading && !error && featuredNews && (
              <div className="mb-12">
                <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-100">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <div className="rounded-lg overflow-hidden shadow-md h-64 md:h-80">
                        <img 
                          src={getImageUrl(featuredNews.News_media)}
                          alt={featuredNews.heading} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex items-center text-amber-600 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(featuredNews.publishedAt)}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-amber-800 mb-4">{featuredNews.heading}</h2>
                      <p className="text-gray-600 mb-6">{featuredNews.description}</p>
                      {featuredNews.news_link && (
                        <a 
                          href={featuredNews.news_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
                        >
                          Read Full Story
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* News Grid */}
            {!loading && !error && newsItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((news) => (
                  <div 
                    key={news.id} 
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => window.location.href = `/news/${news.documentId}`}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={getImageUrl(news.News_media)} 
                        alt={news.heading} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-gray-500 text-xs mb-3">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        <span>{formatDate(news.publishedAt)}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{news.heading}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.description}</p>
                      
                      {news.news_link && (
                        <div className="flex justify-between items-center">
                          <a 
                            href={news.news_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors"
                          >
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </a>
                          <Link2 className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Empty state */}
            {!loading && !error && newsItems.length === 0 && !featuredNews && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-800 mb-2">No news available</h3>
                <p className="text-gray-600">Check back later for updates.</p>
              </div>
            )}
            
            {/* Archive link */}
            {!loading && newsItems.length > 0 && (
              <div className="mt-10 text-center">
                <a 
                  href="/news/archive" 
                  className="inline-flex items-center text-amber-700 font-medium hover:text-amber-900 transition-colors"
                >
                  View News Archive
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Subscribe section */}
        <div className="bg-amber-50 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-amber-800 mb-2">Stay Updated</h3>
                <p className="text-gray-600">Subscribe to our newsletter to receive the latest news and updates directly in your inbox.</p>
              </div>
              <div className="md:w-1/3 w-full">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}