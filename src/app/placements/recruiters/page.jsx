import React from 'react';

export default function Page() {
  // Actual recruiters with their logos
  const recruiters = [
    { name: "TCS", logo: "/images/logos/tcs.jpg" },
    { name: "Infosys", logo: "/images/logos/info.jpg" },
    { name: "UST Global", logo: "/images/logos/UST.jpg" },
    { name: "Accenture", logo: "/images/logos/Accenture.jpg" },
    { name: "IBS", logo: "/images/logos/ibs.jpg" },
    { name: "Infosys", logo: "/images/logos/Infosis.jpg" },
    { name: "MRF", logo: "/images/logos/MRF.jpg" },
    { name: "Omnex", logo: "/images/logos/Omnex.jpg" },
    { name: "SAP", logo: "/images/logos/sap.jpg" },
    { name: "SLK", logo: "/images/logos/SLK.jpg" },
    { name: "Speridian", logo: "/images/logos/Speridian.jpg" },
    { name: "Sutherland", logo: "/images/logos/sutherland.jpg" },
    { name: "Ernst & Young", logo: "/images/logos/Ernsr.jpg" },
    { name: "FACE", logo: "/images/logos/FACE.jpg" },
    { name: "Clayd", logo: "/images/logos/Clayd.jpg" },
    { name: "Cognizant", logo: "/images/logos/cog.jpg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header section */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-600 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Our Recruiters</h1>
            <div className="h-1 w-20 bg-white opacity-80 my-4"></div>
            <p className="text-white text-lg opacity-90">
              Building careers with industry leaders
            </p>
          </div>

          <div className="p-6 md:p-10">
            {/* Introduction */}
            <div className="mb-10 text-gray-700 text-lg leading-relaxed">
              <p>
                We have established strong partnerships with leading companies across various industries, 
                providing our students with outstanding placement opportunities. Our recruiters include 
                Fortune 500 companies, multinational corporations, and innovative startups, offering diverse 
                roles and competitive packages.
              </p>
            </div>

            {/* Main recruiters grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Our Esteemed Recruiters</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {recruiters.map((company, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                  >
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="w-full h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics section */}
            <div className="bg-amber-50 p-6 rounded-lg mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Placement Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              </div>
            </div>

            {/* Contact information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Training & Placement Office</h3>
                  <p className="text-gray-600">
                    For placement related queries:<br />
                    Email: placement@sbce.ac.in<br />
                    Phone: +91 468 2301702
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">For Company Registration</h3>
                  <p className="text-gray-600">
                    Contact our placement cell:<br />
                    Email: placement@sbce.ac.in<br />
                    Phone: +91 468 2301702
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}