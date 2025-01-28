    import React from 'react'
    import DownloadButton from '@/components/common/DownloadButton'



    export default function page() {

       const pdfDocuments =  [
            {
              title: "KTU Conferment of Autonomous Status",
              link: "/assets/documents/autonomous/conferments/ktu-autonomous-status-notification.pdf"
            },
            {
              title: "UGC Conferment of Autonomous Status",
              link: "/assets/documents/autonomous/conferments/SBCE-Student-Code-of-Conduct-and-Ethics.pdf"
            }
          ]
          
        
    return (
        <div className='page'>

            <h3 className='page_heading'>Conferments</h3>

            <div>
                {
                    pdfDocuments.map((document, index)=>{
                        return(
                            <DownloadButton key = {index} title={document.title} link={document.link} />
                        )
                    })
                }

            </div>
        
        </div>
    )
    }
