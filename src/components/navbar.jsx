"use client";

import React from "react";
import "../styles/navbar.css";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // const [visibleSubMenus, setVisibleSubMenus]  = useState([0,0,0,0,0,0,0,0])

  return (
    <div className="navbar">
      <div className="logo_section">
        <a href="/">
          <img src={"/assets/images/sree_buddha_logo.png"} alt="" />
        </a>
      </div>
      <div className="navbar_right">
        <div className="important_links">
          <a href="#">Admissions</a>
          <a href="#">CareersSBCE</a>
          <a href="#">Fees Payment</a>
          <a href="">University</a>
          <a href="">Result Analysis</a>
        </div>
        <div className="navbar_menus">
          <div className="navbar_menu">
            <span>About Us</span>
            <div className="submenu">
              <ul>
                <a className="submenu_link" href="/about-us/profile">
                  Profile
                </a>
                <Link className="submenu_link" href="">
                  Vision and Mission
                </Link>
                <a className="submenu_link" href="/about-us/management">
                  Management
                </a>
                <Link className="submenu_link" href="">
                  Principal
                </Link>
                <a className="submenu_link" href="/about-us/oronogram">
                  Oranogram
                </a>
                <Link className="submenu_link" href="">
                  Mandatory Disclosure
                </Link>
                <Link className="submenu_link" href="/about-us/Eoa">
                  AICTCE EOA
                </Link>
                <Link className="submenu_link" href="">
                  Student code of conduct and ethics
                </Link>
                <Link className="submenu_link" href="">
                  Internal quality assurance cell
                </Link>
                <Link className="submenu_link" href="">
                  Gallery{" "}
                </Link>
                <Link className="submenu_link" href="">
                  admission and accounts{" "}
                </Link>
                <Link className="submenu_link" href="">
                  PTA{" "}
                </Link>
                <Link className="submenu_link" href="">
                  Sister institutions
                </Link>
                <Link className="submenu_link" href="">
                  contact us
                </Link>
                <Link className="submenu_link" href="/about-us/feedback">
                  feedback
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar_menu">
            <span>Research</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  Reserach Coucil
                </Link>
                <Link className="submenu_link" href="">
                  Projects
                </Link>
                <Link className="submenu_link" href="">
                  IPR
                </Link>
                <Link className="submenu_link" href="">
                  Consultency
                </Link>
                <Link className="submenu_link" href="">
                  Oranogram
                </Link>
                <Link className="submenu_link" href="">
                  Conferences organized
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar_menu">
            <span>Facilities</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  Cells and Centers
                </Link>
                <Link className="submenu_link" href="">
                  Central Library{" "}
                </Link>
                <Link className="submenu_link" href="">
                  Conference hall
                </Link>
                <Link className="submenu_link" href="">
                  conveyance and bus routes
                </Link>
                <Link className="submenu_link" href="">
                  repographics facilities
                </Link>
                <Link className="submenu_link" href="">
                  internal Lab
                </Link>
                <Link className="submenu_link" href="">
                  hostel{" "}
                </Link>
                <Link className="submenu_link" href="">
                  canteen{" "}
                </Link>
                <Link className="submenu_link" href="">
                  other facilities{" "}
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar_menu">
            <span>Cells and Chapters</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  Various Cells and Commities{" "}
                </Link>
                <Link className="submenu_link" href="">
                  IEEE
                </Link>
                <Link className="submenu_link" href="">
                  IE(I)
                </Link>
                <Link className="submenu_link" href="">
                  SAE India
                </Link>
                <Link className="submenu_link" href="">
                  NSS
                </Link>
                <Link className="submenu_link" href="">
                  SAC
                </Link>
                <Link className="submenu_link" href="">
                  Virual Lab{" "}
                </Link>
                <Link className="submenu_link" href="">
                  IEDC
                </Link>
                <Link className="submenu_link" href="">
                  NPTEL
                </Link>
                <Link className="submenu_link" href="">
                  IIT-remote center
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar_menu">
            <span>Accreditation</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  Various Cells and Commities{" "}
                </Link>
                <Link className="submenu_link" href="">
                  IEEE
                </Link>
                <Link className="submenu_link" href="">
                  IE(I)
                </Link>
                <Link className="submenu_link" href="">
                  SAE India
                </Link>
                <Link className="submenu_link" href="">
                  NSS
                </Link>
                <Link className="submenu_link" href="">
                  SAC
                </Link>
                <Link className="submenu_link" href="">
                  Virual Lab{" "}
                </Link>
                <Link className="submenu_link" href="">
                  IEDC
                </Link>
                <Link className="submenu_link" href="">
                  NPTEL
                </Link>
                <Link className="submenu_link" href="">
                  IIT-remote center
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar_menu">
            <span>Academics</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  advisory system
                </Link>
                <Link className="submenu_link" href="">
                  acadamic calendar
                </Link>
                <Link className="submenu_link" href="">
                  proffetinal bodies
                </Link>
                <Link className="submenu_link" href="">
                  handbook{" "}
                </Link>
                <Link className="submenu_link" href="">
                  NSS
                </Link>
                <Link className="submenu_link" href="">
                  syllubus{" "}
                </Link>
                <Link className="submenu_link" href="">
                  campus newsletter
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar_menu">
            <span>Autonomous</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  conferments
                </Link>
                <Link className="submenu_link" href="">
                  governing body
                </Link>
                <Link className="submenu_link" href="">
                  academic council
                </Link>
                <Link className="submenu_link" href="">
                  Finance commitee
                </Link>
                <Link className="submenu_link" href="">
                  Board of studies
                </Link>
                <Link className="submenu_link" href="">
                  regulations{" "}
                </Link>
                <Link className="submenu_link" href="">
                  acadamic calandar
                </Link>
                <Link className="submenu_link" href="">
                  Examinations cell
                </Link>
                <Link className="submenu_link" href="">
                  curriculam and syllbus
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar_menu">
            <span>Departments</span>
            <div className="submenu">
              <ul>
                <Link
                  className="submenu_link"
                  href="/departments/computer-science-engineering/"
                >
                  Computer Science and engineering
                </Link>
                <Link className="submenu_link" href="">
                  EEE
                </Link>
                <Link className="submenu_link" href="">
                  ECE
                </Link>
                <Link className="submenu_link" href="">
                  Mechanical
                </Link>
                <Link className="submenu_link" href="">
                  Computer Science with AI
                </Link>
                <Link className="submenu_link" href="">
                  Electronics and Computer Engineering
                </Link>
                <Link className="submenu_link" href="">
                  Basic Science and Humanities
                </Link>
                <Link className="submenu_link" href="">
                  Food Science
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
