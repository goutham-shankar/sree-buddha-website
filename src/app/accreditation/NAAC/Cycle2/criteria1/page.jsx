import React from 'react'
import NAAC from "@/components/accreditation/NAAC/naac";
const page = () => {
  return (
    <div>
          <div className="topContainer">
  <div className="curriculum-container">
    <h2>1.1 Curricular Planning and Implementation</h2>
    <div className="li1">
      <NAAC name="1.1.1 The Institution ensures effective curriculum delivery through a well-planned and documented process"
        link="/assets/documents/accreditation/Criteria1/1.1.1.pdf"
      />
      <NAAC
        name="1.1.2 Number of certificate/diploma programs introduced during last five years"
        link="/assets/documents/accreditation/Criteria1/1.1.2.pdf"
      />
      <NAAC
        name="1.1.3 Percentage of participation of full-time teachers in various bodies of the Universities/Autonomous Colleges/Other Colleges, such as BoS and Academic Council during the last five years"
        link="/assets/documents/accreditation/Criteria1/1.1.3.pdf"
      />
    </div>

    <h2 className="subheading1">1.2 Academic Flexibility</h2>
    <div className="li2">
      <NAAC
        name="1.2.1 Percentage of new courses introduced of the total number of courses across all programmes offered during the last five years"
        link="/assets/documents/accreditation/Criteria1/1.2.1.pdf"
      />
      <NAAC
        name="1.2.2 Percentage of programmes in which Choice Based Credit System (CBCS)/elective course system has been implemented (current year data)"
        link="/assets/documents/accreditation/Criteria1/1.2.2.pdf"
      />
      <NAAC
        name="1.2.3 Average percentage of students enrolled in subject-related Certificate/Diploma programs/Add-on programs as against the total number of students during the last five years"
        link="/assets/documents/accreditation/Criteria1/1.2.3.pdf"
      />
    </div>

    <h2>1.3 Curriculum Enrichment</h2>
    <div className="li3">
      <NAAC
        name="1.3.1 Institution integrates cross-cutting issues relevant to Gender, Environment and Sustainability, Human Values and Professional Ethics into the Curriculum"
        link="/assets/documents/accreditation/Criteria1/1.3.1.pdf"
      />
      <NAAC
        name="1.3.2 Number of value-added courses imparting transferable and life skills offered during the last five years"
        link="/assets/documents/accreditation/Criteria1/1.3.2.pdf"
      />
      <NAAC
        name="1.3.3 Percentage of students undertaking field projects/internships (current year data)"
        link="/assets/documents/accreditation/Criteria1/1.3.3.pdf"
      />
    </div>

    <h2>1.4 Feedback System</h2>
    <div className="li4">
      <NAAC
        name="1.4.1 Structured feedback received from Students, Teachers, Employers, Alumni, Parents for design and review of syllabus - Semester wise/year wise"
        link="/assets/documents/accreditation/Criteria1/1.4.1.pdf"
      />
      <NAAC
        name="1.4.2 Feedback process of the Institution may be classified as follows:"
        link="/assets/documents/accreditation/Criteria1/1.4.2.pdf"
      />
      <div className="lastSec">
        <p className="subHeading">
          Feedback collected, analyzed and action taken and feedback available
          on website
        </p>
        <NAAC
          name="Feedback collected, analysed, and action has been taken"
          link="/assets/documents/accreditation/Criteria1/f1.pdf"
        />
        <p className="subHeading1">Feedback collected and analysed</p>
        <p className="subHeading1">Feedback collected</p>
        <p className="subHeading1">Feedback not collected</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default page