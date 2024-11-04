"use client";
import React from "react";
import "./eoa.css";

export default function EoA() {
  const handlePdfClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="eoa">
      <h2>AICTE EoA</h2>
      <div className="eoa-ul">
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick(
              "/assets/documents/EoA%20docs/EOA-Report-2024-2025.pdf"
            )
          }
        >
          <h3>EoA 2024-2025</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick("/assets/documents/EoA%20docs/AICTE-EOA-2023-24.pdf")
          }
        >
          <h3>EoA 2023-2024</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick("/assets/documents/EoA%20docs/EOA-Report-22-23.pdf")
          }
        >
          <h3>EoA 2022-2023</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick(
              "/assets/documents/EoA%20docs/EOA_Report-21-22_Pattoor-F.pdf"
            )
          }
        >
          <h3>EoA 2021-2022</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick(
              "/assets/documents/EoA%20docs/AICTE-EOA_Report_2020-21.pdf"
            )
          }
        >
          <h3>EoA 2020-2021</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick(
              "/assets/documents/EoA%20docs/EOA-Report-2019-20-_New.pdf"
            )
          }
        >
          <h3>EoA 2019-2020</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick(
              "/assets/documents/EoA%20docs/EOA-Report_2018-19.pdf"
            )
          }
        >
          <h3>EoA 2018-2019</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick(
              "/assets/documents/EoA%20docs/EOA_Report_2017-18.pdf"
            )
          }
        >
          <h3>EoA 2017-2018</h3>
        </div>
        <div
          className="eoa-box"
          onClick={() =>
            handlePdfClick(
              "/assets/documents/EoA%20docs/AICTE-Approval-2016-17.pdf"
            )
          }
        >
          <h3>EoA 2016-2017</h3>
        </div>
      </div>
    </div>
  );
}
