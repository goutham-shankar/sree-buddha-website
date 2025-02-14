import React from 'react'
import './style.css'
import picone from '../../../../public/assets/images/facilities/libpicone.jpg'
import pictwo from '../../../../public/assets/images/facilities/libpictwo.jpg'
import picthree from '../../../../public/assets/images/facilities/libpicthree.jpg'
import picfour from '../../../../public/assets/images/facilities/libpicfour.jpg'
import picfive from '../../../../public/assets/images/facilities/libpicfive.jpg'


export default function page() {
  return (
    <>
    <div className='container'>
        <div className="title">Central Library</div><br />
        <hr /><br />
        <div className="first-div">
        <div className="paragraph">
        The Central Library is a vital resource center catering to the faculty, 
        students, and staff of the institute. Spanning 1,500 sq. meters, this three-story facility is located at the heart of 
        the campus, offering a well-equipped space for study and research.  
        <br /><br />
        With a vast collection of books, journals, and digital resources, it supports academic excellence and
         innovation. The library provides spacious reading areas, quiet study zones, and digital access
          to a wide range of materials, making it an ideal place for learning and research.
         </div>
        <br />
        <div className="imageone">
            <img src={picone.src} alt="" />
        </div>
        <br />
        </div>
        
<br />
        <div className="heading">Digital Library</div>
        <div className="digital">
                <div className="paragraph">
                The Digital Library is a hub of knowledge, providing faculty, students, and research scholars with seamless access to 
                a vast collection of online and offline electronic resources. Located on the first floor, it is designed to accommodate 40 users, 
                offering a conducive environment for digital learning and research.
                <br /><br />
                With access to over 15,000 international journals, e-books, research papers, and technical standards, the library ensures
                that users stay updated with the latest advancements in various fields. These resources are made available through renowned 
                consortiums such as IEEE POP, ELSEVIER, SPRINGER, Access Engineering Library (McGraw Hill), ASTM Digital Library, ASCE, ASME, J-GATE, ISO, 
                JTC1, DELNET Membership, and NPTEL.
                <br /><br />
                In addition to these, the Digital Library features high-speed internet, multimedia resources, and dedicated systems for
                 accessing scholarly databases. Interactive e-learning modules, video lectures, and research repositories further enhance
                  the learning experience. 
                </div><br />
                <div className="imagetwo">
                    <img src={pictwo.src} alt="" />
                </div>
        </div>
        <br />


        <br />
        <div className="services">
               
                <div className="content">
                <div className="heading">Library Services</div>
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
                <div className="imagethree">
                    <img src={picthree.src} alt="" />
                </div>
                </div>
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
        <div className="imagefour">
            <img src={picfour.src} alt="" />
        </div>
       <br />
       
       <div className="reference">
            <div className="heading">Reference Section</div>
            <div className="paragraph">
                    Monday to Friday	8.00 a.m. to 7.00 p.m.
                    Saturday	9.00 a.m. to 6.00 p.m.
                    1436338377_LIB_CentralReference SectionThe reference section of the library has rich collection of international
                    editions of reference books, handbooks, conference proceedings, encyclopedias and various reference documents.
                    The fully air conditioned section is located in the first floor.
            </div><br />
            <div className="imagefive">
                <img src={picfive.src} alt="" /><br />
            </div>
        </div><br /><br />

    </div>
    </>
  )
}
