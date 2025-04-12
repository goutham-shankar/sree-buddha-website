"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import "./style.css";

export default function EventDetailPage() {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const eventId = params.event_id;

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://13.51.85.192:1337/api/events/${eventId}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch event');
                }
                
                const data = await response.json();
                setEvent(data.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching event:', error);
                setError('Unable to load event. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (eventId) {
            fetchEvent();
        }
    }, [eventId]);

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

    if (!event) {
        return (
            <div className="page">
                <div className="error">Event not found</div>
            </div>
        );
    }

    return (
        <div className='page'>
            <div className="event">
                <div className="image">
                    <img src="/assets/sample_news.jpg" alt={event.Heading} />
                </div>

                <div className="details">
                    <div className="date mb-4 text-amber-700">
                        {formatDate(event.publishedAt)}
                    </div>
                    <h3 className="headline">{event.Heading}</h3>

                    <p className="event_content">
                        {event.description}
                    </p>

                    {event.event_link && (
                        <div className="mt-6">
                            <a 
                                href={event.event_link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
                            >
                                Learn more about the event
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