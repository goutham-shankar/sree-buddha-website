"use client";

import React, { useState } from "react";
import Criteria1 from "@/components/accreditation/criteria1";
import Criteria2 from "@/components/accreditation/criteria2";
import Criteria3 from "@/components/accreditation/criteria3";
import Criteria4 from "@/components/accreditation/criteria4";
// import Criteria5 from "@/components/accreditation/criteria5";
// import Criteria6 from "@/components/accreditation/criteria6";
// import Criteria7 from "@/components/accreditation/criteria7";

import "@/styles/accreditation/NAAC/Cycle2/cycle2.css";

const Page = () => {
  const [activeCriteria, setActiveCriteria] = useState(1);

  const handleCriteriaClick = (criteria) => {
    setActiveCriteria(criteria === activeCriteria ? criteria : criteria);
  };

  const handlepdfOpen = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="Container">
      <div className="Heading">NAAC CYCLE 2</div>
      <div className="Nav">
        <ul>
          <li
            onClick={() =>
              handlepdfOpen(
                "/assets/documents/accreditation/Criteria1/IIQA.pdf"
              )
            }
          >
            IIQA
          </li>
          <li onClick={() => handleCriteriaClick(1)}>Criteria 1</li>
          <li onClick={() => handleCriteriaClick(2)}>Criteria 2</li>
          <li onClick={() => handleCriteriaClick(3)}>Criteria 3</li>
          <li onClick={() => handleCriteriaClick(4)}>Criteria 4</li>
          <li onClick={() => handleCriteriaClick(5)}>Criteria 5</li>
          <li onClick={() => handleCriteriaClick(6)}>Criteria 6</li>
          <li onClick={() => handleCriteriaClick(7)}>Criteria 7</li>
          <li onClick={() => handleCriteriaClick(8)}>Peer Team Visit Video</li>
        </ul>
      </div>

      {/* {activeCriteria === 0 && <div className="iiqa">Content for IIQA</div>} */}
      {activeCriteria === 1 && (
        <div className="criteria1">
          <Criteria1 />
        </div>
      )}
      {activeCriteria === 2 && (
        <div className="criteria2">
          <Criteria2 />
        </div>
      )}
      {activeCriteria === 3 && (
        <div className="criteria3">Content for Criteria 3</div>
      )}
      {activeCriteria === 4 && (
        <div className="criteria4">
          <Criteria4 />
        </div>
      )}
      {activeCriteria === 5 && (
        <div className="criteria5">Content for Criteria 5</div>
      )}
      {activeCriteria === 6 && (
        <div className="criteria6">Content for Criteria 6</div>
      )}
      {activeCriteria === 7 && (
        <div className="criteria7">Content for Criteria 7</div>
      )}
      {activeCriteria === 8 && (
        <div className="peerTeamVisit">Peer Team Visit Video</div>
      )}
    </div>
  );
};

export default Page;
