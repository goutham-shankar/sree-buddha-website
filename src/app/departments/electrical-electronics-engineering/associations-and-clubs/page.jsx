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
export default function ElectricalEngineeringDepartmentAssociations() {
  const [activeTab, setActiveTab] = useState('events');

  // Event data structure for better content management
  const events = [
    {
      id: 'event1',
      title: "IEEE IAS Chapter Inauguration",
      date: "February 18, 2015",
      content: "The IAS Students Branch Chapter, Sree Buddha College of Engineering (IAS SBC SBCE) was inaugurated on 18th February 2015 with 17 student members from PG and 9 faculty members. Dr. Tomy Sebastian (President, IEEE Industrial Application Society, Director of Motor Drive Systems, Halla Mechatronics) inaugurated the chapter. Mr. Srikanth Vasudevanpillai (IEEE-IAS Chapter and Membership Development Vice-Chair, Area Chair, Student Branch Chapter, Region 10, Asia West) felicitated the event. Prof. C. Asokan, Head of the department, EEE, SBCE presided over the gathering.",
      imageSrc: "data:image/png;base64,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",
      imageAlt: "IEEE IAS Chapter Inauguration"
    },
    {
      id: 'event2',
      title: "Industrial Visit to KEL",
      date: "March 25, 2015",
      content: "Soon after the inauguration of the IAS Chapter, an industrial visit to Kerala Electrical & Allied Engineering Company Ltd (KEL) was organized for its members. The visit provided students with practical insights into industrial applications of electrical engineering concepts. Students also had the opportunity to interact with industry professionals and learn about the latest technological advancements in the field.",
      imageSrc: "/assets/images/departments/activities/eee_dept_event2.jpg",
      imageAlt: "Industrial Visit to KEL"
    },
    {
      id: 'event3',
      title: "IEEE International Conference Participation",
      date: "June 15, 2016",
      content: "Due to the active involvement of the student members of the IEEE IAS Chapter, 8 students of M-tech (2014-16 Batch) got an opportunity to attend an international conference in U.S.A. funded by the IAS Society. This was a major achievement for our department and provided these students with international exposure and networking opportunities with experts in their field of study.",
      imageSrc: "/assets/images/departments/activities/eee_dept_event3.jpg",
      imageAlt: "IEEE International Conference Participation"
    },
    {
      id: 'event4',
      title: "IEEE Student Branch Activities",
      date: "December 10, 2022",
      content: "Our IEEE Student Branch has been active since 2014 and has organized numerous workshops, seminars, and technical events to enhance the technical skills of the students. The branch provides a platform for students to express their ideas, work on innovative projects, and collaborate with industry professionals. With around 120 student volunteers, the branch continues to grow and make significant contributions to the technical community.",
      imageSrc: "/assets/images/departments/activities/eee_dept_event4.jpg",
      imageAlt: "IEEE Student Branch Activities"
    }
  ];
  
  // Association data - updated with IEEE information
  const associations = [
    {
      id: 'ieee',
      title: "IEEE Student Branch",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          IEEE
        </div>
      ),
      description: "IEEE Student Branches provide an opportunity for student members to begin networking in their areas of interest and future profession. There are over 3,000 IEEE Student Branches in over 100 countries, globally. Amongst those branches, from 2014 onwards, our IEEE Student Branch is very much active. We have now about 120 student volunteers in this chapter. Presently, the Student Branch coordinator is Prof. Sreekanth P K, Asst. Prof., Dept of EEE, Chairperson is Manu.B, S6 EEE, Vice-Chairperson is Varsha, S4 EEE, Secretory is Atul, S4 EEE and Treasurer is Arun, S4 EEE. The Student Branch with branch code STB12941 has done many programs and workshops to improve the technological skills of students. These events also work as a platform for students to express their ideas and share their knowledge."
    },
    {
      id: 'ieee-ias',
      title: "IEEE IAS Chapter",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          IAS
        </div>
      ),
      description: (
        <div>
          <p className="text-gray-700 mb-4">
            The Department of Electrical and Electronics Engineering operates an IAS (Industry Application Society) Chapter in the college as a subsidiary of IEEE Student Branch Chapter. This chapter is a valuable professional connect between industry and academics and it offers the following benefits to our students:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>An opportunity to become acquainted with the works of various experts in the field.</li>
            <li>A chance to collaborate in projects of various industrial domains.</li>
            <li>Opportunities to publish papers in reputed conferences of international stature.</li>
            <li>Funds for research works of international exposure.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The IAS Students Branch Chapter, Sree Buddha College of Engineering (IAS SBC SBCE) was inaugurated on 18th February 2015 with 17 student members from PG and 9 faculty members. Dr. Tomy Sebastian (President, IEEE Industrial Application Society, Director of Motor Drive Systems, Halla Mechatronics) inaugurated the chapter.
          </p>
          <p className="text-gray-700">
            The activities of this IAS Chapter were always inspiring. Soon after the inauguration, an industrial visit to Kerala Electrical & Allied Engineering Company Ltd (KEL) was organized for its members and a tour to Athirapally waterfalls. Due to the active involvement of the student members of this Chapter, 8 students of M-tech (2014-16 Batch) got an opportunity to attend an international conference in U.S.A. funded by the IAS Society.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Electrical & Electronics Engineering
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
                <h3 className="text-xl font-bold mb-4 text-yellow-900">Join Our IEEE Associations</h3>
                <p className="text-gray-700 mb-6">
                  Get involved with our IEEE Student Branch and IEEE IAS Chapter to enhance your skills, network with professionals,
                  and participate in exciting events and competitions. These associations provide valuable opportunities
                  for personal and professional growth in the field of electrical engineering.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">How to Join IEEE Student Branch</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Contact Prof. Sreekanth P K, IEEE Student Branch Coordinator</li>
                      <li>Fill out the IEEE membership application form</li>
                      <li>Pay the annual membership fee</li>
                      <li>Attend the orientation meeting for new members</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">How to Join IEEE IAS Chapter</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Become an IEEE member first</li>
                      <li>Apply for IAS membership through the IEEE website</li>
                      <li>Pay the additional society membership fee</li>
                      <li>Join the local chapter activities</li>
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