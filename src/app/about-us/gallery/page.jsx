"use client"
import React, { useState } from "react";
import "./page.css";

const ImageGallery = () => {
  const images = [
    "/assets/images/gallery/008.jpg",
    "/assets/images/gallery/2-1.jpg",
    "/assets/images/gallery/005.jpg",
    "/assets/images/gallery/0011.jpg",
    "/assets/images/gallery/0016.jpg",
    "/assets/images/gallery/thumbs_334A8233.jpg",
    "/assets/images/gallery/thumbs_334A8243-copy.jpg",
    "/assets/images/gallery/thumbs_334A8342.jpg",
    "/assets/images/gallery/thumbs_334A8375.jpg",
    "/assets/images/gallery/thumbs_334A8405-copy.jpg",
    "/assets/images/gallery/thumbs_334A8418-copy.jpg",
    "/assets/images/gallery/thumbs_334A8462.jpg",
    "/assets/images/gallery/thumbs_334A8522.jpg",
    "/assets/images/gallery/thumbs_334A8536.jpg",
    "/assets/images/gallery/thumbs_334A9128.jpg",
    "/assets/images/gallery/thumbs_334A9153.jpg",
    "/assets/images/gallery/thumbs_334A9153-NNNN.jpg",
    "/assets/images/gallery/thumbs_334A9181-copy.jpg",
    "/assets/images/gallery/thumbs_334A9201.jpg",
    "/assets/images/gallery/thumbs_334A9208-copy.jpg",
    "/assets/images/gallery/thumbs_334A9213.jpg",
    "/assets/images/gallery/thumbs_334A9286.jpg",
    "/assets/images/gallery/thumbs_334A9311.jpg",
    "/assets/images/gallery/thumbs_334A9332.jpg",
    "/assets/images/gallery/422d603e-3f6c-4402-a863-ff8e5bd512ae.jpeg",
    "/assets/images/gallery/mou.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="page">
      <div className="page_heading">Gallery</div> 
      <hr />
    <div className="image-gallery">
      <div className="slider-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default ImageGallery;
