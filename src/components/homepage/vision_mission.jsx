"use client"

import React, { useState, useEffect } from 'react'
import "@/styles/homepage/vission_mission.css"
import AOS from "aos";
import "aos/dist/aos.css"

export default function VissionMission() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggleAbout = () => {
    setIsAboutExpanded(!isAboutExpanded);
  };

  return (
    <div className="vision_and_mission px-4 md:px-8 py-8">
  <div className="about mb-6" data-aos="fade-up" data-aos-duration="600">
    <p className={`about-text ${isAboutExpanded ? 'expanded' : ''} text-justify text-base md:text-lg`}>
      Sree Buddha College of Engineering, affiliated with APJ Abdul Kalam Technological University, excels in technical education, guided by the teachings of Lord Buddha. The institution nurtures aspiring technocrats and strives to be a model for the world.
    </p>
    <button 
      className="about_us mt-2 text-blue-600 hover:underline"
      onClick={toggleAbout}
      aria-expanded={isAboutExpanded}
    >
      {isAboutExpanded ? 'Read Less' : 'About Us'}
    </button>
  </div>

  <div className="v-m grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="vision" data-aos="fade-up" data-aos-duration="600">
      <h3 className="text-xl font-semibold mb-2">OUR VISION</h3>
      <li className="!text-black text-base">To create professionally competent engineers with human values and social commitment.</li>
    </div>
    
    <div className="mission" data-aos="fade-up" data-aos-duration="600">
      <h3 className="text-xl font-semibold mb-2">OUR MISSION</h3>
      <ul className="list-disc pl-5 text-base space-y-1">
        <li>Offer well balanced curriculum with student-centric approach.</li>
        <li>Encourage students to participate in innovation, lifelong learning and research.</li>
        <li>Impart ethical and human values focusing on rural needs and sustainability.</li>
      </ul>
    </div>
  </div>
</div>

  )
}