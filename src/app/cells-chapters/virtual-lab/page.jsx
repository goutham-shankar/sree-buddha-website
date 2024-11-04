import React from 'react'
import "./virtual.css"

export default function VirtualLab() {
  
    return (
      <div className='vlab'>
        <div className="vlab-intro">
            <h2>Virtual Lab</h2>
            <p>Sree Buddha College of Engineering Pattoor has been onboarded as the nodal centre of *VIRTUAL LAB* under National Institute of Technology Karnataka (NITK), Surathkal. Virtual Labs is an initiative funded by the Ministry of Education (formerly MHRD), Government of India, under the National Mission on Education through Information and Communication Technology.</p>
            <p>As an initiative to this project, College  organized an 'online faculty training workshop on Virtual Labs' on '07/04/22' through Google Meet. Faculty members and research scholars of the institution have participated.</p>
        </div>
        <div className="lab-team">
            <h3>Virtual Lab Team SBCE Pattoor</h3>
            <br />
            <h4>Department Coordinators</h4>
            <ul className='lab-ul'>
                <li className='vlab-li'>Prof. Prashanth V (ME)</li>
                <li className='vlab-li'>Prof.  Atheena A (EE)</li>
                <li className='vlab-li'>Dr. Anju J Prakash (CSE)</li>
                <li className='vlab-li'>Prof. Shobha Elizabeth Thomas (CE)</li>
                <li className='vlab-li'>Prof. Shamnamol G K (BT&BCE)</li>
                <li className='vlab-li'>Prof. Sangeetha T R (ECE)</li>
            </ul>

        </div>
      </div>
    );
  }