import React from 'react'
import './style.css'
import Link from 'next/link'; 
// import folder from '@/assets/images/facilities/repro.pdf'

export default function page() {
  return (
    <div className='container'>
        <div className="title">Reprographic Facilities</div>
       
        <hr />
        
        <div className="paragraph">Our college provides comprehensive reprographic facilities to support students and staff 
            in their academic and administrative needs. These services include high-quality photocopying, both color and 
            black-and-white printing, and document scanning for easy digitization. </div>
            <br />

            <Link className='links' href="/assets/documents/facilities/repro.pdf"  target="_blank">
                      Facilities
            </Link> 

           
    </div>
  )
}
