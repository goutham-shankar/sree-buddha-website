import React from 'react';
import './style.css';
import photoBoys from '@/assets/images/facilities/boys.png';
import photoGirls from '@/assets/images/facilities/girls.png';
import { Home, Utensils, Book, Coffee, Wifi, Shield } from 'lucide-react';

export default function HostelFacilities() {
  const hostelAmenities = [
    { icon: <Utensils className="w-6 h-6 text-yellow-700" />, title: "Dining Facilities", description: "Spacious mess halls serving nutritious and balanced meals" },
    { icon: <Book className="w-6 h-6 text-yellow-700" />, title: "Study Areas", description: "Dedicated quiet spaces for academic pursuits" },
    { icon: <Wifi className="w-6 h-6 text-yellow-700" />, title: "Internet Access", description: "High-speed WiFi connectivity throughout the hostel premises" },
    { icon: <Coffee className="w-6 h-6 text-yellow-700" />, title: "Recreation Rooms", description: "Common areas for relaxation and socializing" },
    { icon: <Shield className="w-6 h-6 text-yellow-700" />, title: "24/7 Security", description: "Round-the-clock security personnel and surveillance" },
    { icon: <Home className="w-6 h-6 text-yellow-700" />, title: "Accommodation", description: "Comfortable rooms that can house 300 students each" }
  ];

  return (
    <div className="container mx-auto px-2 py-8 max-w-8xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-800 to-amber-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Hostel Facilities</h1>
          <div className="h-1 w-20 bg-white opacity-80 my-4"></div>
          <p className="text-white text-lg opacity-90">
            Comfortable and secure accommodation for boys and girls
          </p>
        </div>

        {/* Main content */}
        <div className="p-6 md:p-8">
          {/* Introduction */}
          <div className="mb-10 text-gray-700 text-lg leading-relaxed">
            <p>
              Our college provides separate hostel facilities for boys and girls with all necessary amenities. 
              Both hostels feature spacious rooms and mess halls, with dedicated areas for studying. 
              The men&apos;s and women&apos;s hostels can each accommodate up to 300 students, creating a vibrant 
              residential community on campus.
            </p>
          </div>

          {/* Hostel comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Boys Hostel */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={photoBoys.src} 
                  alt="Boys Hostel Building" 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-yellow-800 text-white px-4 py-2 rounded-br-lg">
                  Boys Hostel
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Men&apos;s Residence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-600 mr-2"></div>
                    <span>Capacity for 300 male students</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-600 mr-2"></div>
                    <span>Located near the academic block</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-600 mr-2"></div>
                    <span>24-hour security and supervision</span>
                  </li>
                </ul>
                {/* <button className="mt-4 bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 rounded-md transition-colors">
                  View More Details
                </button> */}
              </div>
            </div>

            {/* Girls Hostel */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={photoGirls.src} 
                  alt="Girls Hostel Building" 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-amber-600 text-white px-4 py-2 rounded-br-lg">
                  Girls Hostel
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Women&apos;s Residence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600 mr-2"></div>
                    <span>Capacity for 300 female students</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600 mr-2"></div>
                    <span>Enhanced security measures</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600 mr-2"></div>
                    <span>Female wardens available 24/7</span>
                  </li>
                </ul>
                {/* <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors">
                  View More Details
                </button> */}
              </div>
            </div>
          </div>

          {/* Amenities section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Hostel Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostelAmenities.map((amenity, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="mr-4 bg-amber-50 p-3 rounded-full">
                    {amenity.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{amenity.title}</h3>
                    <p className="text-gray-600 text-sm">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hostel life section */}
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-yellow-700">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hostel Life</h2>
            <p className="text-gray-700 mb-4">
              Living in our hostels provides students with a comprehensive residential experience that complements their academic journey. 
              Residents enjoy a balance of privacy, community engagement, and structured environment that fosters both personal growth and academic excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Rules & Regulations</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Mandatory attendance during evening hours</li>
                  <li>Designated study hours for academic focus</li>
                  <li>Scheduled meal timings in dining halls</li>
                  <li>Visitors allowed only in common areas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Administration</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Resident wardens for each hostel</li>
                  <li>Student representatives for each floor</li>
                  <li>Dedicated maintenance and cleaning staff</li>
                  <li>24/7 security personnel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Boys Hostel Contact</h3>
              <p className="text-gray-600">
                Chief Warden: Dr. K. Krishnakumar, Principal<br />
                Asst Warden: Mr.R.Sadasivan<br />
                Phone: +919446742781<br />
                
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Girls Hostel Contact</h3>
              <p className="text-gray-600">
                Matron: Ms.Sheeja<br />
                Phone: 9526695470<br />
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}