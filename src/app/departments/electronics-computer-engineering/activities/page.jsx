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
      title: "ELECTRIFYING SUCCESS: CRAFTING A BRIGHT FUTURE FOR ELECTRICAL ENGINEERS",
      category: "lecture",
      date: "November 8, 2023",
      location: "Library Conference Hall",
      image: "/assets/images/departments/activities/lecture1.jpg",
      description: "As part of the association activity, Department of Electrical and Electronics Engineering, SBCE conducted a motivation and career guidance on ELECTRIFYING SUCCESS: CRAFTING A BRIGHT FUTURE FOR ELECTRICAL ENGINEERS. The session was handled by Mr. Sanju P Cheriyan, a Certified Trainer. The trainer was able to maintain the energy level of the audience all through the session through the activities arranged in between. It was indeed a brainstorming experience, which mainly included guidance and motivation for students to fulfill their goals.",
      coordinator: "Dr. Vinod V P"
    },
    {
      id: 2,
      title: "AWARENESS ON ELECTRICAL LICENSING AND SAFETY MEASURES",
      category: "workshop",
      date: "November 9, 2023",
      location: "Library Seminar Hall",
      image: "/assets/images/departments/activities/workshop1.jpg",
      description: "Workshop On 'AWARENESS ON ELECTRICAL LICENSING AND SAFETY MEASURES' was organized by Department of Electrical and Electronics Engineering, Sree Buddha College of Engineering, Pattoor at library seminar hall. Welcome address was delivered by Dr.Vinod V P, HOD EEE Dept. The session was handled by Ms. Deepa K C, Electrical inspector, Ms Anu Kuncheria, Deputy Electrical inspector and Mr.Sarath Mohan, Assistant Electrical Inspector Alappuzha. The speaker explained about different types of electrical licensing given to wireman, supervisor and contractor and their application procedures and requirements. They also discussed on safety measures to be followed while wiring. Vote of thanks was given by Mr.Aditya P Nair, Student Representative.",
      coordinator: "Dr. Vinod V P"
    },
    {
      id: 3,
      title: "Industrial Safety & Awareness",
      category: "seminar",
      date: "November 25, 2022",
      location: "EEE Seminar Hall",
      image: "/assets/images/departments/activities/seminar1.jpg",
      description: "A seminar on 'Industrial Safety & Awareness' was organized by the department association EEIS, for VII semester EEE students at EEE seminar hall. The session was handled by Arcite School of Technical Education, Kottayam. Analysis of Electrical layout of the college was conducted and various safety features were discussed.",
      coordinator: "EEIS Association"
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
    { id: 'visit', name: 'Industry Visits', icon: '🚌' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Electronics & Computer Engineering
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
              The Department of Electronics & Computer Engineering at Sree Buddha College of Engineering conducts 
              various activities throughout the academic year to enhance the technical skills and practical 
              knowledge of students. These activities include workshops, coding competitions, guest lectures,
              industry visits, and hackathons. These initiatives help students stay updated with the latest 
              technologies and industry trends.
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

        {/* Upcoming Activities Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-900 pl-3">
            Upcoming Activities
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
                {activities.slice(0, 4).map((activity) => (
                  <tr key={`upcoming-${activity.id}`} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {activity.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.coordinator}
                    </td>
                  </tr>
                ))}
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
                Register now to participate in our upcoming workshops, competitions, and other exciting events. 
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
                <p className="text-white font-bold text-4xl mb-2">50+</p>
                <p className="text-yellow-100">Activities per year</p>
                <div className="w-16 h-1 bg-white mx-auto my-4" aria-hidden="true" />
                <p className="text-white font-bold text-4xl mb-2">1000+</p>
                <p className="text-yellow-100">Student participants</p>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}