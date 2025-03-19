// "use client"

// import React from 'react'
// import "../../styles/homepage/events2.css"

// import "@/styles/homepage/carousal.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// import { useEffect, useState } from 'react';

// export default function News() {

//     const [slidesToShow, setSlidesToShow] = useState(3); // Default 3 slides for desktop
//     useEffect(() => {
//         const handleResize = () => {
//             const screenWidth = window.innerWidth;

//             if (screenWidth <= 768) {
//                 setSlidesToShow(1); // 1 slide for mobile
//             } else if (screenWidth <= 1024) {
//                 setSlidesToShow(2); // 2 slides for tablet
//             } else {
//                 setSlidesToShow(3); // 3 slides for desktop
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         handleResize(); // Set initial number of slides based on current window size

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <div className='carousal_section' >

//             <div className="events_container">
//                 <div className="events_title_area">
//                     <span className="event_left_border"></span>
//                     <h3>NEWS</h3>
//                     <a href="" className="events_know_more">KNOW MORE</a>
//                 </div>

//                 <div className="carousal_container">
//                     <Carousel
//                         showThumbs={false}
//                         infiniteLoop
//                         showIndicators={true}
//                         showStatus={false}
//                         swipeable
//                         dynamicHeight={false}
//                         centerMode

//                         centerSlidePercentage={100 / slidesToShow} // Dynamic slide percentage
//                         renderArrowPrev={(onClickHandler, hasPrev) =>
//                             hasPrev && (
//                                 <button type="button" onClick={onClickHandler} className="custom-arrow prev">
//                                     <span>&#9664;</span>
//                                 </button>
//                             )
//                         }
//                         renderArrowNext={(onClickHandler, hasNext) =>
//                             hasNext && (
//                                 <button type="button" onClick={onClickHandler} className="custom-arrow next">
//                                     <span>&#9654;</span>
//                                 </button>
//                             )
//                         }

//                     >
//                         <div className="event">
//                             <h3 className="event_title">SEMINAR</h3>
//                             <img src="/assets/images/home/events_sample.png" alt="" className="event_image" />
//                             <p className="event_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti.</p>
//                             <div className="event_date">
//                                  <img src="/assets/images/home/calendar.png" alt=""  />
//                                  <span>5th December 2024</span>
//                             </div>
//                         </div>
//                         <div className="event">
//                             <h3 className="event_title">SEMINAR</h3>
//                             <img src="/assets/images/home/events_sample.png" alt="" className="event_image" />
//                             <p className="event_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti.</p>
//                             <div className="event_date">
//                                  <img src="/assets/images/home/calendar.png" alt=""  />
//                                  <span>5th December 2024</span>
//                             </div>
//                         </div>
//                         <div className="event">
//                             <h3 className="event_title">SEMINAR</h3>
//                             <img src="/assets/images/home/events_sample.png" alt="" className="event_image" />
//                             <p className="event_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti.</p>
//                             <div className="event_date">
//                                  <img src="/assets/images/home/calendar.png" alt=""  />
//                                  <span>5th December 2024</span>
//                             </div>
//                         </div>

//                     </Carousel>
//                 </div>
//             </div>

//         </div>
//     )
// }

"use client";

import React from "react";
import "../../styles/homepage/events2.css";

import "@/styles/homepage/carousal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useEffect, useState, useRef } from "react";

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default 3 slides for desktop
  const isMounted = useRef(false);

  useEffect(() => {
    // This fixes the StrictMode double-mounting issue
    // It ensures the code only runs once even if the component mounts twice
    if (isMounted.current) return;
    isMounted.current = true;

    console.log("Starting fetch operation");

    // Fetch news data
    const fetchNewsData = async () => {
      try {
        console.log("Fetching news data...");

        const response = await fetch(
          "http://13.51.85.192:1337/api/newss?populate=News_media"
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("API response received:", data);

        // Ensure we're setting the actual news array from the API response
        if (data && data.data && Array.isArray(data.data)) {
          // Prevent duplicate renders by checking if the component is still mounted
          if (isMounted.current) {
            console.log(`Setting ${data.data.length} news items`);
            setNewsData(data.data);
            setLoading(false);
          }
        } else {
          if (isMounted.current) {
            console.log("No valid news data in response");
            setNewsData([]);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Error fetching news data:", err);
        if (isMounted.current) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchNewsData();

    // Handle responsive slides
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

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial number of slides based on current window size

    return () => {
      isMounted.current = false; // Clean up on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure this only runs once

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    // Get day with ordinal suffix
    const day = date.getDate();
    const ordinal = getOrdinalSuffix(day);

    // Get month name and year
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${day}${ordinal} ${month} ${year}`;
  };

  // Helper function to get ordinal suffix for date
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  if (loading) {
    return <div className="carousal_section loading">Loading news...</div>;
  }

  if (error) {
    return (
      <div className="carousal_section error">Error loading news: {error}</div>
    );
  }

  return (
    <div className="carousal_section">
      <div className="events_container">
        <div className="events_title_area">
          <span className="event_left_border"></span>
          <h3>NEWS</h3>
          <a href="/news" className="events_know_more">
            KNOW MORE
          </a>
        </div>

        <div className="carousal_container">
          {newsData.length === 0 ? (
            // If no news data, show a placeholder
            <div className="single-news-container">
              <div className="event">
                <h3 className="event_title">No News Available</h3>
                <img
                  src="/assets/images/home/events_sample.png"
                  alt=""
                  className="event_image"
                />
                <p className="event_description">
                  Check back later for updates.
                </p>
                <div className="event_date">
                  <img src="/assets/images/home/calendar.png" alt="" />
                  <span>Today</span>
                </div>
              </div>
            </div>
          ) : newsData.length === 1 ? (
            // If there's only one news item, don't use the carousel
            <div className="single-news-container">
              <div className="event" key={newsData[0].id}>
                <h3 className="event_title">{newsData[0].heading}</h3>
                <img
                  src={
                    newsData[0].News_media?.formats?.large?.url
                      ? `http://13.51.85.192:1337${newsData[0].News_media.formats.large.url}`
                      : newsData[0].News_media?.url
                      ? `http://13.51.85.192:1337${newsData[0].News_media.url}`
                      : "/assets/images/home/events_sample.png"
                  }
                  alt={newsData[0].heading}
                  className="event_image"
                />
                <p className="event_description">{newsData[0].description}</p>
                <div className="event_date">
                  <img src="/assets/images/home/calendar.png" alt="calendar" />
                  <span>{formatDate(newsData[0].publishedAt)}</span>
                </div>
              </div>
            </div>
          ) : (
            // Use carousel for multiple items
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              showIndicators={true}
              showStatus={false}
              swipeable={true}
              dynamicHeight={false}
              centerMode={true}
              centerSlidePercentage={100 / slidesToShow}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className="custom-arrow prev"
                  >
                    <span>&#9664;</span>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className="custom-arrow next"
                  >
                    <span>&#9654;</span>
                  </button>
                )
              }
            >
              {newsData.map((newsItem) => {
                const imageUrl = newsItem.News_media?.formats?.large?.url
                  ? `http://13.51.85.192:1337${newsItem.News_media.formats.large.url}`
                  : newsItem.News_media?.url
                  ? `http://13.51.85.192:1337${newsItem.News_media.url}`
                  : "/assets/images/home/events_sample.png";

                return (
                  <div className="event" key={newsItem.id}>
                    <h3 className="event_title">{newsItem.heading}</h3>
                    <img
                      src={imageUrl}
                      alt={newsItem.heading}
                      className="event_image"
                    />
                    <p className="event_description">{newsItem.description}</p>
                    <div className="event_date">
                      <img
                        src="/assets/images/home/calendar.png"
                        alt="calendar"
                      />
                      <span>{formatDate(newsItem.publishedAt)}</span>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}
