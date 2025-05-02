"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SectionHeader = ({ title }) => (
  <div className="relative mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-yellow-900 pl-4 py-2">
      {title}
    </h2>
    <div className="absolute bottom-0 left-0 w-24 h-1 bg-yellow-900" aria-hidden="true" />
  </div>
);

const EventCard = ({ title, content, imageSrc, imageAlt, reverse = false, date = null }) => {
  const imageOrder = reverse ? "md:order-last" : "";

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className={`w-full md:w-1/2 ${imageOrder}`}>
            <div className="relative w-full aspect-[4/3] md:h-80 overflow-hidden rounded-lg">
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
          <div className="w-full md:w-1/2 space-y-4">
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
    <div className="p-4 sm:p-6">
      <div className="flex items-center mb-4">
        {logo && <div className="mr-4 flex-shrink-0">{logo}</div>}
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

export default function FTDepartmentAssociations() {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      id: 'event1',
      title: "FROSA Annual Conference 2024",
      date: "April 15, 2024",
      content:
        "The Food Research Oriented Students Association (FROSA) organized its annual conference focusing on sustainable food technologies and innovations. The event featured keynote speakers from leading food research organizations and industry experts who shared insights on recent advances in food preservation techniques and sustainable packaging solutions.",
      imageSrc: "",
      imageAlt: "FROSA Annual Conference 2024",
    }
  ];

  const associations = [
    {
      id: 'frosa',
      title: "FROSA (Food Research Oriented Students Association)",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          FROSA
        </div>
      ),
      description: (
        <div>
          <p className="text-gray-700 mb-4">
            The student association of the Department of Food Technology, 'FROSA', aims at nurturing student leadership and overall personality development. As its name suggests, the motto of FROSA is to encourage and promote activities beneficial to both the students of SBCE and the people of the neighborhood. Since its inception, the association has been keen on organizing several state-level and national seminars, conferences, workshops, and faculty development programs, bringing in eminent personalities from research organizations and industries all over.
          </p>
          <h4 className="font-bold text-gray-800 mt-6 mb-2">Objectives</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>To promote, encourage, and co-ordinate student clubs, societies, sports, and social activities.</li>
            <li>To represent the interests of its members and act as a channel of communication in dealing with the college and society.</li>
            <li>To promote and protect the welfare of its members and students.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ie',
      title: "Institution of Engineers India",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          IE(I)
        </div>
      ),
      description:
        "The Institution of Engineers (India) [IE(I)] is a statutory body that promotes and advances engineering and technology. It is the largest multi-disciplinary professional body of engineers encompassing 15 engineering disciplines with a membership of more than 820,000, serving the nation for more than 9 decades.",
    },
    {
      id: 'iiche',
      title: "Indian Institute of Chemical Engineers (IIChE)",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          IIChE
        </div>
      ),
      description:
        "The Indian Institute of Chemical Engineers (IIChE) is the premier professional organization furthering the development of chemical, petrochemical, and allied industries in terms of R&D, design and engineering, educational programs, and consultancy. IIChE is a confluence of professionals from academia, research institutes, and industry. It provides student members with an appropriate forum for joint endeavors, working hand-in-hand to apply chemical engineering and allied sciences for the betterment of humanity.",
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Food Technology
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" />
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
              Associations & Clubs
            </h2>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide">
            {['events', 'associations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'bg-yellow-900 text-white'
                    : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
                }`}
              >
                {tab === 'events' ? 'Events & Activities' : 'Department Associations'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'events' && (
          <>
            <SectionHeader title="Department Events & Activities" />
            <div className="space-y-6">
              {events.map((event, index) => (
                <EventCard key={event.id} {...event} reverse={index % 2 !== 0} />
              ))}
            </div>

            <div className="mt-16">
              <SectionHeader title="Events Timeline" />
              <div className="relative border-l-2 border-yellow-800 ml-6 pl-8 pb-8 mt-8">
                {events.map((event) => (
                  <div key={`timeline-${event.id}`} className="mb-12 relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-yellow-900 border-4 border-white" />
                    <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-yellow-900 font-semibold mb-1">{event.date}</div>
                      <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                      <p className="text-gray-700 line-clamp-3">
                        {typeof event.content === 'string' ? event.content : 'Event details available'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'associations' && (
          <>
            <SectionHeader title="Department Associations" />
            <div className="space-y-8">
              {associations.map((association) => (
                <AssociationCard key={association.id} {...association} />
              ))}
            </div>

            <div className="mt-16">
              <SectionHeader title="Get Involved" />
              <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 md:p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-yellow-900">Join Our Associations</h3>
                <p className="text-gray-700 mb-6">
                  Get involved with our department associations to enhance your skills, network with professionals,
                  and participate in exciting events and competitions. These associations provide valuable opportunities
                  for personal and professional growth in the field of Food Technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">How to Join FROSA</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Contact the Department Association Coordinator</li>
                      <li>Fill out the membership form</li>
                      <li>Attend the orientation meeting</li>
                      <li>Pay the membership fee, if applicable</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">Benefits of Joining</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Access to technical workshops and seminars</li>
                      <li>Opportunity to participate in competitions</li>
                      <li>Networking with industry professionals</li>
                      <li>Develop leadership and organizational skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}