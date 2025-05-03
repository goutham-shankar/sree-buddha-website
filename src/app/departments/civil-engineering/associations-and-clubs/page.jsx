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
export default function CivilEngineeringDepartmentAssociations() {
  const [activeTab, setActiveTab] = useState('events');

  // Event data structure for better content management
  const events = [
    {
      id: 'event1',
      title: "INAUGURAL CEREMONY OF CASTELLOS ACTIVITY 2022-23",
      date: "November 30, 2022",
      content: "Castellos activity inauguration 2022-23 was held on Wednesday, 30th November at the Library Seminar Hall. The chief guest of the program was Dr. K Balan, Retd. Professor, College of Engineering, Trivandrum and former director of CERD. Dr. Gouri Antherjanam, HoD, CE, SBCE welcomed the gathering. Dr. Sivasankar S, Associate professor, CE, SBCE delivered felicitation for the program. Dr. Saji Varghese (Principal, CE, SBCE), Dr Gouri Antherjanam (HoD, CE, SBCE), Ms. Aswathy lal (Faculty coordinator), Student committee members, UG & PG students were present for the inaugural function. Dr. K Balan inaugurated the initiation of the Castellos activities for the year 2022-23 and appreciated the efforts taken by the coordinators in his inaugural address. He also conducted a session on the future of civil engineers and recent trends in civil engineering. Vote of thanks was expressed by Mr. Suneeth S, S7 CE, Secretary, Castellos, SBCE. The programme ended by 12.45 pm.",
      imageSrc: "/assets/images/departments/associations/civil_associations_1.jpg",
      imageAlt: "CASTELLOS Activity Inauguration 2022-23"
    },
    {
      id: 'event2',
      title: "CASTELLOS ACTIVITY INAUGURATION 2021-22",
      date: "April 26, 2022",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            The Dept. of Civil Engineering organized CASTELLOS activity inauguration for the academic year 2021-22 on 26th April 2022 at 10.00 am at conference hall, library block. The session was inaugurated by Dr. Cini A., Retired Executive Chief Engineer, PWD and HOD of Civil & Architecture IIIC Chavara. Dr. Cini is the Alumnae of TKMCE and NIT Calicut.
          </p>
          <p className="text-gray-700 mb-4">
            Ms. Aswathy Lal, coordinator of castellos welcomed the gathering and HoD Dr. Gouri Antherjanam gave presidential address. The technical session handled by Dr. Cini covered her life experiences as a Civil Engineer in various bridge construction projects. She explained various risks she faced as a civil engineer during various disasters faced by the state.
          </p>
          <p className="text-gray-700">
            Assistant Professor Mr. Ashok Mathew and Dr. S. Sivasankar gave felicitations. After the technical session, toppers of each batch were appreciated by giving momentos. Mr. Bharath Nair, final year student of the department also shared his experiences of running a construction firm. The chief guest also unveiled a hand-written magazine prepared by the students of the department. The session ended by 12.00 pm. B. Tech as well as M. Tech students of the Civil department attended the session. In the afternoon, a quiz program was conducted for the students of all departments.
          </p>
        </div>
      ),
      imageSrc: "/assets/images/departments/associations/civil_associations_4.jpg",
      imageAlt: "CASTELLOS Activity Inauguration 2021-22"
    },
    {
      id: 'event3',
      title: "CASTELLOS 2018 - EXHIBITION AND TECHNICAL SESSION",
      date: "February 27, 2018",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            On February 27th 2018, the Inaugural Ceremony of CASTELLOS was conducted by the department of Civil Engineering of Sree Buddha College of Engineering, Pattoor. CASTELLOS, the Civil Engineering department association marked its beginning on 17th March 2010, throughout its journey it has conducted various seminars, workshops, faculty development programs and promoted the ideas and thought process in different fields.
          </p>
          <p className="text-gray-700 mb-4">
            The Chief Guest for the day was Engineer Satheesh Gopi, Marine Surveyor of Kerala Port Department. He handled a technical session for all the young civil engineers on the recent developments in Geo-informatics. Mr. Satheesh Gopi is the senior team member in Digital cartography, Costal digitization, Geographic Information System and a senior faculty member in the Kerala institute of hydrography and advanced studies. He has been commissioned to supervise surveys with the most advanced DGPS, smart stations, digital level from 90s itself.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-yellow-900">Exhibition Highlight - LEGACE</p>
            <p className="text-gray-700">
              The main highlight of the entire function was the exhibition organized by the Department in the Civil Block. The theme of the Expo titled LEGACE was Construction Materials. Various companies showcased their building material samples at the Expo which spread awareness to many who attended it, including children from various schools. The Expo also portrayed the talent of the students, who made various models and exhibits of civil engineering significance.
            </p>
          </div>
        </div>
      ),
      imageSrc: "/assets/images/departments/activities/ce_dept_event3.jpg",
      imageAlt: "CASTELLOS 2018 Exhibition"
    },
    {
      id: 'event4',
      title: "CASTELLOS 2015 - SUSTAINABLE DEVELOPMENT FOCUS",
      date: "September 3, 2015",
      content: "The activities of Civil Engineering association (CASTELLOS) for the academic year 2015-2016 were inaugurated on 03.09.15. The function was presided by Dr. E K Bhass, HoD CE. He delivered the welcome and presidential address. Principal Dr. S. Suresh Babu delivered principal's address. Arch. Sajan P B, Joint Director, COSTFORD delivered inaugural address and officially inaugurated the association by lighting the lamp. Ms. Cinaya Tony presented the annual report for the year 2014-2015. A talk on Alternate Building Materials was delivered by Arch. Sajan P B, Joint Director, COSTFORD. He stressed upon the importance of Sustainable Development, impact of construction on environment, pollution etc. The session was highly motivating and informative.",
      imageSrc: "/assets/images/departments/activities/ce_dept_event4.jpg",
      imageAlt: "CASTELLOS 2015 Inauguration"
    },
    {
      id: 'event5',
      title: "CASTELLOS 2013 - COMPETITION AND CULTURAL EVENTS",
      date: "July 26, 2013",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            The Association activities of Civil Engineers of SBCE, CASTELLOS for the year 2013 was inaugurated by Dr. Reji G Nair, MD, CONSUMER FED, Govt. of Kerala on 26 July 2013. The programme started at 11 a.m. by the welcome address of Ms. Devika Das, Secretary, CASTELLOS. The presidential address was delivered by Dr. Somi Sebastian, Principal, SBCE, Prof. V Prasad, Secretary, SBCE, and Sri K K Sivadasn, Treasurer, SBCE, felicitated the session. Mr. Basho Vikram delivered vote of thanks.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="font-semibold text-yellow-900">Mix Design Competition</p>
            <p className="text-gray-700">
              CASTELLOS, the department Association of Civil Engineers of SBCE conducted a mix design competition in association with Ultratech Cement on 11 January 2013. Mr. M A Joseph, Regional Manager, Ultratech was the Chief Guest. Many student groups from SBCE participated and prizes were given for the winners.
            </p>
          </div>
          <p className="text-gray-700">
            A quiz competition was conducted in the afternoon session and prizes were given for the winners. The programme concluded with cultural events.
          </p>
        </div>
      ),
      imageSrc: "/assets/images/departments/activities/ce_dept_event5.jpg",
      imageAlt: "CASTELLOS 2013 Inauguration and Mix Design Competition"
    }
  ];
  
  // Association data
  const associations = [
    {
      id: 'castellos',
      title: "CASTELLOS",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          C
        </div>
      ),
      description: "CASTELLOS is the official department association of Civil Engineering, established on March 17, 2010. Throughout its journey, CASTELLOS has conducted various seminars, workshops, faculty development programs, and technical competitions to enhance the skills and knowledge of civil engineering students. The association coordinates all the cultural and technical events in the department and organizes exhibitions featuring construction materials and student projects. CASTELLOS plays a vital role in bridging the gap between theoretical knowledge and practical applications in the field of civil engineering."
    },
   
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Civil Engineering
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" aria-hidden="true" />
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">Associations & clubss</h2>
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
            <SectionHeader title="CASTELLOS Events & Activities" />
            
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
              <SectionHeader title="CASTELLOS Timeline" />
              
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
                  Get involved with our Civil Engineering department associations to enhance your technical skills, participate in exhibitions, 
                  competitions, and network with industry professionals. These associations provide valuable opportunities for personal and 
                  professional growth in the field of civil engineering.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">How to Join CASTELLOS</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Contact the Faculty Coordinator, Ms. Aswathy Lal</li>
                      <li>Register through the Civil Engineering Department Office</li>
                      <li>Complete the membership registration form</li>
                      <li>Attend the orientation and induction meeting</li>
                      <li>Participate in ongoing department activities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">Benefits of Membership</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Network with industry professionals and expert engineers</li>
                      <li>Participate in technical competitions and exhibitions</li>
                      <li>Enhance practical knowledge through hands-on workshops</li>
                      <li>Opportunity to publish in the department hand-written magazine</li>
                      <li>Recognition for academic achievements and technical skills</li>
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