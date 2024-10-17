import React from 'react'
import image1 from "@/assets/images/departments/cs_dept_img1.png"
import DepartmentNavbar from '@/components/departments/department_navbar'

import "../../department_style.css"

export default function ComputerScienceDepartment() {
    return (
        <div className="department">


            {/* <div className="top_img_section"> */}
                {/* <img src={image1.src} alt="image" /> */}
            {/* </div> */}

            <div className="mid_section">

                <div className="info_section">

                    <h3 className="heading_blue2">VISION</h3>
                    <p className="para2">
                        To create competent computer engineers with social commitment
                    </p>

                    <h3 className="heading_blue2">MISSION</h3>
                    <p className="para2">
                        Provide student- centric learning environment to create competent Computer Engineers
                        Instigate research, innovation and entrepreneurship initiatives
                        Impart  skills and creative thinking ability to promote lifelong learning.
                    </p>



                </div>

                <DepartmentNavbar />



            </div>

        </div>
    )
}
