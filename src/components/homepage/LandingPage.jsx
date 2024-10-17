import React from 'react'
import "@/styles/homepage/landing_page.css"


export default function LandingPage() {
  return (
    <div className="landing_page">
      <img className="college_background" src={"/assets/images/sree_buddha_college_image1.png"} alt="" />

      <div className="landing_page_content">
        <h3 className="landing_page_title1">Sree Buddha</h3>
        <h3 className="landing_page_title2">College Of Engineering , Pattoor</h3>
        <h3 className="landing_page_title3">AUTONOMOUS</h3>
        <p className="landing_page_about_us">Sree Buddha College of Engineering, affiliated with KeralaTech nological University, excels in technical education, guided by the teachings of Lord Buddha. The institution nurtures a spring technocrats and strives to be a model for the world.</p>
        <div className="landing_page_buttons">
          <a href="" className= "landing_page_about_us_button">About Us</a>
          <a href="">Brouchere</a>
        </div>
      </div>
    </div>
  )
}
