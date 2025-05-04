"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ComputerScienceDepartmentActivities() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Activity data - structured for easy maintenance
  const activities = [
    {
      id: 1,
      title: "Expert Lecture: Exploring the Opportunities in Agri-Food Business",
      category: "lecture",
      date: "October 14, 2024",
      location: "Library Seminar Hall",
      image: "/assets/images/departments/activities/ft1.jpg",
      description: "Dr. Abdullah S., Assistant Manager at RAFTAAR Agri Business Incubator, Kerala Agricultural University led the session titled \"Exploring the Opportunities in Agri-Food Business: Career Pathways for Food Technologists.\" He discussed India's food processing sector, highlighting the country's infrastructure and career opportunities for food technologists.",
      coordinator: "Ms. Laya Liz Kuriakose"
    },
    {
      id: 2,
      title: "Product Launch Event by Student Entrepreneurs",
      category: "competition",
      date: "October 14, 2024",
      location: "SBCE Conference Hall",
      image: "",
      description: "The Product Launch event, organized by the Department of Food Technology in collaboration with the Department of Biotechnology and Biochemical Engineering at Sree Buddha College of Engineering, was a significant milestone for the student entrepreneurs from Semester VII. The three student entrepreneurs, Mr. Amay Karthik S., Mr. Aaron B. Thomas, and Mr. A. Mohammad Aslam, presented their innovative product.",
      coordinator: "Prof. Meera Bai S."
    },
    {
      id: 3,
      title: "Entrepreneur-Student Interaction with Mrs. Rajasree R.",
      category: "lecture",
      date: "February 14, 2024",
      location: "Library Seminar Hall",
      image: "/assets/images/departments/activities/food_technology_activity_1.jpg",
      description: "A successful entrepreneur in the food sector, Mrs. Rajasree R., founder of Fruit & Root, Nooranadu, was invited to have an interaction session with B.Tech biotechnology & biochemical engineering and food technology students. She has won many entrepreneur awards and markets many value-added products from jackfruit.",
      coordinator: "Ms. Chinchu Elezebeth"
    },
   
  ];

  // Filter activities based on active category
  const filteredActivities = activeFilter === 'all'
    ? activities
    : activities.filter(activity => activity.category === activeFilter);

  // Category options with icons
  const categories = [
    { id: 'all', name: 'All Activities', icon: '📋' },
    { id: 'workshop', name: 'Workshops', icon: '🔧' },
    { id: 'lecture', name: 'Guest Lectures', icon: '🎓' },
    { id: 'competition', name: 'Competitions', icon: '🏆' },
    { id: 'visit', name: 'Industry Visits', icon: '🚌' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-3 sm:mb-4 leading-tight">
              Department Of Food Technology
            </h1>
            <div className="w-24 sm:w-32 md:w-40 h-1 bg-yellow-900 mx-auto mb-4 sm:mb-6 md:mb-8" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 leading-tight">Activities</h2>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Activity Description */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 border-l-4 border-yellow-900 pl-2 sm:pl-3 leading-tight">
              Department Activities
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The Department of Food Technology at Sree Buddha College of Engineering conducts
              various activities throughout the academic year to enhance the technical skills and practical
              knowledge of students. These activities include expert lectures, product development,
              entrepreneur interactions, and hands-on workshops. These initiatives help students
              stay updated with the latest technologies and industry trends in the food processing sector.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
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
                      category.id === 'lecture' ? 'Lectures' :
                        category.id === 'competition' ? 'Comps' :
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
                  priority={activity.id === 1}
                />
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-900 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {activity.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600">{activity.date}</span>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight line-clamp-2">{activity.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">{activity.description}</p>

                <div className="flex items-center justify-between mt-2 sm:mt-4 border-t border-gray-100 pt-2 sm:pt-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900 mr-1 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-600 truncate">{activity.location}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <svg className="w-12 sm:w-16 h-12 sm:h-16 text-yellow-300 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700">No activities found</h3>
            <p className="text-sm sm:text-base text-gray-500 mt-1">Try changing your filter selection</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-yellow-900 text-white text-sm sm:text-base rounded-md hover:bg-yellow-800 transition-colors"
            >
              Show All Activities
            </button>
          </div>
        )}

        {/* Featured Activity */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 border-l-4 border-yellow-900 pl-3 leading-tight">
            Featured Activity
          </h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="text-xs sm:text-sm text-yellow-900 font-semibold mb-1 sm:mb-2">October 14, 2024</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">REPORT ON EXPERT LECTURE: Exploring Opportunities in Agri-Food Business</h2>
                <div className="prose prose-yellow prose-sm max-w-none text-xs sm:text-sm text-gray-600">
                  <p className="mb-2 sm:mb-3 leading-relaxed">Dr. Abdullah S., Assistant Manager at RAFTAAR Agri Business Incubator, Kerala Agricultural University led the session titled &quot;Exploring the Opportunities in Agri-Food Business: Career Pathways for Food Technologists.&quot; He began with a discussion on India&apos;s food processing sector, highlighting the country&apos;s vast infrastructure, including the second-largest road network and the fourth-largest railway network globally.</p>
                  <p className="mb-2 sm:mb-3 leading-relaxed">Dr. Abdullah pointed out that by 2030, approximately 42% of India&apos;s population will be urbanized, increasing demand for processed food. He also emphasized Kerala&apos;s potential in the food processing industry, discussing the state&apos;s agricultural diversity and its role in the sector.</p>
                  <p className="hidden sm:block leading-relaxed">Dr. Abdullah elaborated on the scope for food technologists, outlining career opportunities in food manufacturing, research laboratories, certification organizations, and packaging companies. He also highlighted career prospects within government organizations like the Food Corporation of India (FCI), Food Safety and Standards Authority of India (FSSAI), Bureau of Indian Standards (BIS), and state and central food safety laboratories.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                <Image
                  src="/assets/images/departments/activities/ft1.jpg"
                  alt="Expert Lecture on Agri-Food Business"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Activities - Responsive Table */}
        <div className="mt-10 sm:mt-12 md:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 border-l-4 border-yellow-900 pl-3 leading-tight">
            Recent Activities
          </h3>

          {/* Desktop Table (Hidden on Small Screens) */}
          <div className="hidden sm:block bg-white rounded-lg shadow-md overflow-hidden overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-yellow-50">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Activity
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Coordinator
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={`desktop-${activity.id}`} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">
                      {activity.title}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                      {activity.date}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">
                      {activity.location}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">
                      {activity.coordinator}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards (Shown Only on Small Screens) */}
          <div className="sm:hidden space-y-4">
            {activities.map((activity) => (
              <div key={`mobile-${activity.id}`} className="bg-white rounded-lg shadow p-4 border border-gray-100">
                <h4 className="font-semibold text-sm text-gray-900 mb-2 leading-tight">{activity.title}</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-900 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-gray-600">{activity.date}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-900 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600">{activity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-900 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span className="text-gray-600">{activity.coordinator}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       </main></div>
  );
}