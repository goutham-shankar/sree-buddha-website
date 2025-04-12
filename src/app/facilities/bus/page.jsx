"use client";
import React, { useState } from "react";
import './style.css';
import { MapPin, Bus, Clock, X, ChevronDown } from 'lucide-react';

export default function ConveyanceAndBusRoutes() {
  // State to track which route is currently open
  const [activeRoute, setActiveRoute] = useState(null);
  
  // Bus routes data
  const busRoutes = [
    {
      id: 1,
      name: "Adoor Via Noornad",
      stops: [
        { no: 1, stop: "Adoor KSRTC", time: "07:55" },
        { no: 2, stop: "Yamuna Adoor", time: "08:00" },
        { no: 3, stop: "HS Junction Adoor", time: "08:05" },
        { no: 4, stop: "Thrichennamangalam Jn", time: "08:07" },
        { no: 5, stop: "14th stone", time: "08:09" },
        { no: 6, stop: "Thengumthara", time: "08:10" },
        { no: 7, stop: "Pazhakulam", time: "08:13" },
        { no: 8, stop: "Adickattukulangara", time: "08:15" },
        { no: 9, stop: "Mamood", time: "08:17" },
        { no: 10, stop: "10th stone", time: "08:25" },
        { no: 11, stop: "Noornad", time: "08:25" },
        { no: 12, stop: "College", time: "08:45" }
      ]
    },
    {
      id: 2,
      name: "Adoor via Pandalam",
      stops: [
        { no: 1, stop: "Adoor", time: "07:55" },
        { no: 2, stop: "Paranthal", time: "08:00" },
        { no: 3, stop: "Kurambala", time: "08:05" },
        { no: 4, stop: "Puthankavu", time: "08:05" },
        { no: 5, stop: "Medical mission", time: "08:10" },
        { no: 6, stop: "Pandalam", time: "08:15" },
        { no: 7, stop: "Muttar", time: "08:20" },
        { no: 8, stop: "Kunnikuzhy", time: "08:23" },
        { no: 9, stop: "Arathimukku", time: "08:25" },
        { no: 10, stop: "Mudiyoor konam", time: "08:30" },
        { no: 11, stop: "College", time: "08:45" }
      ]
    },
    {
      id: 3,
      name: "Bharanikavu",
      stops: [
        { no: 1, stop: "Sasathamcotta", time: "07:55" },
        { no: 2, stop: "Bharanikavu", time: "08:00" },
        { no: 3, stop: "Chakkuvally", time: "08:05" },
        { no: 4, stop: "Vayyankkara", time: "08:15" },
        { no: 5, stop: "Thamarakulam", time: "08:20" },
        { no: 6, stop: "Nediyanickal", time: "08:22" },
        { no: 7, stop: "Karunankulangara", time: "08:25" },
        { no: 8, stop: "Soornad H.S.Jn", time: "08:30" },
        { no: 9, stop: "Charumood", time: "08:30" },
        { no: 10, stop: "Muthukatukara", time: "08:30" },
        { no: 11, stop: "Parayankulam", time: "08:32" },
        { no: 12, stop: "College", time: "08:45" }
      ]
    },
    {
      id: 4,
      name: "Changankulangara",
      stops: [
        { no: 1, stop: "Changankulangara Block", time: "07:40" },
        { no: 2, stop: "Parabramha Hospital", time: "07:45" },
        { no: 3, stop: "Oachira", time: "07:50" },
        { no: 4, stop: "Mukkada", time: "07:55" },
        { no: 5, stop: "Meentheruvu", time: "08:00" },
        { no: 6, stop: "2nd mile stone", time: "08:05" },
        { no: 7, stop: "Para Padanilam", time: "08:30" },
        { no: 8, stop: "College", time: "08:45" }
      ]
    },
    {
      id: 5,
      name: "Chengannur",
      stops: [
        { no: 1, stop: "Chengannur", time: "07:50" },
        { no: 2, stop: "Vellavur Jn", time: "07:55" },
        { no: 3, stop: "Madathumpadi", time: "08:00" },
        { no: 4, stop: "Puliyoor", time: "08:05" },
        { no: 5, stop: "Puliyoor Ambalam", time: "08:07" },
        { no: 6, stop: "Kulickan Palam", time: "08:10" },
        { no: 7, stop: "Paramel padi", time: "08:12" },
        { no: 8, stop: "Cheriyanad", time: "08:15" },
        { no: 9, stop: "Kollakadavu", time: "08:18" },
        { no: 10, stop: "Cheruvalloor", time: "08:22" },
        { no: 11, stop: "Varamburu", time: "08:25" },
        { no: 12, stop: "Venmony", time: "08:30" },
        { no: 13, stop: "College", time: "08:45" }
      ]
    },
    {
      id: 6,
      name: "Chettikulangara",
      stops: [
        { no: 1, stop: "Chettikulangara", time: "07:55" },
        { no: 2, stop: "Panachamood", time: "08:02" },
        { no: 3, stop: "Thattarambalam", time: "08:05" },
        { no: 4, stop: "Kandiyoor", time: "08:08" },
        { no: 5, stop: "Pookada", time: "08:10" },
        { no: 6, stop: "Mavellikkara Private Bus stand", time: "08:15" },
        { no: 7, stop: "College", time: "08:45" }
      ]
    },
    {
      id: 7,
      name: "Elavumthitta",
      stops: [
        { no: 1, stop: "Mutthukonam", time: "07:45" },
        { no: 2, stop: "Elavumthitta", time: "07:50" },
        { no: 3, stop: "Ramanchira", time: "07:55" },
        { no: 4, stop: "Ambalakaduvu", time: "08:00" },
        { no: 5, stop: "Muttam", time: "08:00" },
        { no: 6, stop: "Thumpamon", time: "08:05" },
        { no: 7, stop: "Pandalam", time: "08:15" },
        { no: 8, stop: "Muttar", time: "08:20" },
        { no: 9, stop: "Chittumala", time: "08:20" },
        { no: 10, stop: "Chakalavattam", time: "08:20" },
        { no: 11, stop: "Edappon Kurusu", time: "08:25" },
        { no: 12, stop: "College", time: "08:45" }
      ]
    },
    {
      id: 8,
      name: "Haripad",
      stops: [
        { no: 1, stop: "Mannarasala", time: "07:30" },
        { no: 2, stop: "Harippad Town Hall", time: "07:40" },
        { no: 3, stop: "Harippad Bus stop", time: "07:40" },
        { no: 4, stop: "Railway", time: "07:45" },
        { no: 5, stop: "Muttom kulam", time: "07:55" },
        { no: 6, stop: "College", time: "08:45" }
      ]
    }
  ];

  // Toggle function for route display
  const toggleRoute = (routeId) => {
    setActiveRoute(activeRoute === routeId ? null : routeId);
  };

  return (
    <div className=" mx-auto px-4 py-8 max-w-7xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header section */}
        <div className="bg-gradient-to-r from-yellow-800 to-amber-600 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Conveyance & Bus Routes</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Reliable transportation for all students
          </p>
        </div>
        
        <div className="p-6 md:p-8">
          {/* Introduction */}
          <div className="mb-8 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-3/4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our college provides a reliable and well-organized bus service for day scholars. 
                Buses are available for all major locations, offering convenience and flexibility 
                based on students' needs. Whether you're traveling from nearby or distant areas, 
                our bus service ensures timely arrivals and departures.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center bg-amber-50 px-4 py-2 rounded-lg">
                  <Bus className="h-5 w-5 text-yellow-800 mr-2" />
                  <span className="text-gray-700">8 Different Routes</span>
                </div>
                
                <div className="flex items-center bg-amber-50 px-4 py-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-yellow-800 mr-2" />
                  <span className="text-gray-700">Multiple Pickup Points</span>
                </div>
                
                <div className="flex items-center bg-amber-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-800 mr-2" />
                  <span className="text-gray-700">Timely Service</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-800">
                <h3 className="font-semibold text-gray-800 mb-2">Bus Information</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-800 mr-2">•</span>
                    Morning pickup from designated stops
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-800 mr-2">•</span>
                    Evening drop after classes
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-800 mr-2">•</span>
                    Bus fees can be paid at the accounts office
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Route Accordion */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Bus className="mr-2 text-yellow-800 h-6 w-6" />
              Bus Routes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {busRoutes.map((route) => (
                <div key={route.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className={`w-full flex items-center justify-between p-4 text-left font-medium ${activeRoute === route.id ? 'bg-yellow-800 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => toggleRoute(route.id)}
                  >
                    <div className="flex items-center">
                      <MapPin className={`h-5 w-5 mr-2 ${activeRoute === route.id ? 'text-white' : 'text-yellow-800'}`} />
                      <span>{route.name}</span>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform ${activeRoute === route.id ? 'transform rotate-180' : ''}`}
                    />
                  </button>
                  
                  {activeRoute === route.id && (
                    <div className="p-4 bg-white">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus Stop</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {route.stops.map((stop) => (
                              <tr key={stop.no} className={stop.stop === "College" ? "bg-amber-50" : ""}>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{stop.no}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800 font-medium">{stop.stop}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{stop.time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact information */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Need More Information?</h3>
            <p className="text-gray-700 mb-4">
              For any queries regarding bus routes, timings, or transportation facilities, please contact our transportation office:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-yellow-800 mb-1">Contact Person</h4>
                <p>Mr. Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Transportation Coordinator</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-yellow-800 mb-1">Phone</h4>
                <p>+91 9876543210</p>
                <p className="text-sm text-gray-500">Available 8:00 AM - 5:00 PM</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-yellow-800 mb-1">Email</h4>
                <p>transport@college.edu</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}