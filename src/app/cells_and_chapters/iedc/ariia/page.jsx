"use client";
import React from 'react'
import "./ariia.css";

export default function ARIIA() {
    const handlePdfClick = (url) => {
        window.open(url, "_blank");
      };
  
    return (
      <div className='ariia'>
        <div className="ariia-intro">
            <h2>ARIIA</h2>         
        </div>
        <div className="ariia-content">
            <div className="ariia-para">
                <h3>Atal Ranking of Institutions on Innovation Achievements (ARIIA)</h3>
                <div className="ariia-event-content">
                    <p>Atal Ranking of Institutions on Innovation Achievements (ARIIA) is an initiative of Ministry of Education (MoE), Govt. of India to systematically rank all major higher educational institutions and universities in India on indicators related to “Innovation and Entrepreneurship Development” amongst students and faculties.</p>
                    <p>ARIIA ranking inspires SBCE to reorient our mind-set and build ecosystems to encourage high quality research, innovation and entrepreneurship. More than quantity, SBCE is focusing on quality of innovations and try to measure the real impact created by these innovations nationally and internationally. Moreover, ARIIA is setting the tone and direction for SBCE for future development for making them globally competitive and in the forefront of innovation.</p>
                    <li className="ariia-list-new" onClick={() =>handlePdfClick("/assets/documents/cells-chapters/ariia-report.pdf")}>ARIIA Report 2019-2020</li>
                </div>
            </div>
        </div>

      </div>
    );
  }