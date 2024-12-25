import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "../../Cycle2/page.css";
const page = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="SSR 2024"
        link="/assets/documents/accreditation/Cycle3/SSR-2024.pdf"
      />
    </div>
  );
};

export default page;
