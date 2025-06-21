"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MechanicalEngineeringDepartmentActivities() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Activity data - structured for easy maintenance
  const staticActivities = [
    {
      id: 1,
      title: "GRAND LAUNCH 2023 - IMPULSE MOTTORRAD GoKart",
      category: "competition",
      date: "March 3, 2023",
      location: "SBCE Campus",
      image: "/assets/images/departments/activities/gokart1.jpg",
      description: "A group of students from S6 mechanical built a new age GoKart. The team named IMPULSE MOTTORRAD launched their vehicle in the presence of College Chairman Professor K Sasikumar, Secretary Professor V Prasad, Principal Dr. K Krishnakumar, Vice Principal Dr. Saji Varghese and Head of the Department Professor Anil Kumar.",
      coordinator: "Dr. Senthil Saravanan"
    },
    {
      id: 2,
      title: "IKR 2023 Season 8.0 GoKart Competition",
      category: "competition",
      date: "July 15, 2023",
      location: "Buddh International Circuit,Noida",
      image: "/assets/images/departments/activities/gokart2.jpg",
      description: "Sree Buddha College of Engineering competed in the GoKart national championship conducted by ISIEINDIA (IKR 2023 Season 8.0) at Buddh International Circuit. A vehicle (GOKART) made by 30 students of Mechanical Engineering department was built for this competition. The vehicle can reach 0-100 kmph in 12 seconds.",
      coordinator: "Dr. Senthil Saravanan"
    },
    {
      id: 3,
      title: "Electric Vehicle Prototyping Lecture",
      category: "lecture",
      date: "March 30, 2023",
      location: "Mechanical Seminar Hall",
      image: "/assets/images/departments/activities/lecture1.jpg",
      description: "Department of Mechanical Engineering and SAEINDIA conducted a lecture on 'Electric Vehicle Prototyping'. Mr A Armstrong, Principal Member R&D TAFE Tractors and Farm Equipment Limited, Chennai gave the expert lecture. The official inauguration of 'Go-Kart Club' was also done by Mr. A Armstrong on the same day.",
      coordinator: "SAEINDIA Club"
    },
    {
      id: 4,
      title: "WEBINAR ON INNOVATION MINDSET AND ENTREPRENEURSHIP",
      category: "lecture",
      date: "September 15, 2021",
      location: "Online Platform",
      image: "/assets/images/departments/activities/webinar1.jpg",
      description: "The Department of Mechanical Engineering organized a webinar on Innovation Mindset and Entrepreneurship in association with KPIT SPARKLE. The expert speaker was Mr. Vishal Pillai from KPIT Technologies Limited, Pune. The introduction speech was given by Dr. Trijo Tharayil, Associate Professor, Department of Mechanical Engineering.",
      coordinator: "Dr. Trijo Tharayil"
    },
    {
      id: 5,
      title: "Technical Workshop on Cloud Computing",
      category: "workshop",
      date: "March 15, 2025",
      location: "Mechanical Lab",
      image: "/assets/images/departments/activities/workshop1.jpg",
      description: "A hands-on workshop on cloud computing technologies including AWS, Azure,and Google Cloud Platform. Students will learn to deploy and manage applications in the cloud.",
      coordinator: "Dr. Anita Sharma"
    },
    {
      id: 6,
      title: "Industry Visit to TCS Innovation Labs",
      category: "visit",
      date: "January 22, 2025",
      location: "TCS Campus, Infopark",
      image: "/assets/images/departments/activities/visit1.jpg",
      description: "An educational visit to TCS Innovation Labs to expose students to industry practices and emerging technologies in software development.",
      coordinator: "Dr. Manu Mohan"
    }
  ];

  // Use useEffect to set the static activities after component mounts
  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setActivities(staticActivities);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Category options with icons
  const categories = [
    { id: 'all', name: 'All Activities', icon: '📋' },
    { id: 'workshop', name: 'Workshops', icon: '🔧' },
    { id: 'competition', name: 'Competitions', icon: '🏆' },
    { id: 'lecture', name: 'Guest Lectures', icon: '🎓' },
    { id: 'visit', name: 'Industry Visits', icon: '🚌' }
  ];

  // Filter activities based on active category
  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
              Department Of Mechanical Engineering
            </h1>
            <div className="w-24 xxs:w-32 md:w-40 h-1 bg-yellow-900 mx-auto mb-3 sm:mb-4 md:mb-8" aria-hidden="true" />
            <h2 className="text-lg xxs:text-xl md:text-2xl lg:text-4xl font-bold text-center text-gray-800">Activities</h2>
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Activity Description - Adjusted text size for small devices */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 md:p-6 shadow-sm">
            <h3 className="text-lg xxs:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 border-l-4 border-yellow-900 pl-2 sm:pl-3">
              Department Activities
            </h3>
            <p className="text-xs xxs:text-sm md:text-base text-gray-700 text-justify">
              The Department of Mechanical Engineering at Sree Buddha College of Engineering conducts 
              various activities throughout the academic year to enhance the technical skills and practical 
              knowledge of students. These activities include Go-Kart design competitions, electric vehicle prototyping workshops, 
              innovation webinars, and industry visits. Our students have participated in national competitions and 
              created innovative engineering solutions through hands-on projects.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 sm:mb-8 md:mb-10 sticky top-0 bg-white pt-3 pb-3 sm:pt-4 sm:pb-4 z-10 shadow-sm rounded-lg">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-4 px-1 sm:px-0">Filter Activities:</h3>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm md:text-base ${
                  activeFilter === category.id
                    ? 'bg-yellow-900 text-white'
                    : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
                }`}
              >
                <span role="img" aria-hidden="true">{category.icon}</span>
                <span className="hidden xs:inline">{category.name}</span>
                <span className="xs:hidden">
                  {category.id === 'all' ? 'All' :
                    category.id === 'workshop' ? 'Workshops' :
                    category.id === 'competition' ? 'Comps' :
                    category.id === 'lecture' ? 'Lectures' :
                    'Visits'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-900 border-t-transparent"></div>
            <p className="mt-4 text-gray-700">Loading activities...</p>
          </div>
        )}

        {/* Activities Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredActivities.map(activity => (
              <div 
                key={activity.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition-shadow duration-300"
              >
                <div className="relative h-40 sm:h-48">
                  {/* Add fallback UI in case image fails to load */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Activity Image</span>
                  </div>
                  <Image 
                    src={activity.image} 
                    alt={activity.title} 
                    fill 
                    className="object-cover z-10" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      // Keep the fallback div visible by making the failed image transparent
                      e.currentTarget.style.opacity = "0";
                    }} 
                  />
                </div>
                
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-900 text-xs font-semibold rounded-full uppercase tracking-wide">
                      {activity.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">{activity.date}</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{activity.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-4 line-clamp-8 text-justify">{activity.description}</p>
                  
                  <div className="flex items-center justify-between mt-2 sm:mt-4 border-t border-gray-100 pt-2 sm:pt-3">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-900 mr-1 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[120px] sm:max-w-full">{activity.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* No Activities Found */}
        {!loading && !error && filteredActivities.length === 0 && (
          <div className="text-center py-6 xxs:py-8 md:py-12">
            <svg className="w-10 h-10 xxs:w-12 xxs:h-12 md:w-16 md:h-16 text-yellow-300 mx-auto mb-2 xxs:mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-base xxs:text-lg md:text-xl font-medium text-gray-700">No activities found</h3>
            <p className="text-xs xxs:text-sm md:text-base text-gray-500 mt-1">Try changing your filter selection</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-2 xxs:mt-3 md:mt-4 px-3 xxs:px-4 py-1.5 xxs:py-2 bg-yellow-900 text-white text-xs xxs:text-sm rounded-md hover:bg-yellow-800 transition-colors"
            >
              Show All Activities
            </button>
          </div>
        )}

        {/* Recent Activities Section - Optimized for small screens */}
        {!loading && !error && activities.length > 0 && (
          <div className="mt-8 xxs:mt-10 md:mt-16">
            <h3 className="text-lg xxs:text-xl md:text-2xl font-bold text-gray-900 mb-3 xxs:mb-4 md:mb-6 border-l-4 border-yellow-900 pl-2 xxs:pl-3">
              Recent Activities
            </h3>
            
            {/* Table for tablets and larger screens */}
            <div className="hidden sm:block bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th scope="col" className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Activity
                      </th>
                      <th scope="col" className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Location
                      </th>
                      <th scope="col" className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Coordinator
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activities.slice(0, 4).map((activity) => (
                      <tr key={`recent-${activity.id}`} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs md:text-sm font-medium text-gray-900">
                          {activity.title}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs md:text-sm text-gray-500">
                          {activity.date}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs md:text-sm text-gray-500">
                          {activity.location}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs md:text-sm text-gray-500">
                          {activity.coordinator}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Card view for mobile screens - Even more compact for very small screens */}
            <div className="sm:hidden space-y-2 xxs:space-y-3">
              {activities.slice(0, 4).map((activity) => (
                <div key={`mobile-${activity.id}`} className="bg-white rounded-lg shadow p-2 xxs:p-3">
                  <div className="font-medium text-gray-900 text-xs xxs:text-sm mb-1 line-clamp-2">{activity.title}</div>
                  <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 text-xs text-gray-500">
                    <div><span className="font-medium">Date:</span> {activity.date}</div>
                    <div><span className="font-medium">Location:</span> {activity.location}</div>
                    <div className="col-span-2"><span className="font-medium">Coordinator:</span> {activity.coordinator}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}