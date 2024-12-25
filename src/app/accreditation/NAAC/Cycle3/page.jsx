import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "../../NAAC/Cycle2/page.css";
const page = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="IIQA 2024"
        link="/assets/documents/accreditation/Cycle3/IIQA-2024.pdf"
      />
    </div>
  );
};

export default page;
