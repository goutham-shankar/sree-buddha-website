"use client";

import React from "react";
import "../criteria1/criteria1.css";
import "../page.css"
import NAAC from "@/components/accreditation/NAAC/naac";

const Criteria6 = () => {
  return (
    <div className="topContainer">
      <div className="li1"></div>
      <NAAC
        name="6.3.3 Activity Report"
        link="/assets/documents/accreditation/6.3.3-activity-report.pdf"
      />
      <NAAC
        name="6.3.4 Certificates"
        link="/assets/documents/accreditation/6.3.4-certificates-final1.pdf"
      />
      <NAAC
        name="6.5.4 Consolidated Report of Academic Administrative Audit (AAA)"
        link="/assets/documents/accreditation/AUDIT-REPORT081620191432501.pdf"
      />
      <NAAC
        name="6.5.3 IQAC Program"
        link="/assets/documents/accreditation/6.5.3-IQAC-Programs.pdf"
      />
    </div>
  );
};

export default Criteria6;
