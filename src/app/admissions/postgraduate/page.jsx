import React from 'react'
import './style.css'
import nba from  '@/assets/images/admissions/nba_accredited.png'
import apply from  '@/assets/images/admissions/applynow.png'
import placement from  '@/assets/images/admissions/placement.png'

export default function page() {
  return (
   <>
   <div className="main">
    <div className="title">POST GRADUATE</div>
    <br />

    <div className="pic">
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSe3RvBGmTslrxDMHBYn0vGufABqCvqUZnumUazbylQZ3J5lgQ/viewform'>
        <img className="photo" src={nba.src} alt="" /></a>
        
        <a href="#"><img className="photo" src={apply.src} alt="" /></a>

        <a href="#"><img className="photo" src={placement.src} alt="" /></a>
        
    </div>
    <br />
    <div className="headings">Programs Offered</div>
    <div className="programs">
        <ul>Electronics & Communication Engineering - Embedded Systems</ul>
        <ul>Biotechnology and Biochemical Engineering</ul>
        <ul> Computer Science & Engineering</ul>
        <ul>Mechanical Engineering - Computer Integrated Manufacturing</ul>
        <ul>Civil Engineering - Structural Engineering</ul>
        <ul> Electrical Engineering - Electrical Machines</ul>
    </div>
      <div className="links">
        <a className='no-underline' href="https://docs.google.com/forms/d/e/1FAIpQLSe3RvBGmTslrxDMHBYn0vGufABqCvqUZnumUazbylQZ3J5lgQ/viewform"><div className="link">Quick Registration</div></a>
        <a className='no-underline' href="https://sbce.ac.in/m-tech-application-form/"><div className="link">Online Application form</div></a>
      

      </div>
   
    <div className="headings">Eligibility Criteria</div>
    <div className="paragraph">
        The applicant must be of Indian Nationality. <br /><br />
        Interested applicants should have completed his/her graduation from an institution affiliated by 
        AICTE / Deemed Universities in India with a minimum of 60% percentage marks in the qualifying exam (B. Tech).
        However, SC/ ST candidates have only to pass their respective B. Tech degrees. For SEBC (OBC) candidates, a 
        minimum requirement of 54% marks in percentage in their B. Tech degree is compulsory. <br /><br />
        Candidates who have qualified for AMIE / AMIETE exams and satisfy the following conditions will be eligible for admission <br /> A minimum
        of 55% marks is required for section B in AMIE/AMIETE entrance exam. <br /><br /> 
        Candidates appearing for the final semester exam are also eligible to apply, but they must have to pass all 
        the subjects up to including the 6th-semester exams (8th semester for B. Arch candidates). However, the confirmation of
        admission of any candidates will be subject to the production of their qualifying
        degree -before the date stipulated by the affiliated University. <br /><br />
        Candidates with valid GATE score are eligible for AICTE monthly stipend. <br /><br />
    </div>
            <div className="mtech">
                <ul>M Tech Electronics & Communication Engineering – Embedded Systems</ul>
                <ul>B Tech/BE degree in ECE/AE&I/EEE or CSE</ul>
            </div>

            <div className="mtech">
                <ul>M Tech Biotechnology & Biochemical Engineering</ul>
                <ul> B Tech/BE degree in BT&BCE/Chemical Engineering</ul>
            </div>

            <div className="mtech">
                <ul>M Tech Computer Science & Engineering</ul>
                <ul>B Tech/BE degree CSE/CS/IT</ul>
            </div>

            <div className="mtech">
                <ul>M Tech Mechanical Engineering – Computer Integrated Manufacturing</ul>
                <ul>B Tech/BE degree in Mechanical Engineering</ul>
            </div>

            <div className="mtech">
                <ul>MTech Civil Engineering – Structural Engineering</ul>
                <ul> B Tech/BE degree in Civil Engineering</ul>
            </div>

            <div className="mtech">
                <ul>M Tech Electrical Engineering – Electrical Machines</ul>
                <ul>B Tech/BE Degree in Electrical & Electronics Engineering</ul>
            </div>
            
            <div className="headings">M Tech Degree Course – Fees Structure 2022-23</div>

            <div className="feestructure">
                <div className="feename">

                    <div className="ndiv1"> 1. Tuition Fee</div>
                    <div className="ndiv2">2.Admission fee</div>
                    <div className="ndiv3">3.Caution Deposit</div>
                    <div className="ndiv4">4.University Student Administration fee</div>
                    <div className="ndiv5">5.University Affiliation Fee</div>
                    <div className="ndiv6">6.University Exam fee</div>
                    <div className="ndiv7">7.University Arts & Sports Fee</div>
                    <div className="ndiv8">8.Stationery charges</div>
                    <div className="ndiv9">9.PTA</div>
                    {/* <ol>
                        <li className='1'>Tuition Fee</li>
                        <li className='2'>Admission fee </li>
                        <li className='3'>Caution Deposit</li>
                        <li className='4'>University Student Administration fee</li>
                        <li className='5'>University Affiliation Fee</li>
                        <li className='6'>University Exam fee </li>
                        <li className='7'>University Arts & Sports Fee </li>
                        <li className='8'>Stationery charges</li>
                        <li className='9'>PTA</li>
                    </ol> */}
                    <div className="title2">Total</div>
                </div>
                <div className="fee">

                            <div className='fdiv1'>: ₹ 35,000 (Per Semester*)</div>
                            <div className='fdiv2'>: ₹ 500 (One Time)</div>
                            <div className='fdiv3'>: ₹ 2,500 (One Time Refundable)</div>
                            <div className='fdiv4'>: ₹ 1,000 (One Time)</div>
                            <div className='fdiv5'>: ₹ 1,000 (One Time)</div>
                            <div className='fdiv6'>: ₹ 1,500 (1st Semester)</div>
                            <div className='fdiv7'>: ₹ 500 (One Time)</div>
                            <div className='fdiv8'>: ₹ 200 (One Time)</div>
                            <div className='fdiv9'>: ₹ 2,000 (One Time)</div>

              
                    <div className="title2">₹. 44,200/-</div>
                </div>
            </div>
            <div className="bold">For more information, please contact our PRO @ 9446014317</div>
            <div className="bold">Documents are to be produced in original at the time of Admission</div>
            
            <div className="last">
                <div className="bold">
                    <ol>
                        <li>Admit Card of CEE/KEE + 1 copy.</li>
                        <li>Entrance Rank Certificate (Data Sheet) + 1 copy.</li>
                        <li>Allotment Memo (for Govt. Quota) + 1 copy.</li>
                        <li>SSLC / 10th Mark List (Original) + 4 copies.</li>
                        <li>Plus 2 Mark List / 12th Mark List / Diploma Mark List (for L/E) + 4 copies.</li>
                        <li>Pass Certificate + 4 copies (only for CBSE & ICSE).</li>
                        <li>Transfer Certificate + 1 copy.</li>
                        <li>Course & Conduct Certificate.</li>
                        <li>Medical Fitness Certificate in the prescribed format.</li>
                        <li>Photographs: Passport Size 6 Nos & Stamp Size 3 Nos.</li>
                        <li>Migration Certificate (Only for CBSE & ICSE, Other State Board & Lateral Entry).</li>
                        <li>Eligibility Certificate (for Lateral Entry & Board of Exam of other States).</li>
                        <li>Community Certificate (for Reservation Categories) + 2 copies.</li>
                        <li>Income Certificate (for Reservation Categories & Tuition Fee Waiver Students).</li>
                        <li>Fee Receipt (for Govt. Quota)/Bank Remittance Slip.</li>
                        <li>Supporting Documents for NRI/PIO/OCI Quota Admission.</li>
                    </ol>
                </div><br /><br />
            </div>

        </div>
   </>
  )
}
