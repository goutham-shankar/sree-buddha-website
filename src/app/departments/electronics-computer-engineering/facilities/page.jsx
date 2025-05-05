"use client";

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import "../../department_style.css";


// Initialize Poppins font
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function ComputerScienceDepartmentFacilities() {
  const [activeTab, setActiveTab] = useState('overview');

  // Facilities data organized by section for maintainability
  const facilities = {
    major: [
      "Excellent infrastructure and competent faculty",
      "Curriculum includes subjects with wide applications in industries",
      "Digital Signal Processing, Digital Image Processing, VLSI Design",
      "Radar and Television Engineering, Satellite and Mobile Communication, Nanoelectronics",
      "The department offers excellent lab facilities with the latest equipment"
    ],
    labs: [
      {
        name: "Electronic Devices/Circuits Lab",
        description: "This lab provides hands-on experience with various electronic devices and circuit design concepts.",
        image: "/assets/images/departments/facilities/ece/electronic_devices_lab.jpg"
      },
      {
        name: "Digital/Analog Integrated Circuits Lab",
        description: "Students learn integrated circuit design principles and work with various digital and analog systems.",
        image: "/assets/images/departments/facilities/ece/integrated_circuits_lab.jpg"
      },
      {
        name: "Advanced Communication Engineering Lab",
        description: "A specialized lab for communication engineering principles and technologies.",
        image: "/assets/images/departments/facilities/ece/communication_lab.jpg"
      },
      {
        name: "Digital Signal Processing Lab",
        description: "Dedicated to signal processing techniques and applications using specialized equipment.",
        image: "/assets/images/departments/facilities/ece/dsp_lab.jpg"
      },
      {
        name: "Microcontroller Lab",
        description: "Focused on microcontroller programming and embedded system development.",
        image: "/assets/images/departments/facilities/ece/microcontroller_lab.jpg"
      },
      {
        name: "Electronic Product Design and Mini Project Lab",
        description: "For designing electronic products and developing mini projects.",
        image: "/assets/images/departments/facilities/ece/product_design_lab.jpg"
      },
      {
        name: "Industrial Electronics Lab",
        description: "Focused on industrial applications of electronics and related systems.",
        image: "/assets/images/departments/facilities/ece/industrial_electronics_lab.jpg"
      },
      {
        name: "Microwave and Optical Communication Lab",
        description: "Specialized in microwave and optical communication technologies and systems.",
        image: "/assets/images/departments/facilities/ece/microwave_lab.jpg"
      },
      {
        name: "Embedded Systems Lab",
        description: "Dedicated to embedded systems design and programming.",
        image: "/assets/images/departments/facilities/ece/embedded_systems_lab.jpg"
      },
      {
        name: "Programming and Simulation Lab",
        description: "Equipped with facilities such as LabVIEW, Matlab, Multisim, Modelsim, KEIL/XILINX Embedded development and design tools.",
        image: "/assets/images/departments/facilities/ece/programming_lab.jpg"
      }
    ],
    other: [
      {
        name: "Well equipped seminar Hall",
        description: "Modern seminar hall with audio-visual facilities for presentations and guest lectures.",
        image: "/assets/images/departments/facilities/ece/seminar_hall.jpg"
      },
      {
        name: "",
        description: "",
        image: ""
      },
      {
        name: "",
        description: "",
        image: ""
      },
      {
        name: "",
        description: "",
        image: ""
      }
    ]
  };

  return (
    <div className={`cs-department-facilities ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-2">
            Department of Electronics & Computer Engineering
          </h1>
          <div className="w-24 h-1 bg-yellow-900 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-700">Facilities</h2>
        </header>

        {/* Tab Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex border-b border-gray-200 min-w-max">
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'overview' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'labs' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
              onClick={() => setActiveTab('labs')}
            >
              Laboratory Facilities
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'other' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
              onClick={() => setActiveTab('other')}
            >
              Other Facilities
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Department Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Teamed with excellent infrastructure and competent faculty, this department has proved to be unsurpassed. Curriculum includes subjects with wide applications in industries such as Digital Signal Processing, Digital Image Processing, VLSI Design, Radar and Television Engineering, Satellite and Mobile Communication, Nanoelectronics etc. The department offers excellent lab facilities with the latest equipment.
                </p>
                
                <div className="bg-gradient-to-r from-yellow-50 to-white p-5 rounded-lg border-l-4 border-yellow-900 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">World-Class Infrastructure</h4>
                  <p className="text-gray-700">
                    Our department boasts modern laboratory facilities with the latest hardware and equipment, ensuring students have access to industry-standard tools and technologies.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Major Facilities</h3>
              <div className="grid gap-4">
                {facilities.major.map((item, index) => (
                  <div key={`major-${index}`} className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-blue-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">Modern</div>
                  <div className="text-sm text-gray-600">Lab Equipment</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">10 Labs</div>
                  <div className="text-sm text-gray-600">Specialized Facilities</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-purple-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">Simulation</div>
                  <div className="text-sm text-gray-600">Tools & Software</div>
                </div>
              </div>
            </div>
          )}

          {/* Labs Tab */}
          {activeTab === 'labs' && (
            <div>
              <h3 className="text-xl font-semibold mb-5 text-gray-800">Laboratory Facilities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facilities.labs.map((lab, index) => (
                  <div key={`lab-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      {/* If you have actual images, uncomment this */}
                      {/* <img 
                        src={lab.image} 
                        alt={lab.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      /> */}
                      
                      {/* Placeholder if no images */}
                      <div className="text-5xl text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{lab.name}</h4>
                      <p className="text-gray-600">{lab.description || "A well-equipped laboratory facility for student learning and research."}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-900">
                <p className="text-gray-700 font-medium mb-1">Note:</p>
                <p className="text-gray-700">
                  All laboratories are well equipped with advanced machines and a sufficient number of terminals. 
                  Each lab has specialized software and hardware configurations to meet specific course requirements.
                </p>
              </div>
            </div>
          )}

          {/* Other Facilities Tab */}
          {activeTab === 'other' && (
            <div>
              <h3 className="text-xl font-semibold mb-5 text-gray-800">Other Department Facilities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facilities.other.map((facility, index) => (
                  facility.name ? (
                    <div key={`other-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        {/* If you have actual images, uncomment this */}
                        {/* <img 
                          src={facility.image} 
                          alt={facility.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        /> */}
                        
                        {/* Placeholder if no images */}
                        <div className="text-5xl text-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{facility.name}</h4>
                        <p className="text-gray-600">{facility.description || "A valuable facility to enhance the learning experience."}</p>
                      </div>
                    </div>
                  ) : null
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-3">Additional Resources</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Digital Library</div>
                        <div className="text-sm text-gray-600">Access to e-books and journals</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Simulation Software</div>
                        <div className="text-sm text-gray-600">LabVIEW, Matlab, Multisim</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Design Tools</div>
                        <div className="text-sm text-gray-600">KEIL/XILINX development tools</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}