"use client";

import React, { useEffect, useState } from 'react';
// import "@/styles/homepage/Events.css";
import "@/styles/homepage/carousal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Events() {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default 3 slides for desktop

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

    return (
        <div className="events">
            <div className="events_container">
                <div className="events_title_area">
                    <h3>EVENTS</h3>
                </div>

                <div className="carousal_container">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        showIndicators={true}
                        showStatus={false}
                        swipeable
                        dynamicHeight={false}
                        centerMode
                        centerSlidePercentage={100 / slidesToShow} // Dynamic slide percentage
                        renderArrowPrev={(onClickHandler, hasPrev) =>
                            hasPrev && (
                                <button type="button" onClick={onClickHandler} className="custom-arrow prev">
                                    <span>&#9664;</span>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} className="custom-arrow next">
                                    <span>&#9654;</span>
                                </button>
                            )
                        }
                    >
                        <div className="event"><img src="/assets/images/home images/events/event-1.png" alt="event-1" /></div>
                        <div className="event"><img src="/assets/images/home images/events/event-2.png" alt="event-2" /></div>
                        <div className="event"><img src="/assets/images/home images/events/event-3.png" alt="event-3" /></div>
                        <div className="event"><img src="/assets/images/home images/events/event-1.png" alt="event-4" /></div>
                        <div className="event"><img src="/assets/images/home images/events/event-5.png" alt="event-5" /></div>
                        <div className="event"><img src="/assets/images/home images/events/event-6.png" alt="event-6" /></div>
                        
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
