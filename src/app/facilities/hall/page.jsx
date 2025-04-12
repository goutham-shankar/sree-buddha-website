import React from 'react';
import './style.css';
import photo from '@/assets/images/facilities/seminar_hall.jpg';

export default function ConferenceHallPage() {
  // Features of the conference hall
  const hallFeatures = [
    {
      title: "Audio-Visual Systems",
      description: "High-quality sound system with wireless microphones and integrated controls for seamless presentations"
    },
    {
      title: "Projection Technology",
      description: "Modern projection screens with high-definition display capabilities for clear visual presentations"
    },
    {
      title: "Seating Arrangements",
      description: "Comfortable ergonomic seating designed for extended sessions with optimal visibility from all angles"
    },
    {
      title: "Climate Control",
      description: "Central air-conditioning system maintaining optimal temperature throughout events"
    },
    {
      title: "Acoustics",
      description: "Specially treated interiors to ensure excellent sound clarity and minimize echo"
    },
    {
      title: "Connectivity",
      description: "High-speed Wi-Fi and multiple connectivity options for presenters and attendees"
    }
  ];

  // Events hosted in the conference hall
  const hostedEvents = [
    "National and international conferences",
    "Faculty development programs",
    "Industry-academic interactions",
    "Guest lectures by eminent personalities",
    "Student presentations and competitions",
    "Cultural and technical events"
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-8xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header section with gradient background */}
        <div className="bg-gradient-to-r from-yellow-800 to-amber-600 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Conference Hall</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            State-of-the-art facilities for academic and professional events
          </p>
        </div>
        
        <div className="p-6 md:p-8">
          {/* Main content section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-10">
            <div className="lg:w-3/5">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  The Central Seminar Hall is a state-of-the-art facility designed to host conferences, seminars, workshops, guest lectures, 
                  and academic discussions. With a spacious layout and a seating capacity to accommodate a large audience, the hall is ideal for fostering intellectual
                  exchange and professional development.
                </p>
                
                <p>
                  Equipped with high-quality audio-visual systems, modern projection screens, and a well-designed stage setup, the hall ensures an immersive and engaging experience for both speakers and attendees. The acoustically treated interiors provide excellent sound clarity, making it an ideal venue for presentations, panel discussions, and interactive sessions.
                </p>
                
                <p>
                  The hall is centrally air-conditioned, well-lit, and furnished with comfortable seating arrangements, ensuring a conducive environment for learning and collaboration. It is frequently used for faculty development programs, student training sessions, and industry interactions, playing a pivotal role in enhancing academic and professional growth within the institution.
                </p>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={photo.src} 
                  alt="Conference Hall" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-700">
                <h3 className="font-semibold text-gray-800 mb-2">Booking Information</h3>
                <p className="text-gray-700 text-sm">
                  The conference hall can be reserved for academic and institutional events. 
                  For booking inquiries, please contact the Administrative Office at 
                  <a href="mailto:admin@college.edu" className="text-yellow-800 hover:underline ml-1">admin@college.edu</a>.
                </p>
              </div>
            </div>
          </div>
          
          {/* Features section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Hall Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hallFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Events section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Events Hosted
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostedEvents.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-200 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-yellow-800"></div>
                    </div>
                    <p className="text-gray-700">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Technical specifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Seating Capacity</span>
                <span className="text-gray-800 font-medium">200+ attendees</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Area</span>
                <span className="text-gray-800 font-medium">3,000 sq. ft.</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Audio System</span>
                <span className="text-gray-800 font-medium">Professional Surround Sound</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Video System</span>
                <span className="text-gray-800 font-medium">4K Projection Capability</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Lighting</span>
                <span className="text-gray-800 font-medium">Adjustable LED Lighting</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Connectivity</span>
                <span className="text-gray-800 font-medium">Wi-Fi, HDMI, USB, VGA</span>
              </div>
            </div>
          </div>
          
          {/* Contact section */}
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Need More Information?</h3>
            <p className="text-gray-700">
              For more details about our conference hall facilities or to schedule a visit, 
              please contact our facilities team at 
              <a href="tel:+1234567890" className="text-yellow-800 hover:underline mx-1">123-456-7890</a>
              or
              <a href="mailto:facilities@college.edu" className="text-yellow-800 hover:underline ml-1">facilities@college.edu</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}