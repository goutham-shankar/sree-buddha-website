"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Reusable components
const SectionHeader = ({ title }) => (
  <div className="relative mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-yellow-900 pl-4 py-2">
      {title}
    </h2>
    <div className="absolute bottom-0 left-0 w-24 h-1 bg-yellow-900" aria-hidden="true" />
  </div>
);

const EventCard = ({ title, content, imageSrc, imageAlt, reverse = false, date = null }) => {
  const imageContainerOrder = reverse ? "md:order-last" : "";
  
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className={`md:w-1/2 ${imageContainerOrder}`}>
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Event image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            {date && (
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm font-medium mb-2">
                {date}
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
            <div className="prose prose-gray max-w-none">
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
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        {logo && (
          <div className="mr-4 flex-shrink-0">
            {logo}
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="prose prose-gray max-w-none">
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
  const events = [];
  
  // Association data
  const associations = [];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of  Mechanical Engineering
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">Associations & Clubs</h2>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-full transition-colors ${
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
              className={`px-6 py-2 rounded-full transition-colors ${
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <div>
            <SectionHeader title="Department Events & Activities" />
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  content={event.content}
                  imageSrc={event.imageSrc}
                  imageAlt={event.imageAlt}
                  date={event.date}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>
            
            {/* Timeline View */}
            <div className="mt-16">
              <SectionHeader title="Events Timeline" />
              
              <div className="relative border-l-2 border-yellow-800 ml-6 pl-8 pb-8 mt-8">
                {events.map((event, index) => (
                  <div key={`timeline-${event.id}`} className="mb-12 relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-yellow-900 border-4 border-white" />
                    <div className="bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-yellow-900 font-semibold mb-1">{event.date}</div>
                      <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                      {typeof event.content === 'string' ? (
                        <p className="text-gray-700 line-clamp-2">{event.content}</p>
                      ) : (
                        <div className="text-gray-700 line-clamp-2">Event details available</div>
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
            
            <div className="space-y-8">
              {associations.map((association) => (
                <AssociationCard
                  key={association.id}
                  title={association.title}
                  description={association.description}
                  logo={association.logo}
                />
              ))}
            </div>
            
            <div className="mt-16">
              <SectionHeader title="Get Involved" />
              
              <div className="bg-yellow-50 rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-yellow-900">Join Our Associations</h3>
                <p className="text-gray-700 mb-6">
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2"></h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2"></h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
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