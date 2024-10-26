"use client";

import React, { useState } from "react";
import "@/styles/navbar_mobile.css";
import Link from "next/link";

export default function NavbarMobile() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [visibleSubMenus, setVisibleSubMenus] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    function toggleSubmenu(menu_number) {
        let temp = [...visibleSubMenus];
        temp[menu_number] = temp[menu_number] === 0 ? 1 : 0;
        setVisibleSubMenus(temp);
    }

    const maxHeight = "700px";

    return (
        <div className="navbar_mobile">
            <div className="logo_section">
                <img src={"/assets/images/sree_buddha_logo.png"} alt="Logo" />
            </div>

            <div className="menu_icon" onClick={() => setSidebarVisible(!sidebarVisible)}>
                <span className={`bar1 ${sidebarVisible ? "bar1_close" : ""}`}></span>
                <span className={`bar2 ${sidebarVisible ? "bar2_close" : ""}`}></span>
                <span className={`bar3 ${sidebarVisible ? "bar3_close" : ""}`}></span>
            </div>

            <div className="sidebar" style={{ right: sidebarVisible ? "0%" : "-100%" }}>
                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(0)}>About Us</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[0] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="/about-us/profile">Profile</Link>
                            <Link className="sidebar_submenu_link" href="">Vision and Mission</Link>
                            <Link className="sidebar_submenu_link" href="/about-us/management">Management</Link>
                            <Link className="sidebar_submenu_link" href="">Principal</Link>
                            <Link className="sidebar_submenu_link" href="/about-us/oronogram">Oranogram</Link>
                            <Link className="sidebar_submenu_link" href="">Mandatory Disclosure</Link>
                            <Link className="sidebar_submenu_link" href="">AICTCE EOA</Link>
                            <Link className="sidebar_submenu_link" href="">Student code of conduct and ethics</Link>
                            <Link className="sidebar_submenu_link" href="">Internal quality assurance cell</Link>
                            <Link className="sidebar_submenu_link" href="">Gallery</Link>
                            <Link className="sidebar_submenu_link" href="">Admission and Accounts</Link>
                            <Link className="sidebar_submenu_link" href="">PTA</Link>
                            <Link className="sidebar_submenu_link" href="">Sister Institutions</Link>
                            <Link className="sidebar_submenu_link" href="">Contact Us</Link>
                            <Link className="sidebar_submenu_link" href="">Feedback</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />

                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(1)}>Research</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[1] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="">Research Council</Link>
                            <Link className="sidebar_submenu_link" href="">Projects</Link>
                            <Link className="sidebar_submenu_link" href="">IPR</Link>
                            <Link className="sidebar_submenu_link" href="">Consultancy</Link>
                            <Link className="sidebar_submenu_link" href="">Oranogram</Link>
                            <Link className="sidebar_submenu_link" href="">Conferences Organized</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />

                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(2)}>Facilities</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[2] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="">Cells and Centers</Link>
                            <Link className="sidebar_submenu_link" href="">Central Library</Link>
                            <Link className="sidebar_submenu_link" href="">Conference Hall</Link>
                            <Link className="sidebar_submenu_link" href="">Conveyance and Bus Routes</Link>
                            <Link className="sidebar_submenu_link" href="">Reprographics Facilities</Link>
                            <Link className="sidebar_submenu_link" href="">Internal Lab</Link>
                            <Link className="sidebar_submenu_link" href="">Hostel</Link>
                            <Link className="sidebar_submenu_link" href="">Canteen</Link>
                            <Link className="sidebar_submenu_link" href="">Other Facilities</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />

                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(3)}>Cells and Chapters</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[3] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="">Various Cells and Committees</Link>
                            <Link className="sidebar_submenu_link" href="">IEEE</Link>
                            <Link className="sidebar_submenu_link" href="">IE(I)</Link>
                            <Link className="sidebar_submenu_link" href="">SAE India</Link>
                            <Link className="sidebar_submenu_link" href="">NSS</Link>
                            <Link className="sidebar_submenu_link" href="">SAC</Link>
                            <Link className="sidebar_submenu_link" href="">Virtual Lab</Link>
                            <Link className="sidebar_submenu_link" href="">IEDC</Link>
                            <Link className="sidebar_submenu_link" href="">NPTEL</Link>
                            <Link className="sidebar_submenu_link" href="">IIT-Remote Center</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />

                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(4)}>Accreditation</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[4] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="">Various Cells and Committees</Link>
                            <Link className="sidebar_submenu_link" href="">IEEE</Link>
                            <Link className="sidebar_submenu_link" href="">IE(I)</Link>
                            <Link className="sidebar_submenu_link" href="">SAE India</Link>
                            <Link className="sidebar_submenu_link" href="">NSS</Link>
                            <Link className="sidebar_submenu_link" href="">SAC</Link>
                            <Link className="sidebar_submenu_link" href="">Virtual Lab</Link>
                            <Link className="sidebar_submenu_link" href="">IEDC</Link>
                            <Link className="sidebar_submenu_link" href="">NPTEL</Link>
                            <Link className="sidebar_submenu_link" href="">IIT-Remote Center</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />

                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(5)}>Academics</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[5] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="">Advisory System</Link>
                            <Link className="sidebar_submenu_link" href="">Academic Calendar</Link>
                            <Link className="sidebar_submenu_link" href="">Professional Bodies</Link>
                            <Link className="sidebar_submenu_link" href="">Handbook</Link>
                            <Link className="sidebar_submenu_link" href="">NSS</Link>
                            <Link className="sidebar_submenu_link" href="">Syllabus</Link>
                            <Link className="sidebar_submenu_link" href="">Campus Newsletter</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />

                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(6)}>Autonomous</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[6] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="">Conferments</Link>
                            <Link className="sidebar_submenu_link" href="">Governing Body</Link>
                            <Link className="sidebar_submenu_link" href="">Academic Council</Link>
                            <Link className="sidebar_submenu_link" href="">Finance Committee</Link>
                            <Link className="sidebar_submenu_link" href="">Board of Studies</Link>
                            <Link className="sidebar_submenu_link" href="">Faculty Norms</Link>
                            <Link className="sidebar_submenu_link" href="">Various Committees</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />

                <div className="sidebar_menu">
                    <span onClick={() => toggleSubmenu(7)}>Examination</span>
                    <div className="sidebar_submenu" style={{ maxHeight: visibleSubMenus[7] ? maxHeight : "0px" }}>
                        <ul>
                            <Link className="sidebar_submenu_link" href="">General Examination Rules</Link>
                            <Link className="sidebar_submenu_link" href="">Application for Certificates</Link>
                            <Link className="sidebar_submenu_link" href="">Circulars</Link>
                        </ul>
                    </div>
                </div>
                <hr width="100%" size="2" />
            </div>

            {/* Watermark with conditional class */}
            <div className={`watermark ${sidebarVisible ? "watermark-active" : ""}`}>
                <img src="assets/images/sree_buddha_logo.png" alt="Watermark" className="watermark-image" />
            </div>
        </div>
    );
}
