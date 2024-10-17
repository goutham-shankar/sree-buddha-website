import React from 'react'
import './style.css'
// import course from '@/assets/images/admissions/ug_course.png'
export default function page() {
  return (
    <>
    <div>
    <div className="container">
        <div className="title">UNDER GRADUATE</div>     
        <div className="pic"></div> 
        <div className="headings">Programs Offered</div>
        <img src={"/assets/images/admissions/ug_course.png"} alt="" />

    </div>  
    </div>
    </>
  )
}
