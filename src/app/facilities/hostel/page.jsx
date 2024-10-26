import React from 'react'
import './style.css'
import photof from '@/assets/images/facilities/boys.png'
import photot from "@/assets/images/facilities/girls.png"

export default function page() {
  return (
    <div className='container'>
            <div className="title">Hostel-Boys & Girls</div>
            <hr /><br />
            <div className="paragraph">Hostels for boys and girls with all amneties have been provided by the college. 
                Both the hostels have spacious rooms and Mess halls. Separate facilities for studying is provided in 
                both the hostels. The ladies hostel and men’s hostel can accommodate 300 inmates each.</div>
            <br />
            <div className="photo">
              <img src={photof.src} alt="" /><br />
              <img src={photot.src} alt="" />
            </div>
            
            <br /><br /><br /><br />
    </div>
  )
}
