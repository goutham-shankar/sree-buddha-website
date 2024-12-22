import React from "react";
import "../../Cycle2/page.css";
import NAAC from "@/components/accreditation/NAAC/naac";
const page = () => {
  return (
    <div className="topContainter">
      <NAAC
        name="3.1.1: Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)"
        link="/assets/documents/accreditation/Cycle3/3.1.1_1723541143_15523-1.pdf"
      />

      <NAAC
        name="3.2.1: Institution has created an ecosystem for innovations, Indian Knowledge System (IKS), including awareness about IPR, establishment of IPR cell, Incubation centre and other initiatives for the creation and transfer of knowledge/technology and the outcomes of the same are evident"
        link="/assets/documents/accreditation/Cycle3/3.2.1_1723011531_15523.pdf"
      />

      <NAAC
        name="3.2.2: Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years"
        link="/assets/documents/accreditation/Cycle3/3.2.2-View-Document-1.pdf"
      />

      <NAAC
        name="3.3.1: Number of research papers published per teacher in the Journals notified on UGC care list during the last five years"
        link="/assets/documents/accreditation/Cycle3/3.3.1.pdf"
      />

      <NAAC
        name="3.3.2: Number of books and chapters in edited volumes/books published and papers published in national/international conference proceedings per teacher during last five years"
        link="/assets/documents/accreditation/Cycle3/3.3.2-Number-of-books-and-chapters-2.pdf"
      />

      <NAAC
        name="3.4.1: Outcomes of Extension activities in the neighborhood community in terms of impact and sensitizing the students to social issues for their holistic development during the last five years."
        link="/assets/documents/accreditation/Cycle3/3.4.1-Extension-activities.pdf"
      />

      <NAAC
        name="3.4.2: Awards and recognitions received for extension activities from government / government recognised bodies"
        link="/assets/documents/accreditation/Cycle3/3.4.2-Awards-and-recognitions.-1.pdf"
      />

      <NAAC
        name="3.4.3: Number of extension and outreach programs conducted by the institution through organized forums including NSS/NCC with involvement of community during the last five years"
        link="/assets/documents/accreditation/Cycle3/3.4.1-Extension-activities.pdf"
      />

      <NAAC
        name="3.5.1: Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student/faculty exchange and collaborative research during the last five years."
        link="/assets/documents/accreditation/Cycle3/3.5.1-MoU-and-Linkags-2.pdf"
      />
    </div>
  );
};

export default page;
