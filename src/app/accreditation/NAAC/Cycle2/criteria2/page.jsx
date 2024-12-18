"use client";

import React from "react";
import "@/components/accreditation/criteria2.css";
import NAAC from "@/components/accreditation/NAAC/naac";

const page = () => {
  return (
    <div>
      <h2 className="heading">TEACHING LEARNING PROCESS</h2>
      <div className="learning-process-container">
        <p className="p">2.1 Domicile Certificates</p>
        <div className="l1">
          <NAAC
            name="Dimansha"
            link="/assets/documents/accreditation/Criteria2/Dhiman-Sha.pdf"
          />
          <NAAC
            name="Surajsharma"
            link="/assets/documents/accreditation/Criteria2/Suraj-Sharma.pdf"
          />
        </div>

        <p className="p">2.3.2 Geo tagged photos of ICT</p>
        <div className="l2">
          <NAAC
            name="First"
            link="/assets/documents/accreditation/Criteria2/first.jpg"
          />
          <NAAC
            name="Second"
            link="/assets/documents/accreditation/Criteria2/second.jpg"
          />
        </div>

        <p className="p">2.4 Position sanctioned letters</p>
        <div className="l3">
          <NAAC
            name="2014-15"
            link="/assets/documents/accreditation/Criteria2/14-15.pdf"
          />
          <NAAC
            name="2015-16"
            link="/assets/documents/accreditation/Criteria2/15-16.pdf"
          />
          <NAAC
            name="2016-17"
            link="/assets/documents/accreditation/Criteria2/16-17.pdf"
          />
          <NAAC
            name="2017-18"
            link="/assets/documents/accreditation/Criteria2/17-18.pdf"
          />
          <NAAC
            name="2018-19"
            link="/assets/documents/accreditation/Criteria2/18-19.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
