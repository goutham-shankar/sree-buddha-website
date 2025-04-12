import React from 'react';
import './style.css';
import picone from '../../../../public/assets/images/facilities/libpicone.jpg';
import pictwo from '../../../../public/assets/images/facilities/libpictwo.jpg';
import picthree from '../../../../public/assets/images/facilities/libpicthree.jpg';
import picfour from '../../../../public/assets/images/facilities/libpicfour.jpg';
import picfive from '../../../../public/assets/images/facilities/libpicfive.jpg';
import { BookOpen, Clock, Users, Database, Printer, FileText } from 'lucide-react';

export default function CentralLibraryPage() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-8xl'>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section */}
        <div className="bg-gradient-to-r from-yellow-800 to-amber-600 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Central Library</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Your gateway to knowledge and academic excellence
          </p>
        </div>
        
        <div className="p-6 md:p-8">
          {/* Overview section */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-3/5">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="mr-2 text-yellow-800 h-6 w-6" />
                Overview
              </h2>
              
              <div className="text-gray-700 space-y-4">
                <p>
                  The Central Library is a vital resource center catering to the faculty, 
                  students, and staff of the institute. Spanning 1,500 sq. meters, this three-story facility is located at the heart of 
                  the campus, offering a well-equipped space for study and research.
                </p>
                
                <p>
                  With a vast collection of books, journals, and digital resources, it supports academic excellence and
                  innovation. The library provides spacious reading areas, quiet study zones, and digital access
                  to a wide range of materials, making it an ideal place for learning and research.
                </p>
              </div>
            </div>
            
            <div className="md:w-2/5">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={picone.src} 
                  alt="Central Library Building" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Digital Library Section */}
          <div className="mb-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Database className="mr-2 text-yellow-800 h-6 w-6" />
              Digital Library
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5 text-gray-700 space-y-4">
                <p>
                  The Digital Library is a hub of knowledge, providing faculty, students, and research scholars with seamless access to 
                  a vast collection of online and offline electronic resources. Located on the first floor, it is designed to accommodate 40 users, 
                  offering a conducive environment for digital learning and research.
                </p>
                
                <p>
                  With access to over 15,000 international journals, e-books, research papers, and technical standards, the library ensures
                  that users stay updated with the latest advancements in various fields. These resources are made available through renowned 
                  consortiums such as:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div className="bg-white p-2 rounded border border-gray-200">IEEE POP</div>
                  <div className="bg-white p-2 rounded border border-gray-200">ELSEVIER</div>
                  <div className="bg-white p-2 rounded border border-gray-200">SPRINGER</div>
                  <div className="bg-white p-2 rounded border border-gray-200">McGraw Hill</div>
                  <div className="bg-white p-2 rounded border border-gray-200">ASTM Digital Library</div>
                  <div className="bg-white p-2 rounded border border-gray-200">ASCE, ASME</div>
                  <div className="bg-white p-2 rounded border border-gray-200">J-GATE</div>
                  <div className="bg-white p-2 rounded border border-gray-200">ISO, JTC1</div>
                  <div className="bg-white p-2 rounded border border-gray-200">NPTEL</div>
                </div>
                
                <p>
                  In addition to these, the Digital Library features high-speed internet, multimedia resources, and dedicated systems for
                  accessing scholarly databases. Interactive e-learning modules, video lectures, and research repositories further enhance
                  the learning experience.
                </p>
              </div>
              
              <div className="md:w-2/5">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={pictwo.src} 
                    alt="Digital Library Facilities" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Library Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="mr-2 text-yellow-800 h-6 w-6" />
              Library Services
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/5 order-2 md:order-1">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={picthree.src} 
                    alt="Library Services" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-3/5 order-1 md:order-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <BookOpen className="h-5 w-5 text-yellow-800" />, name: "Reference Services" },
                    { icon: <FileText className="h-5 w-5 text-yellow-800" />, name: "Document Lending Service" },
                    { icon: <Database className="h-5 w-5 text-yellow-800" />, name: "E-document Lending Service" },
                    { icon: <FileText className="h-5 w-5 text-yellow-800" />, name: "Current Awareness" },
                    { icon: <Users className="h-5 w-5 text-yellow-800" />, name: "Referral Services" },
                    { icon: <FileText className="h-5 w-5 text-yellow-800" />, name: "News Clippings" },
                    { icon: <BookOpen className="h-5 w-5 text-yellow-800" />, name: "New Arrivals" },
                    { icon: <Printer className="h-5 w-5 text-yellow-800" />, name: "Reprography" },
                    { icon: <Printer className="h-5 w-5 text-yellow-800" />, name: "Online Printout" },
                    { icon: <Database className="h-5 w-5 text-yellow-800" />, name: "OPAC (Online Public Access Catalog)" }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="mr-3 bg-amber-50 p-2 rounded-full">
                        {service.icon}
                      </div>
                      <span className="text-gray-700">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Library Staff and Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Staff Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="mr-2 text-yellow-800 h-5 w-5" />
                Library Staff
              </h2>
              
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Ms. Disha. S</td>
                      <td className="px-4 py-3 text-sm text-gray-700">MLIS, M.Phil Librarian</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Mr. Sadi. D</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Library Assistant</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Ms. Laila. K</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Library Assistant</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Ms. Sheela. P V</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Library Assistant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Hours Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="mr-2 text-yellow-800 h-5 w-5" />
                Library Hours
              </h2>
              
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Monday to Friday</td>
                      <td className="px-4 py-3 text-sm text-gray-700">8:00 AM to 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Saturday</td>
                      <td className="px-4 py-3 text-sm text-gray-700">9:00 AM to 6:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={picfour.src} 
                  alt="Library Reading Area" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Reference Section */}
          <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-yellow-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <BookOpen className="mr-2 text-yellow-800 h-6 w-6" />
              Reference Section
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5 text-gray-700 space-y-4">
                <p>
                  The reference section of the library has a rich collection of international
                  editions of reference books, handbooks, conference proceedings, encyclopedias, and various reference documents.
                  The fully air-conditioned section is located on the first floor.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-2">Reference Section Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-yellow-800" />
                      <span>Monday to Friday: 8:00 AM to 7:00 PM</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-yellow-800" />
                      <span>Saturday: 9:00 AM to 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-2/5">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={picfive.src} 
                    alt="Reference Section" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Contact */}
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Need Assistance?</h3>
            <p className="text-gray-600">
              Contact our library staff at <a href="mailto:library@college.edu" className="text-yellow-800 hover:underline">library@college.edu</a> or visit the information desk on the ground floor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}