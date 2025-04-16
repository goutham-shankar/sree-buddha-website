"use client"

import React from 'react'
import course from '@/assets/images/admissions/ug_course.png'

export default function UndergraduatePage() {
  return (
    <div className="font-['Poppins'] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        {/* Header with decorative element */}
        <div className="relative mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#73501C] mb-4">
            UNDERGRADUATE
          </h1>
          <div className="w-32 h-1.5 bg-[#E6B66D] rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            Explore our comprehensive undergraduate programs designed to empower the next generation of innovators and leaders.
          </p>
        </div>
        
        {/* Feature Cards - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
          {[
            { text: 'NBA Accredited', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { text: 'NAAC Accredited', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { text: 'Excellent Placement', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { text: 'Apply Now', icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' }
          ].map((item, index) => (
            <a 
              href="#" 
              key={index}
              className="group relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-amber-100 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300"></div>
              <svg className="w-8 h-8 text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
              </svg>
              <span className="font-medium text-center group-hover:text-[#f48208] transition-colors duration-300">
                {item.text}
              </span>
            </a>
          ))}
        </div>

        {/* Programs Section - Enhanced with card */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">Programs Offered</h2>
          <div className="bg-white p-6 rounded-2xl shadow-md">
          <div class="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
  <h1 class="text-4xl font-extrabold mb-8 text-center text-gray-800">Course Seat Matrix</h1>
  <table class="w-full table-auto border-collapse border border-gray-300 text-lg">
    <thead>
      <tr class="bg-gray-100 text-gray-900">
        <th class="border border-gray-300 px-6 py-4 text-left font-semibold">Course</th>
        <th class="border border-gray-300 px-6 py-4 text-left font-semibold">Seats</th>
      </tr>
    </thead>
    <tbody class="text-gray-700">
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4">Civil Engineering</td>
        <td class="border border-gray-300 px-6 py-4">60 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4">Computer Science & Engineering</td>
        <td class="border border-gray-300 px-6 py-4">180 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4">Electronics & Communication Engineering</td>
        <td class="border border-gray-300 px-6 py-4">30 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4">Electrical & Electronics Engineering</td>
        <td class="border border-gray-300 px-6 py-4">30 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4">Mechanical Engineering</td>
        <td class="border border-gray-300 px-6 py-4">60 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4">Biotechnology & Biochemical Engineering</td>
        <td class="border border-gray-300 px-6 py-4">30 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4 underline">Food Technology</td>
        <td class="border border-gray-300 px-6 py-4">30 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4 underline">Computer Science & Engineering (AI & ML)</td>
        <td class="border border-gray-300 px-6 py-4">60 Seats</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-300 px-6 py-4">Electronics and Computer Engineering <span class="text-base italic">*</span></td>
        <td class="border border-gray-300 px-6 py-4">30 Seats</td>
      </tr>
    </tbody>
  </table>
  <p class="text-base italic text-gray-600 mt-4">*New course 2023–24</p>
</div>

          </div>
        </section>

        {/* Admission Criteria - Enhanced with card */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">Admission Criteria</h2>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-lg leading-relaxed">
              50% of the seats are under Government Quota, allotment to the same will be made by
              the Commissioner of Entrance Examinations (CEE Kerala). The remaining 50% seats are under Management Quota 
              and the admission will be made strictly on the basis of merit, which includes NRI/OCI seats also.
            </p>
          </div>
        </section>

        {/* How To Apply - Enhanced with card */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">How To Apply</h2>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-lg leading-relaxed mb-8">
              An application form can be obtained from the College office in person 
              on payment of INR 500/- or by post on sending a Demand Draft (DD) for INR 530/- in favour of the Principal.
              Application forms can also be downloaded from the website of the College. Such applications have to be 
              submitted along with a cash payment of INR 500/- or a DD of INR 500/-.
              <br /><br />
              Candidates can also submit an online application through the website.
            </p>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-4 md:space-y-0 my-10">
              <a 
                href="/admissions/application-form" 
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#E6B66D] to-amber-500 text-center rounded-xl text-white text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Online Application Form
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdZkVC3f7rIeBlkVnW-One8uC1NnsHxQZtK013KVjP7ZKxzxg/viewform" 
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-amber-500 to-[#73501C] text-center rounded-xl text-white text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Quick Registration
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              </a>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-8">
              <p className="text-lg font-medium flex items-center">
                <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                For more information, please contact our PRO @ 9446014317
              </p>
            </div>
          </div>
        </section>

        {/* Information Cards - Combined smaller sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Scholarships */}
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-4 text-[#73501C]">Scholarships</h2>
            <p className="text-gray-700 leading-relaxed">
              Management offers scholarships to meritorious students on a merit cum means basis. Students 
              securing GPA 8 and above from the lower-income groups are eligible for the scholarships.
            </p>
          </div>

          {/* Tuition Fee Waiver */}
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-4 text-[#73501C]">Tuition Fee Waiver Scheme</h2>
            <p className="text-gray-700 leading-relaxed">
              Eligible candidates of Government Quota can get admission under Tuition Fee Waiver Scheme.
            </p>
          </div>

          {/* Lateral Entry */}
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-4 text-[#73501C]">Lateral Entry</h2>
            <p className="text-gray-700 leading-relaxed">
              Applications are also invited for admission to the second year of the B Tech Degree 
              course, under the Lateral Entry Scheme.
            </p>
          </div>
        </div>

        {/* Important Notice - Enhanced */}
        <div className="relative p-8 mb-16 border-2 border-red-500 rounded-2xl bg-gradient-to-r from-red-50 to-white shadow-md">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border-2 border-red-500">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <p className="text-xl font-medium text-center text-gray-800">
            No capitation is levied. Merit is the only Criterion for Selection.
          </p>
        </div>

        {/* Documents Required - Enhanced */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">Documents Required for Admission</h2>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Admit Card of CEE/KEE + 1 copy.",
                "Entrance Rank Certificate (Data Sheet) + 1 copy.",
                "Allotment Memo (for Govt. Quota) + 1 copy.",
                "SSLC / 10th Mark List (Original) + 4 copies.",
                "Plus 2 Mark List / 12th Mark List / Diploma Mark List (for L/E) + 4 copies.",
                "Pass Certificate + 4 copies (only for CBSE & ICSE).",
                "Transfer Certificate + 1 copy.",
                "Course & Conduct Certificate"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Medical Fitness Certificate in the prescribed format.",
                  "Photographs: Passport Size 6 Nos & Stamp Size 3 Nos.",
                  "Migration Certificate (Only for CBSE & ICSE, Other State Board & Lateral Entry).",
                  "Eligibility Certificate (for Lateral Entry & Board of Exam of other States).",
                  "Community Certificate (for Reservation Categories) + 2 copies.",
                  "Income Certificate (for Reservation Categories & Tuition Fee Waiver Students).",
                  "Fee Receipt (for Govt. Quota)/Bank Remittance Slip.",
                  "Supporting Documents for NRI/PIO/OCI Quota Admission."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-[#73501C] py-10 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Academic Journey?</h2>
          <p className="text-lg mb-8 opacity-90">Take the first step towards a bright future with our undergraduate programs.</p>
          <a 
            href="/admissions/application-form" 
            className="inline-block px-8 py-3 bg-white text-[#73501C] rounded-lg font-medium hover:bg-amber-100 transition-colors duration-300 shadow-lg"
          >
            Apply Today
          </a>
        </div>
      </div>
      
      {/* Add custom animation for button shine effect */}
      <style jsx>{`
        @keyframes shine {
          from {left: -100%;}
          to {left: 100%;}
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}