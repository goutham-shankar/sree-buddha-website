import React from 'react'
import './style.css'
import photo from '@/assets/images/facilities/internal_lab.jpg'

export default function page() {
  return (
    <div className='container'>
           
           <div className="title">Internet LAB</div>
            <hr /><br />
            <div className="lab-div">
            <div className="paragraph">The Computer Centre is a state-of-the-art facility designed to provide seamless access to cutting-edge technology
               and high-speed internet connectivity. this fully air-conditioned centre offers a conducive 
               environment for learning, research, and innovation.
              <br /><br />
              With a robust network infrastructure, the centre is equipped with 60 high-performance desktops, ensuring smooth and efficient computing. The 100 Mbps high-speed 
              internet connection enables students and faculty to explore vast digital resources, engage in online learning, and enhance their technical skills.
              <br /><br />
              The Computer Centre operates <b>from 8:00 a.m. to 7:00 p.m.</b>on all working days, providing ample time for students to work on projects, conduct research, 
              and develop their expertise. The well-organized layout and ergonomic seating ensure comfort and productivity, making it an ideal space for coding, software 
              development, and technical training.
</div>
            <br />
            <div className="photo">
              <img src={photo.src} alt="" />
            </div>
           </div>
            
            <br /><br /><br />
    </div>
  )
}
