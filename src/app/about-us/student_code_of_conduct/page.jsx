import React from 'react'
import DownloadButton from '@/components/common/DownloadButton'

export default function page() {
    return (
        <div className='page'>

            <DownloadButton title = {"Student Code of Conduct"} link = {"/assets/documents/student_code_of_conduct/SBCE-Student-Code-of-Conduct-and-Ethics.pdf"} />

        </div>
    )
}
