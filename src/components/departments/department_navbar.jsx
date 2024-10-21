import React from 'react'
import "@/styles/departments/department_navbar.css"

export default function DepartmentNavbar(props) {
  return (
    <div className = "department_navbar">

         <ul>
            <li> <a href={`/departments/${props.department}/`}>About</a>  </li>
            <li> <a href={`/departments/${props.department}/vision-mission`}>Vision & Mission</a>  </li>
            <li> <a href={`/departments/${props.department}/faculty`}>Faculty</a>  </li>
            <li> <a href={`/departments/${props.department}/faculty-profile`}>Faculty Profile</a>  </li>
            <li> <a href={`/departments/${props.department}/peos-pos-psos`}>PEO'S,POs and PSos</a>  </li>
            <li> <a href={`/departments/${props.department}/facilities`}>Facilities</a>  </li>
            <li> <a href={`/departments/${props.department}/achievements`}>Achievements</a>  </li>
            <li> <a href={`/departments/${props.department}/activities`}>Activities</a>  </li>
            <li> <a href={`/departments/${props.department}/placements`}>Placements</a>  </li>
            <li> <a href={`/departments/${props.department}/associations-and-clubs`}>Associations and Clubs</a>  </li>
            <li> <a href={`/departments/${props.department}/paper-publications`}>Paper Publications</a>  </li>
         </ul>
      
    </div>
  )
}
