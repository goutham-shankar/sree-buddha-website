import React from 'react'
import "./active.css"

export default function Team() {
    return (
      <div className='activities'>
        <h2>Activities</h2>
        <div className="details">
            <div className="para">
                <p>In today’s highly competitive world, students need a combination of strong functional skills and a positive, professional outlook to succeed. Corporations are increasingly seeking individuals with both analytical abilities and interpersonal strengths. Our placement activities are designed to bridge this gap, aligning the needs of recruiters with the aspirations of students. By focusing on comprehensive training and real-world exposure, we aim to prepare students for the dynamic demands of the job market, ensuring they have the tools and confidence to excel in their chosen careers.</p>
            </div>
            <div className="pic">
                <img src="/assets/images/activity.png" alt="placement-activity"/>
            </div>
        </div>
        <span><b>We already signed MoU with ICT Academy Kerala for the facilitation of Students training.</b></span>
  
      </div>
    )
  }