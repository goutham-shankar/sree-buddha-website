import React from "react";
import "@/styles/homepage/affiliations.css"




export default function Affiliations() {
  return (
    <div className="affiliations">
      <h3>Our Affiliations</h3>
      <ul>
        <div className="affiliation-item">
          <li><img src={"/assets/images/home images/aicte logo.png"} alt="AICTE Logo" /></li>
          <span>Approved by AICTE New Delhi</span>
        </div>
        
        <div className="affiliation-item">
          <li><img src={"/assets/images/home images/ku logo.png"} alt="KU Logo" /></li>
          <span>Affiliated to Kerala University</span>
        </div>
        
        <div className="affiliation-item">
          <li><img src={"/assets/images/home images/ktu logo.png"} alt="KTU Logo" /></li>
          <span>Kerala Technological University</span>
        </div>
        
        <div className="affiliation-item">
          <li><img src={"/assets/images/home images/iso logo.png"} alt="ISO Logo" /></li>
          <span>ISO 9001-2008 Certified Institution</span>
        </div>
      </ul>
    </div>
  );
}