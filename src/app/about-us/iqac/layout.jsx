import React from 'react'
import "./style.css"

import DepartmentNavbar from '@/components/departments/department_navbar'

export default function page({children}) {
    const links =  [
        ["IQAC Brief" , "/about-us/iqac"] , 
        ["Members", "/about-us/iqac/members"],
        ["AQARS", "/about-us/iqac/aqars"],
        ["AQUAR 2020-2021", "/about-us/iqac/aquar_2020-2021"],
        ["AQUAR 2021-2022", "/about-us/iqac/aquar_2021-2022"],
        ["AQUAR 2022-2023", "/about-us/iqac/aquar_2022-2023"],
        ["Minutes and ATR", "/about-us/iqac/minutes_and_atr"],
        ["Faculty Appraisal", "/about-us/iqac/faculty_appraisal"],

    ]
  return (
    <div className='page' >
        <h1 className="page_heading">Internal Qualicty Assurance Cell</h1>
        <div className="line"></div>
        <div className="iqac">
       
        <DepartmentNavbar links = {links}  />


        {children}
        </div>
      
    </div>
  )
}
