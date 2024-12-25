"use client";

import React from 'react';
import "@/components/accreditation/NAAC/naac.css";

const Naac = (props) => {
    const handlepdfOpen = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="single_meeting">
            <span className="single_meeting_name">{props.name}</span>
            <button
                className="download_meeting_minutes"
                onClick={() => handlepdfOpen(props.link)}
            >
                <img src={"/assets/images/icons/download.png"} alt="download" />
            </button>
        </div>
    );
};

export default Naac;
