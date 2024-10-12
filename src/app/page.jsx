import Image from "next/image";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/homepage/LandingPage";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Footer/>
    </>
  )
}
