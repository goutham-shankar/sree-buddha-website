import localFont from "next/font/local";
// import DepartmentNavbar from "@/components/departments/department_navbar";
// import "./globals.css";
import DepartmentNavbar from '@/components/departments/department_navbar'

import "../department_style.css"

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
``
export default function ComputerScienceLayout({ children }) {

    const links = [
        ["About", "/"],
        ["Vision & Mission", "vision-mission"],
        ["Faculty", "faculty"],
        ["HOD", "hod"],
        ["PEO'S,POs and PSos", "peos-pos-psos"],
        ["Facilities", "facilities"],
        ["Achievements", "achievements"],
        ["Activities", "activities"],
        ["Associations and Clubs", "associations-and-clubs"],
        ["Paper Publications", "paper-publications"],
    ]

    return (

        <div className="department_layout">

            <div className="department">
                {children}
            </div>
            <DepartmentNavbar department={"civil-engineering"} links={links} />


        </div>
    );
}
