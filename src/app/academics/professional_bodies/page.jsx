"use client";
import React from 'react';
import "./profess.css";
import { BookOpen, Award, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Profession() {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };
  
  const professionalBodies = [
    {
      name: "CSI STUDENT BRANCH",
      fullName: "Computer Society of India",
      description: [
        "Computer Society of India is the first and largest body of computer professionals in India. It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals. It has 71 chapters across India, 418 student branches, and more than 90,000 members. The Computer Society of India is a non-profit professional meet to exchange views and information and to learn and share ideas. The wide spectrum of members is committed to the advancement of theory and practice of computer engineering and technology systems, information Processing and related Arts and Sciences.",
        "The Society also encourages and assists professionals to maintain integrity and competence of the profession and fosters a sense of partnership amongst members. Besides the activities held at the chapters and student branches, the society also conducts periodic conferences, seminars etc."
      ],
      coordinator: "Dr. A R Anil (Professor, CSE)",
      icon: <Users size={24} />
    },
    {
      name: "ACM STUDENT CHAPTER",
      fullName: "Association for Computing Machinery",
      description: [
        "ACM is an international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. It is a not-for-profit professional membership group. Its membership count is more than 100,000. ACM is organized into over 171 local chapters and 37 Special Interest Groups (SIGs), through which it conducts most of its activities. Additionally, there are over 500 college and university chapters. ACM also sponsors other computer science related events such as the worldwide ACM International Collegiate Programming Contest (ICPC), and has sponsored some other events such as the chess match between Garry Kasparov and the IBM Deep Blue computer. ACM publishes several journals and magazines with ACM Communications and ACM Queue as mouthpieces."
      ],
      coordinator: "Ms. Reshmi S. (A.P., CSE)",
      icon: <BookOpen size={24} />
    },
    {
      name: "IEEE STUDENT CHAPTER",
      fullName: "Institute of Electrical and Electronics Engineers",
      description: [
        "IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities. It was formed in 1963 from the amalgamation of the American Institute of Electrical Engineers and the Institute of Radio Engineers. Today it is the world's largest association of technical professionals with more than 400,000 members in chapters around the world. Its objectives are the educational and technical advancement of electrical and electronic engineering, telecommunications, computer engineering and allied disciplines. IEEE produces over 30% of the world's literature in the electrical and electronics engineering and computer science fields, publishing well over 100 peer-reviewed journals."
      ],
      coordinator: "Ms. Vijina K (A.P., EEE)",
      icon: <Award size={24} />
    },
    {
      name: "IEEE IAS CHAPTER",
      fullName: "IEEE Industry Applications Society",
      description: [
        "The IEEE Industry Applications Society was formed in 1964 as the Industry and General Applications Group, and changed its name to the IEEE Industry Applications Society on December 3 of 1971. Its vision is to be a world leader in the advancement of technology and dissemination of technical information to support professionals engaged in the applications of electrical and electronic engineering to industry. The advancement of the theory and practice of electrical and electronic engineering in the development, design, manufacture and application of electrical systems, apparatus, devices and controls to the processes and equipment of industry and commerce; the promotion of safe, reliable and economical installations; industry leadership in energy conservation and environmental health and safety issues; the creation of voluntary engineering standards and recommended practices; and the professional development of its membership."
      ],
      coordinator: "Ms. Vijina K (A.P., EEE)",
      icon: <Award size={24} />
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen pb-12">
      {/* Header Section */}
      <div className="bg-yellow-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Professional Bodies</h1>
          <div className="h-1 w-24 bg-amber-400 mb-6"></div>
          <p className="text-amber-100 max-w-2xl">
            Student chapters of professional organizations that foster technical knowledge, professional skills, 
            and industry connections.
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-6">
          {professionalBodies.map((body, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-yellow-100 overflow-hidden transition-all duration-300"
            >
              <div 
                className={`flex items-center justify-between p-5 cursor-pointer ${expandedSection === index ? 'bg-yellow-900 text-white' : 'bg-white'}`}
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center">
                  <div className={`p-3 rounded-full mr-4 ${expandedSection === index ? 'bg-yellow-800 text-amber-200' : 'bg-yellow-100 text-yellow-900'}`}>
                    {body.icon}
                  </div>
                  <h2 className={`text-xl font-semibold ${expandedSection === index ? 'text-white' : 'text-yellow-900'}`}>
                    {body.name}
                  </h2>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform ${expandedSection === index ? 'rotate-180 text-amber-200' : 'text-yellow-800'}`} 
                />
              </div>
              
              {expandedSection === index && (
                <div className="p-5 bg-yellow-50 border-t border-yellow-100">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-yellow-900 mb-3">
                      {body.fullName}
                    </h3>
                    {body.description.map((paragraph, i) => (
                      <p key={i} className="text-yellow-950/70 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-yellow-200">
                    <div className="flex items-center">
                      <span className="font-medium text-yellow-900">Coordinator:</span>
                      <span className="ml-2 text-yellow-950/70">{body.coordinator}</span>
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