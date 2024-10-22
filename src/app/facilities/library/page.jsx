import React from 'react'
import './style.css'
export default function page() {
  return (
    <>
    <div className='container'>
        <div className="title">Central Library</div><br />
        <hr /><br />
        <div className="paragraph">
            The Central Library caters to the informational needs of the faculty, 
            students and other staff of the institute. It is housed in a 1500 Sq. m. three storied building
            in the main campus. 
         </div>
        <br />
        <div className="imageone"></div>
        <br />

        <div className="heading">Digital Library</div>
        <div className="digital">
                <div className="paragraph">
                The faculty, students& research scholars can access online and offline electronic resources.The Digital
                Library is housed in the first floor and has a capacity to accommodate 40 users. More than 15000 International
                Journals, e-books, standards in different areas subscribed through different consortium like IEEE POP, 
                ELSEVIER, SPRINGER, Access Engineering Library (McGraw Hill), ASTM Digital Library, ASCE, ASME, J-GATE,
                ISO, JTC1, DELNET Membership and NPTEL facility.
                </div><br />
                <div className="imagetwo"></div>
        </div><br />

        <div className="services">
                <div className="heading">Library Services</div>
                <div className="content">
                    <ul>
                        <li>Reference</li>
                        <li>Document lending service</li>
                        <li>E -document lending service</li>
                        <li>Current awareness</li>
                        <li>Referral</li>
                        <li>News clippings</li>
                        <li>New arrivals</li>
                        <li>Reprography</li>
                        <li>Online printout</li>
                        <li>OPAC</li>
                    </ul>
                </div><br />
                <div className="imagethree"></div>
                <br />

                <b>Library Staff</b><br />
        <table className='faculty-table '>
            <tbody>
                <tr>
                    <td>Ms. Disha. S</td>
                    <td>MLIS, M.Phil Librarian</td>
                </tr>
                <tr>
                    <td>Mr. Sadi. D</td>
                    <td>Library Assistant</td>
                </tr>
                <tr>
                    <td>Ms. Laila. K</td>
                    <td>Library Assistant</td>
                </tr>
                <tr>
                    <td>Ms. Sheela. P V</td>
                    <td>Library Assistant</td>
                </tr>
            </tbody>
        </table><br />

        <b>Library Hours</b><br />
        <table className='faculty-table '>
            <tbody>
                <tr>
                    <td>Monday to Friday</td>
                    <td>8.00 a.m. to 7.00 p.m.</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>9.00 a.m. to 6.00 p.m.</td>
                </tr>
            </tbody>
            </table>
        <div className="imagefour"></div>
        </div><br />
       
       <div className="reference">
            <div className="heading">Reference Section</div>
            <div className="paragraph">
                    Monday to Friday	8.00 a.m. to 7.00 p.m.
                    Saturday	9.00 a.m. to 6.00 p.m.
                    1436338377_LIB_CentralReference SectionThe reference section of the library has rich collection of international
                    editions of reference books, handbooks, conference proceedings, encyclopedias and various reference documents.
                    The fully air conditioned section is located in the first floor.
            </div><br />
            <div className="imagefive"></div>
        </div><br /><br />

    </div>
    </>
  )
}
