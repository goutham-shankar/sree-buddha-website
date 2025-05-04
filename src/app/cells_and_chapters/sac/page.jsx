"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Trophy, Users, Award, Activity, Book, Image } from 'lucide-react';
import { SacTab1 } from '@/components/cells-chapters/sac/SacTab1';
import { SacTab2 } from '@/components/cells-chapters/sac/SacTab2';
import { SacTab3 } from '@/components/cells-chapters/sac/SacTab3';

export default function SAC() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // SAC Focus Areas
  const focusAreas = [
    {
      icon: <Activity className="w-10 h-10 text-yellow-800" />,
      title: "Arts & Cultural Events",
      description: "Coordinating cultural festivals, art competitions, and performances to showcase student talent and creativity across departments."
    },
    {
      icon: <Trophy className="w-10 h-10 text-yellow-800" />,
      title: "Sports Activities",
      description: "Managing inter-college and intra-college sports tournaments, training programs, and maintaining campus sports facilities."
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-800" />,
      title: "Student Clubs",
      description: "Overseeing the operations of various technical and non-technical student clubs, providing resources and guidance for club activities."
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-800" />,
      title: "Campus Celebrations",
      description: "Organizing college festivals, fresher's welcome, farewell ceremonies, and other milestone events in the academic calendar."
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      src: "/assets/images/cells-chapters/sac-img2.png",
      alt: "Astral 2018",
      title: "Astral 2018"
    },
    {
      src: "/assets/images/cells-chapters/sac-img3.png",
      alt: "Students Achievements in Sports 2018-19",
      title: "Sports Achievements 2018-19"
    },
    {
      src: "/assets/images/cells-chapters/sac-img4.png",
      alt: "Sports Facilities",
      title: "Campus Sports Facilities"
    },
    {
      src: "/assets/images/cells-chapters/sac-img5.png",
      alt: "NSS Activities",
      title: "NSS Activities"
    }
  ];

  return (
    <div className="mx-auto px-4 md:px-8 py-8 max-w-7xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section with title */}
        <div className="bg-gradient-to-r from-yellow-700 to-amber-500 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Student Affairs Council (SAC)</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Empowering Student Activities and Campus Life
          </p>
        </div>
        
        <div className="p-6 md:p-10">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'current' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('current')}
            >
              Current Committee
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'previous' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('previous')}
            >
              Previous Committees
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'gallery' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('gallery')}
            >
              Activities & Gallery
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'sports' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('sports')}
            >
              Sports
            </button>
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div className="mb-8 text-gray-700 text-lg leading-relaxed">
                <p>
                  The Student Affairs Council (SAC) is entrusted with the smooth conduct of student-centered 
                  extracurricular activities like Arts, Sports, and activities related to various clubs existing 
                  in the campus. The student committee collaborates with the SAC staff committee for the organization 
                  of events with advance planning and proper coordination.
                </p>
                <p className="mt-4">
                  The SAC committee reviews event proposals and issues sanctions after suitable amendments if required, 
                  in consultation with appropriate authorities, ensuring that all campus activities align with the 
                  college&apos;s values and educational mission.
                </p>
              </div>
              
              {/* Focus Areas grid */}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Areas of Responsibility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {focusAreas.map((area, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{area.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Process for Event Organization */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Organization Process</h2>
                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-yellow-800">
                  <ol className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center bg-yellow-800 text-white rounded-full w-6 h-6 mr-3 mt-0.5 text-sm font-medium">1</span>
                      <span>Student organizers submit a written proposal to the SAC committee detailing the event plan, requirements, and budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center bg-yellow-800 text-white rounded-full w-6 h-6 mr-3 mt-0.5 text-sm font-medium">2</span>
                      <span>SAC committee reviews the proposal and schedules a discussion meeting with the organizers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center bg-yellow-800 text-white rounded-full w-6 h-6 mr-3 mt-0.5 text-sm font-medium">3</span>
                      <span>Feasibility assessment and necessary amendments are made in consultation with the appropriate authorities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center bg-yellow-800 text-white rounded-full w-6 h-6 mr-3 mt-0.5 text-sm font-medium">4</span>
                      <span>Formal approval is issued with specific guidelines and resource allocations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center bg-yellow-800 text-white rounded-full w-6 h-6 mr-3 mt-0.5 text-sm font-medium">5</span>
                      <span>Post-event report submission and feedback collection for future improvements</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}
          
          {/* Current Committee Tab */}
          {activeTab === 'current' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Office Bearers for 2023-24</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Affairs Council (SAC) 2023-24</h3>
                    <p className="text-gray-600 mb-4">
                      The current SAC committee is composed of elected student representatives and nominated 
                      faculty members who collaborate to enhance campus life through various extracurricular activities.
                    </p>
                    <p className="text-gray-600">
                      The committee meets regularly to discuss and plan upcoming events, address student concerns, 
                      and ensure the smooth functioning of all student clubs and organizations.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="/assets/images/cells-chapters/sac-office.png" 
                      alt="SAC Office Bearers 2023-24" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* You may add a table or list of current office bearers here */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2">Current Committee Members</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 mr-3">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Dr. Kavitha R</p>
                        <p className="text-sm text-gray-500">Staff Coordinator</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 mr-3">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Ajay Krishnan</p>
                        <p className="text-sm text-gray-500">Student Chairperson</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 mr-3">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Sreelakshmi S</p>
                        <p className="text-sm text-gray-500">Vice Chairperson</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 hover:bg-gray-50 rounded-md">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 mr-3">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Akhil Mohan</p>
                        <p className="text-sm text-gray-500">General Secretary</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Previous Committees Tab */}
          {activeTab === 'previous' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Previous SAC Committees</h2>
              
              {/* 2022-23 Committee */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">2022-23 Committee</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <SacTab1 />
                  <div className="mt-6">
                    <img 
                      src="/assets/images/cells-chapters/sac-img1.png" 
                      alt="SAC Committee 2022-23" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* 2018-19 Staff Committee */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">2018-19 Staff Committee</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <SacTab2 />
                </div>
              </div>
              
              {/* 2018-19 Student Committee */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">2018-19 Student Committee</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <SacTab3 />
                </div>
              </div>
            </div>
          )}
          
          {/* Activities & Gallery Tab */}
          {activeTab === 'gallery' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Events & Activities</h2>
              
              {/* Astral 2018 */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Astral 2018</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Astral is the annual cultural festival that showcases the talents and creativity of our students
                    across various art forms including music, dance, theatre, and fine arts.
                  </p>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/assets/images/cells-chapters/sac-img2.png" 
                      alt="Astral 2018" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Photo Gallery */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Activities Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {galleryImages.map((image, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="relative overflow-hidden rounded-lg h-64">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium text-center px-4">{image.title}</span>
                      </div>
                    </div>
                    <h4 className="mt-3 text-center font-medium text-gray-800">{image.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Sports Tab */}
          {activeTab === 'sports' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sports Facilities & Achievements</h2>
              
              {/* Sports Facilities */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Campus Sports Facilities</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700">
                      Sufficient area is available in the campus for the students to engage in games and sports activities. 
                      Football & cricket ground, along with indoor facilities for table tennis and badminton provide 
                      students with ample opportunities to pursue their sporting interests and maintain physical fitness.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2"></span>
                        Football and Cricket Ground
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2"></span>
                        Indoor Badminton Court
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2"></span>
                        Table Tennis Facility
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2"></span>
                        Volleyball Court
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2"></span>
                        Athletics Track
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="/assets/images/cells-chapters/sac-img4.png" 
                      alt="Sports Facilities" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              {/* Sports Achievements */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Student Achievements in Sports 2018-19</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4">
                    <p className="text-gray-700 mb-4">
                      Our students have excelled in various sports competitions at university, state, and national levels.
                      These achievements highlight the college&apos;s commitment to promoting sports alongside academic excellence.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/assets/images/cells-chapters/sac-img3.png" 
                      alt="Sports Achievements 2018-19" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* NSS Section */}
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">National Service Scheme (NSS)</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-3">
                      National Service Scheme (NSS) was launched in 1969, Mahatma Gandhi&apos;s birth centenary year. The NSS aims 
                      at inculcating volunteerism, qualities of citizenship and dedication to community service with the motto, 
                      &quot;Not me but you&quot;.
                    </p>
                    <p className="text-gray-700 mb-3">
                      The zest and determination shown by NSS volunteers in the rural areas is unparalleled. NSS events and activities include:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2 mt-2"></span>
                        <span>Inauguration of the Bhoomitrasena was conducted in the college on 12th of July 2010</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2 mt-2"></span>
                        <span>Legal literacy class on &quot;Anti Ragging&quot; in collaboration with Mavelikara Taluk Legal Services Authority</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-yellow-800 rounded-full mr-2 mt-2"></span>
                        <span>NSS day observance on 24th September with various community service activities</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="/assets/images/cells-chapters/sac-img5.png" 
                      alt="NSS Activities" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Contact section */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Contact Student Affairs Council</h3>
            <p className="text-gray-600">
              Email: <a href="mailto:sac@sbcepattoor.ac.in" className="text-yellow-800 hover:underline">sac@sbcepattoor.ac.in</a> | 
              Office: Administrative Block, First Floor | 
              Phone: <a href="tel:+914682222288" className="text-yellow-800 hover:underline">(0468) 2222288</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}