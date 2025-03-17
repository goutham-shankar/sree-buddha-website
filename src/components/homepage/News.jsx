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

import { useEffect, useState } from "react";

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default 3 slides for desktop

  useEffect(() => {
    // Fetch news data
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "http://13.51.85.192:1337/api/newss?populate=News_media"
        );
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched news data:", data.data); // Log the fetched data
        setNewsData(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news data:", err);
        setError(err.message);
        setLoading(false);
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
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  // Function to render news items
  const renderNewsItems = () => {
    if (newsData.length === 0) {
      // If no news data, show a placeholder
      return (
        <div className="event">
          <h3 className="event_title">No News Available</h3>
          <div className="event_image_div">
            <img
              src="/assets/images/home/events_sample.png"
              alt=""
              className="event_image"
            />
            
          </div>
          <p className="event_description">Check back later for updates.</p>
          <div className="event_date">
            <img src="/assets/images/home/calendar.png" alt="" />
            <span>Today</span>
          </div>
        </div>
      );
    }

    // Map through the actual news items
    return newsData.map((newsItem, index) => {
      console.log(index)
      // Get the large format image URL if available
      const imageUrl = newsItem.News_media?.formats?.large?.url
        ? `http://13.51.85.192:1337${newsItem.News_media.formats.large.url}`
        : newsItem.News_media?.url
          ? `http://13.51.85.192:1337${newsItem.News_media.url}`
          : "/assets/images/home/events_sample.png";

      return (
        <div className="event" key={newsItem.id}>
          <h3 className="event_title">{newsItem.heading}</h3>
          <div className="event_image_div">
            <img src={imageUrl} alt={newsItem.heading} className="event_image" />
            {/* <div className="image_div_gradient"></div> */}
          </div>
          <p className="event_description">{newsItem.description}</p>
          <div className="event_date">
            <img src="/assets/images/home/calendar.png" alt="calendar" />
            <span>{formatDate(newsItem.publishedAt)}</span>
          </div>
        </div>
      );
    });
  };

  if (loading) {
    return <div className="carousal_section loading">Loading news...</div>;
  }

  if (error) {
    return (
      <div className="carousal_section error">Error loading news: {error}</div>
    );
  }

  // Modify carousel settings based on the number of news items
  const centerMode = newsData.length > 1;
  const showArrows = newsData.length > 1;

  return (
    <div className="carousal_section">
      <div className="events_container">
        <div className="events_title_area">
          <span className="event_left_border"></span>
          <h3>NEWS</h3>
          <a href="" className="events_know_more">
            KNOW MORE
          </a>
        </div>

        <div className="carousal_container">
          {newsData.length === 1 ? (
            // If there's only one news item, don't use the carousel
            <div className="single-news-container">{renderNewsItems()}</div>
          ) : (
            // Use carousel for multiple items
            <Carousel
              // showThumbs={true}
              // infiniteLoop={newsData.length > 0}
              showIndicators={newsData.length > 1}
              showStatus={false}
              swipeable
              dynamicHeight={false}
              centerMode={centerMode}
              centerSlidePercentage={centerMode ? 100 / slidesToShow : 100}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev &&
                showArrows && (
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
                hasNext &&
                showArrows && (
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
              {renderNewsItems()}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}
