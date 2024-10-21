import React from "react";
import "@/styles/accreditation/NAAC/NAAC.css";
const page = () => {
  return (
    <div>
      <div className="topContainer">
        <div className="Container">
          <div className="heading">NAAC</div>
          <div className="subHeading">NAAC Accreditation</div>
          <div className="captionLine">
            Recent  Update: Reaccredited with NAAC  B+ Grade on November 2019
            <br />
            First  NAAC Accredited Self-financing Engineering College under
            University of Kerala
          </div>
          <div className="container1">
            <img
              src={"/assets/images/accreditation/NAAC.png"}
              alt="Certificate of accreditation"
              className="certificate"
            />
            <div className="container2">
              <div className="content1">
                The National Assessment & Accreditation Council (NAAC) has
                granted Accreditation ‘B+’ Grade status to Sree Buddha College
                of Engineering Pattoor, Nooranad during the reaccreditation on
                November 2019. It is worthy to note that the SBCE is the first
                College of Engineering under the University of Kerala to get
                accredited by the NAAC so far. As part of accreditation, the
                NAAC Peer Team comprising of Dr. Siba Prasad Adhikary, Vice
                Chancellor(in-charge), Visva-Bharati University, Dr. Ram Krishna
                Vyas, Professor, Department of Mechanical Engineering, Devi
                Ahilya University, Dr. Gadi Venkata Siva Krishna Rao, Professor,
                Department Of Electrical Engineering, Andhra University, Dr.
                B.V.Ravishankar, Principal, B.M.S. College of Engineering
                assessed the College during 4 to 5 November 2019. The standing
                committee meeting of the NAAC Council   recommended for
                Accreditation with Grading ‘B+’ to the Sree Buddha College of
                Engineering, Pattoor Nooranad during the month of December 2019
                which is a reputation to the Institution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
