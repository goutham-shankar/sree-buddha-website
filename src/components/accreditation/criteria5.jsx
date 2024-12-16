import React from 'react'
import "@/components/accreditation/criteria5.css"
const criteria5 = () => {
    const handlePdfOpen = (url) => {
        window.open(url, "_blank");
      };
  return (
    <div className='topContainer'>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/capability-enhancement-programmes.pdf")}}>5.1.3 Capability enhancement programmes<br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/2018-19-placement.pdf")}}>5.2.1 Placement 2018-2019 <br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/2016-18.pdf")}}>5.2.1 Placement 2016-2018<br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/Mechanical-2016-18.pdf")}}>5.2.1 Placement 2016-2018 Mechanical Engineering<br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/placement-2014-2015.pdf")}}>5.2.1 Placement 2014-2015<br/></a>
        <a onClick={()=>{handlePdfOpen("/assets/documents/accreditation/Alumni-report.pdf")}}>5.4.2 Alumni Report<br/></a>

    </div>
  )
}

export default criteria5