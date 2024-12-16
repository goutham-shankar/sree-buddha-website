import React from 'react'
import "./nptel.css";
import { NptelTab1 } from '@/components/cells-chapters/nptel/NptelTab1';
import { NptelTab2 } from '@/components/cells-chapters/nptel/NptelTab2';

export default function NPTEL() {
  
    return (
      <div className='nptel'>
        <div className="nptel-intro">
            <h2>NPTEL</h2>
            <div className="nptel-logo">
                <img src="/assets/images/cells-chapters/nptel.png" alt="iei-logo" />
                <span>National Programme on Technology Enhanced Learning</span>
            </div>           
        </div>
        <div className="nptel-content">
            <div className="nptel-para">
                <div className="nptel-event-content">
                    <p className="nptel-event-para">NPTEL (National Programme on Technology Enhanced Learning) is a joint initiative of IITs and IISc. NPTEL has been offering self-study online courses across Engineering, Humanities and Science streams for more than a decade. From March 2014, NPTEL has started certification programme for its courses. Sree Buddha College of Engineeringwas added as one of the local chapters of NPTEL on 10 December 2015, with 16 other Engineering Colleges across Kerala and 441 in India.</p>
                </div>
            </div>
            <div className="nptel-para">
                <div className="nptel-event-content">
                    <h3 className="nptel-event-title">MARCH-APRIL 2016 COURSE RUN</h3>
                    <p className="nptel-event-para">The first phase of SBCE-NPTEL chapter started from 14 January 2016 with 48 courses comprising all streams of Engineering and Humanities. A total of 840 students from the college enrolled for 25 courses offered by NPTEL for the March-April course run; these students were supported and guided by 35Mentors, who are professors from various departments with sufficient expertise in their respective courses. Out of 748 applications, 628 students from the college have received scholarships from NPTEL. SBCE has been recognizedby NPTEL as the college having maximum number of students doing courses with scholarship under its local chapter in this course run. SBCE local chapter had enrolled all first year students for “Technical English for Engineers” course.
                    </p>
                    <span>Total number of enrolment: 315.</span>
                    <span>The result analysis of the course is:</span>
                    <NptelTab1/>
                </div>
            </div>
            <div className="nptel-para">
                <div className="nptel-event-content">
                    <h3 className="nptel-event-title">OCTOBER 2016 COURSE RUN</h3>
                    <p className="nptel-event-para">NPTEL courses were conducted for the students of SBCE. In the October Course run, majority of the students registered for the course “Developing Soft Skills and Personality” in addition to the other courses. 221 students from the college got certification from NPTEL in this course run. IIT Madras and NPTEL recognized the efforts of the college by giving an AA certification to the NPTEL Local Chapter of SBCE.
                    </p>
                    <br />
                    <span>No. of students registered for Developing Soft skills and Personality (KTU): 183</span>
                    <span>No. of students registered for other courses (Higher semesters): 48</span>
                    <span>No. of students received scholarships: Nil</span>
                    <span>No. of students received Gold Medal: Nil</span>
                    <span>No. of students who got certificates: 221</span>  
                </div>
            </div>
            <div className="nptel-para">
                <div className="nptel-event-content">
                    <h3 className="nptel-event-title">MARCH-APRIL 2017 COURSE RUN</h3>
                    <p className="nptel-event-para">In the March-April 2017 Course run, majority of the students registered for the course “Speaking Effectively” in addition to the other courses.
                    </p>
                    <br />
                    <span>No. of students enrolled for Speaking Effectively (KTU S2 students): 352</span>
                    <span>No. of students enrolled for other courses (Higher semesters): 217</span>
                    <span>No. of students received scholarships: 420 (Out of 420,308 students are from S2)</span>
                    <span>No. of students registered for examination of different courses: 420</span>
                    <span>No. of students received certificates: 400</span>  
                    <span>No. of toppers: 4</span>  
                    <p>IIT Madras and NPTEL recognized the efforts of the college by giving an AA certification to the NPTEL Local Chapter of SBCE. It is currently in the 15th position among all local chapters across India.</p>
                </div>
                <div className="nptel-event-content">
                    <h3 className="nptel-event-title">JULY – OCTOBER 2018 COURSE RUN</h3>
                    <p className="nptel-event-para">In the July – October 2018 Course run, the S3 students of Computer Science and Engineering, Bio – technology and Bio – chemical Engineering, Civil Engineering and Electronics and Communication Engineering were enrolled for the course “Developing Soft Skills and Personality”.
                    </p>
                    <br />
                    <span>Out of 177 participants registered for examination, 174 got certification.</span>
                    <NptelTab2/>
                </div>
            </div>
        </div> 

      </div>
    );
  }