import React from 'react';
import './style.css';
import Link from 'next/link';
import { FileText, Printer, Copy, Scan } from 'lucide-react';

export default function ReprographicFacilities() {
  const services = [
    {
      icon: <Copy className="w-10 h-10 text-yellow-800" />,
      title: "Photocopying",
      description: "High-quality photocopying services available in both color and black & white formats with various paper size options."
    },
    {
      icon: <Printer className="w-10 h-10 text-yellow-800" />,
      title: "Printing",
      description: "Professional printing services with options for different paper weights, sizes, and finishes to meet various academic needs."
    },
    {
      icon: <Scan className="w-10 h-10 text-yellow-800" />,
      title: "Scanning",
      description: "Document scanning services for easy digitization of research materials, assignments, and administrative documents."
    },
    {
      icon: <FileText className="w-10 h-10 text-yellow-800" />,
      title: "Document Binding",
      description: "Professional binding services for reports, theses, and project documentation with various binding options."
    }
  ];

  return (
    <div className=' mx-auto px-4 md:px-8 py-8 max-w-6xl'>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section with title */}
        <div className="bg-gradient-to-r from-yellow-700 to-amber-500 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Reprographic Facilities</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Supporting academic excellence through quality document services
          </p>
        </div>
        
        <div className="p-6 md:p-10">
          {/* Main description */}
          <div className="mb-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Our college provides comprehensive reprographic facilities to support students and staff 
              in their academic and administrative needs. These services include high-quality photocopying, both color and 
              black-and-white printing, and document scanning for easy digitization.
            </p>
          </div>
          
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Hours and Location */}
          <div className="bg-amber-50 rounded-lg p-6 mb-8 border-l-4 border-yellow-800">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hours & Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Operating Hours</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                  <li>Saturday: 10:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Location</h4>
                <p className="text-gray-600">Ground Floor, Library Building</p>
              </div>
            </div>
          </div>
          
          {/* Download section */}
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Detailed Facility Information</h3>
              <p className="text-gray-600">Download our comprehensive guide to reprographic services and pricing.</p>
            </div>
            <Link 
              href="/assets/documents/facilities/repro.pdf" 
              target="_blank"
              className="mt-4 md:mt-0 bg-yellow-800 hover:bg-yellow-900 text-white font-medium py-3 px-6 rounded-md flex items-center transition-colors duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Guide
            </Link>
          </div>
          
          {/* Help section */}
          <div className="mt-10 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Need Assistance?</h3>
            <p className="text-gray-600">
              Contact our reprographic services team at <a href="mailto:repro@college.edu" className="text-yellow-800 hover:underline">repro@college.edu</a> or call <a href="tel:+1234567890" className="text-yellow-800 hover:underline">(123) 456-7890</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}