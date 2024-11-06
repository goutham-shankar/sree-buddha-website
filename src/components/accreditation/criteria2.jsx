"use client";

import React from "react";
import "@/components/accreditation/criteria2.css";

const Criteria2 = () => {
  const handlePdfOpen = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="learning-process-container">
      <h2>TEACHING LEARNING PROCESS</h2>

      <h3>2.1 Domicile Certificates</h3>
      <div className="l1">
        <a
          onClick={() =>
            handlePdfOpen(
              "/assets/documents/accreditation/Criteria2/Dhiman-Sha.pdf"
            )
          }
        >
          Dimansha
        </a>
        <a
          onClick={() =>
            handlePdfOpen(
              "/assets/documents/accreditation/Criteria2/Suraj-Sharma.pdf"
            )
          }
        >
          Surajsharma
        </a>
      </div>

      <h3>2.3.2 Geo tagged photos of ICT</h3>
      <div className="l2">
        <a
          onClick={() =>
            handlePdfOpen("/assets/documents/accreditation/Criteria2/first.jpg")
          }
        >
          First
        </a>
        <a
          onClick={() =>
            handlePdfOpen(
              "/assets/documents/accreditation/Criteria2/second.jpg"
            )
          }
        >
          Second
        </a>
      </div>

      <h3>2.4 Position sanctioned letters</h3>
      <div className="l3">
        <a
          onClick={() =>
            handlePdfOpen("/assets/documents/accreditation/Criteria2/14-15.pdf")
          }
        >
          2014-15
        </a>
        <a
          onClick={() =>
            handlePdfOpen("/assets/documents/accreditation/Criteria2/15-16.pdf")
          }
        >
          2015-16
        </a>
        <a
          onClick={() =>
            handlePdfOpen("/assets/documents/accreditation/Criteria2/16-17.pdf")
          }
        >
          2016-17
        </a>
        <a
          onClick={() =>
            handlePdfOpen("/assets/documents/accreditation/Criteria2/17-18.pdf")
          }
        >
          2017-18
        </a>
        <a
          onClick={() =>
            handlePdfOpen("/assets/documents/accreditation/Criteria2/18-19.pdf")
          }
        >
          2018-19
        </a>
      </div>
    </div>
  );
};

export default Criteria2;
