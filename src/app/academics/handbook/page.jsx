'use client'
import React from 'react';
import './style.css';


function Page() {
  const pdfFiles = [
    { name: "Seminar and Project Hand book 2020 - 2021 ", path: "/pdfs/document1.pdf" },
    { name: "College Hand book 2018 - 2019", path: "/pdfs/document2.pdf" },
    { name: "College Hand book 2018 - 2019", path: "/pdfs/document3.pdf" },
    { name: "College Hand book 2018 - 2019", path: "/pdfs/document4.pdf" },
    { name: "College Hand book 2018 - 2019", path: "/pdfs/document5.pdf" },
    { name: "Ktu handbook  for B-Tech students", path: "/pdfs/document6.pdf" },
  ];

  const handleClick = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>Hand book</h1>
      <ul className="pdf-list">
        {pdfFiles.map((pdf, index) => (
          <li
            key={index}
            className="pdf-item"
            onClick={() => handleClick(pdf.path)}
          >
            <i className="far fa-file-pdf" style={{ marginRight: '10px', color: '#e74c3c' }}></i>
            <span style={{ fontFamily: 'Poppins, sans-serif', cursor: 'pointer' }}>{pdf.name}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Page;
