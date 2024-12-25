"use client";

import React from "react";
import "../criteria1/criteria1.css";
import "../page.css"
import NAAC from "@/components/accreditation/NAAC/naac";

const Criteria3 = () => {
  return (
    <div>
      <div className="topContainer">
        <div className="curriculum-container">
          <div className="li1">
            <p className="p">3.2 Industry-Academia Innovative Practices</p>
            <NAAC
              name="1. Awareness of IPR"
              link="/assets/documents/accreditation/3.2.2.1-iedc-programmes.pdf"
            />
            <NAAC
              name="2. Entrepreneur Awareness Programme"
              link="/assets/documents/accreditation/2016-2.pdf"
            />
            <NAAC
              name="3. Remote Infrastructure and Management"
              link="/assets/documents/accreditation/2016-2.pdf"
            />
            <NAAC
              name="4. Python Workshop"
              link="/assets/documents/accreditation/REPORT-PYTHON-Nov-1415-2015.pdf"
            />
            <NAAC
              name="5. Embracing The Future: Innovation And Disruption"
              link="/assets/documents/accreditation/Report_PGIF-Binu-Sankar-Aug-12-2016.pdf"
            />
          </div>

          <div className="cont">
            <NAAC
              name="3.2.2.1 Need For Industrial Automation"
              link="/assets/documents/accreditation/3.2.2.1-NEED-FOR-INDUSTRIIAL-AUTOMATION.pdf"
            />
            <NAAC
              name="3.2.2.1 Entrepreneur Awareness, Meet the Entrepreneur, Quality Management"
              link="/assets/documents/accreditation/3.2.2.1enterpreneur-awarenessmeet-the-enterpreneurquality-management-.pdf"
            />
            <NAAC
              name="3.2.2.1 Professional Ethics, Importance of Research"
              link="/assets/documents/accreditation/3.2.2.1professional-ethicsimportance-of-research.pdf"
            />
          </div>

          <div className="cont">
            <h3>Academic Year 2020-21</h3>
            <h3>Academic Year 2021-22</h3>
            <h3>Conference Proceedings</h3>
            <NAAC
              name="1. React 21"
              link="/assets/documents/accreditation/REACT21-proceedings.pdf"
            />
            <NAAC
              name="2. Rtact21"
              link="/assets/documents/accreditation/RTACT21.pdf"
            />
            <h3>Academic Year 2022-23</h3>
          </div>

          <div className="cont">
            <NAAC
              name="3.5.1 Proof Of Linkages"
              link="/assets/documents/accreditation/proof-of-linkages.pdf"
            />
            <NAAC
              name="3.5 Proof Of MoUs"
              link="/assets/documents/accreditation/3.5.2-maks-automation.pdf"
            />
            <NAAC
              name="3.5.2 Prayana Activities"
              link="/assets/documents/accreditation/prayaana_001.pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria3;
