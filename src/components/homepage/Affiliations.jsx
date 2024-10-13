import React from "react";
import "@/styles/homepage/affiliations.css"
import aicte_logo from "@/assets/images/home images/aicte logo.png";
import ku_logo from "@/assets/images/home images/ku logo.png";
import ktu_logo from "@/assets/images/home images/ktu logo.png";
import iso_logo from "@/assets/images/home images/iso logo.png";


export default function Affiliations() {
  return (
    <div className="affiliations">
      <h3>Our Affiliations</h3>
      <ul>
        <div className="affiliation-item">
          <li><img src={aicte_logo.src} alt="AICTE Logo" /></li>
          <span>Approved by AICTE New Delhi</span>
        </div>
        
        <div className="affiliation-item">
          <li><img src={ku_logo.src} alt="KU Logo" /></li>
          <span>Affiliated to Kerala University</span>
        </div>
        
        <div className="affiliation-item">
          <li><img src={ktu_logo.src} alt="KTU Logo" /></li>
          <span>Kerala Technological University</span>
        </div>
        
        <div className="affiliation-item">
          <li><img src={iso_logo.src} alt="ISO Logo" /></li>
          <span>ISO 9001-2008 Certified Institution</span>
        </div>
      </ul>
    </div>
  );
}