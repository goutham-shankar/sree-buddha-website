import React from 'react'
import './style.css'
import photo from '@/assets/images/facilities/seminar_hall.jpg'

export default function page() {
  return (
    <div className='container'>
            <div className="title">Conference hall with ‘state of the art’ facilities</div>
            <hr /><br />
           <div className="hall-div">
           <div className="paragraph">The Central Seminar Hall is a state-of-the-art facility designed to host conferences, seminars, workshops, guest lectures, 
              and academic discussions. With a spacious layout and a seating capacity to accommodate a large audience, the hall is ideal for fostering intellectual
              exchange and professional development.
              <br /><br />
              Equipped with high-quality audio-visual systems, modern projection screens, and a well-designed stage setup, the hall ensures an immersive and engaging experience for both speakers and attendees. The acoustically treated interiors provide excellent sound clarity, making it an ideal venue for presentations, panel discussions, and interactive sessions.
              <br /><br />
              The hall is centrally air-conditioned, well-lit, and furnished with comfortable seating arrangements, ensuring a conducive environment for learning and collaboration. It is frequently used for faculty development programs, student training sessions, and industry interactions, playing a pivotal role in enhancing academic and professional growth within the institution.</div>
            <br />
            <div className="photo">
              <img src={photo.src} alt="" />
            </div>
           </div>
            
            <br /><br /><br />
    </div>
  )
}
