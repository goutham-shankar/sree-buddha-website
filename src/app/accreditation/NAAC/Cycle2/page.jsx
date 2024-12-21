import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac.jsx";
import "./page.css";
const page = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="IIQA NAAC Cycle2"
        link="/assets/documents/accreditation/Criteria1/IIQA.pdf"
      />
    </div>
  );
};

export default page;

