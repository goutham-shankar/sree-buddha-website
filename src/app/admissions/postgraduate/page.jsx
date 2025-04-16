"use client"

import React from 'react'

export default function PostGraduatePage() {
  return (
    <div className="font-['Poppins'] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        {/* Header with decorative element */}
        <div className="relative mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#73501C] mb-4">
            POST GRADUATE
          </h1>
          <div className="w-32 h-1.5 bg-[#E6B66D] rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            Advance your career with our specialized M.Tech programs designed to create industry-ready professionals and innovative researchers.
          </p>
        </div>
        
        {/* Feature Cards - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          {[
            { text: 'NBA Accredited', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
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
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Electronics & Communication Engineering - Embedded Systems',
                  'Biotechnology and Biochemical Engineering',
                  'Computer Science & Engineering',
                  'Mechanical Engineering - Computer Integrated Manufacturing',
                  'Civil Engineering - Structural Engineering',
                  'Electrical Engineering - Electrical Machines'
                ].map((program, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700 text-lg">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Buttons */}
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-4 md:space-y-0 my-10">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe3RvBGmTslrxDMHBYn0vGufABqCvqUZnumUazbylQZ3J5lgQ/viewform" 
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#E6B66D] to-amber-500 text-center rounded-xl text-white text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Quick Registration
            </span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          </a>
          <a 
            href="/admissions/application-form-mtech" 
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-amber-500 to-[#73501C] text-center rounded-xl text-white text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Online Application Form
            </span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          </a>
        </div>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">Eligibility Criteria</h2>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>The applicant must be of Indian Nationality.</p>
              
              <p>Interested applicants should have completed his/her graduation from an institution affiliated by 
              AICTE / Deemed Universities in India with a minimum of 60% percentage marks in the qualifying exam (B. Tech).
              However, SC/ ST candidates have only to pass their respective B. Tech degrees. For SEBC (OBC) candidates, a 
              minimum requirement of 54% marks in percentage in their B. Tech degree is compulsory.</p>
              
              <p>Candidates who have qualified for AMIE / AMIETE exams and satisfy the following conditions will be eligible for admission: A minimum
              of 55% marks is required for section B in AMIE/AMIETE entrance exam.</p>
              
              <p>Candidates appearing for the final semester exam are also eligible to apply, but they must have to pass all 
              the subjects up to including the 6th-semester exams (8th semester for B. Arch candidates). However, the confirmation of
              admission of any candidates will be subject to the production of their qualifying
              degree before the date stipulated by the affiliated University.</p>
              
              <p>Candidates with valid GATE score are eligible for AICTE monthly stipend.</p>
            </div>
          </div>
        </section>

        {/* Program Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">Program-Specific Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'M Tech Electronics & Communication Engineering – Embedded Systems',
                req: 'B Tech/BE degree in ECE/AE&I/EEE or CSE'
              },
              {
                name: 'M Tech Biotechnology & Biochemical Engineering',
                req: 'B Tech/BE degree in BT&BCE/Chemical Engineering'
              },
              {
                name: 'M Tech Computer Science & Engineering',
                req: 'B Tech/BE degree CSE/CS/IT'
              },
              {
                name: 'M Tech Mechanical Engineering – Computer Integrated Manufacturing',
                req: 'B Tech/BE degree in Mechanical Engineering'
              },
              {
                name: 'MTech Civil Engineering – Structural Engineering',
                req: 'B Tech/BE degree in Civil Engineering'
              },
              {
                name: 'M Tech Electrical Engineering – Electrical Machines',
                req: 'B Tech/BE Degree in Electrical & Electronics Engineering'
              }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-semibold text-[#73501C] text-lg">{program.name}</h3>
                <p className="text-gray-700 mt-2">{program.req}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">M Tech Degree Course – Fees Structure 2022-23</h2>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="max-w-5xl mx-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#E6B66D] text-[#73501C]">
                    <th className="border border-gray-300 p-3 text-left">Particulars</th>
                    <th className="border border-gray-300 p-3 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Tuition Fee', amount: '₹ 35,000 (Per Semester*)' },
                    { name: 'Admission fee', amount: '₹ 500 (One Time)' },
                    { name: 'Caution Deposit', amount: '₹ 2,500 (One Time Refundable)' },
                    { name: 'University Student Administration fee', amount: '₹ 1,000 (One Time)' },
                    { name: 'University Affiliation Fee', amount: '₹ 1,000 (One Time)' },
                    { name: 'University Exam fee', amount: '₹ 1,500 (1st Semester)' },
                    { name: 'University Arts & Sports Fee', amount: '₹ 500 (One Time)' },
                    { name: 'Stationery charges', amount: '₹ 200 (One Time)' },
                    { name: 'PTA', amount: '₹ 2,000 (One Time)' }
                  ].map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}>
                      <td className="border border-gray-300 p-3">{fee.name}</td>
                      <td className="border border-gray-300 p-3">{fee.amount}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#f5e9d2] font-bold text-[#73501C]">
                    <td className="border border-gray-300 p-3">Total</td>
                    <td className="border border-gray-300 p-3">₹44,200/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-8">
          <p className="text-lg font-medium flex items-center">
            <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            For more information, please contact our PRO @ 9446014317
          </p>
        </div>

        {/* Documents Required */}
        <section className="mb-16">
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
                "Course & Conduct Certificate."
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
          <h2 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-8 opacity-90">Take the next step towards becoming a specialized professional with our M.Tech programs.</p>
          <a 
            href="/admissions/application-form-mtech" 
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
  );
}