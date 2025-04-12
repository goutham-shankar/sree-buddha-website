import React from 'react';

export default function Page() {
  // Sample industry sectors
  const sectors = [
    { name: "Information Technology", companies: 45 },
    { name: "Banking & Finance", companies: 28 },
    { name: "Manufacturing", companies: 22 },
    { name: "Consulting", companies: 18 },
    { name: "E-commerce", companies: 15 },
  ];

  // Sample top recruiting companies (in real implementation, you would add actual logos)
  const topRecruiters = [
    { id: 1, name: "Tech Solutions Inc." },
    { id: 2, name: "Global Finance Group" },
    { id: 3, name: "Innovate Systems" },
    { id: 4, name: "Consult Partners" },
    { id: 5, name: "NextGen Technologies" },
    { id: 6, name: "Future Enterprises" },
    { id: 7, name: "Swift Networks" },
    { id: 8, name: "Horizon Analytics" },
    { id: 9, name: "Capital Ventures" },
    { id: 10, name: "Digital Dynamics" },
    { id: 11, name: "Pinnacle Solutions" },
    { id: 12, name: "Prime Consulting" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      {/* Breadcrumb navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <nav className="text-sm">
          <ol className="list-none p-0 flex text-gray-500">
            <li className="flex items-center">
              <a href="#" className="hover:text-amber-700">Home</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-amber-700">Placements</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-amber-800 font-medium">Recruiters</li>
          </ol>
        </nav>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header section */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-600 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Our Recruiters</h1>
            <div className="h-1 w-20 bg-white opacity-80 my-4"></div>
            <p className="text-white text-lg opacity-90">
              Partnering with industry leaders for exceptional career opportunities
            </p>
          </div>

          {/* Introduction */}
          <div className="p-6 md:p-10">
            <div className="mb-10 text-gray-700 text-lg leading-relaxed">
              <p>
                Our college has established strong relationships with leading companies across various industries. 
                These partnerships provide our students with outstanding placement opportunities and help them 
                launch successful careers. We are proud to have over 150+ companies visiting our campus annually 
                for recruitment drives, offering diverse roles and competitive packages.
              </p>
            </div>

            {/* Sectors representation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Industry Sectors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="bg-amber-50 p-4 rounded-lg border-l-2 border-amber-600">
                    <h3 className="font-semibold text-amber-800">{sector.name}</h3>
                    <p className="text-gray-600 text-sm">{sector.companies} companies</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top recruiters grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Top Recruiters</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {topRecruiters.map((company) => (
                  <div key={company.id} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="h-16 w-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-amber-800 font-bold">{company.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-800">{company.name}</h3>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md transition-colors">
                  View All Recruiters
                </button>
              </div>
            </div>

            {/* Statistics section */}
            <div className="bg-amber-50 p-6 rounded-lg mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Placement Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                    <span className="text-xl">🏢</span>
                  </div>
                  <h3 className="text-4xl font-bold text-amber-800">150+</h3>
                  <p className="text-gray-600">Companies</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                    <span className="text-xl">📋</span>
                  </div>
                  <h3 className="text-4xl font-bold text-amber-800">2500+</h3>
                  <p className="text-gray-600">Job Offers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                    <span className="text-xl">🌍</span>
                  </div>
                  <h3 className="text-4xl font-bold text-amber-800">15+</h3>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                    <span className="text-xl">🤝</span>
                  </div>
                  <h3 className="text-4xl font-bold text-amber-800">35+</h3>
                  <p className="text-gray-600">Fortune 500</p>
                </div>
              </div>
            </div>

            {/* Testimonial section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Recruiter Testimonials</h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-600">
                <p className="text-gray-700 italic mb-4">
                  The students from this college consistently demonstrate strong technical skills and professional
                  aptitude. We ave had great success with our recruitment drives here and continue to make it a priority
                  in our campus hiring strategy
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-800 font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Melissa Johnson</h4>
                    <p className="text-sm text-gray-600">HR Director, Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact information */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Corporate Relations Office</h3>
                <p className="text-gray-600">
                  Head: Prof. Rajesh Kumar<br />
                  Phone: (123) 456-7890<br />
                  Email: corporate.relations@college.edu
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">For Company Registration</h3>
                <p className="text-gray-600">
                  Contact: Ms. Anita Singh<br />
                  Phone: (123) 456-7891<br />
                  Email: placements@college.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}