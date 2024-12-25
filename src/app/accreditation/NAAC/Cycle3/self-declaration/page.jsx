import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "../../Cycle2/page.css";
const page = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="Self declaration by Head Of Institution"
        link="/assets/documents/accreditation/Cycle3/self-declaration.pdf"
      />
    </div>
  );
};

export default page;
