import React from 'react'
import "./team.css"

export default function Team() {
  return (
    <div className='team'>
         <h3>Team</h3>
         <p>Sree Buddha College of Engineering, since its inception has a Well-Organized Training & Placement Cell. Reasonably good number of students from every batch get placement in various companies.</p>
         <div className="training">
            <h4>TRAINING</h4>
            <p>A structured programme is implemented for enhancing the communication skill of students right from first year. ‘Language Lab’ helps students to improve their pronunciation and acquire linguistic skills. Regular Training programmes are arranged by experts in the field to enhance the overall personality of the students. The cell has started an in house training programme along with the routine academics. Exhaustive training is imparted to the students covering all aspects of soft skills, aptitude and technical skills. The course module designed for the training includes:</p>
            <ul className="training-list">
                <li>Soft skill enhancement</li>
                <li>Technical competency</li>
                <li>Problem solving skills.</li>
            </ul>
            <p>This enhances the overall personality and employability of students</p>
         </div>
         <div className="activities">
            <h4>PLACEMENT ACTIVTIES</h4>
            <p>Special training Programme is organized for the final year students exclusively. The programme, covering vital areas including Personality Development is compulsory. Even the day scholars are given accommodation in the hostels to make this process much effective.</p>
         </div>
         <div className="sub-placement">
            <h4>PLACEMENTS</h4>
            <p>More than 80% of the students have been placed in various reputed institutions. They include Infosys, Wipro, Accenture, L&T, IBS, CTS, CSS, India Tech Limited, UST Global, Seagate, Face, Calydon Tech, HCL B-Serve, HCL Infosystems, Claria Softech, Spectrum, Omnex Academy and several other institutions of repute</p>
         </div>

    </div>
  )
}