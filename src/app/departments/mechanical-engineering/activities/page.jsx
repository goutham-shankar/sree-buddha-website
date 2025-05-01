"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MechanicalEngineeringDepartmentActivities() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Activity data - structured for easy maintenance
  const activities = [
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
      location: "Buddh International Circuit, Noida",
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
      description: "A hands-on workshop on cloud computing technologies including AWS, Azure, and Google Cloud Platform. Students will learn to deploy and manage applications in the cloud.",
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
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Mechanical Engineering
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">Activities</h2>
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Activity Description */}
        <div className="mb-12">
          <div className="bg-yellow-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
              Department Activities
            </h3>
            <p className="text-gray-700">
              The Department of Mechanical Engineering at Sree Buddha College of Engineering conducts 
              various activities throughout the academic year to enhance the technical skills and practical 
              knowledge of students. These activities include Go-Kart design competitions, electric vehicle prototyping workshops, 
              innovation webinars, and industry visits. Our students have participated in national competitions and 
              created innovative engineering solutions through hands-on projects.
            </p>
          </div>
        </div>

        {/* Featured Project - GoKart */}
        <div className="mb-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">GoKart Project Image</span>
                  </div>
                  {/* <Image
                    src="/assets/images/departments/activities/gokart_hero.jpg"
                    alt="IMPULSE MOTTORRAD GoKart Team"
                    layout="fill"
                    objectFit="cover"
                    priority
                  /> */}
                </div>
              </div>
              <div className="p-6 w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm font-medium mb-4">
                  Featured Project
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">IMPULSE MOTTORRAD GoKart Team</h3>
                <p className="text-gray-700">
                  A team of 30 students from the Mechanical Engineering department built a high-performance GoKart 
                  for the national championship IKR 2023 Season 8.0 at Buddh International Circuit, Noida. The chassis was 
                  constructed with low carbon steel and the base was covered with aluminium sheet for reducing the weight. 
                  This vehicle can reach 0-100 kmph in just 12 seconds.
                </p>
                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Team Leaders:</span> Jubin George Varghese, Laiju T Saji, Gautam S Kumar
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Faculty Advisor:</span> Dr. Senthil Saravanan
                  </p>
                </div>
              </div>
            </div>
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
                <span className="hidden xs:inline">{category.name}</span>
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
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Activity Image</span>
                </div>
                {/* <Image 
                  src={activity.image} 
                  alt={activity.title} 
                  layout="fill"
                  objectFit="cover"
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
                    <svg className="w-5 h-5 text-yellow-900 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-sm text-gray-600 truncate">{activity.location}</span>
                  </div>
                  <Link 
                    href={`/activities/${activity.id}`} 
                    className="text-yellow-900 hover:text-yellow-800 font-medium text-sm whitespace-nowrap ml-2"
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

        {/* Recent Activities Section - Made responsive for mobile */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-900 pl-3">
            Recent Activities
          </h3>
          
          {/* Table for larger screens */}
          <div className="hidden sm:block bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
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
                      GRAND LAUNCH 2023 - IMPULSE MOTTORRAD GoKart
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      March 3, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      SBCE Campus
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Dr. Senthil Saravanan
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Electric Vehicle Prototyping Lecture
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      March 30, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Mechanical Seminar Hall
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      SAEINDIA Club
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Go-Kart Club Inauguration
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      March 30, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Mechanical Seminar Hall
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Mr. A Armstrong
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      IKR 2023 Season 8.0 GoKart Competition
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      July 15, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Buddh International Circuit, Noida
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Dr. Senthil Saravanan
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Card view for mobile screens */}
          <div className="sm:hidden space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="font-medium text-gray-900 mb-1">GRAND LAUNCH 2023 - IMPULSE MOTTORRAD GoKart</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Date:</span> March 3, 2023</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Location:</span> SBCE Campus</div>
              <div className="text-sm text-gray-500"><span className="font-medium">Coordinator:</span> Dr. Senthil Saravanan</div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <div className="font-medium text-gray-900 mb-1">Electric Vehicle Prototyping Lecture</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Date:</span> March 30, 2023</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Location:</span> Mechanical Seminar Hall</div>
              <div className="text-sm text-gray-500"><span className="font-medium">Coordinator:</span> SAEINDIA Club</div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <div className="font-medium text-gray-900 mb-1">Go-Kart Club Inauguration</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Date:</span> March 30, 2023</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Location:</span> Mechanical Seminar Hall</div>
              <div className="text-sm text-gray-500"><span className="font-medium">Coordinator:</span> Mr. A Armstrong</div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4">
              <div className="font-medium text-gray-900 mb-1">IKR 2023 Season 8.0 GoKart Competition</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Date:</span> July 15, 2023</div>
              <div className="text-sm text-gray-500 mb-1"><span className="font-medium">Location:</span> Buddh International Circuit, Noida</div>
              <div className="text-sm text-gray-500"><span className="font-medium">Coordinator:</span> Dr. Senthil Saravanan</div>
            </div>
          </div>
        </div>

        {/* Registration Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-yellow-800 to-yellow-900 rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-6 md:p-12">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-4">
                Interested in our activities?
              </h3>
              <p className="text-yellow-100 mb-6">
                Register now to participate in our upcoming workshops, competitions, and innovative engineering projects. 
                Join our Go-Kart Club and other exciting technical teams to enhance your skills and apply your mechanical engineering knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
                <button className="w-full sm:w-auto px-6 py-2 bg-white text-yellow-900 font-medium rounded-lg hover:bg-yellow-50 transition-colors text-center">
                  Register Now
                </button>
                <button className="w-full sm:w-auto px-6 py-2 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-yellow-800 transition-colors text-center">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-yellow-800 flex items-center justify-center p-8">
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