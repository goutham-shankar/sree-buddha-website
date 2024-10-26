import React from 'react'
import './style.css'
// import folder from '@/assets/images/facilities/repro.pdf'

export default function page() {
  return (
    <div className='container'>
        <div className="title">Reprographic Facilities</div>
        <br />
        <hr />
        <br />
        <div className="paragraph">Our college provides comprehensive reprographic facilities to support students and staff 
            in their academic and administrative needs. These services include high-quality photocopying, both color and 
            black-and-white printing, and document scanning for easy digitization. </div>
            <br />
            <a className='no-underline' href="folder"><div className="link">Facilities</div></a>
      
    </div>
  )
}
