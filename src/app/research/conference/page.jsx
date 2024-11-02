import React from 'react'
import './style.css'

import meetone from '../../../../public/assets/images/research/meetone.jpg'
import meettwo from '../../../../public/assets/images/research/meettwo.jpg'
import dmeetone from '../../../../public/assets/images/research/dmeetone.jpg'
import dmeettwo from '../../../../public/assets/images/research/dmeettwo.jpg'
import fotor from '../../../../public/assets/images/research/Collage_Fotor.png'



export default function page() {
  return (
    <div className='container'>

        <div className="title">Conferences Organised</div> <br /><hr /><br />

        <div className="paragraph">
        Department of Electronics and Communication, Sree Buddha College of Engineering, Pattoor, Alappuzha,Kerala
         organized an Online National Conference <b>“REVOLUTIONIZE ELECTRONICS AND COMMUNICATION TECHNOLOGIES”</b> on 23th 
         and 24th June 2022. The conference was inaugurated by Dr.Samson Mathew,Director,KSCSTE-NATPAC. The 
         keynote speaker was Dr.Sreeni K.G. ,Associate Professor, Rajiv Gandhi institute of Technology,Kottayam.
         The panel evaluation committee members were Dr Sreeni K.G.,Professor Sangeetha T.R. and Professor Reeni 
         Sara Thomas The conference provided amble opportunity for UG and PG scholars to exchange and share their
          ideas, experiences, and research results on various aspects of Electronics & Communication Engineering 
          which include Smart Embedded System using IoT, Artificial Intelligence and Robotics ,Image Processing 
          using Machine learning and Deep learning, Low Power VLSI Design and Signal Processing. There were more than 20 participants 
          from. Best paper award was given to Shemin Mary Simon, M.Tech Scholar, Sree Buddha College Of Engineering,Pattoor for her paper
           titled “ANALYSIS OF REAL TIME OBJECT DETECTION IN ADVERSE CLIMATIC CONDITIONS FOR AUTONOMOUS VEHICLES”. The conference was winded up 
           with valedictory session.
        </div>
        <br />
        <div className="photoone">
        <img  className=" meetone"src={meetone.src} alt="" />
        <img  className="meettwo"src={meettwo.src} alt="" />
        </div> <br /><br />

        <div className="paragraph">
        Department of Electronics and Communication, Sree Buddha College of Engineering, Pattoor, Alappuzha,Kerala organized an
         Online National Conference <b>“REVOLUTIONIZE ELECTRONICS AND COMMUNICATION TECHNOLOGIES”</b> on 10th and 11th June 2021. The 
         conference was inaugurated by Dr. Sam Koshy and the keynote speakers were Dr.Lizy Abraham ,Dean Research & Consultancy, 
         LBS Institute of Technology for Women and Dr. Sreeni K.G. Associate Professor, College of Engineering,Trivandrum.The conference
          provided amble opportunity for UG and PG scholars to exchange and share their ideas, experiences, and research results on 
          various aspects of Electronics & Communication Engineering which include Smart Embedded System using IoT, Artificial Intelligence and Robotics
           ,Image Processing using Machine learning and Deep learning, Low Power VLSI Design and Signal Processing. There were more than 30 participants 
           from different engineering colleges inside and outside Kerala. Best paper award was given to Vaishak N Thrilok,B.Tech Scholar,Presidency
            College Bangalore for his paper titled Green house gases emission monitoring.The conference was winded up with valedictory session
        </div> <br /><br />

        <div className="phototwo">
            <img className="dmeetone" src={dmeetone.src} alt="" />
            <img  className="dmeettwo "src={dmeettwo.src} alt="" />
        </div>
        <br />
        <div className="headingtwo"><b>EXPENDITURE   STATEMENT OF REACT’21</b></div>
        <div class="table-container">
                        <table>
                                    <tbody>
                                        <tr>
                                            <td>TOTAL REGISTERED PARTICIPANT</td>
                                            <td>34</td>
                                        </tr>
                                        <tr>
                                            <td>PARTICIPANT FEE EXTERNAL</td>
                                            <td>32x 100 = 3200</td>
                                        </tr>
                                        <tr>
                                            <td>PARTICIPANT FEE </td>
                                            <td>2 x300 = 600</td>
                                        </tr>
                                        <tr>
                                            <td>TOTAL</td>
                                            <td>3800</td>
                                        </tr>
                                        <tr>
                                            <td>PANEL MEMBER REMUNERATION</td>
                                            <td>2x 1500 = 3000</td>
                                        </tr>
                                        <tr>
                                            <td>BALANCE</td>
                                            <td>800</td>
                                        </tr>
                                    </tbody>
                                </table>
                <br /><br />
            </div>

            <div className="headingtwo"><b>Two day National Conclave on ‘Accreditation & Bench marking’</b></div>

            <div className="paragraph">Two day National Conclave on ‘Accreditation & Bench marking’ conducted on 21 & 22 December 2018 at Sree Buddha 
                College of Engineering was concluded sucessfully. The conclave was attended by external participants along with the selected faculty 
                members of Sree Buddha College of Engineering. This programme was aimed to familiarize with the Quality enhancement in Engineering Education.
            </div>

            <div className="photothree">
                    <img className="fotor"src={fotor.src} alt="" />
            </div>
      
    </div>
  )
}
