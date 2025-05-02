'use client';
import React, { useState } from 'react';
import DownloadButton from '@/components/common/DownloadButton';
import { motion } from 'framer-motion';

export default function Page() {
  const [expandedCard, setExpandedCard] = useState(null);

  const pdfDocuments = [
    {
      id: "biotech",
      path: "/assets/documents/autonomous/syllabus/Biotechnology-and-Biochemical-Engineering.pdf",
      title: "Biotechnology and Biochemical Engineering",
      icon: "🧬",
      description: "Study of biological processes and systems for industrial applications."
    },
    {
      id: "civil",
      path: "/assets/documents/autonomous/syllabus/Civil-Engineering.pdf",
      title: "Civil Engineering",
      icon: "🏗️",
      description: "Design and construction of infrastructure and built environment."
    },
    {
      id: "cse",
      path: "/assets/documents/autonomous/syllabus/Computer-Science-and-Engineering.pdf",
      title: "Computer Science and Engineering",
      icon: "💻",
      description: "Study of computing systems and software development."
    },
    {
      id: "cseai",
      path: "/assets/documents/autonomous/syllabus/Computer-Science-and-EngineeringArtificial-Intelligence.pdf",
      title: "Computer Science and Engineering (Artificial Intelligence)",
      icon: "🤖",
      description: "Advanced computing with focus on AI and machine learning.",
      isNew: true
    },
    {
      id: "eee",
      path: "/assets/documents/autonomous/syllabus/Electrical-and-Electronics-Engineering.pdf",
      title: "Electrical and Electronics Engineering",
      icon: "⚡",
      description: "Study of electrical systems and electronic devices."
    },
    {
      id: "ece_comp",
      path: "/assets/documents/autonomous/syllabus/Electronics-and-Computer-Engineering.pdf",
      title: "Electronics and Computer Engineering",
      icon: "🔌",
      description: "Integration of electronics with computer systems.",
      isNew: true
    },
    {
      id: "ece",
      path: "/assets/documents/autonomous/syllabus/Electronics-Communication-Engineering-.pdf",
      title: "Electronics & Communication Engineering",
      icon: "📡",
      description: "Study of electronic communication systems and networks."
    },
    {
      id: "food",
      path: "/assets/documents/autonomous/syllabus/Food-Technology.pdf",
      title: "Food Technology",
      icon: "🍲",
      description: "Study of food processing and preservation technologies."
    },
    {
      id: "mech",
      path: "/assets/documents/autonomous/syllabus/Mechanical-Engineering.pdf",
      title: "Mechanical Engineering",
      icon: "⚙️",
      description: "Study of mechanical systems and manufacturing."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-yellow-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          <img
            src="https://sbce.ac.in/assets/images/profile_pic.png"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Course Syllabus</h1>
            <p className="text-xl md:text-2xl text-yellow-100">
              Comprehensive curriculum details for all engineering programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Syllabus Cards Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfDocuments.map((document, index) => (
              <motion.div
                key={document.id}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <span className="mr-2 text-2xl">{document.icon}</span>
                      {document.title}
                    </h3>
                    {document.isNew && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{document.description}</p>
                  <div className="mt-4">
                    <DownloadButton 
                      title="Download Syllabus" 
                      link={document.path}
                      className="w-full px-6 py-3 bg-yellow-900 text-white font-medium rounded-md hover:bg-yellow-800 transition-colors flex items-center justify-center"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-yellow-900">📚</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Syllabus Updates</h4>
                    <p className="text-gray-700">
                      The syllabus is regularly updated to meet industry standards and academic requirements.
                      Always ensure you're referring to the latest version.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-yellow-900">📝</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Course Structure</h4>
                    <p className="text-gray-700">
                      Each syllabus contains detailed information about course objectives, 
                      learning outcomes, and evaluation criteria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}