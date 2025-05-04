"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ElectronicsCommunicationDepartmentActivities() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Activity data - updated with new ECE department activities
  const activities = [
    {
      id: 1,
      title: "ICST 2025 - International Conference on Synergetic Technologies",
      category: "conference",
      date: "March 24-25, 2025",
      location: "SBCE Campus",
      image: "/assets/images/departments/activities/ecacte.jpg",
      description: "Department of Computer Science, Electrical and Electronics and Electronics and Communication, Sree Buddha College of Engineering, Pattoor, Alappuzha, Kerala jointly organized an International Conference on Synergetic Technologies: \"Sustainable Approaches in Electrical, Electronics & Computer Engineering by Integrating AI for Future Innovations\" in association with Institute of Engineers(India), Kollam Local Centre. The keynote speaker was Dr. Dhanup S. Pillai, Scientist, Qatar Environment & Energy Research Institute – QEERI.",
      coordinator: "Dr. S. Suresh Babu"
    },
    {
      id: 2,
      title: "National Science Day Celebrations 2025",
      category: "lecture",
      date: "March 18, 2025",
      location: "BT Seminar Hall",
      image: "/assets/images/departments/activities/ecesa.jpg",
      description: "Department of Electronics and communication engineering celebrates NATIONAL SCIENCE DAY. Dr. Pradeep C, Professor, Department of Electronics, Saintgits College of Engineering inaugurated National Science Day 2025 followed by an enlightening talk on \"MILLION CHIPS, BILLION DREAMS\".",
      coordinator: "Prof. Hari S"
    },
    {
      id: 3,
      title: "Industrial Visit to ITI LIMITED Palakkad",
      category: "visit",
      date: "February 20, 2025",
      location: "ITI LIMITED, Palakkad",
      image: "/assets/images/departments/activities/iti.jpg",
      description: "2024-28 batch students gained insights into current market trends and technologies through hands-on experience with industry standard equipment and processes like PCB fabrication, SIM manufacturing, ATM card processing sessions etc.",
      coordinator: "Dr. K. Krishnakumar"
    },
    {
      id: 4,
      title: "Drone Workshop",
      category: "workshop",
      date: "February 24, 2025",
      location: "ECE Department",
      image: "/assets/images/departments/activities/donec.jpg",
      description: "Department of ECE and ER in association with Nuke Labs organized a Drone workshop where students learned about drone technology, assembly, programming and flight control.",
      coordinator: "Nuke Labs Team"
    },
    {
      id: 5,
      title: "ELECTRA'24 Technical Fest",
      category: "competition",
      date: "April 8, 2024",
      location: "SBCE Campus",
      image: "/assets/images/departments/activities",
      description: "Department of ECE organized Technical Fest ELECTRA'24. Prof. K Sasikumar, Chairman of Sree Buddha College of Engineering inaugurated the fest. ROBO SOCCER, RC RACE, FUN ZONE, E-SPORTS & BASS BLAST Programmes were conducted during fest.",
      coordinator: "ECE Department"
    },
    {
      id: 6,
      title: "IoT Hands-on Workshop",
      category: "workshop",
      date: "December 16-18, 2024",
      location: "ECE Lab",
      image: "/assets/images/departments/activities/workshop2.jpg",
      description: "A 3-day Hands-on training on \"Internet of Things\" for the students of Department of ECE by OPEN LEAVES covering IoT fundamentals, sensor integration, and cloud connectivity.",
      coordinator: "OPEN LEAVES"
    },
    {
      id: 7,
      title: "IDEATHON Competition Winners",
      category: "competition",
      date: "January 15, 2025",
      location: "SBCE Campus",
      image: "/assets/images/departments/activities/competition1.jpg",
      description: "Congratulations to S. Adithya, Adithyan A., Bhavya A. S. and Aliya Hakkim, winners of college level IDEATHON competition conducted by KTU start-up cell.",
      coordinator: "KTU Start-up Cell"
    },
    {
      id: 8,
      title: "Industrial Visit to KINFRA Industrial Park",
      category: "visit",
      date: "February 14, 2025",
      location: "KINFRA, Thiruvalla",
      image: "/assets/images/departments/activities/visit2.jpg",
      description: "Department of ECE and ER in association with BIS club conducted an industrial visit at KINFRA INDUSTRIAL PARK, Thiruvalla where students got exposure to industrial operations and manufacturing processes.",
      coordinator: "BIS Club"
    }
  ];

  // Filter activities based on active category
  const filteredActivities = activeFilter === 'all'
    ? activities
    : activities.filter(activity => activity.category === activeFilter);

  // Category options with icons
  const categories = [
    { id: 'all', name: 'All Activities', icon: '📋' },
    { id: 'workshop', name: 'Workshops', icon: '🔧' },
    { id: 'competition', name: 'Competitions', icon: '🏆' },
    { id: 'lecture', name: 'Guest Lectures', icon: '🎓' },
    { id: 'visit', name: 'Industry Visits', icon: '🚌' },
    { id: 'conference', name: 'Conferences', icon: '🌐' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
              Department Of Electronics & Communication Engineering
            </h1>
            <div className="w-24 sm:w-32 md:w-40 h-1 bg-yellow-900 mx-auto mb-4 sm:mb-6 md:mb-8" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800">Activities</h2>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Activity Description - Improved padding for mobile */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 border-l-4 border-yellow-900 pl-3">
              Department Activities
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              The Department of Electronics & Communication Engineering at Sree Buddha College of Engineering conducts
              various activities throughout the academic year to enhance the technical skills and practical
              knowledge of students. These activities include international conferences, technical fests, workshops,
              industrial visits, and competitions. Our focus on practical learning and industry exposure helps students
              develop technical expertise and stay updated with the latest advancements in the field of electronics and communication.
            </p>
          </div>
        </div>

        {/* Filter Tabs - Made horizontally scrollable on mobile */}
        <div className="mb-6 sm:mb-8 md:mb-10 sticky top-0 bg-white pt-3 pb-3 sm:pt-4 sm:pb-4 z-10 shadow-sm rounded-lg">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-4 px-1">Filter Activities:</h3>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm md:text-base ${activeFilter === category.id
                    ? 'bg-yellow-900 text-white'
                    : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
                  }`}
              >
                <span role="img" aria-hidden="true">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">
                  {category.id === 'all' ? 'All' :
                    category.id === 'workshop' ? 'Workshops' :
                      category.id === 'competition' ? 'Comps' :
                        category.id === 'lecture' ? 'Lectures' :
                          category.id === 'seminar' ? 'Seminars' :
                            'Visits'}
                </span>
              </button>
            ))}
          </div>
        </div>

       
               {/* Activities Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                 {filteredActivities.map(activity => (
                   <div
                     key={activity.id}
                     className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition-shadow duration-300"
                   >
                     <div className="relative h-40 sm:h-48">
                       <Image
                         src={activity.image}
                         alt={activity.title}
                         fill
                         className="object-cover"
                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                         onError={(e) => {
                           e.currentTarget.src = "/assets/images/departments/activities/placeholder.jpg";
                         }}
                       />
                     </div>

              <div className="p-4 sm:p-5">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1 xs:gap-0 mb-2">
                  <span className="inline-block px-2 py-0.5 xs:py-1 bg-yellow-100 text-yellow-900 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {activity.category}
                  </span>
                  <span className="text-xs text-gray-600">{activity.date}</span>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">{activity.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 line-clamp-3">{activity.description}</p>

                <div className="flex items-center justify-between mt-2 sm:mt-4 border-t border-gray-100 pt-2 sm:pt-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[150px] sm:max-w-[200px]">{activity.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-300 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700">No activities found</h3>
            <p className="text-sm text-gray-500 mt-1">Try changing your filter selection</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-900 text-white text-sm rounded-md hover:bg-yellow-800 transition-colors"
            >
              Show All Activities
            </button>
          </div>
        )}

        {/* Recent Activities Table - Made responsive with container */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 border-l-4 border-yellow-900 pl-3">
            Recent Activities
          </h3>
          
          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-yellow-50">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Activity
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Coordinator
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    FAREWELL 2025 (2021-25 BATCH ECE)
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    April 30, 2025
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    Main Auditorium
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    ECE Department
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    BIS STANDARD CLUB Formation
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    March 12, 2024
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    ECE Department
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    Department of ECE
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Talk on &quot;NEP 2020&quot;
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    October 8, 2024
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    BT Seminar Hall
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    Prof. Hari S
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Career Guidance by GuidEd Overseas
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    February 26, 2024
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    BT Seminar Hall
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                    GuidEd Overseas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile card view */}
          <div className="sm:hidden space-y-3">
            <div className="bg-white rounded-lg shadow p-3 border border-gray-200">
              <div className="font-medium text-gray-900 text-sm mb-1">FAREWELL 2025 (2021-25 BATCH ECE)</div>
              <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 text-xs text-gray-600">
                <div><span className="font-medium">Date:</span> April 30, 2025</div>
                <div><span className="font-medium">Location:</span> Main Auditorium</div>
                <div className="col-span-2"><span className="font-medium">Coordinator:</span> ECE Department</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-3 border border-gray-200">
              <div className="font-medium text-gray-900 text-sm mb-1">BIS STANDARD CLUB Formation</div>
              <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 text-xs text-gray-600">
                <div><span className="font-medium">Date:</span> March 12, 2024</div>
                <div><span className="font-medium">Location:</span> ECE Department</div>
                <div className="col-span-2"><span className="font-medium">Coordinator:</span> Department of ECE</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-3 border border-gray-200">
              <div className="font-medium text-gray-900 text-sm mb-1">Talk on &quot;NEP 2020&quot;</div>
              <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 text-xs text-gray-600">
                <div><span className="font-medium">Date:</span> October 8, 2024</div>
                <div><span className="font-medium">Location:</span> BT Seminar Hall</div>
                <div className="col-span-2"><span className="font-medium">Coordinator:</span> Prof. Hari S</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-3 border border-gray-200">
              <div className="font-medium text-gray-900 text-sm mb-1">Career Guidance by GuidEd Overseas</div>
              <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 text-xs text-gray-600">
                <div><span className="font-medium">Date:</span> February 26, 2024</div>
                <div><span className="font-medium">Location:</span> BT Seminar Hall</div>
                <div className="col-span-2"><span className="font-medium">Coordinator:</span> GuidEd Overseas</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}