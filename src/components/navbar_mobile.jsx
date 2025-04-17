"use client";

import React, { useState } from "react";
import "@/styles/navbar_mobile.css";
import Link from "next/link";
import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";


export default function NavbarMobile() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [visibleSubMenus, setVisibleSubMenus] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

    function toggleSubmenu(menu_link_index) {
        // let temp = [...visibleSubMenus];
        // console.log(link_map[menu_link_index].visible)
        let temp = [...link_map]
        if (temp[menu_link_index].visible) {
            // console.log("visible")
            temp[menu_link_index].visible = false
        } else {
            temp[menu_link_index].visible = true
        }
        setLinkMap(temp);
    }

    function toggleSubmenu2(index1, index2) {

        let temp = [...link_map]
        // console.log(temp[index1].links[index2])
        if (temp[index1].links[index2].visible) {
            temp[index1].links[index2].visible = false
        } else {
            temp[index1].links[index2].visible = true
        }
        setLinkMap(temp)

    }

    const maxHeight = "700px";

    const [link_map, setLinkMap] = useState([
        {
            name: "About Us",
            visible: false,
            links: [
                { name: "Profile", link: "/about-us/profile", visible: false },
                { name: "Vision and Mission", link: "/about-us/vision_and_mission", visible: false },
                { name: "Management", link: "/about-us/management", visible: false },
                { name: "Principal", link: "/about-us/principal", visible: false },
                { name: "Oranogram", link: "/about-us/oronogram", visible: false },
                { name: "Mandatory Disclosure", link: "/about-us/mandatory_disclosure", visible: false },
                { name: "AICTE EOA", link: "/about-us/EoA", visible: false },
                { name: "Student Code of Conduct and Ethics", link: "/about-us/student_code_of_conduct", visible: false },
                { name: "Internal Quality Assurance Cell", link: "/about-us/iqac", visible: false },
                { name: "Gallery", link: "/about-us/gallery", visible: false },
                { name: "Admission and Accounts", link: "/about-us/admission_and_accounts", visible: false },
                { name: "PTA", link: "/about-us/pta", visible: false },
                { name: "Sister Institutions", link: "/about-us/sister_institutions", visible: false },
                { name: "Contact Us", link: "/about-us/contact_us", visible: false },
                { name: "Feedback", link: "/about-us/feedback", visible: false },
            ],
        },
        {
            name: "Autonomous",
            visible: false,
            links: [
                { name: "About Autonomy", link: "/autonomous/about_autonomy",visible:false },

                { name: "Conferments", link: "/autonomous/conferments", visible: false },
                { name: "Governing Body", link: "/autonomous/governing_body", visible: false },
                { name: "Academic Council", link: "/autonomous/academic_council", visible: false },
                { name: "Finance Committee", link: "/autonomous/finance_committee", visible: false },
                { name: "Board of Studies", link: "/autonomous/board_of_studies", visible: false },
                { name: "Regulations", link: "/autonomous/regulations", visible: false },
                { name: "Academic Calendar", link: "/autonomous/academic_calendar", visible: false },
                { name: "Examinations Cell", link: "/autonomous/examinations_cell", visible: false },
                { name: "Curriculum and Syllabus", link: "/autonomous/curriculum_and_syllabus", visible: false },
            ],
        },
        {
            name: "Academics",
            visible: false,
            links: [
                { name: "Advisory System", link: "/academics/advisory_system", visible: false },
                { name: "Academic Calendar", link: "/academics/academic_calendar", visible: false },
                { name: "Professional Bodies", link: "/academics/professional_bodies", visible: false },
                { name: "Handbook", link: "/academics/handbook", visible: false },
                { name: "NSS", link: "/academics/nss", visible: false },
                { name: "Syllabus", link: "/academics/syllabus", visible: false },
                { name: "Campus Newsletter", link: "/academics/campus_newsletter", visible: false },
            ],
        },
        {
            name: "Departments",
            visible: false,
            links: [
                { name: "Computer Science and Engineering", link: "/departments/computer-science-engineering", visible: false },
                { name: "EEE", link: "/departments/electrical-electronics-engineering", visible: false },
                { name: "ECE", link: "/departments/electronics-communication-engineering", visible: false },
                { name: "Mechanical", link: "/departments/mechanical-engineering", visible: false },
                { name: "Computer Science with AI", link: "/departments/artificial-intelligence-machine-learning", visible: false },
                { name: "Electronics and Computer Engineering", link: "/departments/electronics-computer-engineering", visible: false },
                { name: "Civil Engineering", link: "/departments/civil-engineering", visible: false },
                { name: "Basic Science and Humanities", link: "/departments/mathematics-and-basic-sciences", visible: false },
                { name: "Food Sciences", link: "/departments/food-technology", visible: false },
                { name: "Biotechnology and Biochemical Engineering", link: "/departments/biotechnology-biochemical-engineering", visible: false },
            ],
        },
        {
            name: "Admissions",
            visible: false,
            links: [
                { name: "Undergraduate", link: "/admissions/undergraduate", visible: false },
                { name: "Postgraduate", link: "/admissions/postgraduate", visible: false },
                { name: "PhD Research", link: "/admissions/phd_research", visible: false },
                { name: "International Students Admission", link: "/admissions/international_students", visible: false },
            ],
        },
        {
            name: "Placements",
            visible: false,
            links: [
                { name: "Team", link: "/placements/team", visible: false },
                { name: "Activities", link: "/placements/activities", visible: false },
                { name: "Recruiters", link: "/placements/recruiters", visible: false },
                { name: "Placement Details", link: "/placements/placement_details", visible: false },
                { name: "Contact Us", link: "/placements/contact_us", visible: false },
            ],
        },
        {
            name: "Cells and Chapters",
            visible: false,
            links: [
                { name: "Various Cells and Committees", link: "/cells_and_chapters/various_cells", visible: false },
                { name: "IEEE", link: "/cells_and_chapters/ieee", visible: false },
                { name: "IE(I)", link: "/cells_and_chapters/ie_i", visible: false },
                { name: "SAE India", link: "/cells_and_chapters/sae_india", visible: false },
                { name: "NSS", link: "/cells_and_chapters/nss", visible: false },
                { name: "SAC", link: "/cells_and_chapters/sac", visible: false },
                { name: "Virtual Lab", link: "/cells_and_chapters/virtual_lab", visible: false },
                { name: "IEDC", link: "/cells_and_chapters/iedc", visible: false },
                { name: "NPTEL", link: "/cells_and_chapters/nptel", visible: false },
                { name: "IIT Remote Center", link: "/cells_and_chapters/iit_remote_center", visible: false },
            ],
        },
        {
            name: "Facilities",
            visible: false,
            links: [
                { name: "Cells and Centers", link: "/facilities/cells", visible: false },
                { name: "Central Library", link: "/facilities/library", visible: false },
                { name: "Conference Hall", link: "/facilities/hall", visible: false },
                { name: "Conveyance and Bus Routes", link: "/facilities/bus", visible: false },
                { name: "Reprographics Facilities", link: "/facilities/reprographic", visible: false },
                { name: "Internal Lab", link: "/facilities/lab", visible: false },
                { name: "Hostel", link: "/facilities/hostel", visible: false },
                { name: "Canteen", link: "/facilities/canteen", visible: false },
                { name: "Other Facilities", link: "/facilities/other", visible: false },
            ],
        },
        {
            name: "Accreditation",
            visible: false,
            links: [
                {
                    name: "NAAC",
                    visible: false,
                    links: [
                        { name: "Cycle1", link: "/accreditation/NAAC/Cycle1", visible: false },
                        { name: "Cycle2", link: "/accreditation/NAAC/Cycle2", visible: false },
                        { name: "Cycle3", link: "/accreditation/NAAC/Cycle3", visible: false },
                    ],
                },
                { name: "NBA", link: "/accreditation/nba", visible: false },
                { name: "NIRF", link: "/accreditation/nirf", visible: false },
                { name: "ARIIA", link: "/accreditation/ariia", visible: false },
            ],
        },
        {
            name: "Alumni",
            visible: false,
            links: [
                { name: "Alumni Registration", link: "/alumni/registration", visible: false },
                { name: "Executive Body", link: "/alumni/executive_body", visible: false },
                { name: "IPR", link: "/alumni/ipr", visible: false },
                { name: "Alumni Reports", link: "/alumni/reports", visible: false },
            ],
        },
        {
            name: "Research",
            visible: false,
            links: [
                { name: "Research Council", link: "/research/council", visible: false },
                { name: "Projects", link: "/research/projects", visible: false },
                { name: "IPR", link: "/research/ipr", visible: false },
                { name: "Consultancy", link: "/research/consultancy", visible: false },
                { name: "Conferences Organized", link: "/research/conference", visible: false },
            ],
        },
    ])

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

                {
                    link_map.map((menu_link, menu_link_index) => {
                        return (

                            <div className="sidebar_menu" key = {menu_link_index}>
                                <span className="submenu_head" onClick={() => toggleSubmenu(menu_link_index)}>{menu_link.name}</span>
                                <div className="sidebar_submenu" style={{ maxHeight: menu_link.visible ? maxHeight : "0px" }}>
                                    <ul>
                                        {
                                            menu_link.links.map((menu_linkl2, index2) => {
                                                // console.log(menu_linkl2.links)
                                                if (menu_linkl2.links == undefined) {
                                                    return (
                                                        <Link key = {index2} className="sidebar_submenu_link" href={menu_linkl2.link}>{menu_linkl2.name}</Link>
                                                    )
                                                } else {

                                                    return (
                                                        < div key = {index2}>
                                                            <span className="sidebar_submenu_2_link" onClick={() => { toggleSubmenu2(menu_link_index, index2) }}

                                                            >{menu_linkl2.name}</span>
                                                            <div className="sidebar_submenu_2" style={{ maxHeight: menu_linkl2.visible ? maxHeight : "0px" }}>


                                                                <ul>
                                                                    {

                                                                        menu_linkl2.links.map((menu_linkl3, index3) => {

                                                                            return (
                                                                                <>
                                                                                    <span key = {index3} className="sidebar_submenu_link" >{menu_linkl3.name}</span>
                                                                                </>
                                                                            )


                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )

                                                }

                                            })
                                        }


                                    </ul>
                                </div>


                            </div>
                        )
                    })
                }

                {/*   <div className="sidebar_menu">
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
                <hr width="100%" size="2" /> */}
            </div>

            {/* Watermark with conditional class */}
            {/* <div className={`watermark ${sidebarVisible ? "watermark-active" : ""}`}>
                <img src="assets/images/sree_buddha_logo.png" alt="Watermark" className="watermark-image" />
            </div> */}
        </div>
    );
}
