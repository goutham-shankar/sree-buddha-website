"use client"

import React from 'react'
import "@/styles/departments/department_navbar.css"

import { useState } from 'react'

export default function DepartmentNavbar(props) {

  const [navbarVisible, setNavbarVisible] = useState(false)

  return (
    <div className="department_navbar">

      <div className='mobile'>

        <span className='dropdown' onClick={() => {
          if (navbarVisible) {
            setNavbarVisible(false)
          } else {
            setNavbarVisible(true)
          }
        }}>Menu < img style={{ transform: navbarVisible ? `rotate(-90deg)` : "rotate(0deg)" }}

          src="/assets/left_arrow.png" alt="" /></span>

        <ul className='department_mobile_navbar' style={{
          // display : navbarVisible? "grid":"none"
          maxHeight: navbarVisible? "350px": "0px"
        }} >
          {
            props.links.map((link, index) => {
              return (

                <li key={index}> <a href={`${(props.department == undefined) ? "" : `/departments/${props.department}/`}${link[1]}`}>{link[0]}</a>  </li>
              )
            })
          }
        </ul>

      </div>

      <ul className='desktop'>
        {
          props.links.map((link, index) => {
            return (

              <li key={index}> <a href={`${(props.department == undefined) ? "" : `/departments/${props.department}/`}${link[1]}`}>{link[0]}</a>  </li>
            )
          })
        }
      </ul>
    </div>
  )
}
