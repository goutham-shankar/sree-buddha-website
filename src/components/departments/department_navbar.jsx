import React from 'react'
import "@/styles/departments/department_navbar.css"

export default function DepartmentNavbar(props) {
  return (
    <div className="department_navbar">
      <ul>
        {
          props.links.map((link, index) => {
            return (
              <li key = {index}> <a href={`/departments/${props.department}/${link[1]}`}>{link[0]}</a>  </li>
            )
          })
        }
      </ul>



     


    </div>
  )
}
