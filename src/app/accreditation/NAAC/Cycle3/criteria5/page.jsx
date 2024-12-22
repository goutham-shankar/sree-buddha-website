import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "../criteria2/page.css";
import "../../Cycle2/page.css";

const page = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="5.1.1: Percentage of students benefited by scholarships and free ships provided by the institution, government and non-government bodies, industries, individuals, philanthropists during the last five years."
        link="/assets/documents/accreditation/Cycle3/5.1-1-August-2024.pdf"
      />

      <NAAC
        name="5.1.2: Combined."
        link="/assets/documents/accreditation/Cycle3/5.1.2_Combined.pdf"
      />

      <NAAC
        name="5.1.2: Following capacity development and skills enhancement activities are organized for improving students’ capability."
        link="/assets/documents/accreditation/Cycle3/5.1-UPLOAD-SUPPORTING-DOC-1.pdf"
      />

      <NAAC
        name="5.1.2 b: Following capacity development and skills enhancement activities are organized for improving students’ capability."
        link="/assets/documents/accreditation/Cycle3/5.1.2-UPLOAD-SUPPORTING.pdf"
      />

      <NAAC
        name="5.1.3: Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years."
        link="/assets/documents/accreditation/Cycle3/5.1.3.docx-1.pdf"
      />

      <NAAC
        name="5.1.4: The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases."
        link="/assets/documents/accreditation/Cycle3/5.1.4-Main-document.pdf"
      />

      <NAAC
        name="5.2.1: Percentage of placement of outgoing students and students progressing to higher education during the last five years."
        link="/assets/documents/accreditation/Cycle3/5.2.1-student-progression.pdf"
      />

      <NAAC
        name="5.2.2: Percentage of students qualifying in state/national/international level examinations during the last five years."
        link="/assets/documents/accreditation/Cycle3/5.2.2-student-progression-1.pdf"
      />

      <NAAC
        name="5.3: Student Participation and activities."
        link="/assets/documents/accreditation/Cycle3/5.3-final.pdf"
      />

      <NAAC
        name="5.4.1: There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services."
        link="/assets/documents/accreditation/Cycle3/5.4.1-Alumini-Engagement.pdf"
      />
    </div>
  );
};

export default page;
