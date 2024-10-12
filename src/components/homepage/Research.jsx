"use client"

import React from 'react'
import "@/styles/homepage/research.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default function Research() {
  return (
    <div className="events">

      <div className="events_container">
        <div className="events_title_area">
          <h3>Research</h3>
        </div>

        <div className="carousal_container">

          <Carousel
            className='carousal'
            showThumbs={false}
            infiniteLoop
            showIndicators={true}
            showStatus={false}
            swipeable
            dynamicHeight={false}
            centerMode
            centerSlidePercentage={33.33}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} className="custom-arrow prev">
                  &#9664; {/* Custom left arrow */}
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} className="custom-arrow next">
                  &#9654; {/* Custom right arrow */}
                </button>
              )
            }
          >

            <div className="event1 event">fasdfsadf</div>
            <div className="event2 event">fasdfasdf</div>
            <div className="event3 event">fadsfasdf</div>
            <div className="event4 event">fasdfasd</div>

          </Carousel>

        </div>
      </div>


    </div>
  )
}
