import React from "react";
import "../NIRF/page.css";
import NAAC from "@/components/accreditation/NAAC/naac";

const page = () => {
  return (
    <div className="container">
      <title>ARIIA</title>
      <h1 className="page_heading">ARIIA</h1>
      <div className="line"></div>
      <NAAC
        name="ARIIA Report 2021"
        link="/assets/documents/accreditation/ARIIA/ARIIA-REPORT-2021.pdf"
      />
    </div>
  );
};

export default page;
