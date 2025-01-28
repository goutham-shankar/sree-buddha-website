import React from 'react'
import "./style.css"

export default function page() {
    return (
        <div className='page'>
            <div className="page_heading">Sister Institution</div>
            <hr/>
            <br />
            <a href="https://sbcs.edu.in/">
            <div className="single_meeting download_button">

                <span className='download_button_title '>Sree Buddha Central School-Karunagappally</span>
            </div>
            </a>

            <a href="https://sbcs.ac.in/">
            <div className="single_meeting download_button">

                <span className='download_button_title '>Sree Buddha Central School-Pattoor</span>
            </div>
            </a>

            <a href="https://sreebuddhacollege.ac.in/">
            <div className="single_meeting download_button">

                <span className='download_button_title '>Sree Buddha College of Engineering- Elavumthitta</span>
            </div>
            </a>

        </div>
    )
}
