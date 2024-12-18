"use client";

import React from "react";
import "../criteria1/criteria1.css";
import "../page.css"
import NAAC from "@/components/accreditation/NAAC/naac";

const Criteria7 = () => {
  return (
    <div className="topContainer">
      <NAAC name="7.1.1 Report" link="/assets/documents/accreditation/7.1.1.pdf" />
      <NAAC
        name="7.1. Institute offers Course on Human values and Professional Ethics"
        link="/assets/documents/accreditation/7.1.15-NEW1.pdf"
      />
      <NAAC name="HS210 Life Skills" link="/assets/documents/accreditation/HS210-Life-Skills.pdf" />
      <NAAC
        name="HS300 Principles of Management"
        link="/assets/documents/accreditation/HS300-Principles-of-management.pdf"
      />
      <NAAC
        name="Introduction to Sustainable Syllabus"
        link="/assets/documents/accreditation/Introduction-to-sustainable-syllabus.pdf"
      />
      <NAAC
        name="S3 Biotech Biochemical Eng Scheme and Syllabus 2013"
        link="/assets/documents/accreditation/s3_biotech_biochemical_eng-scheme-and-syllabus-2013.pdf"
      />
      <NAAC
        name="S6 BTech Electronics Communication Eng Syllabus 9"
        link="/assets/documents/accreditation/s6_btech_electro_communication_eng_syllabi_9.pdf"
      />
      <NAAC
        name="7.1.16 SBCE Quality Policy"
        link="/assets/documents/accreditation/SBCE-Quality-Policy-Ver.2.pdf"
      />
      <NAAC
        name="7.1.17 Report of the Event"
        link="/assets/documents/accreditation/criterion-7-shamna-miss072920191225162.pdf"
      />
    </div>
  );
};

export default Criteria7;
