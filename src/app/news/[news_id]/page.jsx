'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import "./style.css"

export default function NewsDetailPage() {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const newsId = params.news_id;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://13.51.85.192:1337/api/newss/${newsId}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                
                const data = await response.json();
                setNews(data.data);
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

    return (
        <div className='page'>

            {/* <h3 className="page_heading">NEWS</h3> */}

            <div className="news">

                <div className="image">
                    <img src="/assets/sample_news.jpg" alt={news.heading} />
                </div>

                <div className="details">

                    <h3 className="headline">{news.heading}</h3>

                    <p className="news_content">
                        {news.description}
                    </p>

                    {news.news_link && (
                        <div className="mt-4">
                            <a 
                                href={news.news_link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Read more at source
                            </a>
                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}
