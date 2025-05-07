"use client"

import React from 'react'
// import image1 from "@/assets/images/departments/cs_dept_img1.png"
// import DepartmentNavbar from '@/components/departments/department_navbar'

import "../../department_style.css"


import "./style.css"

// import image from "@/assets/images/departments/faculty/cs/cs_f1.jpg"

export default function ComputerScienceDepartmentFaculty() {

    const faculty = [
        ["pavitha.jpg", "Pavitha P. P.", "B.Tech, M.Tech", "HoD", " Electronics"],
        ["ambika.jpg", "Ambika Sekhar", "M.Tech", "Assistant Professor", " Microwave and Television Engineering"],
        ["saritha.jpg", "Saritha N. R.", "M.Tech", "Assistant Professor", "Applied Electronics"],
        ["sabi.jpg", "Sabi S.", "M.Tech", "Assistant Professor", "Microwave and Television Engineering"],
        ["jasmin.jpg", "Jasmin Basheer", "M.Tech", "Assistant Professor", " Industrial Instrumentation and Control"],
        ["pooja.jpg", "Pooja S. Mohan", "M.Tech", "Assistant Professor", "Optoelectronics and Communication Systems "],
        ["sangeetha.jpg", "T. R. Sangeeta", "M.Tech", "Assistant Professor", "Communication Engineering"],
        ["chinchu.jpg", "Chinchu S.", "M.Tech", "Assistant Professor", "Communication Engineering"],
        ["hari.jpg", "Hari S.", "M.Tech", "Assistant Professor", "Wireless Networks and Applications"]
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
                                                src={`/assets/images/departments/faculty/ecomp/${singleFaculty[0]}`} 
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
                                            src={`/assets/images/departments/faculty/ecomp/${singleFaculty[0]}`} 
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