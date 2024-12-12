import React from 'react'
import "@/components/accreditation/criteria6.css";
const criteria6 = () => {
    const handlePdfOpen = (url) => {
        window.open(url, "_blank");
      };
  return (
    <div className='topContainer'>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/6.3.3-activity-report.pdf")}}>6.3.3 activity report<br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/6.3.4-certificates-final1.pdf")}}>6.3.4 certificates <br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/AUDIT-REPORT081620191432501.pdf")}}>6.5.4 Consolidate Report of Academic administrative audit(AAA)<br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/6.5.3-IQAC-Programs.pdf")}}>6.5.3 IQAC Program<br/></a>
      
    </div>
  )
}

export default criteria6