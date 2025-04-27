"use client"

import React from 'react'
import { Poppins } from 'next/font/google'
import "../../department_style.css"
import "./style.css"

// Initialize Poppins font
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export default function AIDepartmentFaculty() {

    const faculty = [
        ["ai_faculty_1.jpg", "Dr. Anil A.R", "M.Tech, PhD", "Associate Professor & HOD", "Digital Image Computing"],
        ["ai_faculty_2.jpg", "Dr. Sunil S", "B.Tech, M.Tech, PhD", "Associate Professor", "Artificial Intelligence"],
        ["ai_faculty_3.jpg", "Minu Lalitha Madhav", "B.Tech, M.Tech", "Assistant Professor", "Data Security"],
        ["ai_faculty_4.jpg", "Parvathy S Kurup", "B.Tech, M.Tech", "Assistant Professor", "Machine Learning"],
        ["ai_faculty_5.jpg", "Chinchu M.S", "B.Tech, M.Tech", "Assistant Professor", "Deep Learning"],
        ["ai_faculty_6.jpg", "Divya M.K", "B.E, M.Tech", "Assistant Professor", "Artificial Intelligence"],
        ["ai_faculty_7.jpg", "Lekshmi V.S", "B.Tech, M.Tech", "Assistant Professor", "Internet of Things"],
        ["esther.jpg", "Esther Sara Thomson", " M.Tech", "Assistant Professor", "Computer Science and Engineering"]
    ];

    return (
        <div className={`cs_department_faculty ${poppins.className}`}>

            

            <table className="faculty_table_desktop">
                <tbody>
                    <tr className='headrow'>
                        <td>Profile</td>
                        <td>Name</td>
                        <td>Qualification</td>
                        <td>Designation</td>
                        <td>Specialization</td>
                    </tr>

                    {faculty.map((singleFaculty, index) => (
                        <tr key={index}>
                            <td>
                                <img src={`/assets/images/departments/faculty/ai/${singleFaculty[0]}`} alt={singleFaculty[1]} />
                            </td>
                            <td>{singleFaculty[1]}</td>
                            <td>{singleFaculty[2]}</td>
                            <td>{singleFaculty[3]}</td>
                            <td>{singleFaculty[4]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="faculty_table_mobile">
                {faculty.map((singleFaculty, index) => (
                    <div className="single_faculty" key={index}>
                        <div className="img_section">
                            <img src={`/assets/images/departments/faculty/ai/${singleFaculty[0]}`} alt={singleFaculty[1]} />
                        </div>

                        <div className="details_section">
                            <h3 className="faculty_name">{singleFaculty[1]}</h3>
                            <h4 className="faculty_qualification">{singleFaculty[2]}</h4>
                            <h4 className="faculty_designation">{singleFaculty[3]}</h4>
                            <p className="faculty_specialization">{singleFaculty[4]}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* <a href="/ai/faculty/profiles" className="faculty_profile">View Detailed Profiles</a> */}
        </div>
    )
}