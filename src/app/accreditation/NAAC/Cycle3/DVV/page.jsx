import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "../criteria2/page.css";
import "../../Cycle2/page.css";
const page = () => {
  return (
    <div>
      <p className="subheading">
        2.2 Number of teaching staff / full time teachers year wise during the
        last five years
      </p>
      <p className="subheading">Criteria 1</p>
      <p className="subheading">Criteria 2</p>
      <p className="subheading"> Year wise Data </p>
      <p className="subheading">Prospectus</p>
      <p className="subheading"> Year wise Data</p>
      <p className="subheading">Criteria 3</p>
      <p className="subheading">Criteria 4</p>
      <p className="subheading">Criteria 5</p>
      <p className="subheading">5.1 students support</p>
      <p className="subheading">
        counseling offered by the Institution during the last five years
      </p>
      <p className="subheading">
        5.1.2 Capacity Building and skill enhancement Initiatives taken by the
        institution
      </p>
      <p className="subheading">Criteria 6</p>
      <p className="subheading">Criteria 7</p>

      {/* <NAAC name="" link="/assets/documents/accreditation/Cycle3/1.1-Number-of-students-year-wise-during-the-last-five-years.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/2.1-Number-of-teaching-staff-full-time-teachers-during-the.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Faculty-list-2018-19-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Faculty-list-2019-20-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Faculty-list-2020-21-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Faculty-list-2021-22-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Faculty-list-2022-23-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/3.1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/1.2.1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/1.2.2.1-DVV_CR1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/CR_DVV_1.3.2.1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/1.4.1_CR__1_DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/104152_22993id_1724994935.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/KTU-AFFILIATION-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/2018-19-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/2019-20-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/2020-21-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/2021-22-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/2022-23-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/DVV-2.1.2-new.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Prospectus-2018_compressed-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Prospectus-2019_compressed-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Prospectus-2020_compressed-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Prospectus-2021_compressed-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Prospectus-2022_compressed-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/Adobe-Scan-Aug-29-2024-1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/appointment-order.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/2.4.1-DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/104152_23005id_1724905163.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/NAAC-CR-2-2.4.2-FULL-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/CR-2-2.4.2-Ph-D-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/CR-2-2.4.2-NET-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/CR-2-2.4.2-SET-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/104152_22999id_1724999427.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/18-19-Pass-Percentage-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/19-20-Pass-Percentage-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/20-21-Pass-Percentage-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/21-22-Pass-Percentage-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/22-23-Pass-Percentage-DIGI.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/3.1.1-DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/3.2.2-DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/3.3.1-DVV-1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/3.3.2-dvv-new.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/3.4.3-dvv-new.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/3.5.1-DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/PURCHASE-DETAILS.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/STOCK-REGISTER.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/DVV-4.1.2.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/DVV-4.4.1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.1-1-DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/scholarship-and-free-ship-sanctioned-letter.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/yearwise-list-of-students.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/HEI-policy-documents.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/CR-5.1.3.1.docx.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.1.4-DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.1.2-upload-supporting-doc-for-dvv-1.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.1.2-upload-supporting-doc-dvv2.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.1.2-upload-supporting-doc-dvv3.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.2.1-student-progression-.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.2.2-student-progression-2.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/5.3.2-DVV-Main-Document.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/6.2.2_Main_DVV_CR6.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/6.3.2.1-Main-_DVV_CR6.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/6.3.3.-Main_dvv_cr6.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/6.5.2DVV.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/CR-7.1.2-with-Digital-sign.pdf" />
<NAAC name="" link="/assets/documents/accreditation/Cycle3/7.1.3-Quality-audits-Digital-sign.pdf" /> */}

      <NAAC
        name="1.1 Number of students year-wise during the last five years"
        link="/assets/documents/accreditation/Cycle3/1.1-Number-of-students-year-wise-during-the-last-five-years.pdf"
      />
      <NAAC
        name="2.1 Number of teaching staff/full-time teachers during the last five years (Without repeat count)"
        link="/assets/documents/accreditation/Cycle3/2.1-Number-of-teaching-staff-full-time-teachers-during-the.pdf"
      />
      <NAAC
        name="Faculty list 2018-19"
        link="/assets/documents/accreditation/Cycle3/Faculty-list-2018-19-DIGI.pdf"
      />
      <NAAC
        name="Faculty list 2019-20"
        link="/assets/documents/accreditation/Cycle3/Faculty-list-2019-20-DIGI.pdf"
      />
      <NAAC
        name="Faculty list 2020-21"
        link="/assets/documents/accreditation/Cycle3/Faculty-list-2020-21-DIGI.pdf"
      />
      <NAAC
        name="Faculty list 2021-22"
        link="/assets/documents/accreditation/Cycle3/Faculty-list-2021-22-DIGI.pdf"
      />
      <NAAC
        name="Faculty list 2022-23"
        link="/assets/documents/accreditation/Cycle3/Faculty-list-2022-23-DIGI.pdf"
      />
      <NAAC
        name="3.1 Expenditure excluding salary component year-wise during the last five years (INR in lakhs)"
        link="/assets/documents/accreditation/Cycle3/3.1.pdf"
      />
      <NAAC
        name="1.2.1 Number of certificate/Value-added courses offered and online courses of MOOCs, SWAYAM, NPTEL, etc."
        link="/assets/documents/accreditation/Cycle3/1.2.1.pdf"
      />
      <NAAC
        name="1.2.2.1 Number of students enrolled in Certificate/Value-added courses and also completed online courses of MOOCs, SWAYAM, NPTEL, etc."
        link="/assets/documents/accreditation/Cycle3/1.2.2.1-DVV_CR1.pdf"
      />
      <NAAC
        name="1.3.2.1 Number of students undertaking project work/fieldwork/internships"
        link="/assets/documents/accreditation/Cycle3/CR_DVV_1.3.2.1.pdf"
      />
      <NAAC
        name="1.4.1 Filled-in feedback forms and actions taken in response to the feedback"
        link="/assets/documents/accreditation/Cycle3/1.4.1_CR__1_DVV.pdf"
      />
      <NAAC
        name="Miscellaneous Document 1"
        link="/assets/documents/accreditation/Cycle3/104152_22993id_1724994935.pdf"
      />
      <NAAC
        name="KTU Affiliation"
        link="/assets/documents/accreditation/Cycle3/KTU-AFFILIATION-DIGI.pdf"
      />
      <NAAC
        name="Institution Data 2018-19"
        link="/assets/documents/accreditation/Cycle3/2018-19-DIGI.pdf"
      />
      <NAAC
        name="Institution Data 2019-20"
        link="/assets/documents/accreditation/Cycle3/2019-20-DIGI.pdf"
      />
      <NAAC
        name="Institution Data 2020-21"
        link="/assets/documents/accreditation/Cycle3/2020-21-DIGI.pdf"
      />
      <NAAC
        name="Institution Data 2021-22"
        link="/assets/documents/accreditation/Cycle3/2021-22-DIGI.pdf"
      />
      <NAAC
        name="Institution Data 2022-23"
        link="/assets/documents/accreditation/Cycle3/2022-23-DIGI.pdf"
      />
      <NAAC
        name="DVV 2.1.2"
        link="/assets/documents/accreditation/Cycle3/DVV-2.1.2-new.pdf"
      />
      <NAAC
        name="Prospectus 2018"
        link="/assets/documents/accreditation/Cycle3/Prospectus-2018_compressed-DIGI.pdf"
      />
      <NAAC
        name="Prospectus 2019"
        link="/assets/documents/accreditation/Cycle3/Prospectus-2019_compressed-DIGI.pdf"
      />
      <NAAC
        name="Prospectus 2020"
        link="/assets/documents/accreditation/Cycle3/Prospectus-2020_compressed-DIGI.pdf"
      />
      <NAAC
        name="Prospectus 2021"
        link="/assets/documents/accreditation/Cycle3/Prospectus-2021_compressed-DIGI.pdf"
      />
      <NAAC
        name="Prospectus 2022"
        link="/assets/documents/accreditation/Cycle3/Prospectus-2022_compressed-DIGI.pdf"
      />
      <NAAC
        name="Adobe Scan Document"
        link="/assets/documents/accreditation/Cycle3/Adobe-Scan-Aug-29-2024-1.pdf"
      />
      <NAAC
        name="Appointment Order"
        link="/assets/documents/accreditation/Cycle3/appointment-order.pdf"
      />
      <NAAC
        name="DVV 2.4.1"
        link="/assets/documents/accreditation/Cycle3/2.4.1-DVV.pdf"
      />
      <NAAC
        name="Miscellaneous Document 2"
        link="/assets/documents/accreditation/Cycle3/104152_23005id_1724905163.pdf"
      />
      <NAAC
        name="NAAC CR 2.4.2 Full"
        link="/assets/documents/accreditation/Cycle3/NAAC-CR-2-2.4.2-FULL-DIGI.pdf"
      />
      <NAAC
        name="CR 2.4.2 PhD"
        link="/assets/documents/accreditation/Cycle3/CR-2-2.4.2-Ph-D-DIGI.pdf"
      />
      <NAAC
        name="CR 2.4.2 NET"
        link="/assets/documents/accreditation/Cycle3/CR-2-2.4.2-NET-DIGI.pdf"
      />
      <NAAC
        name="CR 2.4.2 SET"
        link="/assets/documents/accreditation/Cycle3/CR-2-2.4.2-SET-DIGI.pdf"
      />
      <NAAC
        name="Miscellaneous Document 3"
        link="/assets/documents/accreditation/Cycle3/104152_22999id_1724999427.pdf"
      />
      <NAAC
        name="Pass Percentage 2018-19"
        link="/assets/documents/accreditation/Cycle3/18-19-Pass-Percentage-DIGI.pdf"
      />
      <NAAC
        name="Pass Percentage 2019-20"
        link="/assets/documents/accreditation/Cycle3/19-20-Pass-Percentage-DIGI.pdf"
      />
      <NAAC
        name="Pass Percentage 2020-21"
        link="/assets/documents/accreditation/Cycle3/20-21-Pass-Percentage-DIGI.pdf"
      />
      <NAAC
        name="Pass Percentage 2021-22"
        link="/assets/documents/accreditation/Cycle3/21-22-Pass-Percentage-DIGI.pdf"
      />
      <NAAC
        name="Pass Percentage 2022-23"
        link="/assets/documents/accreditation/Cycle3/22-23-Pass-Percentage-DIGI.pdf"
      />
      <NAAC
        name="DVV 3.1.1"
        link="/assets/documents/accreditation/Cycle3/3.1.1-DVV.pdf"
      />
      <NAAC
        name="DVV 3.2.2"
        link="/assets/documents/accreditation/Cycle3/3.2.2-DVV.pdf"
      />
      <NAAC
        name="DVV 3.3.1"
        link="/assets/documents/accreditation/Cycle3/3.3.1-DVV-1.pdf"
      />
      <NAAC
        name="DVV 3.3.2"
        link="/assets/documents/accreditation/Cycle3/3.3.2-dvv-new.pdf"
      />
      <NAAC
        name="DVV 3.4.3"
        link="/assets/documents/accreditation/Cycle3/3.4.3-dvv-new.pdf"
      />
      <NAAC
        name="DVV 3.5.1"
        link="/assets/documents/accreditation/Cycle3/3.5.1-DVV.pdf"
      />
      <NAAC
        name="Purchase Details"
        link="/assets/documents/accreditation/Cycle3/PURCHASE-DETAILS.pdf"
      />
      <NAAC
        name="Stock Register"
        link="/assets/documents/accreditation/Cycle3/STOCK-REGISTER.pdf"
      />
      <NAAC
        name="DVV 4.1.2"
        link="/assets/documents/accreditation/Cycle3/DVV-4.1.2.pdf"
      />
      <NAAC
        name="DVV 4.4.1"
        link="/assets/documents/accreditation/Cycle3/DVV-4.4.1.pdf"
      />
      <NAAC
        name="DVV 5.1.1"
        link="/assets/documents/accreditation/Cycle3/5.1-1-DVV.pdf"
      />
      <NAAC
        name="Scholarship and Freeship Letter"
        link="/assets/documents/accreditation/Cycle3/scholarship-and-free-ship-sanctioned-letter.pdf"
      />
      <NAAC
        name="Yearwise List of Students"
        link="/assets/documents/accreditation/Cycle3/yearwise-list-of-students.pdf"
      />
      <NAAC
        name="HEI Policy Documents"
        link="/assets/documents/accreditation/Cycle3/HEI-policy-documents.pdf"
      />
      <NAAC
        name="CR 5.1.3.1 Document"
        link="/assets/documents/accreditation/Cycle3/CR-5.1.3.1.docx.pdf"
      />
      <NAAC
        name="DVV 5.1.4"
        link="/assets/documents/accreditation/Cycle3/5.1.4-DVV.pdf"
      />
      <NAAC
        name="DVV 5.1.2 Supporting Doc 1"
        link="/assets/documents/accreditation/Cycle3/5.1.2-upload-supporting-doc-for-dvv-1.pdf"
      />
      <NAAC
        name="DVV 5.1.2 Supporting Doc 2"
        link="/assets/documents/accreditation/Cycle3/5.1.2-upload-supporting-doc-dvv2.pdf"
      />
      <NAAC
        name="DVV 5.1.2 Supporting Doc 3"
        link="/assets/documents/accreditation/Cycle3/5.1.2-upload-supporting-doc-dvv3.pdf"
      />
      <NAAC
        name="Student Progression 1"
        link="/assets/documents/accreditation/Cycle3/5.2.1-student-progression-.pdf"
      />
      <NAAC
        name="Student Progression 2"
        link="/assets/documents/accreditation/Cycle3/5.2.2-student-progression-2.pdf"
      />
      <NAAC
        name="DVV 5.3.2 Main Document"
        link="/assets/documents/accreditation/Cycle3/5.3.2-DVV-Main-Document.pdf"
      />
      <NAAC
        name="DVV 6.2.2"
        link="/assets/documents/accreditation/Cycle3/6.2.2_Main_DVV_CR6.pdf"
      />
      <NAAC
        name="DVV 6.3.2.1"
        link="/assets/documents/accreditation/Cycle3/6.3.2.1-Main-_DVV_CR6.pdf"
      />
      <NAAC
        name="DVV 6.3.3"
        link="/assets/documents/accreditation/Cycle3/6.3.3.-Main_dvv_cr6.pdf"
      />
      <NAAC
        name="DVV 6.5.2"
        link="/assets/documents/accreditation/Cycle3/6.5.2DVV.pdf"
      />
      <NAAC
        name="CR 7.1.2 Digital Sign"
        link="/assets/documents/accreditation/Cycle3/CR-7.1.2-with-Digital-sign.pdf"
      />
      <NAAC
        name="7.1.3 Quality Audits Digital Sign"
        link="/assets/documents/accreditation/Cycle3/7.1.3-Quality-audits-Digital-sign.pdf"
      />
    </div>
  );
};

export default page;
