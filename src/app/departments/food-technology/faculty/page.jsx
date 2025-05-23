"use client"

import React from 'react'
// import image1 from "@/assets/images/departments/cs_dept_img1.png"
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../../department_style.css"


import "./style.css"

// import image from "@/assets/images/departments/faculty/cs/cs_f1.jpg"

export default function ComputerScienceDepartmentFaculty() {

    const faculty = [

        ["malu_ravi.jpg", "Dr. Malu Ravi", "Ph.D", "HOD", "Food Microbiology"],
        ["rincy.jpg", "Ms. Rincy Susan Raju", "M.Tech", "Asst. Professor", "Food biotechnology"],
        ["athulaya.jpg", "Ms. Athulya Krishnan", "MSc", "Asst. Professor", "Food technology and quality assurance"],
        ["Bindhya.jpg", "Dr. Bindhya K P", "Ph.D", "Asst. Professor", "Chemical Engineering"],
        ["priy.jpg", "Ms. Priyadharshini S", "M.tech", "Asst. Professor", "Food Processing"]

    ];


    return (

        <div className="cs_department_faculty">



            {/* <div className="top_img_section"> */}
            {/* <img src={image1.src} alt="image" /> */}
            {/* </div> */}

            {/* <div className="mid_section"> */}

            {/* <div className="info_section"> */}

            <table className="faculty_table_desktop">

                <tbody>

                    <tr className='headrow'>
                        <td></td>
                        <td>Name</td>
                        <td>Qualification</td>
                        <td>Designation</td>
                        <td>Specialization</td>
                    </tr>

                    {
                        faculty.map((singleFaculty, index) => {
                            return (

                                <tr key={index}>

                                    <td> <img src={`/assets/images/departments/faculty/ft/${singleFaculty[0]}`} alt="image" /> </td>
                                    {/* <td> <img src= {image.src} alt="image" /> </td> */}
                                    {/* <td> <img src= {"/assets/images/departments/faculty/cs/cs_f1.jpg"} alt="image" /> </td> */}
                                    <td>{singleFaculty[1]}</td>
                                    <td>{singleFaculty[2]}</td>
                                    <td>{singleFaculty[3]}</td>
                                    <td>{singleFaculty[4]}</td>


                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>


            <div className="faculty_table_mobile">



                {
                    faculty.map((singleFaculty, index) => {

                        return (



                            <div className="single_faculty" key={index}>



                                <div className="img_section">
                                    <img src={`/assets/images/departments/faculty/ft/${singleFaculty[0]}`} alt="" />
                                </div>

                                <div className="details_section">
                                    <h3 className="faculty_name">{singleFaculty[1]}</h3>
                                    <h3 className="faculty_qualification">{singleFaculty[2]}</h3>
                                    <h3 className="faculty_designation">{singleFaculty[3]}</h3>
                                    <h3 className="faculty_specialization">{singleFaculty[4]}</h3>
                                </div>

                            </div>

                        )



                    })
                }



            </div>

            {/* <a href = "" className="faculty_profile">Faculty Profile</a> */}

        </div>
    )
}
