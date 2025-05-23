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

export default function ComputerScienceDepartmentFaculty() {

    const faculty = [
        ["sb.jpg", "Dr. S. Sureshbabu", "Ph.D", "Professor and Dean", "IT enabled services"],
        ["cs_f1.jpg", "Dr. Sujith Kumar P. S.", "M.E., Ph.D", "Professor and Dean", "Mobile Adhoc Networks"],
        ["cs_f2.jpg", "Dr. S. V. Annlin Jeba", "M.E., Ph.D", "Professor and HoD", "Wireless Sensor Network"],
        ["cs_f3.jpg", "Dr. Anil A. R.", "M.E., Ph.D", "Associate Professor", "Image Processing / Machine Learning"],
        ["cs_f4.jpg", "Ms. Minu Lalitha Madhavu", "M.Tech", "Assistant Professor", "Technology Management"],
        ["cs_f5.jpg", "Ms. Dhanya Sreedharan", "M.Tech", "Assistant Professor", "Computer and Information Technology"],
        ["cs_f6.jpg", "Ms. Lakshmi S (On Leave)", "M.Tech", "Assistant Professor", "Technology Management / Machine Learning"],
        ["cs_f7.jpg", "Ms. Reshmi S", "M.E.", "Assistant Professor", "Computer Science and Engineering"],
        ["cs_f8.jpg", "Ms. Arya Raj S", "M.Tech", "Assistant Professor", "Computer and Information Science"],
        ["cs_f9.jpg", "Ms. Supriya L. P.", "M.E.", "Assistant Professor", "Computer Science & Engg. / AI & Neural Networks"],
        ["cs_f11.jpg", "Mr. Arun Kumar", "M.E.", "Assistant Professor", "Software Engineering, Programming Methodologies"],
        ["cs_f12.jpg", "Dr. Anju J. Prakash", "M.Tech, Ph.D", "Assistant Professor", "Data Mining, Machine Learning"],
        ["cs_f13.jpg", "Ms. Parvathy S. Kurup", "M.Tech", "Assistant Professor", "Machine Learning, Data Mining"],
        ["cs_f14.jpg", "Mr. Dhanunath R", "M.Tech, Ph.D (Doing)", "Assistant Professor", "Natural Language Processing"],
        ["cs_f15.jpg", "Ms. Anju Viswam", "M.Tech", "Assistant Professor", "Web Development"],
        ["chinchu-1.jpg", "Ms. Chinchu M. S.", "M.Tech, Ph.D (Doing)", "Assistant Professor", "Deep Learning"],
        ["ashji.jpg", "Ms. Ashji S. Raj", "M.Tech", "Assistant Professor", "Cyber Security"],
        ["geethu.jpg", "Ms. Geethumol P. V.", "M.Tech", "Assistant Professor", "Computer Communication"],
        ["jyothi.jpg", "Ms. Jyothi B", "M.Tech", "Assistant Professor", "Computer Science and Engineering"],
        ["ancy.jpg", "Ms. Ancy Y. Das", "M.Tech", "Assistant Professor", "Computer Science and Engineering"]
    ];
    
    return (
        <div className={`cs_department_faculty ${poppins.className}`}>

            <h2 className="page_heading">Computer Science Department Faculty</h2>

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
                                <img src={`/assets/images/departments/faculty/cs/${singleFaculty[0]}`} alt={singleFaculty[1]} />
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
                            <img src={`/assets/images/departments/faculty/cs/${singleFaculty[0]}`} alt={singleFaculty[1]} />
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

            {/* <a href="/cs/faculty/profiles" className="faculty_profile">View Detailed Profiles</a> */}
        </div>
    )
}