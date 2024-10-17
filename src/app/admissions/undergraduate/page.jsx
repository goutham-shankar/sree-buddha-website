import React from 'react'
import './style.css'
 import course from '@/assets/images/admissions/ug_course.png'
export default function page() {
  return (
    <>
    <div>
    <div className="container">
        <div className="title">UNDER GRADUATE</div>     
        <div className="pic"></div> 
        <div className="headings">Programs Offered</div>
        <img className='photo' src={course.src} alt="" />

        <div className="headings">Admission Criteria</div>
        <div className="paragraph">50% of the seats are under Government Quota, allotment to the same will be made by
             the Commissioner of Entrance Examinations (CEE Kerala).The remaining 50% seats are under Management Quota 
             and the admission will be made strictly on the basis of merit, which includes NRI /OCI seats also.
        </div>

        <div className="headings">How To Apply</div>
        <div className="paragraph">An application form can be obtained from the College office in person 
             on payment of INR.500/- or by post on sending a Demand Draft (DD) for INR.530/-in favour of the Principal.
             Application forms can also be downloaded from the website of the College. Such applications have to be 
             submitted along with a cash payment of INR. 500/- or a DD of INR. 500/-. <br />
             Candidates can also submit an online application through the website.
        </div>
      
        <div className="links">
          <a  className="no-underline" href="#"><div className="link">Online Application Form</div></a>
          <a  className="no-underline" href="https://docs.google.com/forms/d/e/1FAIpQLSdZkVC3f7rIeBlkVnW-One8uC1NnsHxQZtK013KVjP7ZKxzxg/viewform"><div className="link">Quick Registration</div></a>
        </div>

        <div className="paragraph">For more information, please contact our PRO @ 9446014317 <br /></div>

        <div className="headings">Scholarships</div>
        <div className="paragraph">Management offers scholarships to meritorious students on a merit cum means basis. Students 
            securing GPA 8 and above from the lower-income groups are eligible for the scholarships. <br /><br /></div>

        <div className="headings">Tuition Fee Waiver Scheme</div>
        <div className="paragraph">Eligible candidates of Government Quota can get admission under Tuition Fee Waiver Scheme. <br /><br /></div>

        <div className="headings">Lateral Entry</div>
        <div className="paragraph">Applications are also invited for admission to the second year of the B Tech Degree 
            course, under the Lateral Entry Scheme. <br /><br /></div>

            <div className="box">
                <div className="paragraph">No capitation is levied. Merit is the only Criterion for Selection.</div>
            </div>


            <div class="last">
                <div className="headings">Documents Required for Admission</div>
                    <ul>
                        <li>Admit Card of CEE/KEE    + 1 copy.</li>
                        <li>Entrance Rank Certificate (Data Sheet)    + 1 copy. </li>
                        <li>Allotment Memo (for Govt. Quota)    + 1 copy. </li>
                        <li>SSLC / 10th Mark List (Original)    + 4 copies.</li>
                        <li>Plus 2 Mark List / 12th Mark List / Diploma Mark List (for L/E)    + 4 copies.</li>
                        <li>Pass Certificate    + 4 copies (only for CBSE & ICSE).</li>
                        <li>Transfer Certificate    + 1 copy.</li>
                        <li>Course & Conduct Certificate   </li>
                        <li>Medical Fitness Certificate in the prescribed format.</li>
                        <li>Photographs: Passport Size 6 Nos & Stamp Size 3 Nos.</li>
                        <li>Migration Certificate (Only for CBSE & ICSE, Other State Board & Lateral Entry).</li>
                        <li>Eligibility Certificate (for Lateral Entry & Board of Exam of other States).</li>
                        <li>Community Certificate (for Reservation Categories)    + 2 copies.</li>
                        <li>Income Certificate (for Reservation Categories & Tuition Fee Waiver Students).</li>
                        <li>Fee Receipt (for Govt. Quota)/Bank Remittance Slip.</li>
                        <li>Supporting Documents for NRI/PIO/OCI Quota Admission.</li>

                    </ul>
            </div>
    </div>  
    </div>
    </>
  )
}
