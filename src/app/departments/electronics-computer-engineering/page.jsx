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
            item.Department?.toLowerCase() === "er" 
          );
  
          // ✅ Sort images by date (newest first)
          filteredImages.sort((a, b) => new Date(b.date) - new Date(a.date));
  
          // ✅ Extract small image URLs
          let imageUrls = filteredImages.flatMap(item =>
            item.images.map(img => {
              let smallImageUrl = img.formats?.small?.url
                ? `http://${process.env.NEXT_PUBLIC_STRAPI}:1337${img.formats.small.url}`
                : `http://${process.env.NEXT_PUBLIC_STRAPI}:1337${img.url}`; // Fallback if small version doesn't exist
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
          <h1> Electronics and Computer Engineering</h1>
          <p>Innovation • Excellence • Future</p>
        </header>
        
        <div className="cs-dept-hero">
          <div className="cs-dept-hero-image">
            <Image 
              src="/images/er-hero.jpg" 
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
              <p>Sree Buddha College of Engineering stands at the forefront as one of the first institutions in Kerala to introduce a Bachelor's program in Electronics and Computer Engineering. Established in 2023, the Department of Electronics & Computer Engineering has quickly distinguished itself by offering a cutting-edge instructional program, With a sanctioned intake of 30 students.</p>

              <p>The <b>Department of Electronics and Computer Engineering (ER)</b> at Sree Buddha College of Engineering is a centre for blending the core principles of electronics and computer engineering. A team of highly skilled faculty members from both the domains provides students with holistic and interdisciplinary education, integrating hardware and software expertise to prepare them for the rapidly advancing tech industry. This multidisciplinary program, strengthened by robust industry collaborations, equips students with cutting-edge expertise in fields such as AI, IoT, embedded systems, robotics, and cybersecurity. By combining theoretical foundations with hands-on industry exposure, the department is shaping future-ready engineers who can excel in Industry 4.0 and beyond.</p>
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
      <h3 className="highlight-category">Advanced Facilities & Expertise</h3>
      <ul>
        <li>State-of-the-art infrastructure for AI, ML, IoT, Cyber Security, Data Science, and Networking Systems.</li>
        <li>Well-equipped labs to design and develop cutting-edge expertise in emerging technologies.</li>
      </ul>
    </div>
    
    <div className="highlights-card">
      <h3 className="highlight-category">Innovation & Entrepreneurship</h3>
      <ul>
        <li>Thriving ecosystem for innovation, product development, and startup incubation.</li>
        <li>Several successful startups have emerged from the department, fostering entrepreneurship.</li>
      </ul>
    </div>
    
    <div className="highlights-card">
      <h3 className="highlight-category">Industry Collaboration & Training</h3>
      <ul>
        <li>MoUs with leading industries for internships, hands-on training, and industry exposure.</li>
        <li>Skill development workshops and mentorship from industry experts for career enhancement.</li>
      </ul>
    </div>
    
    <div className="highlights-card">
      <h3 className="highlight-category">Research & Development</h3>
      <ul>
        <li>Support for funded student projects and research paper publications.</li>
        <li>Encouragement for students to explore cutting-edge technologies and contribute to research advancements.</li>
      </ul>
    </div>
    
    <div className="highlights-card">
      <h3 className="highlight-category">Student Clubs & Professional Growth</h3>
      <ul>
        <li>Active clubs like the Makers Club and Electronics Technocrats Association (ETA) for technical and non-technical skill development.</li>
        <li>Opportunities to interact with eminent personalities, industry experts, and researchers.</li>
      </ul>
    </div>
    
  </div>
</section>

        
        
<section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-amber-800 pb-3 border-b-2 text-yellow-900 mb-6">
          Department Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Static images instead of API-fetched images */}
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