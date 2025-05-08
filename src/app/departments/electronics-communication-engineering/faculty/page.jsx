"use client"

import React from 'react'
// import image1 from "@/assets/images/departments/cs_dept_img1.png"
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../../department_style.css"


import "./style.css"

// import image from "@/assets/images/departments/faculty/cs/cs_f1.jpg"

export default function ComputerScienceDepartmentFaculty() {

    const faculty = [
        ["ece_faculty_1.jpg", "Pavitha P. P.", "B.Tech, M.Tech", "HoD", " Electronics"],
        ["ece_faculty_2.jpg", "Ambika Sekhar", "M.Tech", "Assistant Professor", " Microwave and Television Engineering"],
        ["ece_faculty_3.jpg", "Saritha N. R.", "M.Tech", "Assistant Professor", "Applied Electronics"],
        ["ece_faculty_4.jpg", "Sabi S.", "M.Tech", "Assistant Professor", "Microwave and Television Engineering"],
        ["ece_faculty_5.jpg", "Jasmin Basheer", "M.Tech", "Assistant Professor", " Industrial Instrumentation and Control"],
        ["ece_faculty_6.jpg", "Pooja S. Mohan", "M.Tech", "Assistant Professor", "Optoelectronics and Communication Systems "],
        ["ece_faculty_7.jpg", "Ms. T R Sangeeta", "M.Tech", "Assistant Professor", "Communication Engineering"],
        ["ece_faculty_8.jpg", "Ms. Chinchu S", "M.Tech", "Assistant Professor", "Communication Engineering"],
        ["ece_faculty_9.jpg", "Mr. Hari S", "M.Tech", "Assistant Professor", "Wireless Networks and Applications"]
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

                                    <td> 
                                        <div className="faculty_img_container">
                                            <img 
                                                src={`/assets/images/departments/faculty/ece/${singleFaculty[0]}`} 
                                                alt="image" 
                                                className="faculty_img"
                                            /> 
                                        </div>
                                    </td>
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
                                    <div className="faculty_img_container">
                                        <img 
                                            src={`/assets/images/departments/faculty/ece/${singleFaculty[0]}`} 
                                            alt="" 
                                            className="faculty_img"
                                        />
                                    </div>
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

            <style jsx>{`
                .faculty_img_container {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 0 auto;
                }
                
                .faculty_img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                @media (max-width: 768px) {
                    .faculty_img_container {
                        width: 100px;
                        height: 100px;
                    }
                }
            `}</style>
        </div>
    )
}