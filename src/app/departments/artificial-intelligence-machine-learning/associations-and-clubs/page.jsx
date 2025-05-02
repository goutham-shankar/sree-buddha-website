"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Reusable components
const SectionHeader = ({ title }) => (
  <div className="relative mb-6">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-yellow-900 pl-4 py-2">
      {title}
    </h2>
    <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-1 bg-yellow-900" aria-hidden="true" />
  </div>
);

const EventCard = ({ title, content, imageSrc, imageAlt, reverse = false, date = null }) => {
  const imageContainerOrder = reverse ? "md:order-last" : "";
  
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 mb-6 sm:mb-8 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
          <div className={`w-full md:w-1/2 ${imageContainerOrder}`}>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 w-full overflow-hidden rounded-lg">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Event image"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 mt-4 md:mt-0">
            {date && (
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                {date}
              </div>
            )}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
            <div className="prose prose-sm sm:prose-base prose-gray max-w-none">
              {typeof content === 'string' ? (
                <p className="text-gray-700">{content}</p>
              ) : (
                content
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AssociationCard = ({ title, description, logo = null }) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 mb-6 sm:mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="p-4 sm:p-5 md:p-6">
      <div className="flex items-center mb-3 sm:mb-4">
        {logo && (
          <div className="mr-3 sm:mr-4 flex-shrink-0">
            {logo}
          </div>
        )}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="prose prose-sm sm:prose-base prose-gray max-w-none">
        {typeof description === 'string' ? (
          <p className="text-gray-700">{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  </motion.div>
);

// Main component
export default function ComputerScienceDepartmentAssociations() {
  const [activeTab, setActiveTab] = useState('events');

  // Event data structure for better content management
  const events = [
    {
      id: 'aiclub1',
      title: "AI Club Event",
      date: "May 2, 2025",
      content: "Dr. Anil A R, HoD, Department of Artificial Intelligence and Machine Learning, along with Dr. Ajesh F, Faculty Advisor AI Club, handed over a memento to Shri. Joy Sebastian as a token of appreciation.",
      imageSrc: "/assets/images/departments/associations/ai_associations_1.jpg",
      imageAlt: "AI Club Event"
    }
  ];
  
  // Association data
  const associations = [
    {
      id: 'aiclub',
      title: "AI Club",
      logo: (
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-base sm:text-lg">
          AI
        </div>
      ),
      description: "The AI Club focuses on promoting artificial intelligence education and research among students. The club organizes workshops, seminars, and hands-on sessions to help students understand the latest developments in AI and machine learning."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
              Department Of AI ML Engineering
            </h1>
            <div className="w-28 sm:w-32 md:w-40 h-1 bg-yellow-900 mx-auto mb-4 sm:mb-6 md:mb-8" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800">Associations & Clubs</h2>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto py-3 sm:py-4 scrollbar-hide">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-colors ${
                activeTab === 'events' 
                  ? 'bg-yellow-900 text-white'
                  : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
              }`}
              aria-current={activeTab === 'events' ? 'page' : undefined}
            >
              Events & Activities
            </button>
            <button
              onClick={() => setActiveTab('associations')}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-colors ${
                activeTab === 'associations' 
                  ? 'bg-yellow-900 text-white'
                  : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
              }`}
              aria-current={activeTab === 'associations' ? 'page' : undefined}
            >
              Department Associations
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <div>
            <SectionHeader title="Department Events & Activities" />
            
            <div className="space-y-6">
              <EventCard
                title="AI Club Event"
                content="Dr. Anil A R, HoD, Department of Artificial Intelligence and Machine Learning, along with Dr. Ajesh F, Faculty Advisor AI Club, handed over a memento to Shri. Joy Sebastian as a token of appreciation."
                imageSrc="/assets/images/departments/associations/ai_associations_1.jpg"
                imageAlt="AI Club Event"
                date="May 2, 2025"
              />
            </div>
            
            {/* Timeline View */}
            <div className="mt-10 sm:mt-12 md:mt-16">
              <SectionHeader title="Events Timeline" />
              
              <div className="relative border-l-2 border-yellow-800 ml-3 sm:ml-4 md:ml-6 pl-4 sm:pl-6 md:pl-8 pb-6 sm:pb-8 mt-6 sm:mt-8">
                {events.map((event, index) => (
                  <div key={`timeline-${event.id}`} className="mb-8 sm:mb-10 md:mb-12 relative">
                    <div className="absolute -left-[33px] sm:-left-[37px] md:-left-[41px] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-900 border-4 border-white" />
                    <div className="bg-yellow-50 p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-xs sm:text-sm text-yellow-900 font-semibold mb-1">{event.date}</div>
                      <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{event.title}</h4>
                      {typeof event.content === 'string' ? (
                        <p className="text-sm sm:text-base text-gray-700 line-clamp-2">{event.content}</p>
                      ) : (
                        <div className="text-sm sm:text-base text-gray-700 line-clamp-2">Event details available</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Associations Tab Content */}
        {activeTab === 'associations' && (
          <div>
            <SectionHeader title="Department Associations" />
            
            <div className="space-y-6 sm:space-y-8">
              {associations.map((association) => (
                <AssociationCard
                  key={association.id}
                  title={association.title}
                  description={association.description}
                  logo={association.logo}
                />
              ))}
            </div>
            
            <div className="mt-10 sm:mt-12 md:mt-16">
              <SectionHeader title="Get Involved" />
              
              <div className="bg-yellow-50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-900">Join Our Associations</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  Get involved with our department associations to enhance your skills, network with professionals,
                  and participate in exciting events and competitions. These associations provide valuable opportunities
                  for personal and professional growth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-base sm:text-lg mb-2">How to Join AI Club</h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>Contact the Department Association Coordinator</li>
                      <li>Fill out the membership form</li>
                      <li>Attend the orientation meeting</li>
                      <li>Pay the membership fee, if applicable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}