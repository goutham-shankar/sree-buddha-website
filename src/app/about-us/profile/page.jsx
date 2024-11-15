"use client"

import React from "react";
import "@/app/about-us/profile/style.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import NavbarMobile from "@/components/navbar_mobile";

const profile = () => {
  return (
    <>
      <div className="container">
        <div></div>
        <div className="main">
          <br />
          <br />
          <div className="profile">PROFILE</div>
          <br />
          <br />
          <div className="pic">
            <img
              src={"/assets/images/sree_buddha_college_image1.png"}
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="paragraph">
            <b className="name">Sree Buddha College of Engineering</b>,
            affiliated to APJ Abdul Kalam Technological University, has been par
            excellence in technical education. The sermons of Lord Buddha gave
            us a lead to be the flowers of exaltation. The primary objective is
            to promote education and research in the field of technology and to
            replenish the skills that get lurked in the budding technocrats. All
            the members of SBCE push themselves to set the institution as an
            example to the world. The institution is now accredited by National
            Board of Accreditation for 4 Undergraduate Programmes and
            re-accredited with NAAC with effect from Nov 2019.  Also the college
            has been conferred Autonomy by the UGC from 2024-25 Academic Year
            onwards <br />
            <br />
            Founded in 2002, Sree Buddha College of Engineering follows the
            cardinal teaching of Lord Buddha for educating the whole generation
            imbued with real values of life. The college focuses on the overall
            personality of students, empowering them to face future challenges.
            The college has excellent infrastructure, well equipped laboratories
            with modern instruments to ensure world-class education, and has
            qualified & well experienced faculty. <br />
            Situated at Pattoor near Pandalam, a rural area of immense scenic
            beauty, the college is located in a lush green and picturesque
            landscape spread over an area of land overlooking a panoramic lagoon
            bordered by hillocks. The environment friendly and serene atmosphere
            of the campus provides a refreshing ambiance for the mind and soul.
            <br />
            <br />
            Listed in Wikipedia: 
            <a href="https://en.wikipedia.org/wiki/Sree_Buddha_College_of_Engineering">
              Wikipedia link
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
