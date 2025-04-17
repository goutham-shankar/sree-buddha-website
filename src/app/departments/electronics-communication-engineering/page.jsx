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
    
    return (
      <div className="cs-dept-container">
        <header className="cs-dept-header">
          <h1>Department of Electronics and Communication Engineering</h1>
          <p>Innovation • Connectivity • Technology</p>
        </header>
        
        <div className="cs-dept-hero">
          <div className="cs-dept-hero-image">
            <Image 
              src="/images/ece-dept-hero.jpg" 
              alt="Electronics and Communication Students Working Together"
              width={1200}
              height={400}
              priority
            />
          </div>
          <div className="cs-dept-hero-text">
            <h2>Pioneering Communication Technologies</h2>
            <p>Join our innovative community of electronics engineers and innovators</p>
          </div>
        </div>
        
        <section className="cs-dept-section">
          <h2 className="cs-dept-section-title">Department Profile</h2>
          <div className="cs-dept-profile-content">
            <div className="cs-dept-profile-text">
              <p>
                The Department of Electronics and Communication Engineering (ECE) at Sree Buddha College of Engineering was established in 2002. The department currently offers B.Tech in Electronics and Communication Engineering with a sanctioned intake of 120 students, B.Tech ECE with specialization in IoT and Embedded Systems with a sanctioned intake of 60, M.Tech in Communication Systems, and Ph.D. programmes.
              </p>
                
              <p>
                The department is committed to providing cutting-edge education in electronics and communication technologies. Through a comprehensive curriculum, internships, hands-on training, bridge courses, and workshops, students are prepared to meet the evolving demands of the telecommunications, semiconductor, and electronics industries. The department frequently organizes hackathons, faculty development programs, and industry interactions, providing a platform for students and faculty to engage with distinguished researchers and explore emerging trends in communication technologies. Accredited by NBA since November 2019, the department aligns with outcome-based learning and the National Educational Policy to maintain high standards of academic and industry engagement.
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
                <li>Strong faculty expertise in core electronics and communication domains</li>
                <li>Cutting-edge research in emerging technologies like 5G, IoT, Embedded Systems, and Wireless Communications</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Industry Exposure and Research Collaborations</h3>
              <ul>
                <li>Students gain industry insights through seminars, workshops, and internships at leading telecommunications companies, semiconductor firms, and research institutions like ISRO, CDAC, and DRDO</li>
                <li>Strategic partnerships with industries like Qualcomm, Cisco, Nokia, and local tech startups to enhance research and innovation opportunities</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">State-of-the-Art Infrastructure</h3>
              <ul>
                <li>Advanced laboratories for RF Design, Wireless Communications, and Embedded Systems</li>
                <li>High-end communication and signal processing equipment</li>
                <li>Access to industry-standard simulation and design tools like MATLAB, Simulink, and Cadence</li>
              </ul>
            </div>
              
            <div className="highlights-card">
              <h3 className="highlight-category">Skill Development & Student Success</h3>
              <ul>
                <li>Focus on hands-on learning, circuit design competitions, and robotics challenges</li>
                <li>Specialization tracks in IoT, Embedded Systems, Signal Processing, and Communication Technologies</li>
                <li>Strong placement records with top telecommunications, electronics, and semiconductor companies</li>
              </ul>
            </div>
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
              />
            </div>
            <div className="cs-dept-gallery-item">
              <Image 
                src="/images/csimg2.jpg" 
                alt="Hackathon Event"
                width={400}
                height={300}
              />
            </div>
            <div className="cs-dept-gallery-item">
              <Image 
                src="/images/csimg3.jpg" 
                alt="Graduation Ceremony"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }