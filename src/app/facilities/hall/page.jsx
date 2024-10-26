import React from 'react'
import './style.css'
import photo from '@/assets/images/facilities/seminar_hall.jpg'

export default function page() {
  return (
    <div className='container'>
            <div className="title">Conference hall with ‘state of the art’ facilities</div>
            <hr /><br />
            <div className="paragraph">Multimedia Hall with video conferencing facilities are available</div>
            <br />
            <div className="photo">
              <img src={photo.src} alt="" />
            </div>
            
            <br /><br /><br />
    </div>
  )
}
