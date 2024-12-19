"use client";
import React from 'react'
import "./nss.css"

export default function NSS() {
    // Function to handle PDF redirection
    const handlePdfClick = (url) => {
      window.open(url, '_blank');  // Opens the PDF in a new tab
    };
  
    return ( 
      <div className='nss'>
        <h2>NSS</h2>
        <div className="nss-ul">
          <div className="nss-box" onClick={() => handlePdfClick('/assets/documents/cells-chapters/NSS-Report-1.pdf')}>
            <h3>NSS REPORT 2021-22</h3>
          </div>
          <div className="nss-box" onClick={() => handlePdfClick('/assets/documents/cells-chapters/NSS-Report-2.pdf')}>
            <h3>NSS REPORT 2020-21</h3>
          </div>
          <div className="nss-box" onClick={() => handlePdfClick('/assets/documents/cells-chapters/NSS-Report-3.pdf')}>
            <h3>NSS REPORT 2019-20</h3>
          </div>
        </div>
        <div className="nss-content">
            <img src="/assets/images/cells-chapters/nss-1.png" alt="nss-image" />
            <p >NSS volunteers of Sree Buddha College of Engineering Pattoor conducted an awareness campaign on road safety at NSS Boys Higher Secondary School Pandalam </p>
        </div>
       
      </div>
    );
  }
  