"use client";
import React from 'react'
import "./eoa.css"




export default function EoA() {
    // Function to handle PDF redirection
    const handlePdfClick = (url) => {
      window.open(url, '_blank');  // Opens the PDF in a new tab
    };
  
    return (
      <div className='eoa'>
        <h2>AICTE EoA</h2>
        <div className="eoa-ul">
          <div className="eoa-box" onClick={() => handlePdfClick('/documents/EoA%20docs/EOA-Report-2024-2025.pdf')}>
            <h3>EoA 2024-2025</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2023-2024.pdf')}>
            <h3>EoA 2023-2024</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2022-2023.pdf')}>
            <h3>EoA 2022-2023</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2021-2022.pdf')}>
            <h3>EoA 2021-2022</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2020-2021.pdf')}>
            <h3>EoA 2020-2021</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2019-2020.pdf')}>
            <h3>EoA 2019-2020</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2018-2019.pdf')}>
            <h3>EoA 2018-2019</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2017-2018.pdf')}>
            <h3>EoA 2017-2018</h3>
          </div>
          <div className="eoa-box" onClick={() => handlePdfClick('path/to/2016-2017.pdf')}>
            <h3>EoA 2016-2017</h3>
          </div>
        </div>
      </div>
    );
  }
  