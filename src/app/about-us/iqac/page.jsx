import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";

export default function page() {

  return (
    <div className="iqac_content">
      <p>
        In pursuance of action plan for performance evaluation, assessment,
        accreditation and quality up-gradation of institutions of higher
        education, NAAC proposes that every accredited institution should
        establish an Internal Quality Assurance Cell (IQAC) as a
        post-accreditation quality sustenance measure. Since quality enhancement
        is a continuous process, the IQAC will become a part of the
        institution’s system & work towards realisation of the goals of quality
        enhancement & sustenance. The prime task of the IQAC is to develop a
        system for conscious, consistent & catalytic improvement in the overall
        performance of institutions. For this, during the post-accreditation
        period, it will channelize all efforts & measures of the institution
        towards promoting its holistic academic excellence.
      </p>

      <h3 className="page_heading2">
        IQAC shall evolve mechanisms and procedures for:
      </h3>

      <ul className="list">
        <li>
          Ensuring timely, efficient and progressive performance of academic,
          administrative and financial tasks
        </li>
        <li>The relevance and quality of academic and research programmes</li>
        <li>
          Equitable access to and affordability of academic programmes for
          various sections of society
        </li>
        <li>
          Optimization and integration of modern methods of teaching and
          learning
        </li>
        <li>
          Ensuring the adequacy, maintenance and functioning of the support
          structure and services
        </li>
        <li>
          Research sharing and networking with other institutions in India and
          abroad.
        </li>
      </ul>

      <div className="meeting_minutes">
        <h3>Meeting Minutes</h3>

   
            {/* return ( */}
              
              <div className="">
                <NAAC
                  name="Minutes-of-7-th-IQAC-meeting-held-on-13-03-2017"
                //   link="/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"
                />
                <NAAC
                  name="Minutes-of-6-th-IQAC-meeting-held-on-17-9-2016"
                //   link="/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"
                />
                <NAAC
                  name="Minutes-of-5-th-IQAC-meeting-held-on-2-9-2016"
                //   link="/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"
                />
                <NAAC
                  name="Minutes-of-4-th-IQAC-meeting-held-on-8-6-2016"
                //   link="/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"
                />
                <NAAC
                  name="Minutes-of-3-rd-IQAC-meeting-held-on-1-1-2016"
                //   link="/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"
                />
                <NAAC
                  name="Minutes-of-2-nd-IQAC-meeting-held-on-6-11-2015"
                //   link="/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"
                />
                <NAAC
                  name="Minutes-of-1-st-IQAC-meeting-held-on-19-10-2015"
                //   link="/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"
                />
              </div>
            {/* ); */}
      
        </div>
      </div>
    // </div>
  );
}
