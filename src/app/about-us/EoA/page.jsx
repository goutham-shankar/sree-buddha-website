'use client';
import React, { useState, useEffect } from 'react';
import './eoa.css';

function Page() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const API_URL = `${process.env.NEXT_PUBLIC_STRAPI}/api/eoas?populate=*`;
  
  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Map the response to extract handbook names and PDF URLs
        const files = data.data.map((item) => ({
          name: item.heading,
          path: `${process.env.NEXT_PUBLIC_STRAPI}/${item.EoA_pdf[0].url}`, // Full URL for the PDF
        }));

        setPdfFiles(files);
      } catch (error) {
        console.error('Error fetching PDF files:', error);
      }
    };

    fetchPdfFiles();
  }, [API_URL]); // Added API_URL to the dependency array

  const handleClick = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'left', fontFamily: 'Poppins, sans-serif', color: '#73501c' }}>
        AICTE&nbsp; EoA
      </h1>
      <hr />
      <br />
      <ul className="pdf-list">
        {pdfFiles.map((pdf, index) => (
          <li
            key={index}
            className="pdf-item"
            onClick={() => handleClick(pdf.path)}
          >
            <i className="far fa-file-pdf" style={{ marginRight: '10px', color: '#e74c3c' }}></i>
            <span style={{ fontFamily: 'Poppins, sans-serif', cursor: 'pointer' }}>
              {pdf.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;