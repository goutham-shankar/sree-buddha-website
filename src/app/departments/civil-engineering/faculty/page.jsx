"use client"

import React from 'react'
// import image1 from "@/assets/images/departments/cs_dept_img1.png"
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../../department_style.css"


import "./style.css"

// import image from "@/assets/images/departments/faculty/cs/cs_f1.jpg"

export default function ComputerScienceDepartmentFaculty() {

    const faculty = [
        ["civil_faculty_1.jpg", "Dr. Gouri Antherjanam", "Ph.D", "Professor & HoD", "CIVIL ENGINEERING"],
        ["civil_faculty_2.jpg", "Dr. Sivsankar S.", "Ph.D", "Professor", "Structural Engineering"],
        ["civil_faculty_3.jpg", "Mr. Ashok Mathew", "M.Tech", "Assistant Professor", "STRUCTURAL ENGINEERING"],
        ["civil_faculty_4.jpg", "Mr. Unnikrishnan S", "M.Tech", "Assistant Professor", "CONSTRUCTION ENGINEERING"],
        ["civil_faculty_5.jpg", "Ms. Regi P Mohan", "M.Tech", "Assistant Professor", "ENVIRONMENTAL GEOTECHNOLOGY"],
        ["civil_faculty_6.jpg", "Ms. Sobha Elizabeth Thomas", "M.Tech", "Assistant Professor", "STRUCTURAL ENGINEERING"],
        ["civil_faculty_7.jpg", "Mr. Pradeep P. (LEAVE)", "M.Tech", "Assistant Professor", "Habitat Technology"],
        ["civil_faculty_8.jpg", "Ms. Sreelekshmi S. (leave)", "M.Tech", "Assistant Professor", "Transportation Engineering"],
        ["civil_faculty_9.jpg", "Ms. Cinaya Tony", "M.Tech", "Assistant Professor", "HYDRAULICS ENGINEERING"],
        ["civil_faculty_10.jpg", "Ritzy R", "M.Tech", "Assistant Professor", "STRUCTURAL ENGINEERING"],
        ["civil_faculty_11.jpg", "Namitha Chandran", "M.Tech", "Assistant Professor", "CIVIL ENGINEERING"],
        ["civil_faculty_12.jpg", "Anusree Lal", "M.Tech", "Assistant Professor", "Structural Engineering"],
        ["civil_faculty_13.jpg", "Mr. Sooraj S", "M.Tech", "Assistant Professor", "Structural Engineering"],
        ["civil_faculty_14.jpg", "Mr. Kailas G Nath", "M.Tech", "Assistant Professor", "Structural Engineering"],
        ["civil_faculty_15.jpg", "Ms. Neethu Roy", "M.Tech", "Assistant Professor", "Structural Engineering"]
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

                                <tr key = {index}>

                                    <td> <img src={`/assets/images/departments/faculty/civil/${singleFaculty[0]}`} alt="image" /> </td>
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
                    faculty.map((singleFaculty ,index ) => {

                        return (
                           
                           

                            <div className="single_faculty" key = {index}>

                            

                                <div className="img_section">
                                    <img src={`/assets/images/departments/faculty/eee/${singleFaculty[0]}`} alt="" />
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
