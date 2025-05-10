import React from 'react';

export default function Team() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header section */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-600 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Team</h1>
            <div className="h-1 w-20 bg-white opacity-80 my-4"></div>
            <p className="text-white text-lg opacity-90">
              Building excellence through collaboration
            </p>
          </div>

          <div className="p-6 md:p-10">
            {/* Introduction */}
            <div className="mb-10 text-gray-700 text-lg leading-relaxed">
              <p>
                Sree Buddha College of Engineering, since its inception has a Well-Organized Training & Placement Cell. 
                Reasonably good number of students from every batch get placement in various companies.
              </p>
            </div>

            {/* Training Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">TRAINING</h2>
              <div className="text-gray-700 text-lg leading-relaxed">
                <p className="mb-4">
                  A structured programme is implemented for enhancing the communication skill of students right from first year. 
                  &apos;Language Lab&apos; helps students to improve their pronunciation and acquire linguistic skills. Regular Training 
                  programmes are arranged by experts in the field to enhance the overall personality of the students. The cell 
                  has started an in house training programme along with the routine academics. Exhaustive training is imparted 
                  to the students covering all aspects of soft skills, aptitude and technical skills. The course module designed 
                  for the training includes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Soft skill enhancement</li>
                  <li>Technical competency</li>
                  <li>Problem solving skills.</li>
                </ul>
                <p>This enhances the overall personality and employability of students</p>
              </div>
            </div>

            {/* Placement Activities Section */}
            <div className="mb-12 bg-amber-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">PLACEMENT ACTIVITIES</h2>
              <div className="text-gray-700 text-lg leading-relaxed">
                <p>
                  Special training Programme is organized for the final year students exclusively. The programme, 
                  covering vital areas including Personality Development is compulsory. Even the day scholars are 
                  given accommodation in the hostels to make this process much effective.
                </p>
              </div>
            </div>

            {/* Placements Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">PLACEMENTS</h2>
              <div className="text-gray-700 text-lg leading-relaxed">
                <p>
                  More than 80% of the students have been placed in various reputed institutions. They include 
                  Infosys, Wipro, Accenture, L&T, IBS, CTS, CSS, India Tech Limited, UST Global, Seagate, Face, 
                  Calydon Tech, HCL B-Serve, HCL Infosystems, Claria Softech, Spectrum, Omnex Academy and several 
                  other institutions of repute
                </p>
              </div>
            </div>

            {/* Statistics section */}
            <div className="bg-amber-50 p-6 rounded-lg mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Placement Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                    <span className="text-xl">🎓</span>
                  </div>
                  <h3 className="text-4xl font-bold text-amber-800">80%+</h3>
                  <p className="text-gray-600">Placement Rate</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="inline-flex p-3 rounded-full bg-amber-100 mb-3">
                    <span className="text-xl">🏢</span>
                  </div>
                  <h3 className="text-4xl font-bold text-amber-800">20+</h3>
                  <p className="text-gray-600">Partner Companies</p>
                </div>
              </div>
            </div>

            {/* Contact information */}
            {/* <div className="bg-gray-50 p-6 rounded-lg">
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
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">For Training Programs</h3>
                  <p className="text-gray-600">
                    Contact our training cell:<br />
                    Email: training@sbce.ac.in<br />
                    Phone: +91 468 2301703
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}