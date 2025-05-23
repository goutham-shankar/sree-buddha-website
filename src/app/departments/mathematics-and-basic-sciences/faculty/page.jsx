"use client"

import React from 'react'
// import image1 from "@/assets/images/departments/cs_dept_img1.png"
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../../department_style.css"
import "./style.css"

// import image from "@/assets/images/departments/faculty/cs/cs_f1.jpg"

export default function ComputerScienceDepartmentFaculty() {

    const faculty = [
        ["maths_science_faculty_0.jpg", "R. Pradeep Kumar", "M.com, MBA", "HOD", "Finance and HRM"],
        ["maths_science_faculty_1.jpg", "Mr. Somanadhan A", "RMPEd", "PED", "Physical Education"],
        ["maths_science_faculty_2.jpg", "Ms. Priya R", "M.Sc", "Asst. Professor", "Mathematics"],
        ["maths_science_faculty_3.jpg", "Ms. Rakhi Rajeev", "M.Sc, B.Ed", "Asst. Professor", "Mathematics"],
        ["maths_science_faculty_4.jpg", "Ms. Divya Suresh", "M.Sc, B.Ed", "Asst. Professor", "Mathematics"],
        ["maths_science_faculty_5.jpg", "Ms. Asha S", "M.Sc, B.Ed, M.Phil", "Asst. Professor", "Mathematics"],
        ["maths_science_faculty_6.jpg", "Ms. Anju B I", "M.Sc, B.Ed, SET", "Asst. Professor", "Physics"],
        ["maths_science_faculty_7.jpg", "Ms. Raji Sankar", "M.Sc", "Asst. Professor", "Chemistry"],
        ["maths_science_faculty_8.jpg", "Ms. Asha V", "M.Sc, B.Ed, SET", "Asst. Professor", "Polymer Chemistry"],
        ["maths_science_faculty_9.jpg", "Ms. Shalini C G", "M.Sc, B.Ed", "Asst. Professor", "Mathematics"],
        ["maths_science_faculty_10.jpg", "Ms. Prabhiya P S", "M.Sc, B.Ed, SET", "Asst. Professor", "Mathematics"],
        ["maths_science_faculty_11.jpg", "Ms. Smitha N K", "M.A, B.Ed, SET", "Asst. Professor", "English"],
        ["maths_science_faculty_12.jpg", "Ms. Suryamol O", "M.Sc", "Asst. Professor", "Physics"],
        ["Veena-1.jpg", "Dr Veenapriya", "Ph.D", "Asst. Professor", "Ph.D in Management"]
    ];
      
    return (
        <div className="cs_department_faculty">
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
                                    <td> 
                                        <img src={`/assets/images/departments/faculty/maths_and_science/${singleFaculty[0]}`} alt="image" /> 
                                    </td>
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
                                    {/* FIXED: Changed "eee" to "maths_and_science" to match desktop view */}
                                    <img src={`/assets/images/departments/faculty/maths_and_science/${singleFaculty[0]}`} alt={`${singleFaculty[1]}`} />
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