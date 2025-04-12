"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Calendar, Users, Award, MapPin, Clock, Download } from 'lucide-react';

export default function NSS() {
  // NSS activities data
  const activities = [
    {
      icon: <Users className="w-10 h-10 text-yellow-800" />,
      title: "Community Service",
      description: "Regular community service activities including cleaning drives, awareness campaigns, and assistance to underprivileged communities in surrounding areas."
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-800" />,
      title: "Special Camps",
      description: "Annual week-long special camps in adopted villages focusing on health awareness, environmental protection, and infrastructure development projects."
    },
    {
      icon: <Calendar className="w-10 h-10 text-yellow-800" />,
      title: "Blood Donation Drives",
      description: "Bi-annual blood donation camps organized in collaboration with local hospitals and health centers to address critical blood supply needs."
    },
    {
      icon: <FileText className="w-10 h-10 text-yellow-800" />,
      title: "Disaster Management",
      description: "Training programs and rapid response initiatives for disaster management, including flood relief work and emergency assistance operations."
    }
  ];

  // Upcoming NSS Events
  const upcomingEvents = [
    {
      date: "April 12, 2025",
      title: "Tree Plantation Drive",
      location: "College Campus & Surrounding Areas",
      time: "9:00 AM - 1:00 PM"
    },
    {
      date: "April 25, 2025",
      title: "Blood Donation Camp",
      location: "Central Auditorium",
      time: "10:00 AM - 4:00 PM"
    },
    {
      date: "May 5, 2025",
      title: "Road Safety Awareness Campaign",
      location: "NSS Boys Higher Secondary School, Pandalam",
      time: "2:00 PM - 5:00 PM"
    }
  ];

  // Committee Members
  const committeeMembers = [
    {
      position: "Program Officer",
      name: "Dr. Rohit Menon",
      department: "Civil Engineering"
    },
    {
      position: "Student Coordinator",
      name: "Anjali Thomas",
      department: "Computer Science, Final Year"
    },
    {
      position: "Secretary",
      name: "Arjun Pillai",
      department: "Electrical Engineering, Third Year"
    },
    {
      position: "Treasurer",
      name: "Divya Krishnan",
      department: "Electronics & Communication, Third Year"
    },
    {
      position: "Volunteer Lead",
      name: "Mohammed Faisal",
      department: "Mechanical Engineering, Second Year"
    }
  ];
  
  // Annual Reports
  const annualReports = [
    {
      year: "2021-22",
      path: "/assets/documents/cells-chapters/NSS-Report-1.pdf",
      activities: "32 activities",
      volunteers: "95 active volunteers",
      hours: "2,800+ service hours"
    },
    {
      year: "2020-21",
      path: "/assets/documents/cells-chapters/NSS-Report-2.pdf",
      activities: "28 activities",
      volunteers: "86 active volunteers", 
      hours: "2,200+ service hours"
    },
    {
      year: "2019-20",
      path: "/assets/documents/cells-chapters/NSS-Report-3.pdf",
      activities: "35 activities",
      volunteers: "102 active volunteers",
      hours: "3,100+ service hours"
    }
  ];

  // Function to handle PDF viewing
  const handlePdfClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mx-auto px-4 md:px-8 py-8 max-w-7xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section with title */}
        <div className="bg-gradient-to-r from-yellow-700 to-amber-500 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">National Service Scheme (NSS)</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Not Me But You - Transforming lives through community service
          </p>
        </div>
        
        <div className="p-6 md:p-10">
          {/* Main description */}
          <div className="mb-8 text-gray-700 text-lg leading-relaxed">
            <p>
              The National Service Scheme (NSS) unit at Sree Buddha College of Engineering, Pattoor is dedicated to 
              developing student personality through community service. Our volunteers actively engage in various 
              social service initiatives, environmental conservation projects, health awareness campaigns, and disaster 
              management efforts, fostering a sense of social responsibility and civic consciousness.
            </p>
          </div>
          
          {/* Activities grid */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Activities & Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{activity.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits of Participating */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of NSS Participation</h2>
            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-yellow-800">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-yellow-800 mr-2 mt-1" />
                  <span>10 grace marks for regular NSS volunteers as per university regulations</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-green-800 mr-2 mt-1" />
                  <span>Development of leadership skills and team management abilities</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-green-800 mr-2 mt-1" />
                  <span>Opportunities to participate in state and national-level NSS camps</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-green-800 mr-2 mt-1" />
                  <span>Priority in campus placements with recognition of social service experience</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-green-800 mr-2 mt-1" />
                  <span>Enhanced personality development and communication skills through community interaction</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Annual Reports */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Annual Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {annualReports.map((report, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  onClick={() => handlePdfClick(report.path)}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">NSS Report {report.year}</h3>
                      <div className="h-1 w-12 bg-yellow-800 my-2"></div>
                    </div>
                    <div className="flex-grow">
                      <ul className="text-gray-600 space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <div className="h-2 w-2 rounded-full bg-yellow-800 mr-2"></div>
                          {report.activities}
                        </li>
                        <li className="flex items-center text-sm">
                          <div className="h-2 w-2 rounded-full bg-green-800 mr-2"></div>
                          {report.volunteers}
                        </li>
                        <li className="flex items-center text-sm">
                          <div className="h-2 w-2 rounded-full bg-green-800 mr-2"></div>
                          {report.hours}
                        </li>
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <button className="flex items-center text-green-800 hover:text-yellow-900 font-medium">
                        <Download className="w-4 h-4 mr-1" />
                        Download Report
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Executive Committee */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">NSS Unit Team</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Position</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {committeeMembers.map((member, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-sm text-gray-700">{member.position}</td>
                      <td className="py-3 px-6 text-sm font-medium text-gray-900">{member.name}</td>
                      <td className="py-3 px-6 text-sm text-gray-700">{member.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-sm transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Link 
                      href="#"
                      className="mt-4 md:mt-0 bg-yellow-800 hover:bg-yellow-900 text-white font-medium py-2 px-4 rounded flex items-center justify-center transition-colors duration-300 text-sm"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Photo Gallery */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden h-48 relative group">
                <img src="/assets/images/cells-chapters/nss-1.png" alt="Road Safety Campaign" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Road Safety Awareness Campaign</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-48 relative group">
                <img src="/api/placeholder/600/400" alt="Tree Plantation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Campus Cleaning Drive</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-48 relative group">
                <img src="/api/placeholder/600/400" alt="Blood Donation Camp" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Blood Donation Camp</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Join section */}
          <div className="text-center bg-amber-50 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Join NSS Unit</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Become a part of our NSS family and contribute to meaningful community service while developing leadership skills 
              and gaining valuable experience that will enhance both your academic journey and future career prospects.
            </p>
            <Link 
              href="/nss-registration"
              className="bg-yellow-800 hover:bg-yellow-900 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Register as NSS Volunteer
            </Link>
          </div>
          
          {/* Contact section */}
          <div className="mt-10 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Contact NSS Unit</h3>
            <p className="text-gray-600">
              Email: <a href="mailto:nss@sbcepattoor.ac.in" className="text-yellow-800 hover:underline">nss@sbcepattoor.ac.in</a> | 
              Phone: <a href="tel:+914682222288" className="text-yellow-800 hover:underline">(0468) 2222288</a> |
              Room: Administrative Block, Room 105
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://facebook.com/sbcepattoornss" className="text-yellow-800 hover:text-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://twitter.com/sbcepattoornss" className="text-yellow-800 hover:text-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://instagram.com/sbcepattoornss" className="text-yellow-800 hover:text-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}