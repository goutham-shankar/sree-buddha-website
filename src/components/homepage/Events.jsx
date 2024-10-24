"use client";

import React from 'react';
import "@/styles/homepage/Events.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Events() {
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
                        dynamicHeight={true}
                        renderArrowPrev={(onClickHandler, hasPrev) =>
                            hasPrev && (
                                <button type="button" onClick={onClickHandler} className="custom-arrow prev">
                                    &#9664; {/* Custom left arrow */}
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} className="custom-arrow next">
                                    &#9654; {/* Custom right arrow */}
                                </button>
                            )
                        }
                    >
                        <div className="event"><img src="/assets/images/home images/events/future digi.png" alt="slide1" /></div>
                        <div className="event"><img src="/assets/images/home images/events/ieee-conference.png" alt="slide2" /></div>
                        <div className="event"><img src="/assets/images/home images/events/kids in lab.png" alt="slide3" /></div>
                        <div className="event"><img src="/assets/images/home images/events/save-image.png" alt="slide4" /></div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
