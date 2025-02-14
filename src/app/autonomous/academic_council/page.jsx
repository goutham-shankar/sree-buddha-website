import React from 'react'
import DownloadButton from '@/components/common/DownloadButton'

export default function page() {

  const pdfDocuments = [
    {
      title: "First Academic Council Agenda",
      link: "/assets/documents/autonomous/academic_council/Academic-Council-Meeting-AC1Agenda.pdf"
    },
    {
      title: "Academic Council Constitution",
      link: "/assets/documents/autonomous/academic_council/Constitution-of-Academic-Council-and-finance-committee (1).pdf"
    },
    {
      title: "Academic Council Constitution",
      link: "/assets/documents/autonomous/academic_council/Constitution-of-Academic-Council-and-finance-committee.pdf"
    },
    {
      title: "Second Academic Council Minutes",
      link: "/assets/documents/autonomous/academic_council/MINUTES-OF-AC2.pdf"
    },
    {
      title: "First Academic Council Minutes",
      link: "/assets/documents/autonomous/academic_council/MINUTES-OF-THE-FIRST-MEETING-OF-THE-ACADEMIC-COUNCIL-AUTONOMUS.pdf"
    }
  ]
        
  return (
    <div className='page'>
      <h3 className='page_heading'>Academic Council</h3>

      <div>
        {
          pdfDocuments.map((document, index) => {
            return (
              <DownloadButton key={index} title={document.title} link={document.link} />
            )
          })
        }
      </div>
    </div>
  )
}
