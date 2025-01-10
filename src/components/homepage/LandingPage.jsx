"use client"

import React from 'react'
import "@/styles/homepage/landing_page.css"

import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css"


export default function LandingPage() {

  useEffect(() => {
    AOS.init({
        once: true,
    //   disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="landing_page">
      {/* <img className="college_background" src={"/assets/images/sree_buddha_college_image1.png"} alt="" /> */}
      <video className="college_background" loop autoPlay muted>
      <source src="/assets/sbce-home.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>

      <div className="landing_page_content">
        <h3 className="landing_page_title1" data-aos="fade-right" data-aos-duration="600">SREE BUDDHA</h3>
        <h3 className="landing_page_title2" data-aos="fade-right" data-aos-duration="600">College Of Engineering , Pattoor</h3>
        <h3 className="landing_page_title3" data-aos="fade-right" data-aos-duration="600" >AUTONOMOUS</h3>
      </div>
    </div>
  )
}
