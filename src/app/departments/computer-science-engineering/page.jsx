"use client"

import React from 'react'
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../department_style.css"

export default function ComputerScienceDepartment() {
    return (
        // <div className="department">
        <>


            <div className="top_img_section">
                <img src={"/assets/images/departments/cs_dept_img1.png"} alt="image" />
            </div>

            <div className="mid_section">

                <div className="info_section">

                    <h3 className="heading_blue">Programmes Offered</h3>

                    <h3 className="black_bold">B Tech in Computer Science & Engineering</h3>
                    <h3 className="black_bold">B Tech in Artificial Intelligence & Machine Learning</h3>
                    <h3 className="black_bold">M Tech in Computer Science & Engineering</h3>

                    <p className="para1">
                        Sree Buddha College of Engineering provides world class infrastructure, state of the art facilities and an academic ambience that suit the requirements of the dynamic and highly competitive global environment.In this era of Information Technology, this institution offers courses in Computer Science and Engineering with the objective of imparting quality to equip the students with a solid and thorough understanding of the fundamentals and core subjects of Computer Engineering.This department is accredited by NBA since November 2019 .The Department of Computer Science and Engineering was established in the year 2002. At present the sanctioned intake is 60 with a provision of admitting six diploma holders in the third semester under lateral entry scheme. The department also offers M Tech programme specialized in Computer Science and Engineering from the year 2011. The sanctioned intake at present is 18.The department has well experienced faculty with postgraduate and doctoral qualifications from prestigious institutions with many publications to their credit. The faculty members regularly update their skills by attending and organizing refresher courses in their areas of specialization.The department introduces into its technical arsenal various student branches like Computer Society of India (CSI) and Association for Computing Machinery (ACM). The department manages the Remote Centre for IIT Bombay and the college membership of NASSCOM. It also has a department association named CYBORG which has a very active participation from students as well.Invited lectures by experts drawn from Industries and Academicsare arranged regularly.The department has well equipped laboratories andcomputing facility. In addition to the Central library there is a department library. Moreover it has a good collection of project reports, seminar reports, different journals and technical magazines.
                    </p>


                </div>

                {/* <DepartmentNavbar /> */}



            </div>
            

        </>
    )
}
