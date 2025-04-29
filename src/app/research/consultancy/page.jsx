import React from 'react'
import './style.css'
import Link from 'next/link'; 

export default function page() {
  return (
    <div className='container'>

        <div className="title">CONSULTANCY</div><br /><hr /><br />

        <div className="heading">DEPARTMENT OF CIVIL ENGINEERING</div><br />

        <div className="paragraph">
        The Civil Engineering Department undertakes consultancy works of which the major clients are KSEB, PWD, Kerala 
        Housing Board, LSGD, Southern Railway, Manhaar Constructions, EJ constructions, Ultratech cements, RAMCO cements, 
        WAPCOS Pvt. Ltd. We also undertake consultancy for student project works from nearby colleges. <br /><br />

        <div className="heading">DEPARTMENT OF BIOTECHNOLOGY & BIOCHEMICAL ENGINEERING</div> <br />

       <b><u>The Bioresearch Division</u></b><br /><br />

       SBCE Pattoor- Bio-Research Division of the Department of Biotechnology & Biochemical Engineering 
       is undertaking Consultancy and Services to external users from academia/Industry at nominal rates. <br /><br />
       The following facilities/testing are available: <br /><br />

        
        
           <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sl.No</th>
                                            <th>Name of the Equipment/ Test</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="division">
                                            <td colspan="2">Microbiology Division</td>
                                        </tr>
                                        <tr>
                                            <td>1.</td>
                                            <td>Gram Staining</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Total Microbial Load</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Anti Microbial Activity testing by Agar Diffusion Method</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>Total Yeast/Mold Count</td>
                                        </tr>
                                        <tr className="division">
                                            <td colspan="2">Spectroscopy</td>
                                        </tr>
                                        <tr>
                                            <td>5.</td>
                                            <td>UV-Visible Spectroscopy</td>
                                        </tr>
                                        <tr>
                                            <td>6.</td>
                                            <td>Fluorescence Spectroscopy</td>
                                        </tr>
                                    </tbody>
                                </table>
                <br /><br />
            </div>


        <div className="headingtwo">HOW TO SUBMIT THE SAMPLES</div>
        <ul>
            <li>The samples should be submitted <b>along with official letter from the institute/industry, attested by the head of the institute and the supervisor .</b>
                The Official letter should contain the mail ID and address to which the results and bill need to be dispatched.
            </li>

            <li>Only on receipt of the payment along with the samples, they will be registered for analysis and taken up for measurement.
                As soon as the analysis is over, the spectra along with the receipt / bill will be sent to the users.
            </li>

            <li>While submitting samples for more than one analysis separate samples are to be sent for each.</li>

            <li>Form-I, available in the website, need to be filled and submitted along with the samples.</li>
        </ul> <br />

        <div className="headingtwo">MODE OF PAYMENT</div><br />
        For details on analysis charges contact <b>“The In-Charge, Research & Consultancy, BT & BCE Dept, OR, HoD, BT & BCE”</b> in the following: <br /> E-mail: <b> bioresearchsbce@gmail.com</b> <br />
        Telephone: +91 9562562754, +91 8281868205 <br /><br />
        <b>Attachments</b><br />

        <div className="last">
        <Link href="/assets/documents/research/Work-Order-Form-1.pdf"  target="_blank">
          <div className="btn"> Work Order Form</div>
        </Link>
          
        <Link href="/assets/documents/research/instructions.pdf"  target="_blank">
          <div className="btn">Instructions</div>
        </Link> <br /><br />
        </div>

           
        </div>
    </div>
  )
}
