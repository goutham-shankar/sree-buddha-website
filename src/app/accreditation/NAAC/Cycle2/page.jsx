import React from 'react'
import NAAC from "@/components/accreditation/NAAC/naac.jsx"
import "./page.css";
const page = () => {
  return (
    <div className='container'>
      <NAAC name="IIQA NAAC Cycle2" link="/assets/documents/accreditation/Criteria1/IIQA.pdf"/>

    

      </div>
  )
}

export default page











































































// "use client";

// import React, { useState } from "react";
// import Criteria1 from "@/components/accreditation/criteria1";
// import Criteria2 from "@/components/accreditation/criteria2";
// import Criteria3 from "@/components/accreditation/criteria3";
// import Criteria4 from "@/components/accreditation/criteria4";
// import Criteria5 from "@/components/accreditation/criteria5";
// import Criteria6 from "@/components/accreditation/criteria6";
// import Criteria7 from "@/components/accreditation/criteria7";


// import "@/styles/accreditation/NAAC/Cycle2/cycle2.css";

// const Page = () => {
//   const [activeCriteria, setActiveCriteria] = useState(1);
//   const [showMenu, setShowMenu] = useState(false);

//   const handleCriteriaClick = (criteria) => {
//     setActiveCriteria(criteria);
//     setShowMenu(false); // Close the dropdown after selecting a criteria
//   };

//   const handlepdfOpen = (url) => {
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="Container">
//       <div className="Heading">NAAC CYCLE 2</div>
//       <div className="Nav">
//         {/* Dropdown button for mobile/tablet */}
//         <div className="btn">
//         <button
//           className="dropdown-button-mob"
//           onClick={() => setShowMenu((prev) => !prev)}
//         >
//           Menu
//         </button>
//         </div>
//         <ul className={`dropdown-menu ${showMenu ? "active" : ""}`}>
//           <li
//             onClick={() =>
//               handlepdfOpen("/assets/documents/accreditation/Criteria1/IIQA.pdf")
//             }
//           >
//             IIQA
//           </li>
//           <li onClick={() => handleCriteriaClick(1)}>Criteria 1</li>
//           <li onClick={() => handleCriteriaClick(2)}>Criteria 2</li>
//           <li onClick={() => handleCriteriaClick(3)}>Criteria 3</li>
//           <li onClick={() => handleCriteriaClick(4)}>Criteria 4</li>
//           <li onClick={() => handleCriteriaClick(5)}>Criteria 5</li>
//           <li onClick={() => handleCriteriaClick(6)}>Criteria 6</li>
//           <li onClick={() => handleCriteriaClick(7)}>Criteria 7</li>
//         </ul>
//       </div>

//       {/* Content rendering based on active criteria */}
//       {activeCriteria === 1 && <Criteria1 />}
//       {activeCriteria === 2 && <Criteria2 />}
//       {activeCriteria === 3 && <Criteria3 />}
//       {activeCriteria === 4 && <Criteria4 />}
//       {activeCriteria === 5 && <Criteria5 />}
//       {activeCriteria === 6 && <Criteria6 />}
//       {activeCriteria === 7 && <Criteria7 />}
//     </div>
//   );
// };

// export default Page;

