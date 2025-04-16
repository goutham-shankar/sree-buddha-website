'use client'
import React from 'react';
import './style.css';

function Page() {
  return (
    <div className="international-container">
      <h1 className="page-title">International Admissions</h1>

      <section className="intro-section">
        <p>SBCE welcomes international students and NRI candidates to its various undergraduate and postgraduate programs. The admission process is designed to be straightforward and student-friendly.</p>
      </section>

      <section className="college-showcase">
        <h2>Experience SBCE</h2>
        <div className="image-slider">
          <div className="slider-item">
            <img src="/images/college-main.jpg" alt="SBCE Main Building" />
            <div className="image-caption">
              <h3>Main Campus Building</h3>
              <p>Our iconic main building featuring modern architecture</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="/images/college-lab.jpg" alt="Advanced Research Lab" />
            <div className="image-caption">
              <h3>Research Facilities</h3>
              <p>State-of-the-art laboratories for hands-on learning</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="/images/college-campus.jpg" alt="Campus Life" />
            <div className="image-caption">
              <h3>Campus Life</h3>
              <p>Vibrant campus atmosphere with modern amenities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <h2>Why Choose SBCE</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-award"></i>
            <h3>Globally Recognized Curriculum</h3>
            <p> As an autonomous institution, affiliated to APJ 
Abul Kalam Technological University, our programs are designed to meet 
international educational and industry standards.</p>
            </div>

          <div className="feature-item">
            <i className="fas fa-globe-asia"></i>
            <h3>State-of-the-Art Facilities</h3>
            <p>Well-equipped laboratories, research centers, and smart 
            classrooms provide an excellent learning environment.</p>
          </div>

          <div className="feature-item">
            <i className="fas fa-flask"></i>
            <h3>Experienced Faculty</h3>
            <p> Learn from highly qualified professors with industry and 
            research expertise. </p>
          </div>

          <div className="feature-item">
            <i className="fas fa-users"></i>
            <h3>Industry Exposure</h3>
            <p> Internships, industrial collaborations, and global exchange 
            programs enrich the student experience.</p>
          </div>

          <div className="feature-item">
            <i className="fas fa-briefcase"></i>
            <h3>Diverse Campus Culture:</h3>
            <p> A multicultural student community fosters global 
            perspectives and networking opportunities.</p>
          </div>

          <div className="feature-item">
            <i className="fas fa-university"></i>
            <h3>Affordable Education</h3>
            <p> High-quality education at competitive tuition fees compared 
            to many Western countries. </p>
          </div>
        </div>
      </section>


      <section className="eligibility-section">
        <h2>Eligibility Criteria</h2>
        <div className="criteria-list">
          <div className="criteria-item">
            <h3>For Undergraduate Programs (B.E. / B.Tech)</h3>
            <ul>
              <li>A pass in 10+2 (Grade XII) or equivalent examination with Mathematics, Physics and Chemistry</li>
              <li>Minimum aggregate of 60% in Mathematics, Physics and Chemistry</li>
              <li>Valid SAT scores</li>
            </ul>
          </div>

          {/* <div className="criteria-item">
            <h3>For Postgraduate Programs (M.E. / M.Tech / MBA)</h3>
            <ul>
              <li>A pass in relevant undergraduate degree from a recognized university</li>
              <li>Minimum 60% aggregate marks or CGPA 6.5 on a 10-point scale</li>
              <li>Valid GRE/GMAT scores for respective programs</li>
            </ul>
          </div> */}
        </div>
      </section>

      <section className="programs-section">


        <div className="programs-container">
          <div className="program-category">
            <div className="category-header">
              {/* <i className="fas fa-graduation-cap"></i> */}
              <h3>Undergraduate Programs</h3>
              <p className="category-description">Four-year B.E. / B.Tech programs designed to create industry-ready engineers</p>
            </div>

            <div className="programs-grid">
              <div className="program-card">
                <div className="program-details">
                  <h4>Computer Science and Engineering</h4>
                  <span className="program-duration">4 Years • B.E.</span>
                </div>
              </div>

              <div className="program-card">
                <div className="program-details">
                  <h4>Electronics and Communication</h4>
                  <span className="program-duration">4 Years • B.E.</span>
                </div>
              </div>

              <div className="program-card">
                <div className="program-details">
                  <h4>Electrical and Electronics</h4>
                  <span className="program-duration">4 Years • B.E.</span>
                </div>
              </div>

              <div className="program-card">
                <div className="program-details">
                  <h4>Mechanical Engineering</h4>
                  <span className="program-duration">4 Years • B.E.</span>
                </div>
              </div>

              <div className="program-card">
                <div className="program-details">
                  <h4>Civil Engineering</h4>
                  <span className="program-duration">4 Years • B.Tech</span>
                </div>
              </div>

              <div className="program-card">
                <div className="program-details">
                  <h4>Bio Technology And Bio Chemical Engineering</h4>
                  <span className="program-duration">4 Years • B.Tech</span>
                </div>
              </div>
            </div>
          </div>

           </div>
      </section>

      <section className="documents-section">
        <h2>Required Documents</h2>
        <div className="documents-grid">
          <div className="document-item">
            <i className="far fa-file-alt"></i>
            <span>Completed Application Form</span>
          </div>
          <div className="document-item">
            <i className="far fa-file-alt"></i>
            <span>Academic Transcripts</span>
          </div>
          <div className="document-item">
            <i className="far fa-file-alt"></i>
            <span>SAT/GRE/GMAT Scores</span>
          </div>
          <div className="document-item">
            <i className="far fa-file-alt"></i>
            <span>Passport Copy</span>
          </div>
          <div className="document-item">
            <i className="far fa-file-alt"></i>
            <span>English Proficiency Test Scores</span>
          </div>
          <div className="document-item">
            <i className="far fa-file-alt"></i>
            <span>Statement of Purpose</span>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>principal@sbce.ac.in</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+91 85903 32548</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
