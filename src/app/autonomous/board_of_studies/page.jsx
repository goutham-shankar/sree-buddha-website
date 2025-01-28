import React from 'react'
import DownloadButton from '@/components/common/DownloadButton'

export default function page() {

    const pdfDocuments = [
        {
            title: "Board of Studies (AI & ML)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-AIML-8.pdf"
        },
        {
            title: "Board of Studies (Biotechnology)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-BT-4.pdf"
        },
        {
            title: "Board of Studies (Civil Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-CE-1.pdf"
        },
        {
            title: "Board of Studies (Computer Science & Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-CSE-5.pdf"
        },
        {
            title: "Board of Studies (Electronics & Communication Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-ECE-6.pdf"
        },
        {
            title: "Board of Studies (Electronics and Robotics)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-ECR-7.pdf"
        },
        {
            title: "Board of Studies (Electrical & Electronics Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-EEE-3.pdf"
        },
        {
            title: "Board of Studies (Food Technology)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-FT-9.pdf"
        },
        {
            title: "Board of Studies (Humanities & Basic Science)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-HBS-10.pdf"
        },
        {
            title: "Board of Studies (Mechanical Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOS-ME-2.pdf"
        }
    ];

    const pdfDocuments2 = [
        {
            title: "Board of Studies Constitution",
            link: "/assets/documents/autonomous/board_of_studies/Board-of-studies-Constitution.pdf"
        },
        {
            title: "Board of Studies First Meeting (AI & ML)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-AI-ML-6.pdf"
        },
        {
            title: "Board of Studies First Meeting (Humanities & Basic Science)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-BS-H-10.pdf"
        },
        {
            title: "Board of Studies First Meeting (Civil Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-CE-1-.pdf"
        },
        {
            title: "Board of Studies First Meeting (Computer Science & Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-CSE-2.pdf"
        },
        {
            title: "Board of Studies First Meeting (Electronics & Communication Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-ECE-7.pdf"
        },
        {
            title: "Board of Studies First Meeting (Electrical & Electronics Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-EEE-5 (1).pdf"
        },
        {
            title: "Board of Studies First Meeting (Electrical & Electronics Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-EEE-5.pdf"
        },
        {
            title: "Board of Studies First Meeting (Electronics and Robotics)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-ER-8.pdf"
        },
        {
            title: "Board of Studies First Meeting (Food Technology)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-FT-4.pdf"
        },
        {
            title: "Board of Studies First Meeting (Mechanical Engineering)",
            link: "/assets/documents/autonomous/board_of_studies/BOARD-OF-STUDIES-MEETING-ME-9.pdf"
        },
    ]

    return (
        <div className='page'>

            <h3 className='page_heading'>Board of Studies</h3>

            <div>
                {
                    pdfDocuments.map((document) => {
                        return (
                            <DownloadButton title={document.title} link={document.link} />
                        )
                    })
                }

            </div>

            <h2 className='page_heading2'>Board of Studies First Meeting</h2>

            <div>
                {
                    pdfDocuments2.map((document) => {
                        return (
                            <DownloadButton title={document.title} link={document.link} />
                        )
                    })
                }
            </div>

        </div>
    )
}
