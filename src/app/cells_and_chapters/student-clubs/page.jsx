"use client";
import React from 'react';
import Link from 'next/link';
import { Users, Award, BookOpen, Calendar, FileText } from 'lucide-react';

export default function StudentClubs() {
  // Committee data with more structured information
  const committees = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-yellow-800" />,
      title: "Academic Excellence Committee",
      description: "Promoting academic standards and educational innovation across departments with focus on interdisciplinary collaboration and research opportunities."
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10 text-yellow-800" />,
      title: "Student Development Council",
      description: "Fostering leadership skills and personal growth through diverse activities, workshops, and mentorship programs designed to enhance student success."
    },
    {
      id: 3,
      icon: <Calendar className="w-10 h-10 text-yellow-800" />,
      title: "Cultural & Events Committee",
      description: "Organizing campus events and celebrating cultural diversity through festivals, performances, and inclusive community gatherings throughout the academic year."
    },
    {
      id: 4,
      icon: <Award className="w-10 h-10 text-yellow-800" />,
      title: "Research & Innovation Cell",
      description: "Supporting student research initiatives and innovative projects with guidance from faculty mentors and access to specialized resources and funding."
    }
  ];

  // Function to handle PDF redirection
  const handlePdfClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mx-auto px-4 md:px-8 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section with title */}
        <div className="bg-gradient-to-r from-yellow-700 to-amber-500 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Various Cells & Committees</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Student-led initiatives driving campus excellence and community engagement
          </p>
        </div>
        
        <div className="p-6 md:p-10">
          {/* Main description */}
          <div className="mb-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Our institution prides itself on diverse student-led committees that foster leadership, innovation, and community engagement. 
              These committees provide valuable opportunities for students to develop professional skills while contributing to our campus culture and academic excellence.
            </p>
          </div>
          
          {/* Committees grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {committees.map((committee) => (
              <div 
                key={committee.id} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => handlePdfClick(`/assets/documents/various%20committee/ORIGINAL-DOC${committee.id <= 2 ? committee.id : (committee.id % 2) + 1}.pdf`)}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{committee.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{committee.title}</h3>
                    <p className="text-gray-600">{committee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Meeting Information */}
          <div className="bg-amber-50 rounded-lg p-6 mb-8 border-l-4 border-yellow-800">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Committee Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Meeting Schedule</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Academic Excellence: Every Monday, 4:00 PM</li>
                  <li>Student Development: Every Tuesday, 3:30 PM</li>
                  <li>Cultural & Events: Every Wednesday, 5:00 PM</li>
                  <li>Research & Innovation: Bi-weekly Fridays, 2:00 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Locations</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Student Center, Room 203</li>
                  <li>Administration Building, Conference Room B</li>
                  <li>Liberal Arts Building, Room 105</li>
                  <li>Science Block, Innovation Lab</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Download section */}
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Committee Guidelines & Applications</h3>
              <p className="text-gray-600">Download our comprehensive guide to committees and information on how to join.</p>
            </div>
            <Link 
              href="/assets/documents/various%20committee/guidelines.pdf" 
              target="_blank"
              className="mt-4 md:mt-0 bg-yellow-800 hover:bg-yellow-900 text-white font-medium py-3 px-6 rounded-md flex items-center transition-colors duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Guide
            </Link>
          </div>
          
          {/* Join section */}
          <div className="mt-10 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Interested in Joining?</h3>
            <p className="text-gray-600">
              Contact the Student Activities Office at <a href="mailto:student.activities@college.edu" className="text-yellow-800 hover:underline">student.activities@college.edu</a> or visit Room 101 in the Student Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}