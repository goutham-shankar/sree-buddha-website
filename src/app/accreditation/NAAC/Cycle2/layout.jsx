import React from 'react'
import DepartmentNavbar from '@/components/departments/department_navbar'


export default function page({children}) {
    const links =  [
        ["IIQA" , "/accreditation/NAAC/Cycle2"] , 
        ["Criteria 1", "/accreditation/NAAC/Cycle2/criteria1"],
        ["Criteria 2", "/about-us/iqac/aqars"],
        ["Criteria 3", "/about-us/iqac/aquar_2020-2021"],
        ["Criteria 4", "/about-us/iqac/aquar_2021-2022"],
        ["Criteria 5", "/about-us/iqac/aquar_2022-2023"],
        ["Criteria 6", "/about-us/iqac/minutes_and_atr"],
        ["Criteria 7", "/about-us/iqac/faculty_appraisal"],

    ]
  return (  
    <div className='page' >
        <h1 className="page_heading">NAAC Cycle 2</h1>
        <div className="line"></div>
        <div className="iiqa">
       
        <DepartmentNavbar links = {links}  />


        {children}
        </div>
      
    </div>
  )
}
