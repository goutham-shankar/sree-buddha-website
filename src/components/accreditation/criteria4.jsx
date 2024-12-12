import React from "react";
import "@/components/accreditation/criteria4.css";
const criteria4 = () => {
  const handlePdfOpen = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="facilities-container">
    
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/4.1.2.pdf")}}>Criteria 4.1.2 Sports Facilities & Achievements</a>
        </div>
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/ICTFACILITIES.mp4")}}>Criteria 4.1.3 ICT Facilities</a>
        </div>
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/student-faculty-library-utilization.pdf")}}>
            Criteria 4.2.6 Student Library Utilization </a>
            </div>
            <div>
            <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/FACULTY-LIBRARY-UTILIZATION-REGISTER-1.pdf")}}> Faculty Library
            Utilization
          </a>

        </div>
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/LCSFacility.mp4")}}>Criteria 4.3.4 LCS Facilities</a>
        </div>


      <h3>Geotagged Photos of LCS</h3>
    
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/IMG2019071912154700001.jpg")}}>Pic 1</a>
        </div>
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/IMG2019071912162300002.jpg")}}>Pic 2</a>
        </div>
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/IMG20190719121623-100003.jpg")}}>Pic 3</a>
        </div>
        <div>
          <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/IMG2019071912304200004.jpg")}}>Pic 4</a>
        </div>
   

      
        <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/4.4.2.pdf")}}>Criteria 4.4.2 Maintenance</a>
    </div>
  );
};
export default criteria4;
