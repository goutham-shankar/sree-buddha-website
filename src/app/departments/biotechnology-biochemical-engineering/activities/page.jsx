"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ElectronicsComputerDepartmentActivities() {
  const [activeFilter, setActiveFilter] = useState('all');

  const activities = [
    {
      id: 1,
      title: "Medicinal Plant Garden Initiative",
      category: "event",
      date: "February 21, 2025",
      location: "Sree Buddha College of Engineering, Pattoor",
      image: "/assets/images/departments/activities/biota1.jpg",
      description: "Medicinal plant garden; an initiative by department of biotechnology and Biochemical Engineering and NSS unit sree buddha college of engineering autonomous, pattoor. Inauguration done by Dr. Priya devadath, executive member, kerala medicinal plant board on 21/02/2025",
      coordinator: "Department of Biotechnology & Biochemical Engineering and NSS Unit"
    },
    {
      id: 2,
      title: "SAFE WATER, STRONG COMMUNITIES: A SCIENTIFIC APPROACH",
      category: "outreach",
      date: "March 2025",
      location: "Sree Buddha College of Engineering, Pattoor",
      image: "/assets/images/departments/activities/biota2.jpg",
      description: "Outreach programme conducted on SAFE WATER, STRONG COMMUNITIES: A SCIENTIFIC APPROACH. Extension activity performed by women's club and department of biotechnology & Biochemical Engineering benefits the rural neighbourhood in analysis drinking water quality through pollution control board approved C-grade Laboratory at Sree Buddha College of Engineering, Pattor (Autonomous)",
      coordinator: "Women's Club and Department of Biotechnology & Biochemical Engineering"
    },
    {
      id: 3,
      title: "Industrial Visit to Zeta Biosystem",
      category: "visit",
      date: "April 2025",
      location: "Zeta Biosystem",
      image: "/assets/images/departments/activities/biota3.jpg",
      description: "Semester 6 Biotechnology & Biochemical Engineering students visited Zeta Biosystem for an insightful industry experience!",
      coordinator: "Department of Biotechnology & Biochemical Engineering"
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
              Department Of Biotechnology and Biochemical Engineering
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-gray-800">Activities</h2>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-12">
          <div className="bg-yellow-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
              Department Activities
            </h3>
            <p className="text-gray-700">
            The Department Of Biotechnology and Biochemical Engineering at Sree Buddha College of Engineering conducts various activities throughout the academic year to enhance the technical skills and practical knowledge of students. These activities include workshops, industrial visits, outreach programs, and initiatives focused on sustainable development. These initiatives help students stay updated with the latest technologies and industry trends while contributing to community welfare.
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
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-yellow-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700">No activities found</h3>
            <p className="text-gray-500 mt-1">Try changing your filter selection</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800"
            >
              Show All Activities
            </button>
          </div>
        )}

        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-900 pl-3">
            Recent Activities
          </h3>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full text-sm">
              <thead className="bg-yellow-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-medium uppercase">Activity</th>
                  <th className="px-4 py-3 text-left font-medium uppercase">Date</th>
                  <th className="px-4 py-3 text-left font-medium uppercase">Location</th>
                  <th className="px-4 py-3 text-left font-medium uppercase">Coordinator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={`upcoming-${activity.id}`} className="hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium text-gray-900 whitespace-normal">{activity.title}</td>
                    <td className="px-4 py-4 text-gray-600">{activity.date}</td>
                    <td className="px-4 py-4 text-gray-600">{activity.location}</td>
                    <td className="px-4 py-4 text-gray-600">{activity.coordinator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}