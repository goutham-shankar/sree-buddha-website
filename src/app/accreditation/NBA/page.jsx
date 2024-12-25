import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "./page.css";

const page = () => {
  return (
    <div className="container">
      <title>NBA Accreditation SBCE</title>
      <h1 className="page_heading">NBA</h1>
      <div className="line"></div>
      <div className="img-tag">
        <img
          className="img1"
          src="/assets/images/accreditation/NBA_RITS_2.png"
          alt="NBA Accreditation Logo"
        />
      </div>
      <div className="caption">
        <div className="con">
          The Sree Buddha College of Engineering, Pattoor is currently an
          institution with NBA Re-Accredited Programmes up to 2025
        </div>
      </div>
      <br />
      <p className="content">
        “The National Board of Accreditation (NBA), India was initially
        established by AICTE (All India Council of Technical Education) under
        section 10(u) of AICTE act, in the year 1994, for periodic evaluations
        of technical institutions & programs basis according to specified norms
        and standards as recommended by AICTE council. NBA in its present form
        came into existence as an autonomous body with effect from 7th January
        2010, with the objective of Assurance of Quality and Relevance of
        Education, especially of the programs in professional disciplines”.The
        purpose of the accreditation by NBA is to promote and recognize
        excellence in technical education in colleges and universities—at both
        the undergraduate and post graduate levels. Institutions, students,
        employers, and the public at large all benefit from the external
        verification of quality provided through the NBA accreditation process.
        They also benefit from the process of continuous quality improvement
        that is encouraged by the NBA’s developmental approach to promote
        excellence in technical education.
      </p>
      <div className="sub-heading">
        Through accreditation, the following main purposes may be served:
      </div>
      <ul>
        <li>
          support and advice to technical Institutions in the maintenance and
          enhancement of their quality of provision.
        </li>
        <li>
          confidence and assurance on quality to various stakeholders including
          students.
        </li>
        <li>
          assurance of the good standing of an Institution to government
          departments and other interested bodies.
        </li>
        <li>
          enabling an Institution to state publicly that it has voluntarily
          accepted independent inspection and has satisfied all the requirements
          for satisfactory operation and maintenance of quality in education.
        </li>
      </ul>
      <p className="sub-heading"> Benefits and Significance of Accreditation</p>
      <ul>
        <li> Demonstrates accountability to the public.</li>
        <li> Demonstrates the commitment to excellence.</li>
        <li> Facilitates continuous Quality Improvement.</li>
        <li> Improves staff morale.</li>
        <li> Recognizes the achievements/innovations.</li>
        <li> Facilitates information sharing.</li>
        <li> Priority in getting financial assistance.</li>
        <li>
          Helps the Institution to know its strengths, weaknesses and
          opportunities.
        </li>
        <li>
          Initiates Institutions into innovative and modern methods of pedagogy
        </li>
        <li> Gives Institutions a new sense of direction and identity.</li>
        <li>
          Provides society with reliable information on quality of education
          offered.
        </li>
        <li> Promotes intra and inter-Institutional interactions.</li>
      </ul>
      <a href="https://www.nbaind.org/Error/Error_404?aspxerrorpath=/accreditation.aspx">
        Courtesy: NBA Website
      </a>
      <div className="img-tag">
        <img
          src="/assets/images/accreditation/NBA.png"
          className="NBA"
          alt="NBA Logo"
        />
      </div>
      <div className="content">The Accredited Programmes are as follows</div>
      <NAAC
        name=" POAP USER MANUAL"
        link="/assets/documents/accreditation/NBA/SBCE-POAP-User-Manual-Version-2.1.pdf"
      />
    </div>
  );
};

export default page;
