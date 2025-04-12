import React from 'react'
import "../styles/footer.css"

// components/Footer.js
export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li><a href="#">NIRF</a></li>
            <li><a href="#">NBA</a></li>
            <li><a href="#">NAAC</a></li>
            <li><a href="#">AICTE EoA</a></li>
            <li><a href="#">Audit Report</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>College</h3>
          <ul>
            <li><a href="#">Mandatory Disclosure</a></li>
            <li><a href="#">Anti Ragging Cell</a></li>
            <li><a href="#">Corporate Video</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Students</a></li>
            <li><a href="#">Staff</a></li>
            <li><a href="#">SBCE Moodle</a></li>
            <li><a href="#">Grievance Redressal</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Enquiry</h3>
          <ul>
            <li><a href="#">Ms.Sholly Joseph</a></li>
            <li><a href="#">PRO</a></li>
            <li><a href="#">PH:9446014317</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  