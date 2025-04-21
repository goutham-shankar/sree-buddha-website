'use client'
import React, { useState, useEffect } from 'react';
import './style.css';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [calendarData, setCalendarData] = useState([]);

  // Fetch the calendar data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI}/api/academic-calenders?populate=*`);
        const data = await response.json();
        setCalendarData(data.data); // Extract data from the response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  const filteredFiles = calendarData
    .map(item => ({
      name: item.Calender_name,
      path: item.Calender[0].url, // Extracting the PDF URL from the response
    }))
    .filter(pdf =>
      pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="calendar-container">
      <h1 className="page_heading2" style={{color:'#73501c'}}>Academic Calendars</h1>

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
