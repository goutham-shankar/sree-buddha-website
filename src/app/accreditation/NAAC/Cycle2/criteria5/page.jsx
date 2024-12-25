"use client";

import React from "react";
import "../criteria1/criteria1.css";
import "../page.css"
import NAAC from "@/components/accreditation/NAAC/naac";

const Criteria5 = () => {
  return (
    <div className="topContainer">
      <div className="li1">
      <NAAC
        name="5.1.3 Capability Enhancement Programmes"
        link="/assets/documents/accreditation/capability-enhancement-programmes.pdf"
      />
      <NAAC
        name="5.2.1 Placement 2018-2019"
        link="/assets/documents/accreditation/2018-19-placement.pdf"
      />
      <NAAC
        name="5.2.1 Placement 2016-2018"
        link="/assets/documents/accreditation/2016-18.pdf"
      />
      <NAAC
        name="5.2.1 Placement 2016-2018 Mechanical Engineering"
        link="/assets/documents/accreditation/Mechanical-2016-18.pdf"
      />
      <NAAC
        name="5.2.1 Placement 2014-2015"
        link="/assets/documents/accreditation/placement-2014-2015.pdf"
      />
      <NAAC
        name="5.4.2 Alumni Report"
        link="/assets/documents/accreditation/Alumni-report.pdf"
      />
    </div>
    </div>
  );
};

export default Criteria5;
