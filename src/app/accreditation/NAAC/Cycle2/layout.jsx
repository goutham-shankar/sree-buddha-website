import React from 'react'
import DepartmentNavbar from '@/components/departments/department_navbar'


export default function page({children}) {
    const links =  [
        ["IIQA" , "/accreditation/NAAC/Cycle2"] , 
        ["Criteria 1", "/accreditation/NAAC/Cycle2/criteria1"],
        ["Criteria 2", "/accreditation/NAAC/Cycle2/criteria2"],
        ["Criteria 3", "/accreditation/NAAC/Cycle2/criteria3"],
        ["Criteria 4", "/accreditation/NAAC/Cycle2/criteria4"],
        ["Criteria 5", "/accreditation/NAAC/Cycle2/criteria5"],
        ["Criteria 6", "/accreditation/NAAC/Cycle2/criteria6"],
        ["Criteria 7", "/accreditation/NAAC/Cycle2/criteria7"],

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
