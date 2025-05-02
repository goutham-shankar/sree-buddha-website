"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Research() {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default 3 slides for desktop
    const [researchData, setResearchData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 768) {
                setSlidesToShow(1); // 1 slide for mobile
            } else if (screenWidth <= 1024) {
                setSlidesToShow(2); // 2 slides for tablet
            } else {
                setSlidesToShow(3); // 3 slides for desktop
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial number of slides based on current window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setLoading(true);
        
        // Fetch research data from Strapi API
        const fetchResearch = async () => {
            try {
                const apiUrl = `https://sbce.ac.in/api/api/researchs?populate=Research_media`;
                console.log("Fetching research data from:", apiUrl);
                
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                
                const data = await response.json();
                console.log("Research data received:", data.data);
                
                let responseItems = data.data || [];
                
                // Process the API response
                if (responseItems.length > 0) {
                    // Format the data according to the structure provided
                    responseItems = responseItems.map(item => {
                        return {
                            id: item.id || Math.random().toString(36).substring(7),
                            documentId: item.documentId || item.attributes?.documentId || null,
                            heading: item.heading || item.attributes?.heading || "Research Project",
                            description: item.description || item.attributes?.description || "No description available",
                            createdAt: item.createdAt || item.attributes?.createdAt || new Date().toISOString(),
                            image_url : item.Research_media.url, 
                            // Handle nested structures if they exist
                            name: item.name || item.attributes?.name || null,
                            alternativeText: item.alternativeText || item.attributes?.alternativeText || null,
                            caption: item.caption || item.attributes?.caption || null
                        };
                    });
                    
                    // If we have less than 5 items, duplicate them
                    if (responseItems.length < 5) {
                        const initialLength = responseItems.length;
                        for (let i = 0; i < 5 - initialLength; i++) {
                            responseItems.push({...responseItems[i % initialLength], id: `duplicate-${i}`});
                        }
                    }
                } else {
                    // If no research data from API, use fallback data
                    responseItems = generateFallbackResearch();
                }
                
                setResearchData(responseItems);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch research data:", err);
                setError("Failed to load research projects");
                setResearchData(generateFallbackResearch()); // Use fallback data on error
                setLoading(false);
            }
        };

        fetchResearch();
    }, []);

    // Generate fallback research data if API fails
    const generateFallbackResearch = () => {
        return [
            {
                id: 1,
                documentId: "mibi5n3tj0pjdsyasgg1bve5",
                heading: "Grant recipient and Patent holder",
                description: "Dr. M S Senthil Saravanan of Mechanical Engineering department received a research grant of Rs. 14 lakhs for Processing and thermal analysis of carbon based thermal interface material (TIM) for electronics applications. He holds an IPR for Integrated Healthcare System using IOT and Cloud Computing",
                createdAt: "2025-04-25T16:53:06.422Z",
                name: "senthil sir.png",
                alternativeText: null,
                caption: null
            },
            {
                id: 2,
                documentId: "fallback-doc-2",
                heading: "IoT Innovations Research",
                description: "Faculty from the Department of Computer Science are working on developing innovative solutions using Internet of Things technologies for smart campus applications and student learning enhancements.",
                createdAt: "2025-04-20T10:30:00.000Z",
                name: "iot-research.png",
                alternativeText: "IoT Research Image",
                caption: "IoT prototype development"
            },
            {
                id: 3,
                documentId: "fallback-doc-3",
                heading: "Renewable Energy Systems",
                description: "Electrical Engineering department is conducting research on sustainable energy sources and their implementation for powering educational institutions with minimal carbon footprint.",
                createdAt: "2025-04-18T09:15:00.000Z",
                name: "renewable-energy.png",
                alternativeText: "Solar Panel Installation",
                caption: "Renewable energy research"
            },
            {
                id: 4,
                documentId: "fallback-doc-4",
                heading: "Civil Engineering Innovation",
                description: "Research on sustainable construction materials and techniques for eco-friendly building development in Kerala's climate conditions.",
                createdAt: "2025-04-15T14:20:00.000Z",
                name: "civil-engineering.png",
                alternativeText: "Sustainable Building Materials",
                caption: "Testing new materials"
            },
            {
                id: 5,
                documentId: "fallback-doc-5",
                heading: "Cybersecurity Research",
                description: "Information Technology department is developing new methods to protect campus networks and educational data from emerging cyber threats.",
                createdAt: "2025-04-10T11:45:00.000Z",
                name: "cybersecurity.png",
                alternativeText: "Network Security Diagram",
                caption: "Security protocol testing"
            }
        ];
    };

    // Get formatted date for display
    const getFormattedDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            return 'Unknown Date';
        }
    };

    const renderResearchCards = () => {
        return researchData.map((research, index) => {
            // Use the direct structure based on your API response
            const title = research.heading || "Research Project";
            const description = research.description || "No description available";
            const date = getFormattedDate(research.createdAt);
            
            // For image, check if this is from the API with a documentId
            console.log(research.url);
            const imageUrl = research.documentId ? 
                `https://sbce.ac.in/api/${research.image_url}` : 
                "/assets/images/home/events_sample.png";
            
            return (
                <div 
                    className="mx-2 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full min-h-[350px] md:min-h-[320px] sm:min-h-[300px] p-6 md:p-4 flex flex-col" 
                    key={research.id || index}
                >
                    <h3 className="text-xl md:text-lg font-semibold text-yellow-900 mb-4 truncate">{title}</h3>
                    <div className="w-full h-[180px] md:h-[160px] sm:h-[140px] overflow-hidden rounded-md mb-4">
                        <img 
                            src={imageUrl} 
                            alt={research.alternativeText || title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/assets/images/home/events_sample.png";
                            }}
                        />
                    </div>
                    <p className="text-gray-600 text-sm md:text-xs flex-grow line-clamp-3 mb-4">{description}</p>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-xs text-gray-500">{date}</span>
                        <a 
                            href={`/research/${research.documentId || ""}`}
                            className="bg-yellow-900 hover:bg-yellow-800 text-white font-medium text-sm py-2 px-4 rounded transition-colors"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="w-full py-12 md:py-8 sm:py-6 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-8 md:mb-6">
                    <div className="w-1 h-8 md:h-7 sm:h-6 bg-yellow-900 mr-4"></div>
                    <h2 className="text-2xl md:text-xl sm:text-lg font-bold text-gray-800">RESEARCH</h2>
                    <a href="/research" className="ml-auto text-sm font-semibold text-yellow-900 hover:text-yellow-800 hover:underline transition-colors">KNOW MORE</a>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center h-[300px]">
                        <div className="w-10 h-10 border-4 border-gray-200 border-t-yellow-900 rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-600">Loading research projects...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-8 text-red-700">
                        <p>{error}</p>
                    </div>
                ) : researchData.length === 0 ? (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8 text-yellow-700">
                        <p>No research projects found. Check back later for updates.</p>
                    </div>
                ) : (
                    <div className="relative w-full">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop
                            showIndicators={true}
                            showStatus={false}
                            swipeable={true}
                            emulateTouch={true}
                            centerMode={true}
                            centerSlidePercentage={100 / slidesToShow}
                            className="w-full"
                            renderArrowPrev={(onClickHandler, hasPrev) =>
                                hasPrev && (
                                    <button 
                                        type="button" 
                                        onClick={onClickHandler} 
                                        className="absolute top-1/2 -translate-y-1/2 left-2 z-10 w-10 h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 bg-yellow-900/80 hover:bg-yellow-900 text-white rounded-full flex items-center justify-center transition-colors"
                                        aria-label="Previous slide"
                                    >
                                        <span className="text-lg md:text-base sm:text-sm">❮</span>
                                    </button>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext) =>
                                hasNext && (
                                    <button 
                                        type="button" 
                                        onClick={onClickHandler} 
                                        className="absolute top-1/2 -translate-y-1/2 right-2 z-10 w-10 h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 bg-yellow-900/80 hover:bg-yellow-900 text-white rounded-full flex items-center justify-center transition-colors"
                                        aria-label="Next slide"
                                    >
                                        <span className="text-lg md:text-base sm:text-sm">❯</span>
                                    </button>
                                )
                            }
                        >
                            {renderResearchCards()}
                        </Carousel>
                    </div>
                )}
            </div>
        </div>
    );
}