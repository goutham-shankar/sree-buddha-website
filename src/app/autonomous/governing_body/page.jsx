import React from 'react';
import DownloadButton from '@/components/common/DownloadButton';

export default function page() {
    const pdfDocuments = [
        {
            title: "First GB Meeting Minutes",
            link: "/assets/documents/autonomous/governing_body/First-GB-meeting-minutes.pdf"
        },
        {
            title: "First GB Meeting Agenda",
            link: "/assets/documents/autonomous/governing_body/Governing-body-Agenda.pdf"
        },
        {
            title: "Governing Body Constitution",
            link: "/assets/documents/autonomous/governing_body/governing-body-Constitution.pdf"
        }
    ];

    return (
        <div className='page'>
            <h3 className='page_heading'>Conferments</h3>
            <div>
                {pdfDocuments.map((document, index) => (
                    <DownloadButton
                        key={index}
                        title={document.title}
                        link={document.link}
                    />
                ))}
            </div>
        </div>
    );
}
