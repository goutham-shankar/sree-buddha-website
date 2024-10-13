import React from 'react'
import "./page.css"
import Image from 'next/image'

import oronogram from "@/assets/images/oronogram.png"

export default function Oronogram() {
  return (
    <div className='oronogram'>
         <h3>ORONOGRAM</h3>
         <img src = {oronogram.src} />
    </div>
  )
}
