import Image from "next/image";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/homepage/LandingPage";
import VissionMission from "@/components/homepage/vision_mission";
import Events from "@/components/homepage/Events";
import Research from "@/components/homepage/Research";
import Register202425 from "@/components/homepage/register2024-25";
import Cells_Chapters from "@/components/homepage/Cells_Chapters";
import Affiliations from "@/components/homepage/Affiliations";
import NavbarMobile from "@/components/navbar_mobile";


import Footer from "@/components/footer";
export default function Home() {
  return (
    <>

    <LandingPage/>
    <VissionMission/>
    <Events/>
    <Register202425/>
    <Research/>
    
    <Affiliations/>
    <Cells_Chapters/>
    <Footer/>
    </>
  )
}
