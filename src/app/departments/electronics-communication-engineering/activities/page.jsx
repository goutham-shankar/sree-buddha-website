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
      image: "/assets/images/departments/activities/conference1.jpg",
      description: "Department of Computer Science, Electrical and Electronics and Electronics and Communication, Sree Buddha College of Engineering, Pattoor, Alappuzha, Kerala jointly organized an International Conference on Synergetic Technologies: \"Sustainable Approaches in Electrical, Electronics & Computer Engineering by Integrating AI for Future Innovations\" in association with Institute of Engineers(India), Kollam Local Centre. The keynote speaker was Dr. Dhanup S. Pillai, Scientist, Qatar Environment & Energy Research Institute – QEERI.",
      coordinator: "Dr. S. Suresh Babu"
    },
    {
      id: 2,
      title: "National Science Day Celebrations 2025",
      category: "lecture",
      date: "March 18, 2025",
      location: "BT Seminar Hall",
      image: "/assets/images/departments/activities/lecture1.jpg",
      description: "Department of Electronics and communication engineering celebrates NATIONAL SCIENCE DAY. Dr. Pradeep C, Professor, Department of Electronics, Saintgits College of Engineering inaugurated National Science Day 2025 followed by an enlightening talk on \"MILLION CHIPS, BILLION DREAMS\".",
      coordinator: "Prof. Hari S"
    },
    {
      id: 3,
      title: "Industrial Visit to ITI LIMITED Palakkad",
      category: "visit",
      date: "February 20, 2025",
      location: "ITI LIMITED, Palakkad",
      image: "/assets/images/departments/activities/visit1.jpg",
      description: "2024-28 batch students gained insights into current market trends and technologies through hands-on experience with industry standard equipment and processes like PCB fabrication, SIM manufacturing, ATM card processing sessions etc.",
      coordinator: "Dr. K. Krishnakumar"
    },
    {
      id: 4,
      title: "Drone Workshop",
      category: "workshop",
      date: "February 24, 2025",
      location: "ECE Department",
      image: "/assets/images/departments/activities/workshop1.jpg",
      description: "Department of ECE and ER in association with Nuke Labs organized a Drone workshop where students learned about drone technology, assembly, programming and flight control.",
      coordinator: "Nuke Labs Team"
    },
    {
      id: 5,
      title: "ELECTRA'24 Technical Fest",
      category: "competition",
      date: "April 8, 2024",
      location: "SBCE Campus",
      image: "/assets/images/departments/activities/ecacte.jpg",
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Electronics & Communication Engineering
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">Activities</h2>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Activity Description */}
        <div className="mb-12">
          <div className="bg-yellow-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
              Department Activities
            </h3>
            <p className="text-gray-700">
              The Department of Electronics & Communication Engineering at Sree Buddha College of Engineering conducts 
              various activities throughout the academic year to enhance the technical skills and practical 
              knowledge of students. These activities include international conferences, technical fests, workshops, 
              industrial visits, and competitions. Our focus on practical learning and industry exposure helps students 
              develop technical expertise and stay updated with the latest advancements in the field of electronics and communication.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 sticky top-0 bg-white pt-4 pb-4 z-10 shadow-sm rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Filter Activities:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                  activeFilter === category.id
                    ? 'bg-yellow-900 text-white'
                    : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
                }`}
              >
                <span role="img" aria-hidden="true">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map(activity => (
            <div 
              key={activity.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition-shadow duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Activity Image</span>
                </div>
                {/* In a production environment, replace the div above with an actual Image component */}
                {/* <Image 
                  src={activity.image} 
                  alt={activity.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                /> */}
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-900 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {activity.category}
                  </span>
                  <span className="text-sm text-gray-600">{activity.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{activity.description}</p>
                
                <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-sm text-gray-600">{activity.location}</span>
                  </div>
                  <Link 
                    href={`/activities/${activity.id}`} 
                    className="text-yellow-900 hover:text-yellow-800 font-medium text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-yellow-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-medium text-gray-700">No activities found</h3>
            <p className="text-gray-500 mt-1">Try changing your filter selection</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors"
            >
              Show All Activities
            </button>
          </div>
        )}

        {/* Student Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-900 pl-3">
            Student Achievements
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">IDEATHON Competition Winners</h4>
                <p className="text-gray-700">Congratulations to S. Adithya, Adithyan A., Bhavya A. S. and Aliya Hakkim, winners of college level IDEATHON competition conducted by KTU start-up cell.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">NUKE LABS</h4>
                <p className="text-gray-700">A start-up by the students of ECE & ER. The team has been developing innovative drone solutions and conducting workshops.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">DECKATHON 2025</h4>
                <p className="text-gray-700">Students of ECE & ER participated in DECKATHON 2025, showcasing their technical skills and innovative thinking.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Reverse Engineering Hackathon</h4>
                <p className="text-gray-700">Students from Department of ECE and ER participated in the Reverse Engineering Hackathon organized by IEEE, SBCE.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities Table */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-900 pl-3">
            Recent Activities
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-yellow-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Activity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Coordinator
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    FAREWELL 2025 (2021-25 BATCH ECE)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    April 30, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Main Auditorium
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ECE Department
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    BIS STANDARD CLUB Formation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    March 12, 2024
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ECE Department
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Department of ECE
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Talk on "NEP 2020"
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    October 8, 2024
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    BT Seminar Hall
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Prof. Hari S
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Career Guidance by GuidEd Overseas
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    February 26, 2024
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    BT Seminar Hall
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    GuidEd Overseas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Registration Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-yellow-800 to-yellow-900 rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Interested in our activities?
              </h3>
              <p className="text-yellow-100 mb-6">
                Register now to participate in our upcoming workshops, conferences, and other exciting events. 
                Don't miss the opportunity to enhance your skills and network with industry experts.
              </p>
              <div className="space-x-4">
                <button className="px-6 py-2 bg-white text-yellow-900 font-medium rounded-lg hover:bg-yellow-50 transition-colors">
                  Register Now
                </button>
                <button className="px-6 py-2 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-yellow-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/3 bg-yellow-800 flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-white font-bold text-4xl mb-2">40+</p>
                <p className="text-yellow-100">Activities per year</p>
                <div className="w-16 h-1 bg-white mx-auto my-4" aria-hidden="true" />
                <p className="text-white font-bold text-4xl mb-2">800+</p>
                <p className="text-yellow-100">Student participants</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}