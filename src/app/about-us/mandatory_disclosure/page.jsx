import React from 'react'
import "./style.css"

export default function page() {
  return (
    <div className='page'>

        <h3 className='page_heading'>Mandatory Disclosure</h3>
        <br />
        <div className="single_meeting download_button">

                <span className='download_button_title '><a target='_blank' href={"/assets/documents/mandatory_disclosure/mandatory_disclosure_2024-25.pdf"} className='link'>Mandatory Disclosure 2024-2025</a></span>
                <button className="download_button_button">
                    <img src={"/assets/images/icons/download.png"} alt="" />
                </button>

        </div>
        
      
    </div>
  )
}
