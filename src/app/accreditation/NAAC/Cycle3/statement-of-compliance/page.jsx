import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "../../Cycle2/page.css";
const page = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="Statement Of Compliance"
        link="/assets/documents/accreditation/Cycle3/Statement-of-compliance.pdf"
      />
    </div>
  );
};

export default page;
