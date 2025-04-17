    import React from 'react'
    import DownloadButton from '@/components/common/DownloadButton'



    export default function page() {

       const pdfDocuments =  [
        {
          title: "Finance Committee constitution",
          link: "/assets/documents/autonomous/finance_commitee/Constitution-of-Academic-Council-and-finance-committee.pdf"
        },

      ]
        
    return (    
        <div className='page'>

            <h3 className='page_heading'>Finance Commitee</h3>

            <div>
                {
                    pdfDocuments.map((document, index)=>{
                        return(
                            <DownloadButton key= {index} title={document.title} link={document.link} />
                        )
                    })
                }

            </div>
        
        </div>
    )
    }
