"use client"

import React from 'react'
import "../../styles/homepage/events2.css"

import "@/styles/homepage/carousal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useEffect, useState } from 'react';

export default function News2() {

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
        <div className='carousal_section events' >

            <div className="events_container">
                <div className="events_title_area">
                    <span className="event_left_border"></span>
                    <h3>NEWS</h3>
                    <a href="" className="events_know_more">KNOW MORE</a>
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
                        <div className="event">
                            <h3 className="event_title">SEMINAR</h3>
                            <img src="/assets/images/home/events_sample.png" alt="" className="event_image" />
                            <p className="event_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti.</p>
                            <div className="event_date"> 
                                 <img src="/assets/images/home/calendar.png" alt=""  />
                                 <span>5th December 2024</span>
                            </div>
                        </div>
                        <div className="event">
                            <h3 className="event_title">SEMINAR</h3>
                            <img src="/assets/images/home/events_sample.png" alt="" className="event_image" />
                            <p className="event_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti.</p>
                            <div className="event_date"> 
                                 <img src="/assets/images/home/calendar.png" alt=""  />
                                 <span>5th December 2024</span>
                            </div>
                        </div>
                        <div className="event">
                            <h3 className="event_title">SEMINAR</h3>
                            <img src="/assets/images/home/events_sample.png" alt="" className="event_image" />
                            <p className="event_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti.</p>
                            <div className="event_date"> 
                                 <img src="/assets/images/home/calendar.png" alt=""  />
                                 <span>5th December 2024</span>
                            </div>
                        </div>
                        


                    </Carousel>
                </div>
            </div>

        </div>
    )
}
