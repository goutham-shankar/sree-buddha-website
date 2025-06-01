"use client"

import React from 'react'


import "../../department_style.css"
import "./style.css"



export default function MechDepartmentFaculty() {

    const faculty = [
        ["mech_faculty_6.jpg", "Mr. Anilkumar A V", "M.Tech", "HOD", "Industrial Refrigeration and Cryogenic Engineering"],
        ["mech_faculty_1.jpg", "Dr. K Krishnakumar", "Ph.D", "Professor", "Heat Transfer and Thermal Engineering"],
        ["mech_faculty_2.jpg", "Dr. Saji Varghese", "Ph.D", "Professor", "Manufacturing Engineering"],
        ["mech_faculty_3.jpg", "Dr. M. S. Senthil Saravanan", "Ph.D", "Professor", "Thermal Engineering"],
        ["mech_faculty_4.jpg", "Dr. Trijo Tharayil", "Ph.D", "Associate Professor", "Thermal Engineering"],
        ["mech_faculty_5.jpg", "Dr. J.B. Sajin", "Ph.D", "Associate Professor", "Manufacturing Engineering"],
        
        ["mech_faculty_7.jpg", "Ms. Vidya V", "M.E", "Assistant Professor", "Mechatronics"],
        ["mech_faculty_8.jpg", "Mr. Venugopal N", "M.Tech", "Assistant Professor", "Industrial Refrigeration and Cryogenic Engineering"],
        ["mech_faculty_9.jpg", "Mr. Sreekumar E N", "M.Tech", "Assistant Professor", "Industrial Refrigeration and Cryogenic Engineering"],
        ["mech_faculty_10.jpg", "Mr. Kalesh K K", "M.Tech", "Assistant Professor", "Production Engineering"],
        ["mech_faculty_14.jpg", "Mr. Ratheesh R", "M.Tech", "Assistant Professor", "Industrial Engineering and Management"],
        ["mech_faculty_15.jpg", "Mr. Vaisakh P S", "M.Tech", "Assistant Professor", "Production and Industrial Engineering"],
        ["mech_faculty_16.jpg", "Mr. Jinan S", "M.Tech", "Assistant Professor", "Industrial Refrigeration and Cryogenic Engineering"],
        ["mech_faculty_17.jpg", "Ms. Kalpana Ashokan", "M.Tech", "Assistant Professor", "IC Engines and Turbo Machinery"],
        ["mech_faculty_18.jpg", "Mr. Harikrishnan G", "M.Tech", "Assistant Professor", "Machine Design"],
        ["mech_faculty_20.jpg", "Mr. Prasanth V", "M.Tech", "Assistant Professor", "Propulsion Engineering"]
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
                                        <div className="faculty_img_container">
                                            <img
                                                src={`/assets/images/departments/faculty/mech/${singleFaculty[0]}`}
                                                alt={`${singleFaculty[1]}`}
                                                className="faculty_img"
                                            />
                                        </div>
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
                                    <div className="faculty_img_container">
                                        <img
                                            src={`/assets/images/departments/faculty/mech/${singleFaculty[0]}`}
                                            alt={`${singleFaculty[1]}`}
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

            <style jsx>{`
                .faculty_img_container {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .faculty_img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                @media (max-width: 768px) {
                    .faculty_img_container {
                        width: 80px;
                        height: 80px;
                    }
                    
                    .single_faculty {
                        display: flex;
                        padding: 15px;
                        border-bottom: 1px solid #eaeaea;
                    }
                    
                    .img_section {
                        margin-right: 15px;
                        display: flex;
                        align-items: center;
                    }
                    
                    .details_section {
                        flex: 1;
                    }
                    
                    .details_section h3 {
                        margin: 5px 0;
                        font-size: 14px;
                    }
                    
                    .faculty_name {
                        font-weight: bold;
                    }
                }
            `}</style>
        </div>
    )
}