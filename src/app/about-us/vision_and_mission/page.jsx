"use client"
import React from 'react'
import { Poppins } from 'next/font/google'

// Initialize Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 md:py-12 ${poppins.className}`}>
      
      <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2'>VISION AND MISSION</h3>
      
      <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8 rounded"></div>
      
      <div className="space-y-8 md:space-y-10">
        <section>
          <h3 className='text-xl md:text-2xl font-semibold text-gray-700 mb-3'>VISION</h3>
          <p className='text-gray-600 leading-relaxed'>To create professionally competent Engineers with human values and social commitment.</p>
        </section>
        
        <section>
          <h3 className='text-xl md:text-2xl font-semibold text-gray-700 mb-3'>MISSION</h3>
          <ul className='list-disc pl-5 space-y-2 text-gray-600'>
            <li className="leading-relaxed">Offer well balanced curriculum with student-centric approach.</li>
            <li className="leading-relaxed">Encourage students to participate in innovation, lifelong learning and research.</li>
            <li className="leading-relaxed">Impart ethical and human values focusing on rural needs and sustainability.</li>
          </ul>
        </section>
      </div>
      
    </div>
  )
}