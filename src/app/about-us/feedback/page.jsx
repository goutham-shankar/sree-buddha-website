import React from 'react'
import "./style.css"
import feedback_image from '@/assets/images/feedback.png'

export default function Feedback() {
  return (
    <>
    <div className="container">

      <div className="main">
          <br /><p className="feedback">Feedback</p><br /><br />
          <p className='feedback-analysis'>FEEDBACK ANALYSIS</p><br />
          <p >The institution follows three types of feedback system.</p><br />
          <h3>Direct Feedback from the Students</h3>
          <p>Each department has constituted class committees for each semester with staff and student members. 
            Student members are invited to express their view on subjects on the academic environment of the department
            and the feedback is collected by the Chairman of the committee and submitted to the HOD for further actions.</p><br />
            
          <div className="feedbacklinks">
            <a className='link'  href="#">class committee Feedback</a><br/><br />
            <a className='link'  href="#">Course Review Feedback</a><br /><br />
            <a className='link'  href="#">Course Exit Survey</a><br /><br />
            <a className='link'  href="#">Class commitee Feedback</a><br /><br />
            <a className='link'  href="#">Faculty  Feedback -Co-Curricular Based</a><br /><br />
            <a className='link'  href="#">Curricular Based Feedback</a><br /><br />
            <a className='link'  href="#">Faculty  Feedback</a><br /><br />
            <a className='link'  href="#">AICTE Online Feedback system Login</a><br /><br />
          </div>

          <b>Interactive Feedback</b>
           <p> Principal will  conduct interactive meeting  with the students regarding the academic activities and collect the feedback from them  directly.  </p><br />
         
          <b>Consolidate Feedback</b>
          <p>Feedback forms are circulated via online google forms as course exit surveys and
           individual  responses are also collected. It also benefits the course attainment calculations. </p><br />

         <p> Sree Buddha College of Engineering has developed a survey to address the effectiveness of the available facilities for the UG engineering program. 
          The College  is deeply committed to continuous quality improvement and this survey is an integral part of the assessment process. Kindly follow the 
          link to access the institution survey. </p><br /><br />

          <a className='link'  href="">click here for institution survey</a><br /><br />
          <p>Institutional Survey Responses till 7 Feb  2019
          Updated information till 7 Feb  2019 11.00 am IST</p><br />

          <div className="pic">
            <img className="image" src={feedback_image.src} alt="" />
          </div><br /><br />

        
      </div>
    </div>
    </>
  )
}
