import React from 'react';
import './style.css';
import basket from "@/assets/images/facilities/basket.jpg";
import gym from "@/assets/images/facilities/gym.jpg";
import play from "@/assets/images/facilities/play.jpg";
import transport from "@/assets/images/facilities/transport.jpg";
import panelf from "@/assets/images/facilities/panelone.jpg";
import panelt from "@/assets/images/facilities/paneltwo.jpg";

export default function OtherFacilitiesPage() {
  const facilities = [
    {
      title: "Basketball Court",
      description: "A full-fledged basketball court available in the campus for students to practice and compete.",
      image: basket,
      iconName: "Basketball",
      details: [
        "Regulation-size court with proper markings",
        "Available for practice sessions and tournaments",
        "Well-maintained surface for safety and performance"
      ]
    },
    {
      title: "Gymnasium",
      description: "A state-of-the-art gym equipped with modern fitness equipment to help students maintain their physical health.",
      image: gym,
      iconName: "Dumbbell",
      details: [
        "Cardio and strength training equipment",
        "Supervised by qualified fitness trainers",
        "Open for students and faculty during designated hours"
      ]
    },
    {
      title: "Play Grounds",
      description: "Sufficient area is available in the campus for students to engage in various sports and recreational activities.",
      image: play,
      iconName: "Flag",
      details: [
        "Football and cricket grounds",
        "Indoor facilities for table tennis and badminton",
        "Regular sports events and competitions"
      ]
    },
    {
      title: "Stationery Store",
      description: "The college store provides all textbooks, notebooks, and equipment for laboratory work including graphics at reasonable rates.",
      image: null,
      iconName: "BookOpen",
      details: [
        "Textbooks and reference materials",
        "Laboratory equipment and supplies",
        "General stationery items for day-to-day needs"
      ]
    },
    {
      title: "Transport",
      description: "We provide daily transport facility for students' pick-up and drop-off with a large fleet of modern buses plying various routes.",
      image: transport,
      iconName: "Bus",
      details: [
        "Comfortable and safe buses",
        "Multiple routes covering major residential areas",
        "Punctual and reliable service"
      ]
    },
    {
      title: "Solar Power Plant (50 KW)",
      description: "College has established a 50 KW solar power plant on the rooftop of Homi J Bhabha Block as part of our commitment to renewable energy.",
      image: null,
      dualImages: [panelf, panelt],
      iconName: "Sun",
      details: [
        "Generates clean, renewable energy",
        "Reduces carbon footprint",
        "Contributes to sustainable campus initiatives"
      ]
    }
  ];

  // Function to render icon placeholder
  const renderIcon = (iconName) => {
    return (
      <div className="flex items-center justify-center w-6 h-6 text-yellow-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {iconName === "Basketball" && (
            <circle cx="12" cy="12" r="10" />
          )}
          {iconName === "Dumbbell" && (
            <path d="M6 5v14M18 5v14M4 9h16M4 15h16" />
          )}
          {iconName === "Flag" && (
            <path d="M4 22V4c6-2 10 1 10 7 0 6-4 9-10 7" />
          )}
          {iconName === "BookOpen" && (
            <>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </>
          )}
          {iconName === "Bus" && (
            <>
              <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
              <path d="M2 12h20" />
              <path d="M6 17v2" />
              <path d="M18 17v2" />
            </>
          )}
          {iconName === "Sun" && (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </>
          )}
        </svg>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-8xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section */}
        <div className="bg-gradient-to-r from-yellow-800 to-amber-600 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Campus Facilities</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Enhancing student experience with modern amenities and resources
          </p>
        </div>
        
        <div className="p-6 md:p-8">
          {/* Facilities Grid */}
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div key={index} className={`facility-item ${index % 2 === 1 ? 'bg-gray-50 p-6 rounded-lg' : ''}`}>
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start`}>
                  
                  {/* Text Content */}
                  <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <span className="mr-3 p-2 bg-amber-100 rounded-full">
                        {renderIcon(facility.iconName)}
                      </span>
                      {facility.title}
                    </h2>
                    
                    <p className="text-gray-700">
                      {facility.description}
                    </p>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <h3 className="font-medium text-gray-700 mb-2">Key Features</h3>
                      <ul className="space-y-2">
                        {facility.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="mr-2 text-yellow-800">•</span>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Image(s) */}
                  <div className="md:w-1/2">
                    {facility.image && (
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={facility.image.src} 
                          alt={facility.title} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                    
                    {facility.dualImages && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {facility.dualImages.map((img, imgIndex) => (
                          <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md">
                            <img 
                              src={img.src} 
                              alt={`${facility.title} ${imgIndex + 1}`} 
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 text-center bg-yellow-50 p-6 rounded-lg border-t-4 border-yellow-800">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Need More Information?</h3>
            <p className="text-gray-700">
              For more details about our campus facilities, please contact the Facilities Management Office at 
              <a href="mailto:facilities@college.edu" className="text-yellow-800 hover:underline ml-1">facilities@college.edu</a> 
              or visit the Administrative Block.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}