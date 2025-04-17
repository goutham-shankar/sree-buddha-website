import React from 'react';
import './style.css';

export default function CoursesPage() {
  return (
    <div className="courses-container">
      {/* <header className="header">
        <div className="logo-container">
          <h1 className="college-name">Engineering College</h1>
        </div>
      
      </header> */}

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Courses Offered</h1>
            <p>Excellence in Engineering Education</p>
          </div>
        </section>

        <section className="courses-section">
          <div className="container">
            <div className="course-category">
              <h2>B.Tech Programs</h2>
              <div className="course-grid">
                <div className="course-card">
                  <h3>Civil Engineering</h3>
                  <p>Design, construction, and maintenance of the physical and natural built environment.</p>
                </div>
                <div className="course-card">
                  <h3>Computer Science & Engineering</h3>
                  <p>Study of computers and computational systems including software design and development.</p>
                </div>
                <div className="course-card">
                  <h3>Electronics & Communication Engineering</h3>
                  <p>Design and development of electronic devices, circuits, communication equipment and systems.</p>
                </div>
                <div className="course-card">
                  <h3>Electrical & Electronics Engineering</h3>
                  <p>Study of electrical systems, electronics, and power engineering principles.</p>
                </div>
                <div className="course-card">
                  <h3>Mechanical Engineering</h3>
                  <p>Design, analysis, and manufacturing of mechanical systems.</p>
                </div>
                <div className="course-card">
                  <h3>Biotechnology & Biochemical Engineering</h3>
                  <p>Application of engineering principles to biological and chemical processes.</p>
                </div>
                <div className="course-card">
                  <h3>Food Technology</h3>
                  <p>Study of food science, processing, preservation, and packaging technologies.</p>
                </div>
                <div className="course-card">
                  <h3>Computer Science & Engineering (AI & ML)</h3>
                  <p>Advanced computer science with focus on artificial intelligence and machine learning.</p>
                </div>
                <div className="course-card ">
                  <h3>Electronics and Computer Engineering</h3>
                  <p>Integration of electronics engineering with computer systems.</p>
                  {/* <span className="new-badge">New course for 2023-24</span> */}
                </div>
              </div>

              <div className="admission-criteria">
                <h3>B.Tech Admission Criteria</h3>
                <p style={{color : "red"}}>Merit is the only criterion for selection. No capitation fee is levied.</p>
                {/* <button className="criteria-btn">View Detailed Criteria</button> */}
              </div>
            </div>

            <div className="course-category">
              <h2>M.Tech Programs</h2>
              <div className="course-grid">
                <div className="course-card">
                  <h3>Electronics & Communication Engineering</h3>
                  <p>Specialization: Embedded Systems</p>
                </div>
                <div className="course-card">
                  <h3>Biotechnology and Biochemical Engineering</h3>
                  <p>Advanced research and application in biotechnology.</p>
                </div>
                <div className="course-card">
                  <h3>Computer Science and Engineering</h3>
                  <p>Advanced study in computer science and software engineering.</p>
                </div>
                <div className="course-card">
                  <h3>Mechanical Engineering</h3>
                  <p>Specialization: Computer Integrated Manufacturing</p>
                </div>
                <div className="course-card">
                  <h3>Civil Engineering</h3>
                  <p>Specialization: Structural Engineering</p>
                </div>
                <div className="course-card">
                  <h3>Electrical Engineering</h3>
                  <p>Specialization: Electrical Machines</p>
                </div>
              </div>

              <div className="admission-criteria">
                <h3>M.Tech Admission Criteria</h3>
                <p style={{color:'red'}}>Merit is the only criterion for selection. No capitation fee is levied.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <h2>For More Information</h2>
            <p>Contact PRO @ <a href="tel:9446014317">9446014317</a></p>
          </div>
        </section>
      </main>

      
    </div>
  );
}