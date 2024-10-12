import Image from "next/image";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/homepage/LandingPage";
import VissionMission from "@/components/homepage/vision_mission";

export default function Home() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <VissionMission/>
    </>
  )
}
