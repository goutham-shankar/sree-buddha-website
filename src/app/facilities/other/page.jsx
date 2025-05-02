"use client";
import React, { useState } from 'react';
import './style.css';
import basket from "@/assets/images/facilities/basket.jpg";
import gym from "@/assets/images/facilities/gym.jpg";
import play from "@/assets/images/facilities/play.jpg";
import transport from "@/assets/images/facilities/transport.jpg";
import panelf from "@/assets/images/facilities/panelone.jpg";
import panelt from "@/assets/images/facilities/paneltwo.jpg";

// We need to make sure the icons are properly imported
// Let's use SVG components directly instead of relying on the Lucide React package

export default function OtherFacilitiesPage() {
  const [expandedFacility, setExpandedFacility] = useState(null);
  
  const toggleFacility = (index) => {
    if (expandedFacility === index) {
      setExpandedFacility(null);
    } else {
      setExpandedFacility(index);
    }
  };

  // Custom icon components
  const Icon = {
    Basketball: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M4.93 4.93 19.07 19.07"></path>
        <path d="M4.93 19.07 19.07 4.93"></path>
      </svg>
    ),
    Dumbbell: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 5v14M18 5v14M4 9h16M4 15h16"></path>
      </svg>
    ),
    Flag: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22V4c6-2 10 1 10 7 0 6-4 9-10 7"></path>
      </svg>
    ),
    BookOpen: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    Bus: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
        <path d="M2 12h20"></path>
        <path d="M6 17v2"></path>
        <path d="M18 17v2"></path>
      </svg>
    ),
    Sun: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    ),
    ChevronDown: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    ),
    ChevronRight: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    ),
    ArrowRight: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    ),
    Mail: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
    Phone: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    MapPin: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    Info: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    )
  };

  const facilities = [
    {
      title: "Basketball Court",
      description: "A full-fledged basketball court available in the campus for students to practice and compete.",
      image: basket,
      icon: <Icon.Basketball />,
      details: [
        "Regulation-size court with proper markings",
        "Available for practice sessions and tournaments",
        "Well-maintained surface for safety and performance"
      ],
      additionalInfo: "The basketball court is open from 6:00 AM to 8:00 PM daily. Students can reserve court time through the sports department."
    },
    {
      title: "Gymnasium",
      description: "A state-of-the-art gym equipped with modern fitness equipment to help students maintain their physical health.",
      image: gym,
      icon: <Icon.Dumbbell />,
      details: [
        "Cardio and strength training equipment",
        "Supervised by qualified fitness trainers",
        "Open for students and faculty during designated hours"
      ],
      additionalInfo: "The gymnasium is open on weekdays from 6:00 AM to 9:00 PM and weekends from 7:00 AM to 7:00 PM. First-time users must attend a safety orientation session."
    },
    {
      title: "Play Grounds",
      description: "Sufficient area is available in the campus for students to engage in various sports and recreational activities.",
      image: play,
      icon: <Icon.Flag />,
      details: [
        "Football and cricket grounds",
        "Indoor facilities for table tennis and badminton",
        "Regular sports events and competitions"
      ],
      additionalInfo: "Sports equipment can be borrowed from the sports department with a valid student ID. Regular tournaments are organized each semester."
    },
    {
      title: "Stationery Store",
      description: "The college store provides all textbooks, notebooks, and equipment for laboratory work including graphics at reasonable rates.",
      image: null,
      icon: <Icon.BookOpen />,
      details: [
        "Textbooks and reference materials",
        "Laboratory equipment and supplies",
        "General stationery items for day-to-day needs"
      ],
      additionalInfo: "The stationery store is located near the administrative block and is open on all working days from 9:00 AM to 5:00 PM."
    },
    {
      title: "Transport",
      description: "We provide daily transport facility for students' pick-up and drop-off with a large fleet of modern buses plying various routes.",
      image: transport,
      icon: <Icon.Bus />,
      details: [
        "Comfortable and safe buses",
        "Multiple routes covering major residential areas",
        "Punctual and reliable service"
      ],
      additionalInfo: "Bus routes and schedules are available on the college website. Students can register for transport services at the beginning of each semester."
    },
    {
      title: "Solar Power Plant (50 KW)",
      description: "College has established a 50 KW solar power plant on the rooftop of Homi J Bhabha Block as part of our commitment to renewable energy.",
      image: null,
      dualImages: [panelf, panelt],
      icon: <Icon.Sun />,
      details: [
        "Generates clean, renewable energy",
        "Reduces carbon footprint",
        "Contributes to sustainable campus initiatives"
      ],
      additionalInfo: "The solar power plant generates approximately 70,000 units of electricity annually, offsetting around 20% of the campus energy requirements."
    }
  ];

  // Current date from the error message
  const currentDate = "2025-04-25 14:46:08";
  const currentUser = "goutham-shankar";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-yellow-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Campus Facilities</h1>
          <div className="h-1 w-24 bg-amber-400 mb-6"></div>
          <p className="text-lg text-amber-100 max-w-3xl">
            Enhancing student experience with modern amenities and resources designed to support 
            academic excellence, physical well-being, and overall campus life
          </p>
        </div>
      </div>
      
      {/* Facilities Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex overflow-x-auto py-4 scrollbar-hidden">
            <div className="flex space-x-4">
              {facilities.map((facility, index) => (
                <button 
                  key={index} 
                  onClick={() => {
                    setExpandedFacility(index);
                    document.getElementById(`facility-${index}`).scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${expandedFacility === index 
                      ? 'bg-yellow-900 text-white' 
                      : 'bg-amber-50 text-yellow-900 hover:bg-amber-100'}`}
                >
                  {facility.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="space-y-12">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              id={`facility-${index}`}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300"
            >
              {/* Header */}
              <div 
                className={`p-6 cursor-pointer flex justify-between items-center
                  ${expandedFacility === index ? 'bg-yellow-900 text-white' : 'bg-white hover:bg-amber-50'}`}
                onClick={() => toggleFacility(index)}
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 
                    ${expandedFacility === index ? 'bg-yellow-800 text-amber-200' : 'bg-amber-100 text-yellow-900'}`}>
                    {facility.icon}
                  </div>
                  <h2 className={`text-xl font-bold ${expandedFacility === index ? 'text-white' : 'text-yellow-900'}`}>
                    {facility.title}
                  </h2>
                </div>
                <div className={`transform transition-transform duration-300 ${expandedFacility === index ? 'rotate-180' : ''}`}>
                  <Icon.ChevronDown />
                </div>
              </div>
              
              {/* Content */}
              {expandedFacility === index && (
                <div className="p-6 bg-white border-t border-gray-100">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {facility.description}
                      </p>
                      
                      <div className="bg-amber-50 rounded-lg p-5 border border-amber-100">
                        <h3 className="font-medium text-yellow-900 mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {facility.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <span className="mr-3 text-yellow-700 flex-shrink-0 mt-0.5">
                                <Icon.ArrowRight />
                              </span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                        <h3 className="font-medium text-blue-800 mb-3 flex items-center">
                          <span className="mr-2">
                            <Icon.Info />
                          </span>
                          Additional Information
                        </h3>
                        <p className="text-gray-700">
                          {facility.additionalInfo}
                        </p>
                      </div>
                      
                      <div className="flex justify-end">
                        <button className="inline-flex items-center text-yellow-900 hover:text-yellow-700 font-medium">
                          Request more information
                          <span className="ml-2">
                            <Icon.ChevronRight />
                          </span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                      {facility.image && (
                        <div className="rounded-xl overflow-hidden shadow-md border-4 border-white">
                          <img 
                            src={facility.image.src} 
                            alt={facility.title} 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                      
                      {facility.dualImages && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {facility.dualImages.map((img, imgIndex) => (
                            <div key={imgIndex} className="rounded-xl overflow-hidden shadow-md border-4 border-white">
                              <img 
                                src={img.src} 
                                alt={`${facility.title} ${imgIndex + 1}`} 
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {!facility.image && !facility.dualImages && (
                        <div className="bg-gray-100 rounded-xl flex items-center justify-center h-80 border border-gray-200">
                          <div className="text-center p-6">
                            <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm">
                              {facility.icon}
                            </div>
                            <p className="text-gray-500">Image coming soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        </div>
      
      
    </div>
  );
}