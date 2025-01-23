import React from 'react'
import './style.css'
import basket from "@/assets/images/facilities/basket.jpg"
import gym from "@/assets/images/facilities/gym.jpg"
import play from "@/assets/images/facilities/play.jpg"
import transport from "@/assets/images/facilities/transport.jpg"
import panelf from "@/assets/images/facilities/panelone.jpg"
import panelt from "@/assets/images/facilities/paneltwo.jpg"


export default function page() {
  return (
    <div className='container'>
        <div className="title">Other Facilities</div>
        <br /><hr /><br />
        <div className="heading">Basket Ball Court</div>
        <div className="paragraph">A full- fledged basket ball court available in the Campus.</div>
        <div className="photob"><img src={basket.src} alt="" /></div><br />

        <div className="heading">Gymnasium</div>
        <div className="paragraph">A state of art gym, short for gymnasium is available with all fitness equipment</div>
        <div className="photog"><img src={gym.src} alt="" /></div><br />

        <div className="heading">Play Grounds</div>
        <div className="paragraph">Sufficient area is available in the campus for the students to engage in games and
             sports activities. Football & cricket ground, Along with indoor facilities for table tennis and badminton 
             are available.</div>
        <div className="photop"><img src={play.src} alt="" /></div><br />

        <div className="heading">Stationary Store</div>
        <div className="paragraph">The College store provides all text books, note books and equipments for laboratory
             work including graphics. Most of the stationery for hostelers are available at reasonable rates.</div>

        <div className="heading">Transport</div>
        <div className="paragraph">We provide daily transport facility for student’s pick and drop. 
            We have a large fleet of Modern buses for plying.</div>
        <div className="photot"><img src={transport.src} alt="" /></div><br />


        <div className="heading">Solar Power Plant 50 KW</div>
        <div className="paragraph">College has established solar power plant of 50 KW 
            on the roof top of Homi J Bhabha Block</div>
        <div className="last">
            <div className="photopl"><img src={panelf.src} alt="" /></div><br />
            <div className="photopt"><img src={panelt.src} alt="" /></div><br />
        </div>


    </div>
  )
}
