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

export default function ComputerScienceDepartment() {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 md:py-12 ${poppins.className}`}>
      
      <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2'>VISION AND MISSION</h2>
      
      <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8 rounded"></div>
      
      <div className="space-y-8 md:space-y-10">
        <section>
          <h3 className='text-xl md:text-2xl font-semibold text-gray-700 mb-3'>VISION</h3>
          <p className='text-gray-600 leading-relaxed mb-8'>
            To create competent computer engineers with social commitment
          </p>
        </section>
        
        <section>
          <h3 className='text-xl md:text-2xl font-semibold text-gray-700 mb-3'>MISSION</h3>
          <div className='text-gray-600 leading-relaxed'>
            <p className='mb-2'>Provide student-centric learning environment to create competent Computer Engineers</p>
            <p className='mb-2'>Instigate research, innovation and entrepreneurship initiatives</p>
            <p className='mb-0'>Impart skills and creative thinking ability to promote lifelong learning.</p>
          </div>
        </section>
      </div>
      
    </div>
  )
}