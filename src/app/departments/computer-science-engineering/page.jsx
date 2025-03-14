"use client"

import React from 'react'
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../department_style.css"
import Image from 'next/image';



export default function ComputerScienceDepartment() {
    // Department building images
    const buildingImages = [
      "/images/cs-dept-building/cs-dept-building.png",
      "/images/cs-dept-building/cs-dept-building2.png",
      
      
      
      
    ];
    
    return (
      <div className="cs-dept-container">
        <header className="cs-dept-header">
          <h1>Department of Computer Science Engineering</h1>
          <p>Innovation • Excellence • Future</p>
        </header>
        
        <div className="cs-dept-hero">
          <div className="cs-dept-hero-image">
            {/* Replace with your actual image path */}
            <Image 
              src="/images/cs-dept-hero.jpg" 
              alt="Computer Science Students Working Together"
              width={1200}
              height={400}
              layout="responsive"
              priority
            />
          </div>
          <div className="cs-dept-hero-text">
            <h2>Shaping Tomorrow's Tech Leaders</h2>
            <p>Join our vibrant community of innovators and problem-solvers</p>
          </div>
        </div>
        
        <section className="cs-dept-section">
          <h2 className="cs-dept-section-title">Department Profile</h2>
          <div className="cs-dept-profile-content">
            <div className="cs-dept-profile-text">
              <p>The Computer Science Department at our college is dedicated to providing students with a comprehensive education in computer science theory and practice. Our curriculum is designed to keep pace with rapidly evolving technology, preparing students for successful careers in the tech industry.</p>
              <br />
              <p>The department of Computer Science and Engineering was started in Sree Buddha College of Engineering in the year 2002. The department currently offers the programmes B.Tech. in computer science and Engineering with sanctioned intake of 180, B.Tech Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning, sanctioned intake 60, M.Tech. in Computer Science and Engineering, and Ph.D. programmes. The department plays a crucial role in equipping students with current and relevant knowledge in computer Science and Engineering through various opportunities, including internships, hands-on training, bridge courses, add-on courses, and workshops to prepare them to meet the demands of the industry. In addition to promoting academic excellence, the department frequently organizes a variety of activities, including hackathons, faculty development programs, industry interactions, and social events which provides a platform for students and faculty to engage with distinguished researchers and explore emerging trends in computer science. The department is accredited by NBA since November 2019. In alignment with outcome-based learning and the National Educational Policy, the department establishes high standards for its curriculum and industry engagement.</p>
              <br />
              <p>With state-of-the-art laboratories, experienced faculty members, and strong industry connections, we offer an environment that fosters innovation, critical thinking, and practical problem-solving skills. Our graduates are highly sought after by leading tech companies and research institutions.</p>
            </div>
            <div className="cs-dept-profile-image">
              {/* Replace with your actual image path */}
              <Image 
                src="/images/cs-dept-building.jpg" 
                alt="Computer Science Department Building"
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        
        <section className="cs-dept-section">
          <h2 className="cs-dept-section-title">Department Highlights</h2>
          <div className="cs-dept-highlights-content">
            <ul>
              <li className="main-point">Academic Excellence & Research</li>
              <li className="sub-point">Strong faculty expertise in core computing areas </li>
              <li className="sub-point">Cutting-edge research in emerging technologies; like Artificial Intelligence, Internet of Things, Machine Learning and Deep Learning
              </li>
              
              <li className="main-point">Industry Collaboration & Innovation</li>
              <li className="sub-point">Strong partnerships with tech companies for internships, projects, and placements</li>
              <li className="sub-point">Presence of technology incubators and startup ecosystems for entrepreneurship</li>
              
              <li className="main-point">State-of-the-Art Infrastructure</li>
              <li className="sub-point">Well-equipped labs for AI & ML, Deep Learning and IoT</li>
              <li className="sub-point">High-performance computing clusters for research</li>
              <li className="sub-point">Access to industry-grade software, cloud platforms, and simulation tools</li>
              
              <li className="main-point">Skill Development & Student Success</li>
              <li className="sub-point">Focus on hands-on learning, hackathons, and coding competitions</li>
              <li className="sub-point">Specialization tracks in Data Science, Artificial Intelligence, Machine Learning and IoT</li>
              <li className="sub-point">Strong placement records with top global recruiters</li>
              
             
             
             
             
            </ul>
          </div>
        </section>
        
        <section className="cs-dept-gallery">
          <h2 className="cs-dept-section-title">Department Gallery</h2>
          <div className="cs-dept-gallery-grid">
            
            
            
            
            
            
            
            
            
            <div className="cs-dept-gallery-item">
              <Image 
                src="/images/csimg1.jpg" 
                alt="Robotics Competition"
                width={400}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="cs-dept-gallery-item">
              <Image 
                src="/images/csimg2.jpg" 
                alt="Hackathon Event"
                width={400}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="cs-dept-gallery-item">
              <Image 
                src="/images/csimg3.jpg" 
                alt="Graduation Ceremony"
                width={400}
                height={300}
                layout="responsive"
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
            display: grid;
            grid-template-columns: 3fr 1fr;
            gap: 30px;
            align-items: center;
          }
          
          .cs-dept-profile-text {
            font-size: 1.1rem;
          }
          
          .cs-dept-profile-image {
            border-radius: 10px;
            overflow: hidden;
          }
          
          .cs-dept-highlights-content ul {
            list-style: none;
          }
          
          .cs-dept-highlights-content .main-point {
            font-weight: 600;
            margin-top: 15px;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
          }
          
          .cs-dept-highlights-content .main-point::before {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: #845714;
            margin-right: 10px;
          }
          
          .cs-dept-highlights-content .sub-point {
            margin-left: 25px;
            font-size: 1rem;
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
          }
          @media (max-width: 1024px) {
                .cs-dept-profile-content {
                 grid-template-columns: 1.5fr 1fr; /* Slightly reduce text width on smaller desktops */
             }
            }
          @media (max-width: 768px) {
            .cs-dept-profile-content {
              grid-template-columns: 1fr;
            }
            
<<<<<<< HEAD
            .cs-dept-gallery-grid {
              grid-template-columns: 1fr 1fr;
            }
=======
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
>>>>>>> 278c1f3978773ff6902289cc03333f476e6545db
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


















