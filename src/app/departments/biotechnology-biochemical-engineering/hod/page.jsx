"use client"

import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animated Section Component
const AnimatedSection = memo(({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
));
AnimatedSection.displayName = 'AnimatedSection';

// Profile Image Component with hover effect
const ProfileImage = memo(({ name, title, imagePath }) => (
  <motion.div
    className="relative group"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="overflow-hidden rounded-2xl shadow-2xl">
      <div className="w-full h-[400px] relative">
        <Image
          src={imagePath}
          alt={name}
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-xl mt-2 text-gray-200">{title}</p>
      </div>
    </div>
  </motion.div>
));
ProfileImage.displayName = 'ProfileImage';

// Info Card Component
const InfoCard = memo(({ title, children, icon }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    {children}
  </motion.div>
));
InfoCard.displayName = 'InfoCard';

// Timeline Item Component
const TimelineItem = memo(({ period, role }) => (
  <motion.div
    className="relative pl-8 pb-6 border-l-2 border-yellow-900 last:pb-0"
    whileHover={{ x: 5 }}
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-900 rounded-full" />
    <p className="text-yellow-900 font-semibold">{period}</p>
    <p className="text-gray-700 mt-1">{role}</p>
  </motion.div>
));
TimelineItem.displayName = 'TimelineItem';

export default function ComputerScienceDepartmentHod() {
  const [activeTab, setActiveTab] = useState('education');

  const profileData = {
    name: 'Ms. Meera Bai S',
    title: 'HOD - Biotechnology and Biochemical Engineering Department',
    imagePath: '/assets/images/departments/KBZ-224-01.jpg',
    email: 'bt.meerabai@sbcemail.in',
    phone: '9446589673'
  };

  const tabData = {
    education: {
      icon: <svg className="w-6 h-6 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>,
      content: [
        'B.Tech in Chemical Engineering - TKM College of Engineering, University of Kerala (1990) - Fourth Rank',
        'M.Tech in Biotechnology and Biochemical Engineering - University of Kerala (2012)',
        'Advanced Post Graduate Diploma in Computer Applications - IGNOU',
        'Ph.D in Biotechnology (Pursuing)'
      ]
    },
    experience: {
      icon: <svg className="w-6 h-6 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      timeline: [
        { period: 'Present', role: 'HOD, Department of Biotechnology and Biochemical Engineering, Sree Buddha College of Engineering' },
        { period: '2007 - Present', role: 'Faculty, Sree Buddha College of Engineering' },
        { period: 'Previous', role: 'District Coordinator, Science and Technology Entrepreneurship Development Project' },
        { period: 'Previous', role: 'Guest Lecturer, Department of Polymer Science and Rubber Technology, University College of Engineering, Thodupuzha' },
        { period: 'Previous', role: 'Engineer Executive, MAS Combustible Pack Ltd., Palakkad' },
        { period: 'Previous', role: 'Apprentice, Fertilizers and Chemicals Limited, Cochin Division' }
      ]
    },
    research: {
      icon: <svg className="w-6 h-6 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>,
      achievements: [
        'Published 8 papers in different journals and conferences',
        '14 years of teaching experience',
        '6 years of industrial experience',
        '9 years of project consultancy experience',
        'Lifetime member : Biotech Research Society of India  (BRSI)',
        'Lifetime member of IIChE (Indian Institute of Chemical Engineers)'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-900 opacity-10 pattern-diagonal-lines pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Biotechnology and Biochemical Engineering
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <ProfileImage {...profileData} />

              {/* Contact Card */}
              <motion.div
                className="mt-6 bg-white rounded-2xl p-6 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href={`mailto:${profileData.email}`} className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {profileData.email}
                  </a>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {profileData.phone}
                  </div>

                  {/* Professional Membership section */}
                  <div className="flex flex-col md:flex-col md:items-center text-gray-700 mt-2 space-y-3 md:space-y-0">
  <div className="flex items-center">
    
    <span>Lifetime Member: IIChE (Indian Institute of Chemical Engineers)</span>
  </div>
  
  <div className="flex items-center  mt-8">
    
    <span className='mt-4'>Lifetime member: Biotech Research Society of India (BRSI)</span>
  </div>
</div></div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.4}>
              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
                {Object.keys(tabData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${activeTab === tab
                      ? 'bg-yellow-900 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {activeTab === 'education' && (
                  <InfoCard title="Education" icon={tabData.education.icon}>
                    <ul className="space-y-4">
                      {tabData.education.content.map((edu, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 mt-2 mr-3 bg-yellow-900 rounded-full" />
                          <span className="text-gray-700">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </InfoCard>
                )}

                {activeTab === 'experience' && (
                  <InfoCard title="Professional Experience" icon={tabData.experience.icon}>
                    <div className="mt-6">
                      {tabData.experience.timeline.map((exp, index) => (
                        <TimelineItem key={index} {...exp} />
                      ))}
                    </div>
                    <div className="mt-6 text-gray-700">
                      <p>Ms. Meera Bai S has 20 years of teaching experience.</p>
                    </div>
                  </InfoCard>
                )}

                {activeTab === 'research' && (
                  <InfoCard title="Research &amp; Achievements" icon={tabData.research.icon}>
                    <ul className="space-y-4">
                      {tabData.research.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 mt-2 mr-3 bg-yellow-900 rounded-full" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </InfoCard>
                )}
              </motion.div>

              {/* Bio Section */}
              <motion.div
                className="mt-8 bg-white rounded-2xl p-6 shadow-xl"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-4">Biography</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    With over 20 years of teaching experience, 3 years in the industry, and 9 years in project consultancy, Prof. Meera Bai has a rich professional background. Her career includes roles as an engineer executive at MAS Combustible Pack Ltd., Palakkad, and district coordinator for the Science and Technology Entrepreneurship project. She joined Sree Buddha College of Engineering in July 2007 and has since played a key role in academic leadership.
                  </p>
                  <p>
                    An active researcher, she has published eight journal papers, contributed a book chapter, and secured student project funding from KTU and ANERT. A lifetime member of IIChE and BRSI, Prof. Meera Bai also serves on KTU&apos;s Board of Studies and key academic committees, including syllabus revision, examination, and valuation boards.
                  </p>
                  <p>
                    She also held additional responsibilities as Deputy Warden of the Ladies Hostel, Examination Cell Coordinator, and Innovation and Entrepreneurship Development Cell Coordinator. She has attended over 65 training programs and conferences and organized several national and international events, significantly contributing to biotechnology education and research.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}