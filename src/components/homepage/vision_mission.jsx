"use client"

import React from 'react'
import "@/styles/homepage/vission_mission.css"

import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from 'react';

export default function VissionMission() {
  useEffect(() => {
    AOS.init({
        once: true,
    //   disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className = "vision_and_mission">
      <div className="about" data-aos="fade-up" data-aos-duration="600">
        {/* <h2>ABOUT US</h2> */}

        <p>Sree Buddha College of Engineering, affiliated with APJ Abdul Kalam Technological University, excels in technical education, guided by the teachings of Lord Buddha. The institution nurtures aspiring technocrats and strives to be a model for the world.</p>
        <button className='about_us'>About Us</button>
      </div>
      <div className="v-m">
        <div className="vision" data-aos="fade-up" data-aos-duration="600">
              <h3>OUR VISION</h3>
              <p>To create professionally competent engineers with human values and social commitment.</p>
        </div>
          
        <div className="mission" data-aos="fade-up" data-aos-duration="600">
              <h3>OUR MISSION</h3>
              <p>Offer well balanced curriculum with student-centric approach.</p>
        </div>
      
      </div>
       
    </div>
  )
}
