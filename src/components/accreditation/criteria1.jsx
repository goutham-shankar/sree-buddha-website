import React from "react";
import "@/components/accreditation/criteria1.css";

const Criteria1 = () => {
  const handlePdfOpen = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="topContainer">
        <div className="curriculum-container">
          <h2>1.1 Curricular Planning and Implementation</h2>
          <div className="li1">
            <a className="open" onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.1.1.pdf"
                )
              }
            >
              1.1.1 The Institution ensures effective curriculum delivery
              through a well-planned and documented process
              <br />
            </a>
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.1.2.pdf"
                )
              }
            >
              1.1.2 Number of certificate/diploma programs introduced during
              last five years
              <br />
            </a>
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.1.3.pdf"
                )
              }
            >
              1.1.3 Percentage of participation of full-time teachers in various
              bodies of the Universities/Autonomous Colleges/Other Colleges,
              such as BoS and Academic Council during the last five years
              <br />
            </a>
          </div>

          <h2 className="subheading1">1.2 Academic Flexibility</h2>
          <div className="li2">
            <a className="open">
              1.2.1 Percentage of new courses introduced of the total number of
              courses across all programmes offered during the last five years
              <br />
            </a>
            <a
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.2.2.pdf"
                )
              }
            >
              1.2.2 Percentage of programmes in which Choice Based Credit System
              (CBCS)/elective course system has been implemented (current year
              data)
              <br />
            </a>
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.2.3.pdf"
                )
              }
            >
              1.2.3 Average percentage of students enrolled in subject-related
              Certificate/Diploma programs/Add-on programs as against the total
              number of students during the last five years
              <br />
            </a>
          </div>

          <h2>1.3 Curriculum Enrichment</h2>
          <div className="li3">
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.3.1.pdf"
                )
              }
            >
              1.3.1 Institution integrates cross-cutting issues relevant to
              Gender, Environment and Sustainability, Human Values and
              Professional Ethics into the Curriculum
              <br />
            </a>
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.3.2.pdf"
                )
              }
            >
              1.3.2 Number of value-added courses imparting transferable and
              life skills offered during the last five years
              <br />
            </a>
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.3.3.pdf"
                )
              }
            >
              1.3.3 Percentage of students undertaking field
              projects/internships (current year data)
              <br />
            </a>
          </div>

          <h2>1.4 Feedback System</h2>
          <div className="li4">
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.4.1.pdf"
                )
              }
            >
              1.4.1 Structured feedback received from Students, Teachers,
              Employers, Alumni, Parents for design and review of syllabus -
              Semester wise/year wise
              <br />
            </a>
            <a className="open"
              onClick={() =>
                handlePdfOpen(
                  "/assets/documents/accreditation/Criteria1/1.4.2.pdf"
                )
              }
            >
              1.4.2 Feedback process of the Institution may be classified as
              follows:
              <br />
            </a>
            <div className="lastSec">
              <p className="subHeading">
                Feedback collected, analyzed and action taken and feedback
                available on website
                <br />
              </p>
              <a className="open"
                onClick={() =>
                  handlePdfOpen(
                    "/assets/documents/accreditation/Criteria1/f1.pdf"
                  )
                }
              >
                Feedback collected, analysed, and action has been taken
                <br />
              </a>

              <p className="subHeading1">
                Feedback collected and analysed
                <br />
              </p>
              <p className="subHeading1">
                Feedback collected
                <br />
              </p>
              <p className="subHeading1">
                Feedback not collected
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria1;
