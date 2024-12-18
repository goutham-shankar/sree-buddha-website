"use client";

import React from "react";
import "../criteria1/criteria1.css";
import "../page.css"
import NAAC from "@/components/accreditation/NAAC/naac";

const Criteria4 = () => {
  return (
    <div className="topContainer">
      <div>
        <NAAC
          name="Criteria 4.1.2 Sports Facilities & Achievements"
          link="/assets/documents/accreditation/4.1.2.pdf"
        />
      </div>
      <div>
        <NAAC
          name="Criteria 4.1.3 ICT Facilities"
          link="/assets/documents/accreditation/ICTFACILITIES.mp4"
        />
      </div>
      <div>
        <NAAC
          name="Criteria 4.2.6 Student Library Utilization"
          link="/assets/documents/accreditation/student-faculty-library-utilization.pdf"
        />
      </div>
      <div>
        <NAAC
          name="Faculty Library Utilization"
          link="/assets/documents/accreditation/FACULTY-LIBRARY-UTILIZATION-REGISTER-1.pdf"
        />
      </div>
      <div>
        <NAAC
          name="Criteria 4.3.4 LCS Facilities"
          link="/assets/documents/accreditation/LCSFacility.mp4"
        />
      </div>

      <h3>Geotagged Photos of LCS</h3>
      <div>
        <NAAC
          name="Pic 1"
          link="/assets/documents/accreditation/IMG2019071912154700001.jpg"
        />
      </div>
      <div>
        <NAAC
          name="Pic 2"
          link="/assets/documents/accreditation/IMG2019071912162300002.jpg"
        />
      </div>
      <div>
        <NAAC
          name="Pic 3"
          link="/assets/documents/accreditation/IMG20190719121623-100003.jpg"
        />
      </div>
      <div>
        <NAAC
          name="Pic 4"
          link="/assets/documents/accreditation/IMG2019071912304200004.jpg"
        />
      </div>

      <div>
        <NAAC
          name="Criteria 4.4.2 Maintenance"
          link="/assets/documents/accreditation/4.4.2.pdf"
        />
      </div>
    </div>
  );
};

export default Criteria4;
