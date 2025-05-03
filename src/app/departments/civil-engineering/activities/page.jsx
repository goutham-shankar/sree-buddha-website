"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CivilDepartmentActivities() {
  const [activeFilter, setActiveFilter] = useState('all');

  const activities = [
    {
      id: 1,
      title: "AICTE sponsored 6 days ATAL FDP 2025",
      category: "workshop",
      date: "January 6-11, 2025",
      location: "Sree Buddha College of Engineering",
      image: "/assets/images/departments/activities/fdp.jpg",
      description: "AICTE sponsored 6 days ATAL FDP 2025 on the topic 'Artificial Intelligence Applications in Civil Engineering Enhancing Efficiency, Sustainability and Safety' under the auspices of Department of Civil Engineering from 6th January to 11th January 2025",
      coordinator: "Department of Civil Engineering"
    },
    {
      id: 2,
      title: "JALASUDHI MISSION",
      category: "event",
      date: "November 24, 2023",
      location: "Pattoor panchayat ward 4",
      image: "/assets/images/departments/activities/jalasudhi.jpg",
      description: "A Questionnaire survey and water quality testing was conducted by the final year students of Department of Civil Engineering in Pattoor panchayat ward 4 on 24/11/23 as part of the Jala shudhi mission in association with the ASCE Students Chapter",
      coordinator: "ASCE Students Chapter"
    },
    {
      id: 3,
      title: "SEMINAR ON SCOPE OF ENGINEERING GRADUATES IN THE TECHNO-MANAGEMENT SECTOR",
      category: "seminar",
      date: "February 16, 2023",
      location: "SDPK Hall",
      image: "/assets/images/departments/activities/seminar.jpg",
      description: "A seminar session was organized by Department of Civil Engineering in association with ASCE on the topic 'Scope of Engineering Graduates in the Techno-Management Sector'. Dr. R Sathish Kumar, Professor and Dean, School of Construction and Technology, NICMAR, Hyderabad and Mr. Vishnu Namboodiri. V, Assistant Professor, NICMAR were the speakers.",
      coordinator: "Department of Civil Engineering"
    },
    {
      id: 4,
      title: "WORKSHOP ON MIX DESIGN",
      category: "workshop",
      date: "February 14, 2023",
      location: "SDPK Hall",
      image: "/assets/images/departments/activities/workshop.jpg",
      description: "Department Civil Engineering in association with ASCE organized a one-day workshop on Mix Design. Dr. Ramaswamy K P, Assistant Professor in Civil department, TKM College of Engineering, Kollam was the guest speaker. The workshop focused on designing the mix of normal and self-compacting concrete using the latest IS codes.",
      coordinator: "Dr. Ramaswamy K P"
    },
    {
      id: 5,
      title: "FDP Resource Persons Sessions",
      category: "lecture",
      date: "January 6-11, 2025",
      location: "Sree Buddha College of Engineering",
      image: "/assets/images/departments/activities/resource.jpg",
      description: "Resource persons who led the sessions during ATAL FDP included Dr. Lelitha Devi Vanajakshi (IIT Madras), Dr. Arun Kumar R (NIT Calicut), Dr. Rajeev Rajan (GEC Idukki), Dr. Leon Raj (CSIR-NEIST), Dr. T Sunder Rajan (VSSC), Dr. Shailesh S (CUSAT), Dr. Adarsh S (TKM College), Dr. Althaf M (TKM College), Dr. Senthil Saravanan (SBCE), and Ms. Ritzy R (SBCE)",
      coordinator: "Department of Civil Engineering"
    }
  ];
  
  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeFilter);

    const categories = [
      { id: 'all', name: 'All Activities', icon: '📋' },
      { id: 'workshop', name: 'Workshops', icon: '🔧' },
      { id: 'event', name: 'Events', icon: '🎉' },
      { id: 'outreach', name: 'Outreach Programs', icon: '🤝' },
      { id: 'visit', name: 'Industry Visits', icon: '🚌' },
      { id: 'seminar', name: 'Seminars', icon: '💬' }
    ];
  
    return (
      <div className="min-h-screen bg-white">
        <header className="relative bg-gradient-to-b from-yellow-50 to-white">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Department Of Civil Engineering
            </h1>
            <div className="w-24 xxs:w-32 sm:w-40 h-1 bg-yellow-900 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl xxs:text-xl sm:text-2xl md:text-4xl font-bold text-center text-gray-800">Activities</h2>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        {/* Department Description - Adjusted padding and text size */}
        <section className="mb-6 sm:mb-8 md:mb-12">
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-xl xxs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 border-l-4 border-yellow-900 pl-2 sm:pl-3">
              Department Activities
            </h3>
            <p className="text-xs xxs:text-sm sm:text-base text-gray-700">
              The Department of Civil Engineering at Sree Buddha College of Engineering conducts 
              various activities throughout the academic year to enhance the technical skills and practical 
              knowledge of students. These activities include workshops, technical competitions, guest lectures, industry visits, and seminars. These initiatives help students stay updated with the latest technologies and industry trends in civil engineering.
            </p>
          </div>
        </section>

        <section className="mb-10 sticky top-0 bg-white z-10 pt-4 pb-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Filter Activities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base transition-colors ${
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
                </section>
        
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredActivities.map(activity => (
                    <div 
                      key={activity.id} 
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition-shadow"
                    >
                      <div className="relative h-48 sm:h-56">
                        <Image 
                          src={activity.image} 
                          alt={activity.title} 
                          fill 
                          className="object-cover" 
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-900 text-xs font-semibold rounded-full uppercase">
                            {activity.category}
                          </span>
                          <span className="text-sm text-gray-600">{activity.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{activity.title}</h3>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{activity.description}</p>
                        <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-5 h-5 text-yellow-900 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {activity.location}
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </section>

        {filteredActivities.length === 0 && (
          <div className="text-center py-6 xxs:py-8 sm:py-12">
            <svg className="w-10 h-10 xxs:w-12 xxs:h-12 sm:w-16 sm:h-16 text-yellow-300 mx-auto mb-2 xxs:mb-3 sm:mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-base xxs:text-lg sm:text-xl font-medium text-gray-700">No activities found</h3>
            <p className="text-xs xxs:text-sm text-gray-500 mt-1">Try changing your filter selection</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-2 xxs:mt-3 sm:mt-4 px-3 xxs:px-4 py-1.5 xxs:py-2 bg-yellow-900 text-white text-xs xxs:text-sm rounded-md hover:bg-yellow-800"
            >
              Show All Activities
            </button>
          </div>
        )}

        {/* Recent Activities Table - Responsive for mobile devices */}
        <section className="mt-8 xxs:mt-10 sm:mt-16">
          <h3 className="text-xl xxs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 xxs:mb-4 sm:mb-6 border-l-4 border-yellow-900 pl-2 xxs:pl-3">
            Recent Activities
          </h3>
          
          {/* Table for tablets and larger screens */}
          <div className="hidden sm:block overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full text-sm">
              <thead className="bg-yellow-50 text-gray-700">
                <tr>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-medium uppercase text-xs">Activity</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-medium uppercase text-xs">Date</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-medium uppercase text-xs">Location</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-medium uppercase text-xs">Coordinator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activities.slice(0, 4).map((activity) => (
                  <tr key={`upcoming-${activity.id}`} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-4 py-3 sm:py-4 font-medium text-gray-900 text-xs sm:text-sm">{activity.title}</td>
                    <td className="px-3 sm:px-4 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm">{activity.date}</td>
                    <td className="px-3 sm:px-4 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm">{activity.location}</td>
                    <td className="px-3 sm:px-4 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm">{activity.coordinator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Card view for mobile screens */}
          <div className="sm:hidden space-y-2 xxs:space-y-3">
            {activities.slice(0, 4).map((activity) => (
              <div key={`mobile-${activity.id}`} className="bg-white rounded-lg shadow p-2 xxs:p-3">
                <div className="font-medium text-gray-900 text-xs xxs:text-sm mb-1 line-clamp-2">{activity.title}</div>
                <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 text-xs text-gray-600">
                  <div><span className="font-medium">Date:</span> {activity.date}</div>
                  <div><span className="font-medium">Location:</span> {activity.location.length > 20 ? activity.location.substring(0, 20) + '...' : activity.location}</div>
                  <div className="col-span-2"><span className="font-medium">Coordinator:</span> {activity.coordinator}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}