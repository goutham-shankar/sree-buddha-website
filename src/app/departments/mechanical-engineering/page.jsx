import React from 'react'
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../department_style.css"

export default function ComputerScienceDepartment() {
    return (
        // <div className="department">
        <>


            <div className="top_img_section">
                <img src={"/assets/images/departments/dept_mech_img1.jpg"} alt="image" />
            </div>


            <h3 class="heading1">Programmes Offered</h3>

            <h3 class="heading2">B Tech in Mechanical Engineering</h3>

            <h3 class="heading2">M Tech in Computer Integrated Manufacturing</h3>

            <h3 class="heading3">The Department of Mechanical Engineering (ME)</h3>
            <p>The department is one of the largest departments in the college, which started in 2004 with a sanctioned intake of 60 students, later increased to 120 in 2012. It began a postgraduate program in Computer Integrated Manufacturing (CIM) in the academic year 2011-12 with a sanctioned intake of 18 students. It is an approved research center of APJ Abdul Kalam Technological University (KTU) for the Ph.D. program and has been accredited by the NBA since November 2019.</p>

            <h3 class="heading3">Laboratories and Facilities</h3>
            <p>The department houses eight instructional laboratories, two project laboratories, and a research laboratory. Additional facilities include a Coordinate Measuring Machine, Rapid Prototyping Machine, CNC milling machine, and CNC lathe to enhance learning. It also has a computer integrated manufacturing center.</p>

            <h3 class="heading3">Program Objectives and Structure</h3>
            <p>The undergraduate program aims to prepare globally recognized graduates for higher studies and leadership positions in academia and industry, both in India and abroad. The department is organized into four academic and administrative streams:</p>
            <ul className='list'>
                <li>Design Stream</li>
                <li>Manufacturing Stream</li>
                <li>Thermal Engineering Stream</li>
                <li>General Stream</li>
            </ul>

            <h3 class="heading3">Faculty and Student Body</h3>
            <p>With more than 480 students enrolled at the undergraduate level, the department focuses on all-round development. The 28 faculty members are experts in major engineering and technology fields, contributing to active research alongside teaching.</p>

            {/* <div className="top_img_section"> */}
                <img src={"/assets/images/dept_mech_img2.png"} alt="image" />
            {/* </div> */}



        </>
    )
}
