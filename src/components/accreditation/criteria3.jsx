import React from "react";
import "@/components/accreditation/criteria3.css";

const Criteria3 = () => {
  const handlePdfOpen = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="topContainer">
        <div className="curriculum-container">
          <h2>3.13.2 Industry-Academia Innovative Practices</h2>
          <div>
            <a>
              Awareness of IPR
              <br />
            </a>
            <a>
              Entrepreneur Awareness Programme
              <br />
            </a>
            <a>
              Remote Infrastructure and Management
              <br />
            </a>
            <a>
              Python Workshop
              <br />
            </a>
            <a>
              Embracing The Future: Innovation And Disruption
              <br />
            </a>
          </div>

          <h2>3.2.2.1 Need For Industrial Automation</h2>
          <div>
            <a>
              Entrepreneur Awareness, Meet the Entrepreneur, Quality Management
              <br />
            </a>
            <a>
              Professional Ethics, Importance of Research
              <br />
            </a>
          </div>

          <h2>3.3 Academic Years</h2>
          <div>
            <a>
              Academic Year 2020-21
              <br />
            </a>
            <a>
              Academic Year 2021-22
              <br />
            </a>
            <a>
              Conference Proceedings
              <br />
            </a>
            <a>
              React 21
              <br />
            </a>
            <a>
              Rtact21
              <br />
            </a>
            <a>
              Academic Year 2022-23
              <br />
            </a>
          </div>

          <h2>3.4 Additional Information</h2>
          <div>
            <a>
              3.5.1 Proof Of Linkages
              <br />
            </a>
            <a>
              3.5 Proof Of MoUs
              <br />
            </a>
            <a>
              3.5.2 Prayana Activities
              <br />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria3;
