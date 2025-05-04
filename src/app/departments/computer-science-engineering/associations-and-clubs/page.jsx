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
  const events = [
    {
      id: 'event1',
      title: "INAUGURATION OF THE ACTIVITIES BY COMPUTER SCIENCE DEPARTMENT ASSOCIATION-CYBORG 2024",
      date: "February 6, 2024",
      content: "The activities by computer science department association-Cyborg, for the academic year was inaugurated by Mr.Resal V, Cyber Security Professional, Infosys on 6th of February 2024 at the Conference Hall, Library Block. Dr Anju J Prakash, Asst. Professor, Dept. of CSE welcomed the gathering. The presidential address was given by Dr. S.V. Annlin Jeba, HOD – CSE.",
      imageSrc: "/assets/images/departments/activities/cs_dept_event1.jpg",
      imageAlt: "CYBORG 2024 Inauguration"
    },
    {
      id: 'event2',
      title: "INAUGURATION OF THE ACTIVITIES BY COMPUTER SCIENCE DEPARTMENT ASSOCIATION-CYBORG 2023",
      date: "March 10, 2023",
      content: "The activities by computer science department association-Cyborg 2023 was inaugurated by Mr. Bilal Bin Nazr, Co-Founder, Crypt4bits on 10th of March 2023 at the Conference Hall, Library Block. Dr. Anju J Prakash, Asst. Professor, Dept. of CSE (Faculty Advisor-Cyborg) welcomed the gathering. The presidential address was given by Dr. S.V. Annlin Jeba, HOD – CSE, Sree Buddha College of Engineering. Felicitation was given by Dr. Anil A. R (HOD-AI & ML). Vote of thanks was delivered by Miss.Aparna Vijaykumar, Student Representative, Cyborg. More than 100 participants attended the event. Prizes were distributed for student toppers from First, Second, Third and Fourth year. The inaugural ceremony was followed by an Expert Talk on the topic 'Navigating the changing landscape of Tech Careers' by Mr. Bilal Bin Nazar, Co-Founder, Crypt4bits for Second year, Third Year and Final Year B.Tech students at the Library Seminar Hall, SBCE. The session covered various tips to crack technical interviews and about emerging technologies. From his knowledge, he presented various experience he had gone through by interviewing various students. The session was very motivational and was very informative.",
      imageSrc: "/assets/images/departments/activities/cs_dept_event2.jpg",
      imageAlt: "CYBORG 2023 Inauguration"
    },
    {
      id: 'event3',
      title: "IDEA PITCHING COMPETITION REPORT",
      date: "June 3, 2022",
      content: (
        <div>
          <p className="text-gray-700 mb-4">
            The Department of computer science and engineering of Sree Buddha College of Engineering has organized an Idea Pitching Competition as part of Department Association activities on 03/06/2022. Around 10 teams consisting of students in various departments participated in this competition. They presented their idea of innovative product designs. IEDC officers Prof Regi P Mohan and Dr Trijo Tharayil were the judges of the event.
          </p>
          <p className="text-gray-700 mb-4">
            Team ULTRA with team members Christo Johnson, Jeo varghese, kalias nath, criz Stephen, akshu madhu of S2 EEE won the first prize. Team Bespoke IT with team members P.S.Krishnendhu, Hitha R, Gowri Menon, Sandra J of S4 CSE won the second prize.
          </p>
          <div className="mt-4">
            <h4 className="font-semibold text-yellow-900">SECURITY DAY CELEBRATION - &apos;LEND AN EAR&apos;</h4>
            <p className="text-gray-700 italic">An idea Presentation Competition</p>
            <p className="text-gray-700">Date: 22.03.21</p>
            <p className="text-gray-700">Time: 10:00 am to 1:00 pm</p>
            <p className="text-gray-700 mt-2">
              The Institution of Engineers (India) Students Chapter of Department of Computer Science and Engineering, Sree Buddha College of Engineering and The Institution of Engineers (India) Kollam Local Centre jointly conducted &quot;LEND AN EAR&quot; &apos;An idea Presentation Competition from 10.00 am to 1:00pm on 22.03.2021 through Google Meet. 5 teams of four members each have attended the Competition. They have presented their innovative ideas in this competition. The faculty advisor Ms. Dhanya Sreedharan welcomed the judging panel and participants. The judging panel included Prof Anil A R, Associate Professor, Dept of CSE, Mr. Gopudarsan and Mr Arun P S, Assistant Professors of Department of Computer Science and Engineering. E-certificates were distributed for the participants who have actively participated the Webinar.
            </p>
          </div>
        </div>
      ),
      imageSrc: "/assets/images/departments/activities/cs_dept_event3.jpg",
      imageAlt: "Idea Pitching Competition"
    },
    {
      id: 'event4',
      title: "INAUGURATION OF THE ACTIVITIES BY COMPUTER SCIENCE DEPARTMENT ASSOCIATION-CYBORG",
      date: "May 11, 2022",
      content: "The activities by computer science department association-Cyborg was inaugurated by Mr. Pramod Chandran, senior project manager, IBS software on 11th of May 2022 at the Conference Hall, Library Block. Ms. Minu Lalitha Madhavu, Asst. Professor, Dept. of CSE welcomed the gathering. The presidential address was given by Dr. S.V. Annlin Jeba, HOD – CSE, AI & ML, Sree Buddha College of Engineering. Felicitation was given by Dr. Anil A.R, Associate Professor, Dept. of CSE. Vote of thanks was delivered by Miss. U R Ritu Pournami, Secretary Cyborg. More than 100 participants attended the event. PHD Holders Dr. Anil A.R, Associate Professor in CSE and Dr Anju J Prakash, Assistant Professor in CSE were honoured during the function. Miss. Ruksana Jalaludeen was awarded the Best outgoing student of 2021 batch. Prizes were distributed for student toppers from First, Second, Third and Fourth year. The inaugural ceremony was followed by an Expert Talk on the topic 'How to effectively Tackle Interviews' by Mr. Pramod Chandran, senior project manager, IBS software for Third year B.Tech students at the Skill Development Lab(SDPK Lab), CS Block, SBCE. The session covered various tips to face technical interviews as part of campus selection process. As a technical interviewer he presented various experience he had gone through by interviewing various students in various engineering college campuses. The session received good feedback and were very informative and valuable to the students.",
      imageSrc: "/assets/images/departments/activities/cs_dept_event4.jpg",
      imageAlt: "CYBORG Activities Inauguration"
    },
    {
      id: 'event5',
      title: "Computer Science Association (CYBORG) Inauguration",
      date: "January 9, 2021",
      content: (
        <div>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="font-semibold">Resource Person:</p>
            <p>Dr. Robin Tommy</p>
            <p>Innovation Strategist, Story Teller, Startup Mentor, EmTech Advisor, Human Centric Innovator, Tata Consultancy Services</p>
            <p>Date: 07/1/2021 to 08/01/2021</p>
            <p>Time: 10:00 am</p>
          </div>
          <p className="text-gray-700">
            Department of Computer Science and Engineering inaugurated the association activities for the academic year 2020-21 on 09th January 2021 through Google meet. The Welcome address was given by Mr.Gopu Darsan, Assistant Professor & Department Association Coordinator, Dept of CSE. The activities were inaugurated by Dr. S.V. Annlin Jeba, Head of Department, Computer Science and Engineering. As part of the inaugural session an expert talk on Leadership and Innovation was given by Dr. Robin Tommy, Innovation Strategist, Story Teller, Start up Mentor, EmTech Advisor, Human Centric Innovator, Tata Consultancy Services. The Vote of Thanks was given by Ms. Megha P.S., Student Coordinator, Cyborg. The participants for the event were the students from various semesters of Computer Science and Engineering Department. CYBORG is the department association of Department of Computer Science & Engineering. It was established in the year 2010. CYBORG is instrumental in coordinating all the cultural as well as the technical events in the department including the departmental events of ASTRAL the annual Techno – cultural Fest of SBCE.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/departments/activities/cs_dept_event5.1.jpg"
                alt="CYBORG Inauguration 2021 - Image 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/departments/activities/cs_dept_event5.2.jpg"
                alt="CYBORG Inauguration 2021 - Image 2"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ),
      imageAlt: "Computer Science Association (CYBORG) Inauguration"
    }
  ];
  
  // Association data
  const associations = [
    {
      id: 'cyborg',
      title: "CYBORG",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          C
        </div>
      ),
      description: "CYBORG is the department association of Department of Computer Science & Engineering. It was established in the year 2010. CYBORG is instrumental in coordinating all the cultural as well as the technical events in the department including the departmental events of ASTRAL the annual Techno – cultural Fest of SBCE. The association organizes various technical talks, workshops, and competitions to enhance students' knowledge and skills in the field of computer science."
    },
    {
      id: 'csi',
      title: "Computer Society of India",
      logo: (
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white font-bold text-lg">
          CSI
        </div>
      ),
      description: "Computer Society of India is the first and largest body of computer professionals in India. Formed in 1965, the CSI has been instrumental in guiding the Indian IT industry down the right path since its formative years. Today, the CSI has 72 chapters all over India, 511 student branches, and more than 100000 members including India's most famous IT industry leaders, brilliant scientists and dedicated academicians. The wide spectrum of members is committed to the advancement of theory and practice of Computer Engineering and Technology Systems, Science and Engineering, Information Processing and related Arts and Sciences. The Society encourages and assists professionals to maintain integrity and competence of the profession and fosters a sense of partnership amongst members. Besides the activities held at the Chapters and Student Branches, the Society also conducts periodic conferences and seminars. The Computer Society of India Student Branch started its functioning in Sree Buddha College of Engineering in July 2012. In a time span of 9 years since its formation, the branch was instrumental in organizing many technical events including National Conferences, a number of workshops, seminars, technical talks, motivational talks, hackathons etc. In account of the activities conducted by the student branch, the Computer Society of India awarded the CSI Student Branch of SBCE the 'Best Accredited Student Branch' at the National Level in the years 2012 and 2013. It was observed by the award committee that the seminars, workshops, symposiums, National Conference and different expert lectures organized by the SBCE Student Branch has helped in making the students aware of the recent trends in IT field. The Student Branch presently has 122 student members."
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
              Department Of Computer Science And Engineering
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
                  Get involved with our department associations to enhance your skills, network with professionals,
                  and participate in exciting events and competitions. These associations provide valuable opportunities
                  for personal and professional growth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">How to Join CYBORG</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Contact the Department Association Coordinator</li>
                      <li>Fill out the membership form</li>
                      <li>Attend the orientation meeting</li>
                      <li>Pay the membership fee, if applicable</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-2">How to Join CSI</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Apply through the CSI Student Branch</li>
                      <li>Complete the online registration</li>
                      <li>Pay the annual membership fee</li>
                      <li>Receive your membership card</li>
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