import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";

export default function page() {
  return (
    <div className="page">
      <h3 className="page_heading">Mandatory Disclosure</h3>
      <br />
      <NAAC
        name="mandatory disclosure 2024-2025"
        link="/assets/images/icons/download.png"
      />
    </div>
  );
}
