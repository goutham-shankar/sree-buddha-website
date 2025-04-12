import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto px-2 py-8 max-w-8xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-800 to-amber-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Placement Details</h1>
          <div className="h-1 w-20 bg-white opacity-80 my-4"></div>
          <p className="text-white text-lg opacity-90">
            Launching careers with industry-leading companies
          </p>
        </div>

        {/* Main content */}
        <div className="p-6 md:p-8">
          {/* Introduction */}
          <div className="mb-10 text-gray-700 text-lg leading-relaxed">
            <p>
              Our college takes pride in its robust placement cell that consistently delivers excellent career opportunities 
              to students. With dedicated training programs, industry partnerships, and personalized career guidance, 
              we ensure our graduates are well-prepared for professional success. Our placement statistics reflect our 
              commitment to student careers and industry relevance.
            </p>
          </div>

          {/* Placement cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Campus Recruitment */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/images/college-main.jpg"
                  alt="Sree Buddha College Main Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-amber-800 text-white px-4 py-2 rounded-br-lg">
                  Campus Recruitment
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">On-Campus Drives</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600 mr-2"></div>
                    <span>Over 150+ companies visit annually</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600 mr-2"></div>
                    <span>Year-round recruitment calendar</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600 mr-2"></div>
                    <span>State-of-the-art interview facilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recruiting Companies */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="relative h-64 overflow-hidden bg-white p-4">
                <div className="grid grid-cols-4 gap-4 h-full">
                  <img src="/images/logos/tcs.jpg" alt="TCS" className="w-full h-12 object-contain" />
                  <img src="/images/logos/info.jpg" alt="Infosys" className="w-full h-12 object-contain" />
                  <img src="/images/logos/UST.jpg" alt="UST" className="w-full h-12 object-contain" />
                  <img src="/images/logos/Accenture.jpg" alt="Accenture" className="w-full h-12 object-contain" />
                  
                  <img src="/images/logos/ibs.jpg" alt="IBS" className="w-full h-12 object-contain" />
                  <img src="/images/logos/Infosis.jpg" alt="Infosys" className="w-full h-12 object-contain" />
                  <img src="/images/logos/MRF.jpg" alt="MRF" className="w-full h-12 object-contain" />
                  <img src="/images/logos/Omnex.jpg" alt="Omnex" className="w-full h-12 object-contain" />
                  
                  <img src="/images/logos/sap.jpg" alt="SAP" className="w-full h-12 object-contain" />
                  <img src="/images/logos/SLK.jpg" alt="SLK" className="w-full h-12 object-contain" />
                  <img src="/images/logos/Speridian.jpg" alt="Speridian" className="w-full h-12 object-contain" />
                  <img src="/images/logos/sutherland.jpg" alt="Sutherland" className="w-full h-12 object-contain" />
                </div>
                <div className="absolute top-0 left-0 bg-amber-600 text-white px-4 py-2 rounded-br-lg">
                  Our Recruiters
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Partners</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
                    <span>Top-tier tech and finance companies</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
                    <span>Strong alumni network in industry</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
                    <span>Diverse sectors from IT to consulting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

      
          {/* <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Placement Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-4 bg-amber-50 p-3 rounded-full">
                  <div className="w-6 h-6 text-amber-700">📊</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Top Recruiters</h3>
                  <p className="text-gray-600 text-sm">Fortune 500 companies regularly visit our campus</p>
                </div>
              </div>
              {/* Highlight 2 */}
              {/* <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-4 bg-amber-50 p-3 rounded-full">
                  <div className="w-6 h-6 text-amber-700">👥</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Placement Rate</h3>
                  <p className="text-gray-600 text-sm">95% placement rate for eligible students</p>
                </div>
              </div>
            
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-4 bg-amber-50 p-3 rounded-full">
                  <div className="w-6 h-6 text-amber-700">🏆</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Average Package</h3>
                  <p className="text-gray-600 text-sm">7.2 LPA average package across all disciplines</p>
                </div>
              </div>
             
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-4 bg-amber-50 p-3 rounded-full">
                  <div className="w-6 h-6 text-amber-700">📈</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Highest Package</h3>
                  <p className="text-gray-600 text-sm">28 LPA highest package offered in 2024</p>
                </div>
              </div>
             
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-4 bg-amber-50 p-3 rounded-full">
                  <div className="w-6 h-6 text-amber-700">📅</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Internships</h3>
                  <p className="text-gray-600 text-sm">Mandatory internships with industry partners</p>
                </div>
              </div>
             
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-4 bg-amber-50 p-3 rounded-full">
                  <div className="w-6 h-6 text-amber-700">💼</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Job Profiles</h3>
                  <p className="text-gray-600 text-sm">Diverse roles from technical to management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Placement process section */}
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-700">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Placement Process</h2>
            <p className="text-gray-700 mb-4">
              Our structured placement process ensures students are well-prepared for their career journey. 
              From pre-placement training to final job offers, the placement cell provides comprehensive support at every step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Pre-Placement Preparation</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Resume building workshops</li>
                  <li>Mock interviews and group discussions</li>
                  <li>Aptitude test preparation</li>
                  <li>Soft skills development</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Selection Stages</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Pre-placement talks by companies</li>
                  <li>Aptitude tests and technical assessments</li>
                  <li>Technical and HR interviews</li>
                  <li>Final job offers and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Career statistics section */}
        <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">2024 Placement Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-4xl font-bold text-amber-800">820+</h3>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-4xl font-bold text-amber-800">150+</h3>
              <p className="text-gray-600">Recruiting Companies</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-4xl font-bold text-amber-800">28 LPA</h3>
              <p className="text-gray-600">Highest Package</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-4xl font-bold text-amber-800">95%</h3>
              <p className="text-gray-600">Placement Rate</p>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="border-t border-gray-200 p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Placement Office</h3>
              <p className="text-gray-600">
                Head: Prof. Rajesh Kumar<br />
                Phone: (123) 456-7890<br />
                Email: corporate.relations@college.edu
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Student Placement Coordinators</h3>
              <p className="text-gray-600">
                Tech Department: Rahul Sharma<br />
                Management: Priya Patel<br />
                Email: placement.representatives@college.edu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}