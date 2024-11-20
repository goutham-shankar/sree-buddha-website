"use client";
import React from 'react'
import "./clubs.css"




export default function StudentClubs() {
    // Function to handle PDF redirection
    const handlePdfClick = (url) => {
      window.open(url, '_blank');  // Opens the PDF in a new tab
    };
  
    return ( 
      <div className='club'>
        <h2>Various Cells & Committees</h2>
        <div className="club-ul">
          <div className="club-box" onClick={() => handlePdfClick('/assets/documents/various%20committee/ORIGINAL-DOC1.pdf')}>
            <h3>Various Committees 1</h3>
          </div>
          <div className="club-box" onClick={() => handlePdfClick('/assets/documents/various%20committee/ORIGINAL-DOC2.pdf')}>
            <h3>Various Committees 2</h3>
          </div>
        </div>
      </div>
    );
  }
  