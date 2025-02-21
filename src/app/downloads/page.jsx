"use client";
import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
const Page = () => {
  return (
    <div className="page">
      <div className="page_heading">Downloads</div>
      <div className="line"></div>
      <NAAC
        name="Brochure"
        link="/assets/documents/downloads/new-brochure-2024.pdf"
      />
      <NAAC
        name="University Question Papers S7 & S8"
        link="/assets/documents/downloads/1480495431_S7S8_Qustion_Papers.pdf"
      />
      <NAAC
        name="University Question Papers(KTU SEM 1 & 2)"
        link="/assets/documents/downloads/1479464515_LIB_DATABASE_KTU_I2.pdf"
      />
      <NAAC
        name="Guidelines to students-S1 Btech Exam"
        link="/assets/documents/downloads/1451462627_Guidelines_to_students.pdf"
      />
      <NAAC
        name="Handbook-KTU"
        link="/assets/documents/downloads/1438666205_KTU_Handbook_.pdf"
      />
      <NAAC
        name="Students' Conduct and Disciplinary Code"
        link="/assets/documents/downloads/1438245048_SBCE_CODE.pdf"
      />
      <NAAC
        name="Admission form for B.Tech admission through Management Quota[DOC]"
        link="/assets/documents/downloads/1424426333_SBCE_BTech_Application_Form.doc"
      />
      <NAAC
        name="Admission form for B.Tech admission through Management Quota[PDF]"
        link="/assets/documents/downloads/1424426285_biotechnologyand_biochemical_engineering_scheme_2013.pdf"
      />
    </div>
  );
};

export default Page;
