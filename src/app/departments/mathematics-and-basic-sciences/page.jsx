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
            item.Department?.toLowerCase() === "bsh"
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
          <h1> Mathematics & Basic Sciences Department</h1>
          <p>Innovation • Excellence • Future</p>
        </header>
        
        <div className="cs-dept-hero">
          <div className="cs-dept-hero-image">
            <Image 
              src="/images/bsh-hero.jpg" 
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
              The department with its vibrant and dynamic faculty under the strong leadership of R.Pradeep Kumar, HOD of Mathematics & Basic Sciences serves as one of the pioneering departments of the college. The department has well experienced faculties with appropriate qualifications from prestigious institutions. The faculty members regularly update their skills by attending refresher courses, seminars, workshops etc.The department offers subjects such as Mathematics, Physics and Chemistry which strive to equip students with relevant skills required to excel in engineering.</p>
              <br />
              
            </div>
            {/* <div className="cs-dept-profile-images">
              {buildingImages.map((img, index) => (
                <div key={index} className="cs-dept-building-image">
                  <Image 
                    src={img} 
                    alt={`Computer Science Department Building ${index + 1}`}
                    width={400}
                    height={300}
                  />
                </div>
              ))}
            </div> */}
          </div>
        </section>
        
        <section className="cs-dept-section">
          <h2 className="cs-dept-section-title">Department Highlights</h2>
          <div className="cs-dept-highlights-content">
            <div className="highlights-card">
              <h3 className="highlight-category">Academic Excellence & Faculty</h3>
              <ul>
                <li>Highly qualified faculty from prestigious institutions with diverse specializations</li>
                <li>Regular faculty development programs and continuous professional upgrading</li>
                <li>Strong emphasis on foundational concepts critical for engineering education</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Teaching & Learning Methodologies</h3>
              <ul>
                <li>Interactive teaching with modern pedagogical approaches and digital tools</li>
                <li>Focus on applied learning that connects theory to engineering applications</li>
                <li>Personalized mentoring and remedial coaching for struggling students</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Laboratory Infrastructure</h3>
              <ul>
                <li>Well-equipped Physics labs with modern experimental setups</li>
                <li>State-of-the-art Chemistry labs with safety protocols and advanced instruments</li>
                <li>Computing facilities for mathematical modeling and simulation</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Research & Beyond Curriculum</h3>
              <ul>
                <li>Research initiatives in applied mathematics, materials science, and technical communication</li>
                <li>Interdisciplinary approach connecting basic sciences to engineering challenges</li>
                <li>Special focus on developing soft skills, communication abilities, and professional ethics</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-10">
                        <h2 className="text-3xl font-bold text-amber-800 pb-3 border-b-2 text-yellow-900 mb-6">
                          Department Gallery
                        </h2>
                
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {/* Conditionally render images */}
                          {images.length > 0 ? (
                            images.map((imgSrc, index) => (
                              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                                <Image
                                  src={imgSrc}
                                  alt={`CE Department Image ${index + 1}`}
                                  width={400}
                                  height={300}
                                  className="w-full h-48 object-cover"
                                />
                              </div>
                            ))
                          ) : (
                            <>
                              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                                <Image
                                  src="/images/csimg2.jpg"
                                  alt="CS Department Building Front View"
                                  width={400}
                                  height={300}
                                  className="w-full h-48 object-cover"
                                />
                              </div>
                              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                                <Image
                                  src="/images/csimg1.jpg"
                                  alt="CS Department Seminar Hall"
                                  width={400}
                                  height={300}
                                  className="w-full h-48 object-cover"
                                />
                              </div>
                            </>
                          )}
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
            // display: grid;
            // grid-template-columns: 3fr 2fr;
            // gap: 30px;
            align-items: start;
          }
          
          .cs-dept-profile-text {
            font-size: 1.1rem;
          }
          
          /* Vertical building images */
          .cs-dept-profile-images {
            display: flex;
            flex-direction: column;
            gap: 15px;
            // position: sticky;
            top: 20px;
          }
          
          .cs-dept-building-image {
            border-radius: 10px;
            overflow: hidden;
            // box-shadow: 0 3px 8px rgba(0,0,0,0.1);
          }
          
          .cs-dept-building-image img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 10px;
          }
          
          /* Highlights Cards */
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
            .cs-dept-profile-content {
              grid-template-columns: 1.5fr 1fr;
            }
            
            .cs-dept-highlights-content {
              grid-template-columns: 1fr 1fr;
            }
          }
          
          @media (max-width: 768px) {
            .cs-dept-profile-content {
              grid-template-columns: 1fr;
            }
            
            .cs-dept-highlights-content {
              grid-template-columns: 1fr;
            }
            
            .cs-dept-gallery-grid {
              grid-template-columns: 1fr 1fr;
            }
            
            .cs-dept-profile-images {
              position: static;
              margin-top: 20px;
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