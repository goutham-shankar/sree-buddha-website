"use client"

import React , { useState } from 'react'
import logo from "../assets/images/sree_buddha_logo.png"
import "@/styles/navbar_mobile.css"
import Link from 'next/link'

export default function NavbarMobile() {

    const [ sidebarVisible , setSidebarVisible] =  useState(false)
    const [visibleSubMenus, setVisibleSubMenus]  = useState([0,0,0,0,0,0,0,0])
    // const [visibleSubMenus, setVisibleSubMenus]  = useState([1,1,1,1,1,1,1,1])

    function toggleSubmenu( menu_number){
        console.log("toggling")
        let temp = [...visibleSubMenus]
        if(temp[menu_number] == 0){
            temp[menu_number] = 1 
        }else{
            temp[menu_number] = 0 
        }
        console.log(temp)
        setVisibleSubMenus(temp)
    }


    const maxHeight = "700px"

    return (
        <div className="navbar_mobile">

            <div className="logo_section">
                <img src={logo.src} alt="" />
            </div>

            <div className="menu_icon" onClick={()=>{
                if(sidebarVisible){
                    setSidebarVisible(false)
                }else{
                    setSidebarVisible(true)
                }
            }}>
                <span className={`bar1 ${ (sidebarVisible)? "bar1_close" : "" }`}></span>
                <span className={`bar2 ${ (sidebarVisible)? "bar2_close" : "" }`}></span>
                <span className={`bar3 ${ (sidebarVisible)? "bar3_close" : "" }`}></span>
            </div>

            <div className="sidebar" style={{ right: (sidebarVisible)? "0%" : "-100%" }}>



            <div className ="sidebar_menu">   
                    <span onClick={()=>{toggleSubmenu(0)}} >About Us</span>       
                    <div className="sidebar_submenu" style={{maxHeight: (visibleSubMenus[0]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">Profile</Link>
                            <Link className = "sidebar_submenu_link" href = "">Vision and Mission</Link>
                            <Link className = "sidebar_submenu_link" href = "">Management</Link>
                            <Link className = "sidebar_submenu_link" href = "">Principal</Link>
                            <Link className = "sidebar_submenu_link" href = "">Oranogram</Link>
                            <Link className = "sidebar_submenu_link" href = "">Mandatory Disclosure</Link>
                            <Link className = "sidebar_submenu_link" href = "">AICTCE EOA</Link>
                            <Link className = "sidebar_submenu_link" href = "">Student code of conduct and ethics</Link>
                            <Link className = "sidebar_submenu_link" href = "">Internal quality assurance cell</Link>
                            <Link className = "sidebar_submenu_link" href = "">Gallery </Link>
                            <Link className = "sidebar_submenu_link" href = "">admission and accounts </Link>
                            <Link className = "sidebar_submenu_link" href = "">PTA  </Link>
                            <Link className = "sidebar_submenu_link" href = "">Sister institutions</Link>
                            <Link className = "sidebar_submenu_link" href = "">contact us</Link>
                            <Link className = "sidebar_submenu_link" href = "">feedback</Link>
                        </ul>
                    </div>      
                </div>
                <div className ="sidebar_menu" >   
                    <span  onClick={()=>{toggleSubmenu(1)}}>Research</span>    
                    <div className="sidebar_submenu"  style={{maxHeight: (visibleSubMenus[1]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">Reserach Coucil</Link>
                            <Link className = "sidebar_submenu_link" href = "">Projects</Link>
                            <Link className = "sidebar_submenu_link" href = "">IPR</Link>
                            <Link className = "sidebar_submenu_link" href = "">Consultency</Link>
                            <Link className = "sidebar_submenu_link" href = "">Oranogram</Link>
                            <Link className = "sidebar_submenu_link" href = "">Conferences organized</Link>
                        </ul>
                    </div>                
                </div>
                <div className ="sidebar_menu" > 
                      <span onClick={()=>{toggleSubmenu(2)}}>Facilities</span>  
                      <div className="sidebar_submenu"   style={{maxHeight: (visibleSubMenus[2]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">Cells and Centers</Link>
                            <Link className = "sidebar_submenu_link" href = "">Central Library </Link>
                            <Link className = "sidebar_submenu_link" href = "">Conference hall</Link>
                            <Link className = "sidebar_submenu_link" href = "">conveyance and bus routes</Link>
                            <Link className = "sidebar_submenu_link" href = "">repographics facilities</Link>
                            <Link className = "sidebar_submenu_link" href = "">internal Lab</Link>
                            <Link className = "sidebar_submenu_link" href = "">hostel </Link>
                            <Link className = "sidebar_submenu_link" href = "">canteen </Link>
                            <Link className = "sidebar_submenu_link" href = "">other facilities </Link>
                        </ul>
                    </div>                  
                </div>
                <div className ="sidebar_menu" >   
                    <span onClick={()=>{toggleSubmenu(3)}}> Cells and Chapters</span>           
                    <div className="sidebar_submenu"   style={{maxHeight: (visibleSubMenus[3]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">Various Cells and Commities </Link>
                            <Link className = "sidebar_submenu_link" href = "">IEEE</Link>
                            <Link className = "sidebar_submenu_link" href = "">IE(I)</Link>
                            <Link className = "sidebar_submenu_link" href = "">SAE India</Link>
                            <Link className = "sidebar_submenu_link" href = "">NSS</Link>
                            <Link className = "sidebar_submenu_link" href = "">SAC</Link>
                            <Link className = "sidebar_submenu_link" href = "">Virual Lab </Link>
                            <Link className = "sidebar_submenu_link" href = "">IEDC</Link>
                            <Link className = "sidebar_submenu_link" href = "">NPTEL</Link>
                            <Link className = "sidebar_submenu_link" href = "">IIT-remote center</Link>
                        </ul>
                    </div>       
                    
                 </div>
                <div className ="sidebar_menu" >   
                    <span onClick={()=>{toggleSubmenu(4)}}>Accreditation</span>      
                    <div className="sidebar_submenu"   style={{maxHeight: (visibleSubMenus[4]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">Various Cells and Commities </Link>
                            <Link className = "sidebar_submenu_link" href = "">IEEE</Link>
                            <Link className = "sidebar_submenu_link" href = "">IE(I)</Link>
                            <Link className = "sidebar_submenu_link" href = "">SAE India</Link>
                            <Link className = "sidebar_submenu_link" href = "">NSS</Link>
                            <Link className = "sidebar_submenu_link" href = "">SAC</Link>
                            <Link className = "sidebar_submenu_link" href = "">Virual Lab </Link>
                            <Link className = "sidebar_submenu_link" href = "">IEDC</Link>
                            <Link className = "sidebar_submenu_link" href = "">NPTEL</Link>
                            <Link className = "sidebar_submenu_link" href = "">IIT-remote center</Link>
                        </ul>
                    </div>            
                </div>
                <div className ="sidebar_menu" >   
                    <span onClick={()=>{toggleSubmenu(5)}}>Academics</span>  
                    <div className="sidebar_submenu"  style={{maxHeight: (visibleSubMenus[5]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">advisory system</Link>
                            <Link className = "sidebar_submenu_link" href = "">acadamic calendar</Link>
                            <Link className = "sidebar_submenu_link" href = "">proffetinal bodies</Link>
                            <Link className = "sidebar_submenu_link" href = "">handbook </Link>
                            <Link className = "sidebar_submenu_link" href = "">NSS</Link>
                            <Link className = "sidebar_submenu_link" href = "">syllubus </Link>
                            <Link className = "sidebar_submenu_link" href = "">campus newsletter</Link>
                       
                        </ul>
                    </div>         
                            
                </div>
                <div className ="sidebar_menu" >   
                    <span onClick={()=>{toggleSubmenu(6)}}>Autonomous</span>  
                    <div className="sidebar_submenu"   style={{maxHeight: (visibleSubMenus[6]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">conferments</Link>
                            <Link className = "sidebar_submenu_link" href = "">governing body</Link>
                            <Link className = "sidebar_submenu_link" href = "">academic council</Link>
                            <Link className = "sidebar_submenu_link" href = "">Finance commitee</Link>
                            <Link className = "sidebar_submenu_link" href = "">Board of studies</Link>
                            <Link className = "sidebar_submenu_link" href = "">regulations </Link>
                            <Link className = "sidebar_submenu_link" href = "">acadamic calandar</Link>
                            <Link className = "sidebar_submenu_link" href = "">Examinations cell</Link>
                            <Link className = "sidebar_submenu_link" href = "">curriculam and syllbus</Link>
                       
                        </ul>
                    </div>                   
                </div>
                <div className ="sidebar_menu" >   
                    <span onClick={()=>{toggleSubmenu(7)}}>Departments</span>      
                    <div className="sidebar_submenu"   style={{maxHeight: (visibleSubMenus[7]?maxHeight: "0px" )}}>
                        <ul>
                            <Link className = "sidebar_submenu_link" href = "">Computer Science and engineering</Link>
                            <Link className = "sidebar_submenu_link" href = "">EEE</Link>
                            <Link className = "sidebar_submenu_link" href = "">ECE</Link>
                            <Link className = "sidebar_submenu_link" href = "">Mechanical</Link>
                            <Link className = "sidebar_submenu_link" href = "">Computer Science with AI</Link>
                            <Link className = "sidebar_submenu_link" href = "">Electronics and Computer Engineering</Link>
                            <Link className = "sidebar_submenu_link" href = "">Basic Science and Humanities</Link>
                            <Link className = "sidebar_submenu_link" href = "">Food Science</Link>
              
                       
                        </ul>
                    </div>                       
                </div>


            </div>

        </div>
    )
}
