import React from 'react'
import "./style.css"
// import video from "/assets/videos/test.mp4"

export default function page() {
    return (

        <div className='test_hero' >

            <video muted autoPlay loop>
                <source src="/assets/videos/test.mp4" type="video/mp4"/>
            </video>

            <div className="black_overlay"></div>

            <div className="content_section">
                <h3>SREE BUDDHA</h3>
                <span>College Of Engineering Pattoor</span>
            </div>

        </div>

    )
}
