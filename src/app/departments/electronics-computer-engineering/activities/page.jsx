"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ElectronicsComputerDepartmentActivities() {
  const [activeFilter, setActiveFilter] = useState('all');

  const activities = [
    {
      id: 1,
      title: "IDEATHON Winners Announcement",
      category: "competition",
      date: "March 2025",
      location: "Sree Buddha College of Engineering",
      image: "/assets/images/departments/activities/achivec.jpg",
      description: "Congratulations S. Adithya, Adithyan A., Bhavya A. S. and Aliya Hakkim winners of college level IDEATHON competition conducted by KTU start up cell.",
      coordinator: "KTU Startup Cell"
    },
    {
      id: 2,
      title: "NUKE LABS - A Student Start-up",
      category: "announcement",
      date: "March 2025",
      location: "ECE & ER Department",
      image: "/assets/images/departments/activities/ere.jpg",
      description: "NUKE LABS : A start-up by the students of ECE & ER .",
      coordinator: "ECE & ER Department"
    },
    {
      id: 3,
      title: "Farewell 2025 for ECE Batch",
      category: "event",
      date: "April 2025",
      location: "College Auditorium",
      image: "/assets/images/departments/activities/ers.jpg",
      description: "FAREWELL 2025 (2021-25 BATCH ECE)",
      coordinator: "ECE Department"
    },
    {
      id: 4,
      title: "National Science Day Celebrations",
      category: "event",
      date: "March 18, 2025",
      location: "ECE Department",
      image: "/assets/images/departments/activities/ss.jpg",
      description: "NATIONAL SCIENCE DAY CELEBRATIONS: Department of Electronics and Communication Engineering celebrates NATIONAL SCIENCE DAY on 18/3/2025. Dr. Pradeep C, Professor, Department of Electronics, Saintgits College of Engineering inaugurated the day followed by a talk on \"MILLION CHIPS, BILLION DREAMS\".",
      coordinator: "ECE Department"
    },
    {
      id: 5,
      title: "International Conference – ICST 2025",
      category: "conference",
      date: "March 24-25, 2025",
      location: "SBCE Pattoor",
      image: "/assets/images/departments/activities/icst.jpg",
      description: "INTERNATIONAL CONFERENCE – ICST 2025: Department of Computer Science, Electrical and Electronics and Electronics and Communication, Sree Buddha College of Engineering, Pattoor, Alappuzha, Kerala jointly organized an International Conference on Synergetic Technologies... The conference was organized in hybrid mode.",
      coordinator: "Dr. S. Suresh Babu"
    }
  ];
  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Activities', icon: '📋' },
    { id: 'workshop', name: 'Workshops', icon: '🔧' },
    { id: 'competition', name: 'Competitions', icon: '🏆' },
    { id: 'lecture', name: 'Guest Lectures', icon: '🎓' },
    { id: 'seminar', name: 'Seminars', icon: '💬' },
    { id: 'visit', name: 'Industry Visits', icon: '🚌' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Adjusted padding and font sizes for mobile */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <h1 className="text-2xl xxs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
              Department Of Electronics & Computer Engineering
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
              The Department of Electronics & Computer Engineering at Sree Buddha College of Engineering conducts 
              various activities throughout the academic year to enhance the technical skills and practical 
              knowledge of students.. These activities include workshops, technical competitions, guest lectures, industry visits, and seminars. These initiatives help students stay updated with the latest technologies and industry trends.
            </p>
          </div>
        </section>

        {/* Filter Section - Horizontally scrollable on mobile */}
        <section className="mb-6 sm:mb-8 md:mb-10 sticky top-0 bg-white z-10 pt-3 pb-3 sm:pt-4 sm:pb-4 rounded-lg shadow-sm">
          <h3 className="text-sm xxs:text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-4 px-1">Filter Activities:</h3>
          <div className="flex overflow-x-auto pb-2 hide-scrollbar space-x-2 px-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-2 xxs:px-3 sm:px-4 py-1.5 xxs:py-2 rounded-full flex items-center gap-1 xxs:gap-2 text-xs xxs:text-sm transition-colors whitespace-nowrap ${
                  activeFilter === category.id
                    ? 'bg-yellow-900 text-white'
                    : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
                }`}
              >
                <span role="img" aria-hidden="true" className="text-base">{category.icon}</span>
                <span className="hidden xxs:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Activities Grid - Responsive adjustments */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredActivities.map(activity => (
            <div 
              key={activity.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition-shadow flex flex-col"
            >
              <div className="relative h-40 xxs:h-44 sm:h-56">
                <Image 
                  src={activity.image} 
                  alt={activity.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                />
              </div>
              <div className="p-3 xxs:p-4 sm:p-5 flex-grow flex flex-col">
                <div className="flex flex-col xxs:flex-row xxs:justify-between xxs:items-start gap-1 xxs:gap-0 mb-2">
                  <span className="inline-block px-2 py-0.5 xxs:py-1 bg-yellow-100 text-yellow-900 text-xs font-semibold rounded-full uppercase">
                    {activity.category}
                  </span>
                  <span className="text-xs text-gray-600">{activity.date}</span>
                </div>
                <h3 className="text-sm xxs:text-base sm:text-lg font-bold text-gray-900 mb-1 xxs:mb-2 line-clamp-2">{activity.title}</h3>
                <p className="text-xs xxs:text-sm text-gray-700 mb-3 xxs:mb-4 line-clamp-3 flex-grow">{activity.description}</p>
                <div className="flex flex-col xxs:flex-row xxs:justify-between xxs:items-center mt-1 xxs:mt-0 border-t border-gray-100 pt-2 xxs:pt-3 gap-2 xxs:gap-0">
                  <div className="flex items-center text-xs xxs:text-sm text-gray-600">
                    <svg className="w-4 h-4 xxs:w-5 xxs:h-5 text-yellow-900 mr-1 xxs:mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate max-w-[140px] xxs:max-w-[110px] sm:max-w-[150px]">{activity.location}</span>
                  </div>
                  <Link href={`/activities/${activity.id}`} className="text-yellow-900 hover:text-yellow-800 font-medium text-xs xxs:text-sm">
                    View Details →
                  </Link>
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