import React from 'react'
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../department_style.css"

export default function ComputerScienceDepartment() {
    return (
        // <div className="department">
        <>


            <div className="top_img_section">
                <img src={"/assets/images/departments/dept_civil_img1.jpg"} alt="image" />
            </div>

            <h3 class="heading1">Programmes Offered</h3>
            <h3 className="black_bold">B Tech in Civil Engineering</h3>
            <h3 className="black_bold">M Tech in Structural Engineering</h3>

            <h3 class="heading2">The department of Civil Engineering</h3>
            <p>The department of Civil Engineering was started in Sree Buddha College of Engineering in the year 2008 with a sanctioned student intake of 60. The department also offers a PG programme in Structural Engineering with a sanctioned student intake of 24 in the year 2013. The department provides quality instruction and teaching to both UG and PG levels and technical advisory support for research and development activities covering the areas of Building Materials and Construction, Surveying, Hydraulics Engineering, Concrete Technology, Civil Engineering Drawing, Structural Engineering, Transportation Engineering, Water Resources Engineering, Geotechnical Engineering and Environmental Engineering. This department is accredited by NBA since November 2019.</p>
            <p>Faculty at Civil Engineering believes in open interaction with students who are encouraged to participate in academic, research and extra-curricular activities. The student association of the Department “CASTELLOS” has proved to be a platform for the students to interact with eminent personalities in the field and to take leadership in conducting various programmes. The department laboratory is equipped with latest facilities for extensive hands-on training to both the undergraduate and postgraduate students.</p>

            <h3 class="heading2">Industrial Consultancy Cell</h3>
            <p>The department undertakes consultancy works of which the major clients are KSEB, PWD, Kerala Housing Board, LSGD, Southern Railway, Manhar Constructions, EJ constructions, RAMCO cements, ULTRATECH cements, WAPCOS Pvt. Ltd. The department has a life time membership of The Institution of Engineers, India (Students’ chapter, Civil division).</p>

            <h3 class="heading2">Industry Institute Interaction Initiative</h3>
            <p>For fostering advanced research in recent advances in Civil Engineering, the department has entered into an MOU with FRBL, a leading manufacturer of prefabricated housing system, which has a technical tie up with IIT Madras. Our PG and UG students are doing their project work in association with FRBL.</p>

            <h3 class="heading2">Institute Social Responsibility</h3>
            <p>As a part of our commitment to society, we have initiated a social support facility to the residents in and around Pattoor to solve their drinking water related issues. Under this initiative an activity, JALASHUDDHI, water quality analysis is conducted on a continued basis to the needy households of residents around the Institution.</p>



        </>
    )
}
