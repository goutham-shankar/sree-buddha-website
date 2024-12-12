import React from 'react'
import "./sac.css";
import { SacTab1 } from '@/components/cells-chapters/sac/SacTab1';
import { SacTab2 } from '@/components/cells-chapters/sac/SacTab2';
import { SacTab3 } from '@/components/cells-chapters/sac/SacTab3';

export default function SAC() {
  
    return (
      <div className='sac'>
        <div className="sac-intro">
            <h2>SAC</h2>  
            <span>STUDENT AFFAIRS COUNCIL (SAC)</span>       
        </div>
        <div className="sac-content">
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3>Office bearers of Students Affairs Council (SAC) for the year 2023-24</h3>
                    <img src="/assets/images/cells-chapters/sac-office.png" alt="sac-office" /> 
                </div>
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <p className="sac-event-para">The SAC committee is entrusted with the smooth conduct of student centered extracurricular activities like Arts, Sports and activities related to various club existing in the campus. The student committee should approach the SAC staff committee for the organization of any events with a written request sufficiently in advance. The SAC committee will discuss the same and issue sanction after suitable amendments if required, in consultation with appropriate authority.</p>
                </div>
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3 className="sac-event-title">Office bearers of Students Affairs Council (SAC) for the year 2022-23</h3>
                    <SacTab1/>
                    <img src="/assets/images/cells-chapters/sac-img1.png" alt="sac-img" />
                </div>
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3 className="sac-event-title">The SAC has been constituted with the following members of staff for the year 2018-19</h3>
                    <SacTab2/>
                </div>
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3 className="sac-event-title">Office bearers of Students Affairs Council (SAC) for the year 2018-19</h3>
                    <SacTab3/>
                </div>
                
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3 className="sac-event-title">Astral 2018</h3>
                    <img src="/assets/images/cells-chapters/sac-img2.png" alt="sac-img" />
                </div>    
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3 className="sac-event-title">Students Achievements in Sports 2018-19</h3>
                    <img src="/assets/images/cells-chapters/sac-img3.png" alt="sac-img" />
                </div>    
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3 className="sac-event-title">SPORTS</h3>
                    <p>Sufficient area is available in the campus for the students to engage in games and sports activities. Football & cricket ground, Along with indoor facilities for table tennis and badm Sufficient area is available in the campus for the students to engage in games and sports activities. Football & cricket ground, Along with indoor facilities for table tennis and badminton.</p>
                    <img src="/assets/images/cells-chapters/sac-img4.png" alt="sac-img" />
                </div>    
            </div>
            <div className="sac-para">
                <div className="sac-event-content">
                    <h3 className="sac-event-title">NSS</h3>
                    <p>National Service Scheme (NSS) was launched in the year 1969, Mahatma Gandhi’s birth centenary year. Over 41 years, NSS volunteer strength has grown from 40 thousand to 3.2million. National Service Scheme aims at inculcating volunteerism, qualities of citizenship and dedication to community service with the motto, “Not me but you”. The zest and determination shown by NSS volunteers in the rural areas is unparalleled. NSS events and activities at a glance Inauguration of the Bhoomitrasena was conducted in the college on 12th of July 2010. An advisory committee was formed along with 100 volunteers. Mavelikara Taluk Legal Services Authority, KELSA and NSS unit of Sree Buddha College of Engineering collectively organized a Legal literacy class on “Anti Ragging” for the 2nd year students on 22nd July 2010 in the college auditorium. NSS day was observed on the 24th of September.</p>
                    <img src="/assets/images/cells-chapters/sac-img5.png" alt="sac-img" />
                </div>    
            </div>
        </div> 

      </div>
    );
  }