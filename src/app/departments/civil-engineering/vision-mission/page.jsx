import React from 'react'
import { Poppins } from 'next/font/google'
import "../../department_style.css"
import "./style.css"

// Initialize Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function CivilEngineeringVisionMission() {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 md:py-12 ${poppins.className}`}>
      
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 page_heading2">VISION AND MISSION</h2>
      
      <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8 rounded"></div>
      
      <div className="space-y-8 md:space-y-10">
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">VISION</h3>
          <p className="text-gray-600 leading-relaxed">
            To breed professionally competent Civil Engineers for a sustainable society.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">MISSION</h3>
          <ul className="text-gray-600 leading-relaxed list-disc ml-6 space-y-2">
            <li>Provide theoretical, practical and industry knowledge in Civil Engineering.</li>
            <li>Encourage students for higher studies, lifelong learning and research.</li>
            <li>Motivate students to apply knowledge and expertise for the development of a sustainable society.</li>
          </ul>
        </section>
      </div>

    </div>
  )
}
