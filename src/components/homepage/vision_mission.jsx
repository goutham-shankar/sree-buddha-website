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

        <div className="vision" data-aos="fade-up" data-aos-duration="600">
            <h3>VISION</h3>
            <p>To create professionally competent engineers with human values and social commitment.</p>
        </div>
        
        <div className="mission" data-aos="fade-up" data-aos-duration="600">
            <h3>MISSION</h3>
            <p>Offer well balanced curriculum with student-centric approach.</p>
        </div>
      
    </div>
  )
}
