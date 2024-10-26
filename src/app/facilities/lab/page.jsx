import React from 'react'
import './style.css'
import photo from '@/assets/images/facilities/internal_lab.jpg'

export default function page() {
  return (
    <div className='container'>
            <div className="title">Internet LAB</div>
            <hr /><br />
            <div className="paragraph">The Computer Centre is fully networked with 60 desktops and supported by <b>100 Mbps</b> 
                internet facility. This fully air-conditioned centre is located on the second floor of the Library Complex. 
                The Centre is opened from 8.00 a.m. to 7 p.m. on all working days.</div>
            <br />
            <div className="photo">
              <img src={photo.src} alt="" />
            </div>
            
            <br /><br /><br />
    </div>
  )
}
