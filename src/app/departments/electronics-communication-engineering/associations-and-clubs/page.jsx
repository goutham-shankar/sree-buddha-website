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
                  width={800}
                  height={600}
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
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
export default function ElectronicsDepartmentAssociations() {
  const [activeTab, setActiveTab] = useState('events');

  // Event data structure for better content management
  const events = [
    {
      id: 'eta_xmas_2023',
      title: "X-mas celebration 2023",
      date: "December 2023",
      content: "",
      imageSrc: "/assets/images/departments/activities/ece_association_1.jpg",
      imageAlt: "X-mas celebration 2023"
    },
    {
      id: 'eta_inauguration_2023',
      title: "ETA INAGURATION 2023-2024",
      date: "October 17, 2023",
      content: "The inaugural ceremony of ETA, Electronics Technocrats Association for the year 2023-2024 was held on 17th October 2023. The inaugural address was delivered by the honorable chief guest Mr. Sajeev K M (DYSP Rtd). An expert talk on &quote;Developing career goals: How to set and achieve them&quote; was delivered by the chief guest. Also, congratulations to all the toppers in the university exams.",
      imageSrc: "/assets/images/departments/activities/ece_association_2.jpg",
      imageAlt: "ETA Inauguration 2023-2024"
    },
    {
      id: 'eta_inauguration_2022',
      title: "ETA Inauguration 2022-2023",
      date: "November 19, 2022",
      content: "The inaugural ceremony of ETA, Electronics Technocrats Association for the year 2022-2023 was held on 19th November 2022. The meeting began with the presidential address by the Head of the Department of ECE Ms. Pavitha P P. The inaugural address was delivered by the honorable chief guest Mr. SHAIK HASSAN KHAN, Everester and social change maker. The gathering was then addressed by ETA Coordinator Mrs. Saritha N R, ETA student members Akhil Jayan and Surya Prasad. The inauguration was followed by a &quote;motivational talk&quote; by Mr. Shaik Hassan Khan. Events like Technical quiz competition and Cultural activities by students were conducted after the inauguration ceremony.",
      imageSrc: "/assets/images/departments/activities/ece_association_3.jpg",
      imageAlt: "ETA Inauguration 2022-2023"
    },
    {
      id: 'eta_inauguration_2020',
      title: "INAUGURATION OF ETA ACTIVITIES OF 2020-21",
      date: "December 16, 2020",
      content: "ETA (Electronics Technocrats Association), an association of the department of electronics and communication started in the year 2003, is a platform for the students to showcase their technical and non-technical skills. Activities for the academic year 2020-21 were inaugurated by Mr. Karthik Kesav, Co-Founder of Pragmatix learning Edutech Pvt. Ltd. on 16-12-2020, presided by Dr. S. Suresh Babu, Principal SBCE. The programme was inaugurated in the presence of Prof. Pavitha P P (HoD, ECE), Prof. Saritha N R (association coordinator, ECE). Heads of various departments, Professors, faculty, and students of the department of Electronics and Communication also attended the function. After the inauguration, student activities such as Idea pitching, Technical Games, Group Song, Fusion Dance, Mashup were conducted.",
      imageSrc: "/assets/images/departments/activities/ece_association_4.jpg",
      imageAlt: "ETA Inauguration 2020-2021"
    }
  ];
  
  // Association data
  const associations = [
    {
      id: 'eta',
      title: "ELECTRONIC TECHNOCRATS ASSOCIATION (ETA)",
      logo: (
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-base sm:text-lg">
          ETA
        </div>
      ),
      description: "ETA is the association of the Electronic & Communication students of Sree Buddha college of Engineering. The association aims at improving the technical skills of the students by organizing and conducting different workshops and technical competitions. ETA, an association of the department of electronics and communication started in the year 2003, is a platform for the students to showcase their technical and non-technical skills."
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
              Department Of Electronics and Communication Engineering
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
            
            {/* Additional Images */}
            <div className="mt-10 sm:mt-12">
              <SectionHeader title="Event Gallery" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/images/departments/activities/ece_association_5.jpg"
                    alt="ETA Event"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg">
                  <Image
                    src="/assets/images/departments/activities/ece_association_6.jpg"
                    alt="ETA Event"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg sm:col-span-2">
                  <Image
                    src="/assets/images/departments/activities/ece_association_7.jpg"
                    alt="ETA Event"
                    width={1000}
                    height={600}
                    className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
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
                      {event.content && (
                        <p className="text-sm sm:text-base text-gray-700 line-clamp-2">{event.content}</p>
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
              <SectionHeader title="About ETA" />
              
              <div className="bg-yellow-50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-900">Electronics Technocrats Association</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  ETA (Electronics Technocrats Association), an association of the department of electronics and communication started in the year 2003, 
                  is a platform for the students to showcase their technical and non-technical skills. The association aims at improving the technical skills 
                  of the students by organizing and conducting different workshops and technical competitions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-base sm:text-lg mb-2">Activities Conducted</h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>Technical workshops</li>
                      <li>Motivational talks</li>
                      <li>Technical quiz competitions</li>
                      <li>Cultural activities</li>
                      <li>Idea pitching sessions</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-base sm:text-lg mb-2">Annual Events</h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>Annual Association Inauguration</li>
                      <li>Technical Fest</li>
                      <li>X-mas celebrations</li>
                      <li>Recognition of University Toppers</li>
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