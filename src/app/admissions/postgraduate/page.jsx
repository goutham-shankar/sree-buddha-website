"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PostGraduatePage() {
  const [activeTab, setActiveTab] = useState('programs');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // For sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      specialization: 'Embedded Systems',
      description: 'This program focuses on the design and development of hardware and software for embedded systems, IoT devices, and real-time applications.',
      duration: '2 years',
      eligibility: 'B.Tech/BE degree in ECE/AE&I/EEE or CSE',
      careers: ['Embedded Systems Engineer', 'IoT Developer', 'System Architect', 'VLSI Design Engineer'],
      courses: ['Advanced Microprocessors', 'Embedded System Design', 'Real-Time Operating Systems', 'IoT Architecture']
    },
    {
      id: 'btbce',
      name: 'Biotechnology & Biochemical Engineering',
      specialization: '',
      description: 'This program combines principles of biology with engineering to develop innovative solutions in healthcare, agriculture, and environmental sectors.',
      duration: '2 years',
      eligibility: 'B.Tech/BE degree in BT&BCE/Chemical Engineering',
      careers: ['Bioprocess Engineer', 'Research Scientist', 'Biochemical Engineer', 'Pharmaceutical Researcher'],
      courses: ['Bioprocess Engineering', 'Biochemical Reaction Engineering', 'Bioinformatics', 'Downstream Processing']
    },
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      specialization: '',
      description: 'This program offers advanced knowledge in algorithms, artificial intelligence, data science, and software engineering for the evolving tech landscape.',
      duration: '2 years',
      eligibility: 'B.Tech/BE degree CSE/CS/IT',
      careers: ['Software Architect', 'AI Specialist', 'Data Scientist', 'Research Engineer'],
      courses: ['Advanced Algorithms', 'Machine Learning', 'Distributed Computing', 'Advanced Database Systems']
    },
    {
      id: 'me',
      name: 'Mechanical Engineering',
      specialization: 'Computer Integrated Manufacturing',
      description: 'This program focuses on integrating computer systems with manufacturing processes to enhance automation, efficiency, and quality control.',
      duration: '2 years',
      eligibility: 'B.Tech/BE degree in Mechanical Engineering',
      careers: ['Manufacturing Engineer', 'Automation Specialist', 'CAD/CAM Developer', 'Industrial Engineer'],
      courses: ['CAD/CAM', 'Robotics and Automation', 'Advanced Manufacturing Processes', 'Production Planning & Control']
    },
    {
      id: 'ce',
      name: 'Civil Engineering',
      specialization: 'Structural Engineering',
      description: 'This program focuses on advanced structural analysis, design of complex structures, and sustainable building technologies.',
      duration: '2 years',
      eligibility: 'B.Tech/BE degree in Civil Engineering',
      careers: ['Structural Engineer', 'Construction Project Manager', 'Structural Analyst', 'Building Design Consultant'],
      courses: ['Advanced Structural Analysis', 'Earthquake Engineering', 'Design of Steel Structures', 'Finite Element Methods']
    },
    {
      id: 'ee',
      name: 'Electrical Engineering',
      specialization: 'Electrical Machines',
      description: 'This program focuses on advanced electrical machine design, power systems, and renewable energy technologies.',
      duration: '2 years',
      eligibility: 'B.Tech/BE Degree in Electrical & Electronics Engineering',
      careers: ['Power Systems Engineer', 'Electrical Design Engineer', 'Renewable Energy Specialist', 'Research Engineer'],
      courses: ['Advanced Electrical Machines', 'Power Electronics', 'Smart Grid Technology', 'Renewable Energy Systems']
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="font-['Poppins'] text-gray-800 relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="opacity-10">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#73501C"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#73501C] mb-4 leading-tight">
                ADVANCE YOUR <br/>
                <span className="text-amber-600">ENGINEERING CAREER</span>
              </h1>
              <div className="w-32 h-1.5 bg-[#E6B66D] rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Specialized M.Tech programs designed to create industry-ready professionals and innovative researchers. Take your expertise to the next level.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#programs" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('programs');
                    document.getElementById('tabs-section').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-[#E6B66D] to-amber-500 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center"
                >
                  <span className="relative z-10">Explore Programs</span>
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                </a>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsContactFormOpen(true);
                  }}
                  className="px-6 py-3 bg-white border-2 border-[#73501C] rounded-lg text-[#73501C] font-medium hover:bg-amber-50 transition-all duration-300 inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  Contact Admissions
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 absolute -top-8 -left-8"></div>
                <img 
                  src="/images/postgrad-students.png" 
                  alt="Post Graduate Students" 
                  className="relative z-10 w-80 h-auto rounded-lg shadow-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop";
                  }}
                />
                <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg z-20">
                  <div className="text-amber-600 font-bold">GATE Qualified</div>
                  <div className="text-sm text-gray-600">Scholarship Available</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div 
        id="tabs-section"
        className={`bg-white sticky top-0 z-40 shadow-sm transition-all duration-300 ${
          scrollY > 100 ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center">
            <h2 className={`font-bold text-[#73501C] transition-all duration-300 ${
              scrollY > 100 ? "text-lg" : "text-xl"
            }`}>M.Tech Programs</h2>
            
            <div className="hidden md:flex space-x-1 overflow-x-auto scrollbar-hide">
              {['programs', 'eligibility', 'fees', 'documents'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "bg-amber-500 text-white"
                      : "text-gray-600 hover:bg-amber-100"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="md:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="bg-white border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {['programs', 'eligibility', 'fees', 'documents'].map((tab) => (
                  <option key={tab} value={tab}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        {/* Feature Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12"
        >
          {[
            { 
              text: 'NBA Accredited', 
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              description: 'Our programs meet rigorous academic standards set by the National Board of Accreditation.'
            },
            { 
              text: 'Excellent Placement', 
              icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              description: 'Our graduates secure positions in leading companies and research organizations worldwide.'
            },
            { 
              text: 'GATE Scholarship', 
              icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              description: 'GATE qualified students receive monthly stipend of ₹12,400 from AICTE.'
            }
          ].map((item, index) => (
            <motion.a 
              href="#" 
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-amber-100 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300"></div>
              <svg className="w-12 h-12 text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
              </svg>
              <h3 className="font-medium text-lg text-center group-hover:text-amber-600 transition-colors duration-300 mb-2">
                {item.text}
              </h3>
              <p className="text-sm text-center text-gray-600">{item.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Programs Section */}
        {activeTab === 'programs' && (
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 pb-2 border-b-2 border-amber-200 inline-block">Programs Offered</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300 flex flex-col"
                  onClick={() => setSelectedProgram(program)}
                >
                  <div className="h-3 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg text-[#73501C] mb-1">{program.name}</h3>
                    {program.specialization && (
                      <div className="mb-3">
                        <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                          {program.specialization}
                        </span>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm flex-1 mb-4">{program.description.substring(0, 120)}...</p>
                    <div className="mt-auto">
                      <button 
                        className="text-amber-600 font-medium text-sm hover:text-amber-800 flex items-center"
                        onClick={() => setSelectedProgram(program)}
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Application Buttons */}
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-4 md:space-y-0 my-14">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe3RvBGmTslrxDMHBYn0vGufABqCvqUZnumUazbylQZ3J5lgQ/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#E6B66D] to-amber-500 text-center rounded-xl text-white text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Quick Registration
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              </a>
              <a 
                href="/admissions/application-form-mtech" 
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-amber-500 to-[#73501C] text-center rounded-xl text-white text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Online Application Form
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              </a>
            </div>
          </motion.section>
        )}

        {/* Eligibility Criteria */}
        {activeTab === 'eligibility' && (
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">Eligibility Criteria</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>The applicant must be of Indian Nationality.</p>
                    
                    <p>Interested applicants should have completed his/her graduation from an institution affiliated by 
                    AICTE / Deemed Universities in India with a minimum of 60% percentage marks in the qualifying exam (B. Tech).
                    However, SC/ ST candidates have only to pass their respective B. Tech degrees. For SEBC (OBC) candidates, a 
                    minimum requirement of 54% marks in percentage in their B. Tech degree is compulsory.</p>
                    
                    <p>Candidates who have qualified for AMIE / AMIETE exams and satisfy the following conditions will be eligible for admission: A minimum
                    of 55% marks is required for section B in AMIE/AMIETE entrance exam.</p>
                    
                    <p>Candidates appearing for the final semester exam are also eligible to apply, but they must have to pass all 
                    the subjects up to including the 6th-semester exams (8th semester for B. Arch candidates). However, the confirmation of
                    admission of any candidates will be subject to the production of their qualifying
                    degree before the date stipulated by the affiliated University.</p>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
                      <p className="font-medium text-amber-800">Candidates with valid GATE score are eligible for AICTE monthly stipend of ₹12,400.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-lg text-amber-800 mb-4">Admission Timeline</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">1</div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Application Submission</p>
                      <p className="text-sm text-gray-600">May - June 2023</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">2</div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Interview Process</p>
                      <p className="text-sm text-gray-600">July 2023</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">3</div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Admission Confirmation</p>
                      <p className="text-sm text-gray-600">July - August 2023</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">4</div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Academic Session Begins</p>
                      <p className="text-sm text-gray-600">August 2023</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button 
                    onClick={() => {
                      setIsContactFormOpen(true);
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>

            {/* Program Requirements */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Program-Specific Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="font-semibold text-[#73501C] text-lg">
                      {program.name}
                      {program.specialization && <> – {program.specialization}</>}
                    </h3>
                    <p className="text-gray-700 mt-2">{program.eligibility}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Fee Structure */}
        {activeTab === 'fees' && (
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">M.Tech Fee Structure 2023-24</h2>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-amber-500 to-[#73501C] text-white">
                      <th className="border border-gray-300 p-3 text-left rounded-tl-lg">Particulars</th>
                      <th className="border border-gray-300 p-3 text-left rounded-tr-lg">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Tuition Fee', amount: '₹ 35,000 (Per Semester*)' },
                      { name: 'Admission fee', amount: '₹ 500 (One Time)' },
                      { name: 'Caution Deposit', amount: '₹ 2,500 (One Time Refundable)' },
                      { name: 'University Student Administration fee', amount: '₹ 1,000 (One Time)' },
                      { name: 'University Affiliation Fee', amount: '₹ 1,000 (One Time)' },
                      { name: 'University Exam fee', amount: '₹ 1,500 (1st Semester)' },
                      { name: 'University Arts & Sports Fee', amount: '₹ 500 (One Time)' },
                      { name: 'Stationery charges', amount: '₹ 200 (One Time)' },
                      { name: 'PTA', amount: '₹ 2,000 (One Time)' }
                    ].map((fee, index) => (
                      <tr 
                        key={index} 
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white hover:bg-amber-50 transition-colors'}
                      >
                        <td className="border border-gray-300 p-3">{fee.name}</td>
                        <td className="border border-gray-300 p-3">{fee.amount}</td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-amber-100 to-amber-200 font-bold text-[#73501C]">
                      <td className="border border-gray-300 p-3 rounded-bl-lg">Total</td>
                      <td className="border border-gray-300 p-3 rounded-br-lg">₹44,200/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Additional Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Fee structure is subject to revision as per University/Government norms.</li>
                  <li>Hostel and transportation facilities are available at additional cost.</li>
                  <li>GATE qualified students receive a monthly stipend of ₹12,400 from AICTE.</li>
                  <li>Merit scholarships are available for top performing students.</li>
                </ul>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6">Payment Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                    <h4 className="font-medium">Direct Bank Transfer</h4>
                  </div>
                  <p className="text-sm text-gray-600">Transfer the fee amount directly to the college account. Account details will be provided in the admission letter.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <h4 className="font-medium">Demand Draft</h4>
                  </div>
                  <p className="text-sm text-gray-600">Submit a DD drawn in favor of &quot;Sree Buddha College of Engineering&quot; payable at Alappuzha.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h4 className="font-medium">Cash Payment</h4>
                  </div>
                  <p className="text-sm text-gray-600">Pay directly at the college accounts office. A receipt will be provided immediately.</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Documents Required */}
        {activeTab === 'documents' && (
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-amber-200 inline-block">Documents Required for Admission</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Essential Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "GATE Score Card (if applicable) - Original + 2 copies",
                    "B.Tech/BE Degree Certificate - Original + 4 copies",
                    "B.Tech/BE Mark Lists (All Semesters) - Original + 4 copies",
                    "Transfer Certificate - Original + 1 copy",
                    "Course & Conduct Certificate - Original",
                    "Migration Certificate (for universities outside Kerala) - Original",
                    "SSLC / 10th Certificate - Original + 2 copies",
                    "Plus 2 / 12th Certificate - Original + 2 copies",
                    "Valid Photo ID Proof (Aadhaar/Passport/Voter ID) - Original + 1 copy",
                    "Medical Fitness Certificate (in prescribed format) - Original"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span className="ml-2 text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Additional Requirements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Photographs: Passport Size (6 Nos) & Stamp Size (3 Nos)",
                    "Community Certificate (for Reservation Categories) + 2 copies",
                    "Income Certificate (for Fee Concessions) - Original + 1 copy",
                    "Physical Fitness Certificate from a Govt. Medical Officer",
                    "Anti-ragging Affidavit (as per UGC norms)",
                    "Character Certificate from previous institution"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span className="ml-2 text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Important Note
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  <li>All original documents will be returned after verification.</li>
                  <li>Documents in languages other than English must be accompanied by notarized English translations.</li>
                  <li>Incomplete applications will not be processed.</li>
                  <li>The institution reserves the right to verify the authenticity of all submitted documents.</li>
                </ul>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    // You can add document download functionality here
                    alert("Document checklist will be downloaded");
                  }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download Checklist
                </a>
                <button 
                  className="px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors flex items-center justify-center"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Need Help?
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8 shadow-md"
        >
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Contact Information</h3>
          <p className="flex items-center mb-2">
            <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            For admissions: <a href="tel:9446014317" className="font-medium text-amber-700 hover:underline"> 8590332548</a> (PRO)
          </p>
          {/* <p className="flex items-center">
            <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Email: <a href="mailto:admissions@sbce.ac.in" className="font-medium text-amber-700 hover:underline">admissions@sbce.ac.in</a>
          </p> */}
        </motion.div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-[#73501C] py-10 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-8 opacity-90">Take the next step towards becoming a specialized professional with our M.Tech programs.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/admissions/application-form-mtech" 
              className="inline-block px-8 py-3 bg-white text-[#73501C] rounded-lg font-medium hover:bg-amber-100 transition-colors duration-300 shadow-lg"
            >
              Apply Today
            </a>
            <button 
              onClick={() => {
                document.getElementById('tabs-section').scrollIntoView({ behavior: 'smooth' });
                setActiveTab('programs');
              }}
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProgram(null)}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#73501C] mb-1">
                    {selectedProgram.name}
                  </h3>
                  {selectedProgram.specialization && (
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {selectedProgram.specialization}
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-700 mb-6">{selectedProgram.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Program Duration</h4>
                    <p>{selectedProgram.duration}</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Eligibility</h4>
                    <p>{selectedProgram.eligibility}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-[#73501C] mb-3">Key Courses</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProgram.courses.map((course, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-[#73501C] mb-3">Career Opportunities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProgram.careers.map((career, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href={`/admissions/application-form-mtech?program=${selectedProgram.id}`}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-[#73501C] text-white font-medium py-2 px-4 rounded-lg text-center hover:opacity-90 transition-opacity"
                >
                  Apply for this Program
                </a>
                {/* <button 
                  onClick={() => {
                    setSelectedProgram(null);
                    setIsContactFormOpen(true);
                  }}
                  className="flex-1 border-2 border-amber-600 text-amber-600 font-medium py-2 px-4 rounded-lg text-center hover:bg-amber-50 transition-colors"
                >
                  Request Information
                </button> */}
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setIsContactFormOpen(false)}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#73501C]">Contact Admissions</h3>
                <button 
                  onClick={() => setIsContactFormOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option value="">Select a program</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.name} {program.specialization ? `- ${program.specialization}` : ''}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#E6B66D] to-amber-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-center text-gray-600">
                  Or call us directly at <a href="tel:9446014317" className="font-medium text-amber-700">9446014317</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Add custom animation for button shine effect */}
      <style jsx>{`
        @keyframes shine {
          from {left: -100%;}
          to {left: 100%;}
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}