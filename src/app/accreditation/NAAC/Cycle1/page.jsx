import React from "react";
import "@/styles/accreditation/NAAC/cycle1/style.css";
// import cycle1 from "/assets/images/accreditation/cycle1.png";
const page = () => {
  return (
    <div>
      <div className="Container">
        <div className="heading">NAAC CYCLE 1</div>
        <div className="subheading">NAAC Accreditation</div>
        <div className="caption">
          First NAAC Accredited Self-financing Engineering College under
          University of Kerala
        </div>
        <div className="content1">
          The National Assessment & Accreditation Council (NAAC) has granted
          Accreditation ‘B’ Grade status to Sree Buddha College of Engineering
          Pattoor, Nooranad. It is worthy to note that the SBCE is the first
          College of Engineering under the University of Kerala to get
          accredited by the NAAC so far. In the state level, the College is the
          third College of Engineering accredited by NAAC. As part of
          accreditation, the NAAC Peer Team comprising of Prof. E.K. Reman
          (Birla Institute of Technology & Science, Pilani) as Chairman, Prof.
          Muthukalingan Krishnan of Bharathidasam University,  
          Tiruchirappalli    (member co-ordinator),   Dr. Satish C Sharma Indian
          Institute of Technology Roorkee (member) and Prof. D.R. Bhaskar
          (member) of Jamin Millia Islamia University New Delhi visited and
          assessed the College during September 18th to 20th 2014. The standing
          committee meeting of the NAAC Council held on 11th December 2014
          recommended for Accreditation with Grading ‘B’ to the Sree Buddha
          College of Engineering, Pattoor Nooranad which is a reputation to the
          Institution.
        </div>

        <div className="container1">
          <div className="cerimage">
            <img
              src={"/assets/images/accreditation/cycle1.png"}
              alt="certificate of accreditation"
              className="certificate"
            />
          </div>
          <div className="content2">
            A NAAC Peer Team comprising of eminent academic experts visited Sree
            Buddha College of Engineering on 18,19  and 20 September 2014. NAAC
            is an autonomous organization established in 1994 by the University
            Grants Commission with Bangaluru as its Headquarters. The visit of
            the NAAC Team was to acquaint themselves with the strengths and
            weakness of the college with reference to quality assurance. During
            the Team’s visit, it held discussions with the representatives of
            the college management, students, alumni and parents. They also
            visited departments, libraries, workshops, college office, college
            hostels and also assessed the functioning of NSS and Physical
            education departments. On 18 Sep. evening the students staged
            different cultural programmes to showcase the essence of the culture
            of Kerala. The distinguished members of the Team were Prof. K. E.
            Raman (Chairman), Senior Professor and Acting Director, BITS Pilani,
            Prof. Muthukalingan Krishnan (Member Co-ordinator), Professor &
            Head, Department of Environmental Biotechnology, Bharathidasan
            University, Tiruchirapalli, Dr.Satish C Sharma (Member), Professor
            in Mechanical & Industrial Engineering Department, IIT Roorkee And
            Prof. D. R. Bhaskar(Member), Department of Electronics and
            Communication Engineering, Jamia Millia Islamia University, New
            Delhi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
