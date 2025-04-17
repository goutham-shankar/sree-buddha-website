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
              Sree Buddha College of Engineering is one of the pioneers in introducing the Bachelor Program for Electronics and Communication Engineering in Kerala. The department of Electronics & Communication Engineering (ECE), started in the year 2002, has carved a niche for itself by offering the most competent instructional programme to the students. At present the sanctioned intake is 60 with a provision of admitting six diploma holders in the third semester under lateral entry scheme. The department also offers M Tech programme in Embedded Systems from the year 2010 onwards. The sanctioned intake is 6.
              </p>
                
              <p>
              The Department of Electronics and Communication Engineering (ECE) at Sree Buddha College of Engineering is dedicated to academic excellence, innovation, and technological advancement. With a team of expert faculty, fully equipped laboratories and Industry collaboration we equip students with the skills and knowledge needed to bridge the gap between the Institute and Industry. The strong partnership with industries and regular hands-on workshops, imparts a strong culture of innovation in design and development of socially relevant and sustainable hardware projects. The research and innovation ecosystem in the department exposes our students into the ever-evolving world of telecommunications, semiconductor technology, IoT, AI-driven automation, robotics, and embedded systems
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