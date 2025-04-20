"use client"

import React from "react";
import "@/styles/homepage/affiliations.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";


export default function Affiliations() {
  return (
    <div className="affiliations_and_cells">
      <div className="affiliations">
        <h3>Our Affiliations</h3>
        <ul >
          <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/aicte logo.png"} alt="AICTE Logo" /></li>
            <span>Approved by AICTE New Delhi</span>
          </div>

          <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/ugc-logo.png"} alt="KU Logo" /></li>
            <span>University Grants Commision of India</span>
          </div>

          <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/ktu logo.png"} alt="KTU Logo" /></li>
            <span>Kerala Technological University</span>
          </div>

          {/* <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/iso logo.png"} alt="ISO Logo" /></li>
            <span>ISO 9001-2008 Certified Institution</span>
          </div> */}
        </ul>
      </div>

      <div className="cells_and_chapters">
        <h3>Cells & Chapters</h3>
        <ul >
          <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/IEEE Blue variant.png"} alt="AICTE Logo" /></li>
            <span></span>
          </div>

          <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/nptel logo.png"} alt="KU Logo" /></li>
            <span></span>
          </div>

          <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/cs logo.png"} alt="KTU Logo" /></li>
            <span></span>
          </div>

          <div className="affiliation-item" data-aos="fade-up">
            <li><img src={"/assets/images/home images/sae logo.png"} alt="ISO Logo" /></li>
            <span></span>
          </div>
        </ul>
      </div>

      {/* <div className="cells_and_chapters">
        <h3>Cells & Chapters</h3>
        <ul>
          <li data-aos="fade-up" ><img src={"/assets/images/home images/IEEE Blue variant.png"} alt="NPTEL Logo" /></li>
          <li data-aos="fade-up" ><img src={"/assets/images/home images/nptel logo.png"} alt="Computer Society Logo" /></li>
          <li data-aos="fade-up" ><img src={"/assets/images/home images/cs logo.png"} alt="SAE Logo" /></li>
          <li data-aos="fade-up" ><img src={"/assets/images/home images/sae logo.png"} alt="IEEE Logo" /></li>
        </ul>
      </div> */}

    </div>
  );
}