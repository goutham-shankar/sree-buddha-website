"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './res';

// Move undergraduatePrograms outside of the component
const undergraduatePrograms = [
  { title: "Civil Engineering" },
  { title: "Computer Science & Engineering" },
  { title: "Electronics & Communication Engineering" },
  { title: "Electrical & Electronics Engineering" },
  { title: "Mechanical Engineering" },
  { title: "Biotechnology & Biochemical Engineering" },
  { title: "Food Technology" },
  { title: "Computer Science & Engineering (AI & ML)" },
  { title: "Electronics and Computer Engineering" }
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('btech');
  const [expandedCard, setExpandedCard] = useState(null);

  // B.Tech Programs Data
  const btechPrograms = [
    {
      id: "civil",
      title: "Civil Engineering",
      description: "Design, construction, and maintenance of the physical and natural built environment.",
      icon: "🏗️",
      details: "Civil Engineering at Sree Buddha College offers comprehensive training in structural design, environmental engineering, transportation systems, and construction management. Our students get hands-on experience through field trips and industry collaborations.",
      intake: 60,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics"
    },
    {
      id: "cse",
      title: "Computer Science & Engineering",
      description: "Study of computers and computational systems including software design and development.",
      icon: "💻",
      details: "Our Computer Science & Engineering program emphasizes both theoretical foundations and practical applications. Students work on real-world projects in areas like software development, data analytics, cybersecurity, and more.",
      intake: 240,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics"
    },
    {
      id: "ece",
      title: "Electronics & Communication Engineering",
      description: "Design and development of electronic devices, circuits, communication equipment and systems.",
      icon: "📡",
      details: "ECE program offers specialization in communication systems, VLSI design, signal processing, and embedded systems. Our well-equipped laboratories provide practical exposure to various domains of electronics.",
      intake: 60,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics"
    },
    {
      id: "eee",
      title: "Electrical & Electronics Engineering",
      description: "Study of electrical systems, electronics, and power engineering principles.",
      icon: "⚡",
      details: "Our EEE program covers power systems, control engineering, electric drives, and renewable energy. The curriculum is designed with industry needs in focus, emphasizing practical skills and problem-solving.",
      intake: 30,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics"
    },
    {
      id: "mech",
      title: "Mechanical Engineering",
      description: "Design, analysis, and manufacturing of mechanical systems.",
      icon: "⚙️",
      details: "Mechanical Engineering at Sree Buddha covers thermodynamics, manufacturing processes, CAD/CAM, robotics, and material science. Our workshops and labs offer practical training on industry-standard equipment.",
      intake: 60,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics"
    },
    {
      id: "biotech",
      title: "Biotechnology & Biochemical Engineering",
      description: "Application of engineering principles to biological and chemical processes.",
      icon: "🧬",
      details: "Our Biotechnology program integrates engineering with biological sciences, covering bioprocess engineering, genetic engineering, and pharmaceutical technology with state-of-the-art laboratory facilities.",
      intake: 30,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Biology/Mathematics"
    },
    {
      id: "food",
      title: "Food Technology",
      description: "Study of food science, processing, preservation, and packaging technologies.",
      icon: "🍲",
      details: "Food Technology program focuses on food processing, preservation, quality control, and product development with hands-on experience in our modern food processing and analysis laboratories.",
      intake: 30,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics/Biology"
    },
    {
      id: "cseai",
      title: "Computer Science & Engineering (AI & ML)",
      description: "Advanced computer science with focus on artificial intelligence and machine learning.",
      icon: "🤖",
      details: "This specialized program offers in-depth study of AI algorithms, machine learning models, neural networks, and data science with practical applications and industry partnerships.",
      intake: 60,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics",
      isNew: true
    },
    {
      id: "ece_comp",
      title: "Electronics and Computer Engineering",
      description: "Integration of electronics engineering with computer systems.",
      icon: "🔌",
      details: "This interdisciplinary program bridges electronic hardware and computer software, covering embedded systems, IoT, computer architecture, and digital design with practical projects.",
      intake: 30,
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chemistry and Mathematics",
      isNew: true
    }
  ];


  // M.Tech Programs Data
  const mtechPrograms = [
    {
      id: "mtech_ece",
      title: "Electronics & Communication Engineering",
      description: "Specialization: Embedded Systems",
      icon: "🛰️",
      details: "This M.Tech program focuses on advanced embedded systems design, real-time operating systems, and IoT applications with research opportunities and industry collaborations.",
      intake: 24,
      duration: "2 Years",
      eligibility: "B.Tech/B.E in ECE or equivalent"
    },
    {
      id: "mtech_biotech",
      title: "Biotechnology and Biochemical Engineering",
      description: "Advanced research and application in biotechnology.",
      icon: "🔬",
      details: "Our M.Tech in Biotechnology program emphasizes research in biopharmaceuticals, environmental biotechnology, and genetic engineering with modern laboratory facilities.",
      intake: 18,
      duration: "2 Years",
      eligibility: "B.Tech/B.E in Biotechnology, Biochemical Engineering or equivalent"
    },
    {
      id: "mtech_cse",
      title: "Computer Science and Engineering",
      description: "Advanced study in computer science and software engineering.",
      icon: "🖥️",
      details: "This program covers advanced algorithms, distributed systems, AI, and cybersecurity with opportunities for specialization and research in cutting-edge fields.",
      intake: 24,
      duration: "2 Years",
      eligibility: "B.Tech/B.E in CSE or equivalent"
    },
    {
      id: "mtech_mech",
      title: "Mechanical Engineering",
      description: "Specialization: Computer Integrated Manufacturing",
      icon: "🔧",
      details: "This M.Tech specialization focuses on CAD/CAM, automation, industrial robotics, and smart manufacturing with industry-relevant projects and training.",
      intake: 24,
      duration: "2 Years",
      eligibility: "B.Tech/B.E in Mechanical Engineering or equivalent"
    },
    {
      id: "mtech_civil",
      title: "Civil Engineering",
      description: "Specialization: Structural Engineering",
      icon: "🌉",
      details: "Our Structural Engineering specialization covers advanced structural analysis, earthquake engineering, and structural optimization with research opportunities.",
      intake: 24,
      duration: "2 Years",
      eligibility: "B.Tech/B.E in Civil Engineering or equivalent"
    },
    {
      id: "mtech_eee",
      title: "Electrical Engineering",
      description: "Specialization: Electrical Machines",
      icon: "⚡",
      details: "This program specializes in electrical machine design, power electronics, drives, and renewable energy systems with advanced laboratory facilities.",
      intake: 18,
      duration: "2 Years",
      eligibility: "B.Tech/B.E in EEE or equivalent"
    }
  ];

  // Card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">

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
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Academic Programs</h1>
            <p className="text-xl md:text-2xl text-yellow-100">Shaping Tomorrow&apos;s Leaders in Engineering and Technology</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button onClick={() => setActiveTab('btech')} className="px-6 py-3 bg-white text-yellow-900 rounded-md font-medium hover:bg-yellow-50 transition-colors">
                B.Tech Programs
              </button>
              <button onClick={() => setActiveTab('mtech')} className="px-6 py-3 bg-yellow-800 text-white rounded-md font-medium hover:bg-yellow-700 transition-colors">
                M.Tech Programs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('btech')}
                className={`px-5 py-3 text-sm font-medium rounded-l-lg ${activeTab === 'btech'
                  ? 'bg-yellow-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  } focus:z-10 focus:outline-none transition-colors`}
              >
                B.Tech Programs
              </button>
              <button
                onClick={() => setActiveTab('mtech')}
                className={`px-5 py-3 text-sm font-medium rounded-r-lg ${activeTab === 'mtech'
                  ? 'bg-yellow-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  } focus:z-10 focus:outline-none transition-colors`}
              >
                M.Tech Programs
              </button>
            </div>
          </div>

          {/* B.Tech Programs */}
          {activeTab === 'btech' && (
            <div className="space-y-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Bachelor of Technology</h2>
                <p className="text-gray-600">
                  Our B.Tech programs offer comprehensive engineering education with a focus on practical skills,
                  industry-relevant knowledge, and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {btechPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setExpandedCard(expandedCard === program.id ? null : program.id)}
                    className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${expandedCard === program.id ? 'ring-2 ring-yellow-500' : 'hover:shadow-lg hover:translate-y-[-5px]'
                      } cursor-pointer`}
                  >
                    <div className="px-6 pt-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center">
                          <span className="mr-2 text-2xl">{program.icon}</span>
                          {program.title}
                        </h3>
                        {program.isNew && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>

                      {expandedCard === program.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 border-t pt-4"
                        >
                          <p className="text-gray-700 mb-4">{program.details}</p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500">INTAKE</h4>
                              <p className="text-gray-900">{program.intake} seats</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500">DURATION</h4>
                              <p className="text-gray-900">{program.duration}</p>
                            </div>
                            <div className="col-span-2">
                              <h4 className="text-sm font-semibold text-gray-500">ELIGIBILITY</h4>
                              <p className="text-gray-900">{program.eligibility}</p>
                            </div>
                            <button
                            className="bg-yellow-900 text-white px-3 py-2 text-sm rounded-md hover:bg-yellow-800 transition-colors"
                            onClick={() => {
                              window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdZkVC3f7rIeBlkVnW-One8uC1NnsHxQZtK013KVjP7ZKxzxg/viewform";
                            }}
                          >
                            Apply Now
                          </button>
                          </div>
                         

                        </motion.div>
                      )}

                      <div className="flex justify-center mt-4 space-x-4">
                        <button className="text-yellow-900 font-medium text-sm hover:text-yellow-700 focus:outline-none flex items-center space-x-1">
                          <span>{expandedCard === program.id ? "Show Less" : "Learn More"}</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${expandedCard === program.id ? 'rotate-180' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>

                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 rounded-lg shadow-sm mt-12 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-2">B.Tech Admission Criteria</h3>
                <p className="text-red-600 font-medium">Merit is the only criterion for selection. No capitation fee is levied.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">Eligibility</h4>
                    <p className="text-gray-700">Pass in Plus Two examination with Mathematics, Physics and Chemistry or equivalent examination with minimum 45% marks.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">Selection Process</h4>
                    <p className="text-gray-700">Selection is based on entrance examination conducted by Commissioner for Entrance Examinations, Government of Kerala.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* M.Tech Programs */}
          {activeTab === 'mtech' && (
            <div className="space-y-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Master of Technology</h2>
                <p className="text-gray-600">
                  Our M.Tech programs provide advanced knowledge and research opportunities in specialized engineering domains.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mtechPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setExpandedCard(expandedCard === program.id ? null : program.id)}
                    className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${expandedCard === program.id ? 'ring-2 ring-yellow-500' : 'hover:shadow-lg hover:translate-y-[-5px]'
                      } cursor-pointer`}
                  >
                    <div className="px-6 pt-6 pb-4">
                      <div className="flex items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center">
                          <span className="mr-2 text-2xl">{program.icon}</span>
                          {program.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>

                      {expandedCard === program.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 border-t pt-4"
                        >
                          <p className="text-gray-700 mb-4">{program.details}</p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500">INTAKE</h4>
                              <p className="text-gray-900">{program.intake} seats</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500">DURATION</h4>
                              <p className="text-gray-900">{program.duration}</p>
                            </div>
                            <div className="col-span-2">
                              <h4 className="text-sm font-semibold text-gray-500">ELIGIBILITY</h4>
                              <p className="text-gray-900">{program.eligibility}</p>
                            </div>
                            <button
  className="bg-yellow-900 text-white px-3 py-2 text-sm rounded-md hover:bg-yellow-800 transition-colors"
  onClick={() => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSe3RvBGmTslrxDMHBYn0vGufABqCvqUZnumUazbylQZ3J5lgQ/viewform";
  }}
>
  Apply Now
</button>

                          </div>
                          
                        </motion.div>
                      )}

                      <div className="flex justify-center mt-4 space-x-4">
                        <button className="text-yellow-900 font-medium text-sm hover:text-yellow-700 focus:outline-none flex items-center space-x-1">
                          <span>{expandedCard === program.id ? "Show Less" : "Learn More"}</span>
                          <svg
                            className={`w-4 h-4 transition-transform ${expandedCard === program.id ? 'rotate-180' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 rounded-lg shadow-sm mt-12 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-2">M.Tech Admission Criteria</h3>
                <p className="text-red-600 font-medium">Merit is the only criterion for selection. No capitation fee is levied.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">Eligibility</h4>
                    <p className="text-gray-700">B.Tech/B.E. degree in respective or equivalent discipline with minimum 60% marks (CGPA 6.5).</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2">Selection Process</h4>
                    <p className="text-gray-700">Selection is based on GATE score and/or entrance examination conducted by DTE, Kerala.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}