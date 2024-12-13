"use client";
import React from 'react'
import "./niisp.css";

export default function NIISP() {
    const handlePdfClick = (url) => {
        window.open(url, "_blank");
      };
  
    return (
      <div className='niisp'>
        <div className="niisp-intro">
            <h2>NIISP</h2>         
        </div>
        <div className="niisp-content">
            <div className="niisp-para">
                <h3>NATIONAL INNOVATION AND STARTUP POLICY (NISP)</h3>
                <div className="niisp-event-content">
                    <p>The SBCE Innovation and Startup Policy for students and faculty members of SBCE, Pattoor will enable the institute to actively engage students, faculty members and members of staff in innovation and entrepreneurship-related activities. This policy facilitates in bringing clarity in SBCE Startup policy, involvement of stakeholders, support and performance parameters thus enabling the creation of a robust Innovation and Startup ecosystem in the institute. This policy provides guidelines for Intellectual Property ownership, technology licensing and institutional Startup policy, thus enabling the creation of robust innovation and Startup ecosystem across the Institution.</p>
                    <li className="niisp-list-new" onClick={() =>handlePdfClick("/assets/documents/cells-chapters/sbce-niisp.pdf")}>SBCE NISP policy 2020-2021</li>
                </div>
            </div>
        </div>

      </div>
    );
  }