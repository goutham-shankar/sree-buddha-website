"use client";
import React from "react";
import "./eoa.css";

export default function EoA() {
  const handlePdfClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="eoa">
      <h2>AICTE EoA Reports</h2>
      <p className="eoa-description">
        Explore and download the AICTE Extension of Approval (EoA) reports for various academic years. Click on a report to view it.
      </p>
      <div className="eoa-ul">
        {[
          { year: "2024-2025", url: "/assets/documents/EoA%20docs/EOA-Report-2024-2025.pdf" },
          { year: "2023-2024", url: "/assets/documents/EoA%20docs/AICTE-EOA-2023-24.pdf" },
          { year: "2022-2023", url: "/assets/documents/EoA%20docs/EOA-Report-22-23.pdf" },
          { year: "2021-2022", url: "/assets/documents/EoA%20docs/EOA_Report-21-22_Pattoor-F.pdf" },
          { year: "2020-2021", url: "/assets/documents/EoA%20docs/AICTE-EOA_Report_2020-21.pdf" },
          { year: "2019-2020", url: "/assets/documents/EoA%20docs/EOA-Report-2019-20-_New.pdf" },
          { year: "2018-2019", url: "/assets/documents/EoA%20docs/EOA-Report_2018-19.pdf" },
          { year: "2017-2018", url: "/assets/documents/EoA%20docs/EOA_Report_2017-18.pdf" },
          { year: "2016-2017", url: "/assets/documents/EoA%20docs/AICTE-Approval-2016-17.pdf" },
        ].map((report, index) => (
          <div
            className="eoa-box"
            key={index}
            onClick={() => handlePdfClick(report.url)}
          >
            <h3>EoA {report.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}