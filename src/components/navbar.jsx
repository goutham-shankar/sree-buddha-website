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
        <Link href="/">
          <img src={"/assets/images/sree_buddha_logo.png"} alt="" />
        </Link>
      </div>
      <div className="navbar_right">
        <div className="important_links">
          <a href="#">Internation Admissions</a>
          <a href="#">CareersSBCE</a>
          <a href="#">Fees Payment</a>
          <a href="">University</a>
          {/* <a href="">Result Analysis</a> */}
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
            <span>Departments</span>
            <div className="submenu">
              <ul>
                <Link
                  className="submenu_link"
                  href="/departments/computer-science-engineering/"
                >
                  Computer Science and engineering
                </Link>
                <Link className="submenu_link" href="/departments/electrical-electronics-engineering/">
                  EEE
                </Link>
                <Link className="submenu_link" href="/departments/electronics-communication-engineering">
                  ECE
                </Link>
                <Link className="submenu_link" href="/departments/mechanical-engineering">
                  Mechanical
                </Link>
                <Link className="submenu_link" href="/departments/artificial-intelligence-machine-learning">
                  Computer Science with AI
                </Link>
                <Link className="submenu_link" href="/departments/electronics-computer-engineering">
                  Electronics and Computer Engineering
                </Link>
                <Link className="submenu_link" href="/departments/civil-engineering">
                  Civil Engineering
                </Link>
                <Link className="submenu_link" href="/departments/mathematics-and-basic-sciences">
                  Basic Science and Humanities
                </Link>
                <Link className="submenu_link" href="/departments/food-technology">
                  Food Sciencess
                </Link>
                <Link className="submenu_link" href="/departments/biotechnology-biochemical-engineering">
                  Biotechnology and Biochemical Engineering
                </Link>
              </ul>
            </div>
          </div>

          <div className="navbar_menu">
            <span>Admissions</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  Under Grdaduate
                </Link>
                <Link className="submenu_link" href="">
                  Post Graduate
                </Link>
                <Link className="submenu_link" href="">
                  PHD Research
                </Link>
                <Link className="submenu_link" href="">
                  International Students Admimission
                </Link>
               
              </ul>
            </div>
          </div>

          <div className="navbar_menu">
            <span>Placements</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="">
                  Team
                </Link>
                <Link className="submenu_link" href="">
                  Activities
                </Link>
                <Link className="submenu_link" href="">
                  Recruiters
                </Link>
                <Link className="submenu_link" href="">
                  Placement Details
                </Link>
                <Link className="submenu_link" href="">
                  Contact Us
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
            <span>Facilities</span>
            <div className="submenu">
              <ul>
                <Link className="submenu_link" href="/facilities/cells">
                  Cells and Centers
                </Link>
                <Link className="submenu_link" href="/facilities/library">
                  Central Library{" "}
                </Link>
                <Link className="submenu_link" href="/facilities/hall">
                  Conference hall
                </Link>
                <Link className="submenu_link" href="/facilities/bus">
                  conveyance and bus routes
                </Link>
                <Link className="submenu_link" href="/facilities/reprographic">
                  repographics facilities
                </Link>
                <Link className="submenu_link" href="/facilities/lab">
                  internal Lab
                </Link>
                <Link className="submenu_link" href="/facilities/hostel">
                  hostel{" "}
                </Link>
                <Link className="submenu_link" href="/facilities/canteen">
                  canteen{" "}
                </Link>
                <Link className="submenu_link" href="/facilities/other">
                  other facilities{" "}
                </Link>
              </ul>
            </div>
          </div>

          <div className="navbar_menu">
            <span>Accreditation</span>
            <div className="submenu">
              <ul>
                <div className="submenu_link" href="">
                  NAAC
                  <div className="submenu_2">
                    <ul>
                      <Link href="" className="submenu_2_link">NAAC CYCLE1</Link>
                      <Link href="" className="submenu_2_link">NAAC CYCLE1</Link>
                      <Link href="" className="submenu_2_link">NAAC CYCLE1</Link>
                    </ul>
                  </div>
                </div>

                <Link className="submenu_link" href="">
                  NBA



                </Link>
                <Link className="submenu_link" href="">
                  NIRF
                </Link>
                <Link className="submenu_link" href="">
                  ARIIA
                </Link>
               
              </ul>
            </div>
          </div>

          <div className="navbar_menu">
            <span>Alumini</span>
            <div className="towards_left submenu">
              <ul>
                <Link className="submenu_link" href="">
                    Alumini Registration
                </Link>
                <Link className="submenu_link" href="">
                  Executive Body
                </Link>
                <Link className="submenu_link" href="">
                  IPR
                </Link>
                <Link className="submenu_link" href="">
                  Alumini Reports
                </Link>
            
              </ul>
            </div>
          </div>

 

          <div className="navbar_menu">
            <span>Research</span>
            <div className="towards_left submenu">
              <ul>
                <Link className="submenu_link" href="/research/council">
                  Reserach Coucil
                </Link>
                <Link className="submenu_link" href="/research/projects">
                  Projects
                </Link>
                <Link className="submenu_link" href="/research/ipr">
                  IPR
                </Link>
                <Link className="submenu_link" href="/research/consultancy">
                  Consultency
                </Link>
                {/* <Link className="submenu_link" href="">
                  Oranogram
                </Link> */}
                <Link className="submenu_link" href="/research/conference">
                  Conferences organized
                </Link>
              </ul>
            </div>
          </div>


        


        </div>
      </div>
    </div>
  );
}
