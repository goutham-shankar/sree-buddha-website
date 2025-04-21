"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import "./style.css";

export default function NewsDetailPage() {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const newsId = params.news_id;
    
    // Hardcore reloading approach - uses URL modification
    useEffect(() => {
        // Check if URL already has our reload parameter
        const currentUrl = window.location.href;
        const hasReloadParam = currentUrl.includes('?reload=true');
        
        if (!hasReloadParam) {
            // If we're on the initial load (no reload parameter)
            // Add the parameter and force a hard navigation
            const reloadUrl = `${window.location.pathname}?reload=true`;
            
            // Short delay to allow component to render first
            setTimeout(() => {
                window.location.href = reloadUrl;
            }, 100);
        }
    }, []);
    
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI}/api/newss?filters[documentId][$eq]=${newsId}&populate=News_media`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                
                const data = await response.json();
                
                // Check if we have data and at least one news item
                if (data.data && data.data.length > 0) {
                    setNews(data.data[0]); // Take the first news item from the array
                } else {
                    throw new Error('News not found');
                }
                setError(null);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError('Unable to load news. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        
        if (newsId) {
            fetchNews();
        }
    }, [newsId]);
    
    // Format date to a more readable format
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    
    if (loading) {
        return (
            <div className="page">
                <div className="loading">Loading...</div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="page">
                <div className="error">{error}</div>
            </div>
        );
    }
    
    if (!news) {
        return (
            <div className="page">
                <div className="error">News not found</div>
            </div>
        );
    }
    
    // Handle image URL with fallback
    const getImageUrl = () => {
        if (!news.News_media) return null;
        
        // First try to use the environment variable
        if (process.env.NEXT_PUBLIC_STRAPI) {
            return `${process.env.NEXT_PUBLIC_STRAPI}${news.News_media.url}`;
        }
        
        // Fallback to direct URL 
        return `${process.env.NEXT_PUBLIC_STRAPI}${news.News_media.url}`;
    };
    
    const imageUrl = getImageUrl();
    
    return (
        <div className="page">
            <div className="news">
                {imageUrl && (
                    <div className="image">
                        <img 
                            src={imageUrl} 
                            alt={news.Heading || 'News image'} 
                            onError={(e) => {
                                console.error('Image failed to load');
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}
                
                <div className="details">
                    <div className="date mb-4 text-amber-700">
                        {formatDate(news.publishedAt)}
                    </div>
                    <h3 className="headline">{news.Heading}</h3>
                    
                    <p className="news_content">
                        {news.description}
                    </p>
                    
                    {news.news_link && (
                        <div className="mt-6">
                            <a 
                                href={news.news_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
                            >
                                Read more
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}