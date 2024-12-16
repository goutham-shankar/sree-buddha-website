"use client";

import React from "react";
import "@/components/accreditation/criteria2.css";

const Criteria2 = () => {
  const handlePdfOpen = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div>
      <h2 className="heading">TEACHING LEARNING PROCESS</h2>
      <div className="learning-process-container">
        <p className="p">2.1 Domicile Certificates</p>
        <div className="l1">
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/Dhiman-Sha.pdf"
              )
            }
          >
            Dimansha
          </a>
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/Suraj-Sharma.pdf"
              )
            }
          >
            Surajsharma
          </a>
        </div>

        <p className="p">2.3.2 Geo tagged photos of ICT</p>
        <div className="l2">
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/first.jpg"
              )
            }
          >
            First
          </a>
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/second.jpg"
              )
            }
          >
            Second
          </a>
        </div>

        <p className="p">2.4 Position sanctioned letters</p>
        <div className="l3">
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/14-15.pdf"
              )
            }
          >
            2014-15
          </a>
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/15-16.pdf"
              )
            }
          >
            2015-16
          </a>
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/16-17.pdf"
              )
            }
          >
            2016-17
          </a>
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/17-18.pdf"
              )
            }
          >
            2017-18
          </a>
          <a className="open"
            onClick={() =>
              handlePdfOpen(
                "/assets/documents/accreditation/Criteria2/18-19.pdf"
              )
            }
          >
            2018-19
          </a>
        </div>
      </div>
    </div>
  );
};

export default Criteria2;
