import React from 'react'
import NAAC from "@/components/accreditation/NAAC/naac";

export default function page() {
    return (
        <div className='page'>
        <h3 className="page_heading">Student Code of Conduct</h3>

            {/* <div className="single_meeting download_button">

                <span className='download_button_title '>Student Code of Conduct</span>
                <button className="download_button_button">
                    <img src={"/assets/images/icons/download.png"} alt="" />
                </button>

            </div> */}
            <NAAC
        name="Student Code of Conduct"
        link="/assets/documents/SBCE-Student-Code-of-Conduct-and-Ethics.pdf"
      />


        </div>
    )
}
