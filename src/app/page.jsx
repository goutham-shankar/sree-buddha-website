import Image from "next/image";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/homepage/LandingPage";
import NewsTicker from "@/components/homepage/ScrollBar";
import VissionMission from "@/components/homepage/vision_mission";
import Events from "@/components/homepage/Events";
import Events2 from "@/components/homepage/Events2";
import Research from "@/components/homepage/Research";
import Register202425 from "@/components/homepage/register2024-25";
import Cells_Chapters from "@/components/homepage/Cells_Chapters";
import Affiliations from "@/components/homepage/Affiliations";
import Counts from "@/components/homepage/Counts";
import NavbarMobile from "@/components/navbar_mobile";
import Register2 from "@/components/homepage/register2";
import News from "@/components/homepage/News";
import Footer from "@/components/footer";
import News2 from "@/components/homepage/News2";

const announcements = [
  '2025 ADMISSION STARTED',
  '2025 ADMISSION STARTED',
  '2025 ADMISSION STARTED',
  '2025 ADMISSION STARTED',
];

export default function Home() {
  return (
    <>

    <LandingPage/>
    <NewsTicker></NewsTicker>
    <VissionMission/>
    <Events2/>
    <Register2/>
    <News2/>
    {/* <Events2/> */}
    <Counts/>
    {/* <Research/> */}
    <Affiliations/> 
    {/* <Footer/> */}
    </>
  )
}
