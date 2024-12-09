import React from 'react'

const criteria7 = () => {
    const handlePdfOpen = (url) => {
        window.open(url, "_blank");
      };
  return (
    <div>
        <a onClick={() => {handlePdfOpen("/assets/documents/accreditation/7.1.1.pdf")}}>7.1.1 Report<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/7.1.15-NEW1.pdf")}}>7.1. Institute offers Course on Human values and professional Ethics<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/HS210-Life-Skills.pdf")}}>HS210 Life Skills<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/HS300-Principles-of-management.pdf")}}>HS300 Principles of management<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/Introduction-to-sustainable-syllabus.pdf")}}>Introduction to sustainable syllabus<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/s3_biotech_biochemical_eng-scheme-and-syllabus-2013.pdf")}}>s3_biotech_biochemical_eng scheme and syllabus 2013<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/s6_btech_electro_communication_eng_syllabi_9.pdf")}}>s6_btech_electro_communication_eng_syllabi_9<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/SBCE-Quality-Policy-Ver.2.pdf")}}>7.1.16 SBCE Quality Policy<br/></a>
<a onClick={() => {handlePdfOpen("/assets/documents/accreditation/criterion-7-shamna-miss072920191225162.pdf")}}>7.1.17 Report of the Event<br/></a>

    </div>
  )
}

export default criteria7