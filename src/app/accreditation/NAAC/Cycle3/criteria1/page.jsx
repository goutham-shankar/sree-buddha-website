"use client";

import React from "react";

import NAAC from "@/components/accreditation/NAAC/naac";

const Criteria7 = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="1.1.1: The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment"
        link="/assets/documents/accreditation/Cycle3/1.1-Curricular-Planning-Implementation.pdf"
      />
      <NAAC
        name="1.2.1:Number of Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc. (where the students of the institution have enrolled and successfully completed during the last five years)"
        link="/assets/documents/accreditation/Cycle3/1.2-Certificates-final.pdf"
      />
      <NAAC
        name="1.2.2 Percentage of students enrolled in Certificate/ Value added courses and also completed online courses of MOOCs, SWAYAM, and NPTEL etc.as against the total number of students during the last five years."
        link="/assets/documents/accreditation/Cycle3/1.2.pdf"
      />
      <NAAC
        name="1.3.1. Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability in transacting the Curriculum."
        link="/assets/documents/accreditation/Cycle3/Curriculum-Enrichment1.pdf"
      />
      <NAAC
        name="1.3.2 Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)"
        link="/assets/documents/accreditation/Cycle3/Curriculum-Enrichment-1.pdf"
      />
      <NAAC
        name="1.4.1 Institution obtains feedback on the academic performance and ambiance of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website."
        link="/assets/documents/accreditation/Cycle3/Feedback-System.pdf"
      />
    </div>
  );
};

export default Criteria7;
