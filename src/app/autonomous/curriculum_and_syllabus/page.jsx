import React from 'react'
import DownloadButton from '@/components/common/DownloadButton'

export default function page() {

  const pdfDocuments = [
    {
      path: "/assets/documents/autonomous/syllabus/Biotechnology-and-Biochemical-Engineering.pdf",
      title: "Biotechnology and Biochemical Engineering"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Civil-Engineering.pdf",
      title: "Civil Engineering"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Computer-Science-and-Engineering.pdf",
      title: "Computer Science and Engineering"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Computer-Science-and-EngineeringArtificial-Intelligence.pdf",
      title: "Computer Science and Engineering (Artificial Intelligence)"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Electrical-and-Electronics-Engineering.pdf",
      title: "Electrical and Electronics Engineering"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Electronics-and-Computer-Engineering.pdf",
      title: "Electronics and Computer Engineering"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Electronics-Communication-Engineering-.pdf",
      title: "Electronics & Communication Engineering"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Food-Technology.pdf",
      title: "Food Technology"
    },
    {
      path: "/assets/documents/autonomous/syllabus/Mechanical-Engineering.pdf",
      title: "Mechanical Engineering"
    }
  ];

  return (
    <div className='page'>
      <h3 className='page_heading'>Syllabus</h3>

      <div>
        {
          pdfDocuments.map((document) => {
            return (
              <DownloadButton title={document.title} link={document.path} />
            )
          })
        }
      </div>
    </div>
  )
}
