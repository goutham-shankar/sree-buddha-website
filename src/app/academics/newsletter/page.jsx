"use client";
import React from "react";
import "./newsletter.css";
import DownloadButton from "@/components/common/DownloadButton";

export default function Newsletter() {
  const pdfLinks = [
    { title: "Bodhi Newsletter Volume -VII, Issue-1", url: "/assets/documents/academics/newsletter1.pdf" },
    { title: "Bodhi Newsletter Volume -VII, Issue-2", url: "/assets/documents/academics/newsletter2.pdf" },
    { title: "Bodhi Newsletter Volume -VIII, Issue-1", url: "/assets/documents/academics/newsletter3.pdf" },
    { title: "Bodhi Newsletter Volume -VIII, Issue-2", url: "/assets/documents/academics/newsletter4.pdf" },
    { title: "Bodhi Newsletter Volume -IX, Issue-1", url: "/assets/documents/academics/newsletter5.pdf" },
    { title: "Bodhi Newsletter Volume -IX, Issue-2", url: "/assets/documents/academics/newsletter6.pdf" },
    { title: "Bodhi Newsletter Volume -X, Issue-1", url: "/assets/documents/academics/newsletter7.pdf" },
    { title: "Bodhi Newsletter Volume -XI, Issue-1", url: "/assets/documents/academics/newsletter8.pdf" },
  ];

  const handlePdfClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="newsl">
      <div className="newsl-intro">
        <h2>Campus Newsletter</h2>
        <img src="/assets/images/academics/newsletter-img1.png" alt="Newsletter" />
      </div>
      <div className="newsl-content">
        <div className="newsl-para">
          <div className="newsl-event-content">
            <p>
              The College newsletter “Bodhi” was started in the year 2010 with two publications per year. 
              The newsletter highlights all the activities of the college, achievements of students and 
              faculty members, publications details, etc. Volume 1 of the newsletter is published in the 
              month of January, and Volume 2 is published in the month of July every year. 
              Newsletter editorial board conducts meetings every year before the publication. 
              The newsletter editorial board consists of members from all departments.
            </p>
          </div>
        </div>
        <div className="newsl-para">
          <h3>Newsletter Editorial Board</h3>
          <br />
          <div className="newsl-event-content">
            <h4>Managing Editors</h4>
            <ul className="editor">
              <li className="editor-list">Prof. K Sasikumar</li>
              <li className="editor-list">Prof. V Prasasd</li>
              <li className="editor-list">Sri. A Sunil Kumar</li>
            </ul>
          </div>
          <div className="newsl-event-content">
            <h4>Chief Editor</h4>
            <ul className="editor">
              <li className="editor-list">Dr K Krishnakumar</li>
            </ul>
          </div>
          <div className="newsl-event-content">
            <h4>Staff Editor</h4>
            <ul className="editor">
              <li className="editor-list">Mr. Prdeep Kumar R (Assistant Professor, HRD)</li>
              <li className="editor-list">Mr. Dhanunath R (Assistant Professor, CSE)</li>
            </ul>
          </div>
          <div className="newsl-event-content">
            <h4>Editorial Board</h4>
            <ul className="editor">
              <li className="editor-list">Ms. Atheena A (Dept.of EEE)</li>
              <li className="editor-list">Ms. Prabhiya P.S (Dept. of BS)</li>
              <li className="editor-list">Ms. Smitha N.K (Dept.of, HRD)</li>
              <li className="editor-list">Ms. Ambika Sekhar (Dept.of, ECE)</li>
              <li className="editor-list">Ms. Namitha Chandran (Dept.of, CE)</li>
              <li className="editor-list">Mr. Asif Muhammed N (Student Coordinator, CSE)</li>
              <li className="editor-list">Mr. Dhanunath R (Assistant Professor, CSE)</li>
            </ul>
          </div>
        </div>
        <div className="newsl-para">
          <div className="newsl-event-content">
            <h4>Bodhi Newsletter Volumes:</h4>
            <ul className="editors">
              {pdfLinks.map((pdf, index) => (
               
                <DownloadButton title = {pdf.title} link = {pdf.url} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
