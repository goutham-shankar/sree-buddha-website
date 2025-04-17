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

export default function ElectricalElectronicsDepartment() {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 md:py-12 ${poppins.className}`}>
      
      <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 page_heading2'>VISION AND MISSION</h2>
      
      <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8 rounded"></div>
      
      <div className="space-y-8 md:space-y-10">
        <section>
          <h3 className='text-xl md:text-2xl font-semibold text-gray-700 mb-3'>VISION</h3>
          <p className='text-gray-600 leading-relaxed mb-8'>
            To create skilful Electrical & Electronics engineers with societal commitment
          </p>
        </section>
        
        <section>
          <h3 className='text-xl md:text-2xl font-semibold text-gray-700 mb-3'>MISSION</h3>
          <div className='text-gray-600 leading-relaxed space-y-2'>
            <p>Create professionally qualified Electrical & Electronics engineers by imparting necessary knowledge and relevant skills.</p>
            <p>Encourage students to inculcate a culture of lifelong learning necessary for jobs or higher studies.</p>
            <p>Induce human values and social commitment to meet societal needs.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
