import React from "react";
import "./page.css";
import NAAC from "@/components/accreditation/NAAC/naac";
const page = () => {
  return (
    <div className="container">
      <title>NBA Accreditation SBCE</title>
      <h1 className="page_heading">NIRF</h1>
      <div className="line"></div>
      <div className="img-tag">
        <img src="/assets/images/accreditation/nirf-banner.png" alt="" />
      </div>
      <div className="caption">
        <div className="con">
          The National Institutional Ranking Framework (NIRF) was approved by
          the MHRD and launched by the Honourable Minister of Human Resource
          Development on 29th September 2015.
        </div>
      </div>

      <div className="content">
        The National Institutional Ranking Framework (NIRF) was approved by the
        MHRD and launched by the Honourable Minister of Human Resource
        Development on 29th September 2015. This framework outlines a
        methodology to rank institutions across the country. The methodology
        draws from the overall recommendations broad understanding arrived at by
        a Core Committee set up by MHRD, to identify the broad parameters for
        ranking various universities and institutions. The parameters broadly
        cover “Teaching, Learning and Resources,” “Research and Professional
        Practices,” “Graduation Outcomes,” “Outreach and Inclusivity,” and
        “Perception”.
      </div>
      <div className="subheading">
        Data submitted by Sree Buddha College Of Engineering,Pattor,Kerala
      </div>
      <div className="pdf">
        <NAAC
          name="DCS Data-MHRD, National Institutional Ranking Framework (NIRF)"
          link="/assets/documents/accreditation/NIRF/NIRF-ENGG-FULL-REPORT-2017.pdf"
        />
        <NAAC
          name="Consultancy Project Details"
          link="/assets/documents/accreditation/NIRF/ConsultancyProjectDetail2.pdf"
        />
        <NAAC
          link="/assets/documents/accreditation/NIRF/Enterpreneursahip.pdf"
          name="Entrepreneurship"
        />
        <NAAC
          name="Higher Studies"
          link="/assets/documents/accreditation/NIRF/2018-higher-studies.pdf"
        />
        <NAAC
          name="Placement"
          link="/assets/documents/accreditation/NIRF/Placement-Details-new.pdf"
        />
        <NAAC
          name="Sponsored Research"
          link="/assets/documents/accreditation/NIRF/SponsoredResearchDetail-new.pdf"
        />
        <NAAC
          name="Top University Details_3D"
          link="/assets/documents/accreditation/NIRF/TopUniversityDetails.pdf"
        />
        <NAAC
          name="Top University Details_5D"
          link="/assets/documents/accreditation/NIRF/TopUniversityDetails_frominst-PG-AND-PHD-new.pdf"
        />
        <NAAC
          name="Faculty Data"
          link="/assets/documents/accreditation/NIRF/NIRF-FACULTY.pdf"
        />
        <NAAC
          name="Publications"
          link="/assets/documents/accreditation/NIRF/publications-2017.pdf"
        />
        <NAAC
          name="NIRF 2019"
          link="/assets/documents/accreditation/NIRF/NIRF-2019.pdf"
        />
        <NAAC
          name="NIRF 2020"
          link="/assets/documents/accreditation/NIRF/NIRF-2020.pdf"
        />
        <NAAC
          name="NIRF 2021"
          link="/assets/documents/accreditation/NIRF/NIRF-2021.pdf"
        />
        <NAAC
          name="NIRF 2022"
          link="/assets/documents/accreditation/NIRF/NIRF-2022.pdf"
        />
        <NAAC
          name="NIRF 2023"
          link="/assets/documents/accreditation/NIRF/SREE-BUDDHA-COLLEGE-OF-ENGINEERING-PATTOOR20230101-.pdf"
        />
        <NAAC
          name="NIRF 2024"
          link="/assets/documents/accreditation/NIRF/NIRF-DATA-2022-2023.pdf"
        />
      </div>
    </div>
  );
};

export default page;
