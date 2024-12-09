"use client";

import React, { useEffect, useState } from 'react';
// import "@/styles/homepage/research.css";
import "@/styles/homepage/carousal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Research() {
    const [slidesToShow, setSlidesToShow] = useState(3); 
    
    
    useEffect(() => {
        AOS.init({
            once: true,
        //   disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

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
                    <h3>RESEARCH</h3>    
                </div>
                <span></span>

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
                                    &#9664;
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} className="custom-arrow next">
                                    &#9654;
                                </button>
                            )
                        }
                    >
                        <div  data-aos="fade-up" className="event"><img src="/assets/images/home images/research/event1.png" alt="event-1" /></div>
                        <div  data-aos="fade-up" className="event"><img src="/assets/images/home images/research/event2.png" alt="event-1" /></div>
                        <div  data-aos="fade-up" className="event"><img src="/assets/images/home images/research/event3.png" alt="event-1" /></div>
                        <div  data-aos="fade-up" className="event"><img src="/assets/images/home images/research/event4.png" alt="event-1" /></div>
                        <div  data-aos="fade-up" className="event"><img src="/assets/images/home images/research/event5.png" alt="event-1" /></div>
                        <div  data-aos="fade-up" className="event"><img src="/assets/images/home images/research/event6.png" alt="event-1" /></div>
                        
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
