import React from "react";
import DepartmentNavbar from "@/components/departments/department_navbar";

export default function page({ children }) {
  const links = [
    ["IIQA", "/accreditation/NAAC/Cycle3"],
    [
      "Self Study Report 2024",
      "/accreditation/NAAC/Cycle3/self-study-report-2024",
    ],
    ["Self Declaration", "/accreditation/NAAC/Cycle3/self-declaration"],
    [
      "Statement of Compliance",
      "/accreditation/NAAC/Cycle3/statement-of-compliance",
    ],
    ["Criteria 1", "/accreditation/NAAC/Cycle3/criteria1"],
    ["Criteria 2", "/accreditation/NAAC/Cycle3/criteria2"],
    ["Criteria 3", "/accreditation/NAAC/Cycle3/criteria3"],
    ["Criteria 4", "/accreditation/NAAC/Cycle3/criteria4"],
    ["Criteria 5", "/accreditation/NAAC/Cycle3/criteria5"],
    ["Criteria 6", "/accreditation/NAAC/Cycle3/criteria6"],
    ["Criteria 7", "/accreditation/NAAC/Cycle3/criteria6"],
    ["DVV", "/accreditation/NAAC/Cycle2/criteria7"],
  ];
  return (
    <div className="page">
      <h1 className="page_heading">NAAC Cycle 3</h1>
      <div className="line"></div>
      <div className="iiqa">
        <DepartmentNavbar links={links} />

        {children}
      </div>
    </div>
  );
}
