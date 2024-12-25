import React from 'react'

export default function page() {

   const meetings = [
    ["AQAR 2014-15", "/assets/documents/iqac/AQAR-2014-15.docx"],
    ["AQAR 2015-16", "/assets/documents/iqac/AQAR-2015-16.docx"],
    ["AQAR 2016-17", "/assets/documents/iqac/AQAR-2016-17.docx"],
    ["AQAR 2017-18", "/assets/documents/iqac/AQAR-2017-18.docx"],
    ["AQAR 2019-20", "/assets/documents/iqac/625f8c4050c27_aqar_report.pdf"],
    ["AQAR 2020-21", "/assets/documents/iqac/AQAR-2020-21.pdf"],
    ["AQAR 2021-22", "/assets/documents/iqac/24086.pdf"],
    ["AQAR 2022-23", "/assets/documents/iqac/aqar-22-23.pdf"]
];

    return (
        <div className='page'>

            {
                meetings.map((meeting) => {

                    return (
                        <a target = "_blank" className='single_meeting_link' href={meeting[1]}>
                        <div className="single_meeting">
                            
                            <span className='single_meeting_name'>{meeting[0]}</span>
                            <button className="download_meeting_minutes">
                                <img src={"/assets/images/icons/download.png"} alt="" />
                            </button>
                            

                        </div>
                        </a>
               
                    )


                })
            }

        </div>
    )
}
