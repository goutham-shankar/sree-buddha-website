import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";

export default function page() {
  return (
    <div className="page">
      <h3 className="page_heading">Student Code of Conduct</h3>
      <hr />
      <br />    
      <br />

      <NAAC
        name="Student Code of Conduct"
        link="/assets/documents/SBCE-Student-Code-of-Conduct-and-Ethics.pdf"
      />
    </div>
  );
}
