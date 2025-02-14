import React from 'react'
import "../../styles/common/DownloadButton.css"

export default function DownloadButton(props) {
    return (
        <a href={props.link} className='download_button_link' target='_blank'>
        <div className="download_button">
            

            <span className='download_button_title '>{props.title}</span>
            <button className="download_button_button">
                <img src={"/assets/images/icons/download.png"} alt="" />
            </button>
           

        </div>
        </a>
    )
}
