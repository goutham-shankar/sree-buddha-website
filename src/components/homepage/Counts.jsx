"use client";

import React, { useState, useEffect } from "react";
import "@/styles/homepage/counts.css";

export default function Counts() {
  const handleMouseEnter = (e) => {
    const countItem = e.currentTarget.querySelector(".count-number");
    const finalCount = parseInt(e.currentTarget.dataset.count, 10);
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += Math.ceil(finalCount / 50); // Adjust speed
      if (currentCount >= finalCount) {
        currentCount = finalCount;
        clearInterval(interval);
      }
      countItem.textContent = currentCount;
    }, 50); // Speed of counting
  };

  return (
    <div className="counts">
      <ul>
        <li>
          <div className="count-item" data-count="18500" onMouseEnter={handleMouseEnter}>
            <h3>ADMISSIONS</h3>
            <span className="count-number">18500</span>
          </div>
        </li>
        <li>
          <div className="count-item" data-count="1500" onMouseEnter={handleMouseEnter}>
            <h3>FACULTIES</h3>
            <span className="count-number">1500</span>
          </div>
        </li>
        <li>
          <div className="count-item" data-count="50" onMouseEnter={handleMouseEnter}>
            <h3>CELLS & CHAPTERS</h3>
            <span className="count-number">50</span>
          </div>
        </li>
        <li>
          <div className="count-item" data-count="2004" onMouseEnter={handleMouseEnter}>
            <h3>ESTABLISHED</h3>
            <span className="count-number">2004</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
