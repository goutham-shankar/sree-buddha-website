"use client";
import "@/styles/homepage/scrollbar.css"
import { useRef, useEffect } from 'react';

const ScrollBar = ({ announcements = [] }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  let position = 0;

  useEffect(() => {
    if (announcements.length === 0) return;

    const container = containerRef.current;
    const firstItemWidth = container.firstChild.offsetWidth;

    // Duplicate announcements for smooth infinite scrolling
    container.innerHTML += container.innerHTML;

    const scroll = () => {
      position -= 1;
      container.style.transform = `translateX(${position}px)`;

      // Reset position when the first batch is out of view
      if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // ✅ Improved handling for hover state
  const handleHover = (pause) => {
    if (pause) {
      cancelAnimationFrame(animationRef.current);
    } else {
      animationRef.current = requestAnimationFrame(() => {
        position -= 1;
        containerRef.current.style.transform = `translateX(${position}px)`;
        handleHover(false); // Continue scrolling after restart
      });
    }
  };

  if (announcements.length === 0) return null;

  return (
    <div
      className="announcement-wrapper"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="announcement-list" ref={containerRef}>
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            {announcement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
