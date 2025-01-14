import React from 'react'
import "./iic.css";
import { IicTable1 } from '@/components/cells-chapters/iic/IicTable1';
import { IicTable2 } from '@/components/cells-chapters/iic/IicTable2';
import { IicTable3 } from '@/components/cells-chapters/iic/IicTable3';

export default function IIC() {
  
    return (
      <div className='iic'>
        <div className="iic-intro">
            <h2>IIC</h2>
            <div className="iic-logo">
                <span>Institution’s Innovation Council (IIC)</span>
            </div>           
        </div>
        <div className="iic-content">
            <div className="iic-para">
                <div className="iic-event-content">
                    <p className="iic-event-para">Sree Buddha College of Engineering has established ‘Institution’s Innovation Council to encourage our students to work on new ideas and innovation and promote them to create start-ups and entrepreneurial ventures. The primary mandate of IIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are at SBCE. IICs is established to promote innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campus. IIC focus on creating complete ecosystem which will foster the culture of Innovation across students from ideas generation to pre-incubation, incubation and graduating from the incubator as successful start-ups.</p>
                </div>
            </div>
            <div className="iic-para">
                <div className="iic-event-content">
                    <h3 className="iic-event-title">Major focus of IIC</h3>
                    <ul className="iic-event-list">
                        <li className="iic-list-item">To create a vibrant local innovation ecosystem.</li>
                        <li className="iic-list-item">Start-up/Entrepreneurship supporting Mechanism in SBCE</li>
                        <li className="iic-list-item">Prepare institute for Atal Ranking of Institutions on Innovation Achievements  (ARIIA)</li>
                        <li className="iic-list-item">Establish an Ecosystem for Scouting Ideas and Pre-incubation of Ideas.</li>
                        <li className="iic-list-item">Develop better Cognitive Ability among Engineering Students.</li>
                    </ul>
                </div>
            </div>
            <div className="iic-para">
                <div className="iic-event-content">
                    <h3 className="iic-event-title">Faculty Representation</h3>
                    <IicTable1/>
                </div>
            </div>
            <div className="iic-para">
                <div className="iic-event-content">
                    <h3 className="iic-event-title">Expert Representation</h3>
                    <IicTable2/>
                </div>
            </div>
            <div className="iic-para">
                <div className="iic-event-content">
                    <h3 className="iic-event-title">Student Representation</h3>
                    <IicTable3/>
                </div>
            </div>
            
        </div> 

      </div>
    );
  }