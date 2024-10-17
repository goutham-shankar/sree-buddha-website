import React from 'react'
// import image1 from "@/assets/images/departments/cs_dept_img1.png"
import DepartmentNavbar from '@/components/departments/department_navbar'

import "../../department_style.css"
import Image from 'next/image'

import "./style.css"

// import image from "@/assets/images/departments/faculty/cs/cs_f1.jpg"

export default function ComputerScienceDepartmentFaculty() {

    const faculty = [
        ["cs_f1.jpg", "Dr.Sujith Kumar P.S", "M.E.,Ph.D", "Professor and Dean", "Mobile adhoc networks"],
        ["cs_f2.jpg", "Dr. S.V. Annlin Jeba", "M.E, Ph.D", "Professor and HoD", "Wireless Sensor Network"],
        ["cs_f3.jpg", "Dr. Anil A.R", "M.E, Ph.D", "Associate Professor", "Image Processing /Machine Learning"],
        ["cs_f4.jpg", "Ms. Minu Lalitha Madhavu", "M.Tech", "Assistant Professor", "Technology Management"],
        ["cs_f5.jpg", "Ms. Dhanya Sreedharan", "M.Tech", "Assistant Professor", "Computer and Information Technology"],
        ["cs_f6.jpg", "Ms. Lakshmi S (On Leave)", "M.Tech", "Assistant Professor", "Technology Management / Machine Learning"],
        ["cs_f7.jpg", "Ms.Reshmi S", "M.E", "Assistant professor", "Computer Science and Engineering"],
        ["cs_f8.jpg", "Ms. Arya Raj S", "M.Tech", "Assistant professor", "Computer and Information Science"],
        ["cs_f8.jpg", "Ms.Supriya L P", "M.E", "Assistant Professor", "Computer Science & Engg./ AI & Neural Networks"],
        ["cs_f10.jpg", "ATHIRA SANKAR", "M.Tech", "Assistant Professor", "DATA MINING"],
        ["cs_f11.jpg", "Arun Kumar", "M.E", "Assistant Professor", "Software Engineering, Programming Methodologies"],
        ["cs_f12.jpg", "Dr. ANJU J PRAKASH", "M.Tech, Ph.D", "Assistant Professor", "Data Mining, Machine Learning"],
        ["cs_f13.jpg", "Parvathy S. Kurup", "M.Tech", "Assistant Professor", "Machine Learning, Data Mining"],
        ["cs_f14.jpg", "DHANUNATH R", "M.Tech, Ph.D (doing)", "Assistant Professor", "Natural Language Processing"],
        ["cs_f15.jpg", "Anju Viswam", "M.Tech", "Assistant Professor", "Web Development"]
    ]

    return (

        <div className="department">


            {/* <div className="top_img_section"> */}
            {/* <img src={image1.src} alt="image" /> */}
            {/* </div> */}

            <div className="mid_section">

                <div className="info_section">

                    <table className = "faculty_table">

                        {
                            faculty.map((singleFaculty ) => {
                                return (
                                    
                                    <tr>
                                        
                                        <td> <img src= {`/assets/images/departments/faculty/cs/${singleFaculty[0]}`} alt="image" /> </td>
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

                    </table>


                </div>

                <DepartmentNavbar />



            </div>

        </div>
    )
}
