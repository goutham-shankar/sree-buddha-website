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
          
          <div className="cont">
          <p className="p">3.2 Industry-Academia Innovative Practices</p>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/3.2.2.1-iedc-programmes.pdf")}}>
              1. Awareness of IPR 
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/2016-2.pdf")}}>
              2. Entrepreneur Awareness Programme
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/2016-2.pdf")}}>
              3. Remote Infrastructure and Management
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/REPORT-PYTHON-Nov-1415-2015.pdf")}}>
              4. Python Workshop
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/Report_PGIF-Binu-Sankar-Aug-12-2016.pdf")}}>
              5. Embracing The Future: Innovation And Disruption
            </a>
            
          </div>

          
          <div className="cont">
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/3.2.2.1-NEED-FOR-INDUSTRIIAL-AUTOMATION.pdf")}}>3.2.2.1 Need For Industrial Automation<br/></a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/3.2.2.1enterpreneur-awarenessmeet-the-enterpreneurquality-management-.pdf")}}>
              3.2.2.1 Entrepreneur Awareness, Meet the Entrepreneur, Quality Management
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/3.2.2.1professional-ethicsimportance-of-research.pdf")}}>
              3.2.2.1 Professional Ethics, Importance of Research
              <br />
            </a>
          </div>

         
          <div className="cont">
            <a className= "open1" >
              Academic Year 2020-21
              <br />
            </a>
            <a className= "open1">
              Academic Year 2021-22
              <br />
            </a>
            <a className= "open2" >
              Conference Proceedings
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/REACT21-proceedings.pdf")}}>
              1. React 21
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/RTACT21.pdf")}}>
              2. Rtact21
              <br />
            </a>
            <a className= "open1" >
              Academic Year 2022-23
              <br />
            </a>
          </div>

        
          <div className="cont">
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/proof-of-linkages.pdf")}}>
              3.5.1 Proof Of Linkages
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/3.5.2-maks-automation.pdf")}} >
              3.5 Proof Of MoUs
              <br />
            </a>
            <a className= "open" onClick={() => {handlePdfOpen("/assets/documents/accreditation/prayaana_001.pdf")}}>
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
