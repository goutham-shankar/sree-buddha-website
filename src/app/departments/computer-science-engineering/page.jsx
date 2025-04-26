"use client"

import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from "react";
import './style.css'

export default function ComputerScienceDepartment() {
    // Department building images
    const buildingImages = [
      "/images/cs-dept-building/cs-dept-building.png",
      "/images/cs-dept-building/cs-dept-building2.png",
    ];
    
    const [images, setImages] = useState([]);

    useEffect(() => {
      async function fetchImages() {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI}/api/galleries?populate=*`);
          const data = await response.json();
  
          console.log("API Response:", data); // Debugging output
  
          // ✅ Ensure Department data exists and filter correctly
          let filteredImages = data.data.filter(item => 
            item.Department?.toLowerCase() === "cs" 
          );
  
          // ✅ Sort images by date (newest first)
          filteredImages.sort((a, b) => new Date(b.date) - new Date(a.date));
  
          // ✅ Extract small image URLs
          let imageUrls = filteredImages.flatMap(item =>
            item.images.map(img => {
              let smallImageUrl = img.formats?.small?.url
                ? `${process.env.NEXT_PUBLIC_STRAPI}${img.formats.small.url}`
                : `${process.env.NEXT_PUBLIC_STRAPI}${img.url}`; // Fallback if small version doesn't exist
              return smallImageUrl;
            })
          );
  
          setImages(imageUrls); // Update state
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      }
  
      fetchImages();
    }, []);

    return (
      <div className="cs-dept-container">
        <header className="cs-dept-header">
          <h1>Department of Computer Science Engineering</h1>
          <p>Innovation • Excellence • Future</p>
        </header>
        
        <div className="cs-dept-hero">
          <div className="cs-dept-hero-image">
            <Image 
              src="/images/cs-dept-hero.jpg" 
              alt="Computer Science Students Working Together"
              width={1200}
              height={400}
              priority
            />
          </div>
          <div className="cs-dept-hero-text">
            <h2>Shaping Tomorrow&apos;s Tech Leaders</h2>
            <p>Join our vibrant community of innovators and problem-solvers</p>
          </div>
        </div>
        
        <section className="cs-dept-section">
          <h2 className="cs-dept-section-title">Department Profile</h2>
          <div className="cs-dept-profile-content">
            <div className="cs-dept-profile-text">
              <p>
                Sree Buddha College of Engineering provides world-class infrastructure, state-of-the-art facilities, and an academic 
                ambience that suit the requirements of the dynamic and highly competitive global environment. In this era of 
                Information Technology, this institution offers courses in Computer Science and Engineering with the objective of imparting 
                quality education to equip students with a solid and thorough understanding of the fundamentals and core subjects of Computer Engineering.
              </p>
                
              <p>
                The Department of Computer Science and Engineering was established in the year 2002. At present the sanctioned intake is 60 
                with a provision of admitting six diploma holders in the third semester under lateral entry scheme. The department also offers 
                M.Tech programme specialized in Computer Science and Engineering from the year 2011. The sanctioned intake at present is 18. 
                This department is accredited by NBA since November 2019.
              </p>

              <p>
                The department has well-experienced faculty with postgraduate and doctoral qualifications from prestigious institutions with 
                many publications to their credit. The faculty members regularly update their skills by attending and organizing refresher 
                courses in their areas of specialization.
              </p>
            </div>
          </div>
        </section>
        
        <section className="cs-dept-section">
          <h2 className="cs-dept-section-title">Department Highlights</h2>
          <div className="cs-dept-highlights-content">
            <div className="highlights-card">
              <h3 className="highlight-category">Academic Excellence & Research</h3>
              <ul>
                <li>Accredited by NBA since November 2019</li>
                <li>Faculty with postgraduate and doctoral qualifications from prestigious institutions</li>
                <li>Regular publications in reputed journals and conferences</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Student Organizations</h3>
              <ul>
                <li>Computer Society of India (CSI) student branch</li>
                <li>Association for Computing Machinery (ACM) student branch</li>
                <li>Department association named CYBORG with active student participation</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Industry Connections</h3>
              <ul>
                <li>Management of Remote Centre for IIT Bombay</li>
                <li>College membership of NASSCOM</li>
                <li>Regular invited lectures by experts from Industries and Academia</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Infrastructure & Resources</h3>
              <ul>
                <li>Well-equipped laboratories and computing facilities</li>
                <li>Departmental library in addition to Central library</li>
                <li>Good collection of project reports, seminar reports, journals, and technical magazines</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="cs-dept-gallery">
          <h2 className="cs-dept-section-title">Department Gallery</h2>
          <div className="rowContainer">
            {images.map((src, index) => (
              <div key={index} className='card'>
                <img src={src} alt="Gallery" className='image' />
              </div>
            ))}
          </div>
        </section>
        
        <style jsx>{`
          .cs-dept-container {
            background-color: #E6E6E6;
            color: #333;
            line-height: 1.6;
            font-family: 'Poppins', sans-serif;
            padding: 20px;
            max-width: 100%;
          }
          
          .cs-dept-header {
            padding: 20px 0;
            margin-bottom: 20px;
            border-bottom: 3px solid #845714;
          }
          
          .cs-dept-header h1 {
            color: #845714;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 5px;
          }
          
          .cs-dept-header p {
            font-size: 1.2rem;
          }
          
          .cs-dept-hero {
            height: 400px;
            background-color: #333;
            position: relative;
            overflow: hidden;
            margin: 30px 0;
            border-radius: 10px;
          }
          
          .cs-dept-hero-image {
            width: 100%;
            height: 100%;
          }
          
          .cs-dept-hero-image img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          
          .cs-dept-hero-text {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 30px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            width: 100%;
          }
          
          .cs-dept-hero-text h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }
          
          .cs-dept-section {
            padding: 30px 0;
          }
          
          .cs-dept-section-title {
            color: #845714;
            font-size: 2rem;
            padding-bottom: 10px;
            border-bottom: 2px solid #845714;
            margin-bottom: 20px;
          }
          
          .cs-dept-profile-content {
            display: block;
            width: 100%;
          }
          
          .cs-dept-profile-text {
            font-size: 1.1rem;
          }
          
          .cs-dept-highlights-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .highlights-card {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .highlights-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.15);
          }
          
          .highlight-category {
            color: #845714;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e0e0e0;
          }
          
          .highlights-card ul {
            list-style: none;
            padding-left: 0;
          }
          
          .highlights-card li {
            padding: 8px 0;
            position: relative;
            padding-left: 20px;
          }
          
          .highlights-card li:before {
            content: '';
            position: absolute;
            left: 0;
            top: 16px;
            width: 8px;
            height: 8px;
            background-color: #845714;
            border-radius: 50%;
          }
          
          .cs-dept-gallery {
            padding: 30px 0;
          }
          
          .cs-dept-gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          
          .cs-dept-gallery-item {
            border-radius: 10px;
            overflow: hidden;
            height: 200px;
            transition: transform 0.3s ease;
          }
          
          .cs-dept-gallery-item:hover {
            transform: scale(1.03);
          }
          
          .cs-dept-gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          @media (max-width: 1024px) {
            .cs-dept-highlights-content {
              grid-template-columns: 1fr 1fr;
            }
          }
          
          @media (max-width: 768px) {
            .cs-dept-highlights-content {
              grid-template-columns: 1fr;
            }
            
            .cs-dept-gallery-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          
          @media (max-width: 480px) {
            .cs-dept-gallery-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
}