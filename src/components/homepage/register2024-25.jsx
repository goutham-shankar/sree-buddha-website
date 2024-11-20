"use client"

import React from 'react'
import "@/styles/homepage/register2024-25.css"
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react';

export default function Register202425() {
  useEffect(() => {
    AOS.init({
        once: true,
    //   disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className='register_24_25'>

        <h3   data-aos="fade-up">REGISTER NOW  FOR 2024-2025</h3>
        <a    data-aos="fade-up" href="" className="register_now">Register</a>
      
    </div>
  )
}
