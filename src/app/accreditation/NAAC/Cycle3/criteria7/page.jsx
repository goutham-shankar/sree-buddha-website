import React from "react";
import NAAC from "@/components/accreditation/NAAC/naac";
import "../criteria2/page.css";
import "../../Cycle2/page.css";
const page = () => {
  return (
    <div className="topContainer">
      <NAAC
        name="7.1.1: Institution has initiated the Gender Audit and measures for the promotion of gender equity during the last five years. Describe the gender equity & sensitization in curricular and co-curricular activities, facilities for women on campus, etc."
        link="/assets/documents/accreditation/Cycle3/7.1.1-Measures-new.pdf"
      />

      <NAAC
        name="7.1.2: The Institution has facilities and initiatives for alternate sources of energy and energy conservation measures, management of the various types of degradable and non-degradable waste, water conservation, green campus initiatives, disabled-friendly, barrier-free environment."
        link="/assets/documents/accreditation/Cycle3/7.1.2-The-Institution-has-facilities-and-initiatives-for.pdf"
      />

      <NAAC
        name="7.1.3: Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following."
        link="/assets/documents/accreditation/Cycle3/7.1.3-Quality-audits-new.pdf"
      />

      <NAAC
        name="7.1.4: Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic and Sensitization of students and employees to the constitutional obligations: values, rights, duties and responsibilities of citizens."
        link="/assets/documents/accreditation/Cycle3/7.1.4-new.pdf"
      />

      <NAAC
        name="7.2: Best Practices."
        link="/assets/documents/accreditation/Cycle3/BEST-PRACTICES-new.pdf"
      />

      <NAAC
        name="7.3.1: Portray the performance of the Institution in one area distinctive to its priority and thrust."
        link="/assets/documents/accreditation/Cycle3/7.3.1.pdf"
      />

      <NAAC
        name="NSS Report."
        link="/assets/documents/accreditation/Cycle3/NSS_Unit217_activities.pdf"
      />
    </div>
  );
};

export default page;
