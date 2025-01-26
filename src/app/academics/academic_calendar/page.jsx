'use client'
import React, { useState } from 'react';
import './style.css';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const pdfFiles = [
    
    
    
    { name: "Academic Calendar 2020-21", path: "/pdfs/document1.pdf" },
    { name: "Academic Calendar 2019-20", path: "/pdfs/document2.pdf" },
    { name: "Academic Calendar 2018-19", path: "/pdfs/document3.pdf" },
    { name: "Academic Calendar 2017-18", path: "/pdfs/document4.pdf" },
    { name: "Academic Calendar 2016-17", path: "/pdfs/document5.pdf" },
    
  ]

  const handleClick = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  const filteredFiles = pdfFiles.filter(pdf =>
    pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Academic Calendars</h1>

      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search calendars..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="calendar-list">
        {filteredFiles.map((pdf, index) => (
          <div
            key={index}
            className="calendar-item"
            onClick={() => handleClick(pdf.path)}
          >
            <i className="far fa-calendar-alt" style={{ marginRight: '10px', color: '#2980b9' }}></i>
            <span>{pdf.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
