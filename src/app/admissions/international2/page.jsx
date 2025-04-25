'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Page() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Images for the slider
  const sliderImages = [
    {
      src: "/images/college-main.jpg",
      alt: "SBCE Main Building",
      title: "Main Campus Building",
      description: "Our iconic main building featuring modern architecture"
    },
    {
      src: "/images/college-lab.jpg",
      alt: "Advanced Research Lab",
      title: "Research Facilities",
      description: "State-of-the-art laboratories for hands-on learning"
    },
    {
      src: "/images/college-campus.jpg",
      alt: "Campus Life",
      title: "Campus Life",
      description: "Vibrant campus atmosphere with modern amenities"
    }
  ];

  // Undergraduate programs data
  const undergraduatePrograms = [
    {
      title: "Computer Science and Engineering",
      duration: "4 Years • B.E.",
      description: "Study of computing technologies, programming languages, algorithm design, and system architecture with a focus on software development and artificial intelligence.",
      icon: "💻",
      intake: 120,
      fees: "$8,000 per year",
      eligibility: "60% in Math, Physics, and Chemistry at 10+2 level"
    },
    {
      title: "Electronics and Communication",
      duration: "4 Years • B.E.",
      description: "Focus on electronic devices, circuits, communication equipment, signal processing, and telecommunications systems design.",
      icon: "📡",
      intake: 60,
      fees: "$7,500 per year",
      eligibility: "60% in Math, Physics, and Chemistry at 10+2 level"
    },
    {
      title: "Electrical and Electronics",
      duration: "4 Years • B.E.",
      description: "Study of electrical systems, power generation, transmission, and electronics with applications in renewable energy and smart grid technologies.",
      icon: "⚡",
      intake: 60,
      fees: "$7,500 per year",
      eligibility: "60% in Math, Physics, and Chemistry at 10+2 level"
    },
    {
      title: "Mechanical Engineering",
      duration: "4 Years • B.E.",
      description: "Design and analysis of mechanical systems, thermodynamics, fluid mechanics, and manufacturing technologies.",
      icon: "⚙️",
      intake: 120,
      fees: "$7,500 per year",
      eligibility: "60% in Math, Physics, and Chemistry at 10+2 level"
    },
    {
      title: "Civil Engineering",
      duration: "4 Years • B.Tech",
      description: "Focus on structural engineering, transportation, environmental systems, and construction management for sustainable infrastructure.",
      icon: "🏗️",
      intake: 60,
      fees: "$7,500 per year",
      eligibility: "60% in Math, Physics, and Chemistry at 10+2 level"
    },
    {
      title: "Bio Technology And Bio Chemical Engineering",
      duration: "4 Years • B.Tech",
      description: "Application of engineering principles to biological processes with focus on healthcare, pharmaceuticals, and sustainable technologies.",
      icon: "🧬",
      intake: 60,
      fees: "$8,000 per year",
      eligibility: "60% in Math, Physics, and Chemistry/Biology at 10+2 level"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const openProgramDetails = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-yellow-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          <img
            src="https://sbce.ac.in/assets/images/profile_pic.png"
            alt="International Students"
            fill
            className="object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop";
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">International Admissions</h1>
            <p className="text-xl text-yellow-100">
              Begin your global engineering journey with Sree Buddha College of Engineering.
              Join our diverse community of learners and innovators.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#programs"
                className="px-6 py-3 bg-white text-yellow-900 font-medium rounded-md hover:bg-yellow-50 transition-all shadow-md"
              >
                Explore Programs
              </a>
              <a
                href="#apply"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Welcome to SBCE International
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              SBCE welcomes international students and NRI candidates to its various undergraduate
              and postgraduate programs. The admission process is designed to be straightforward
              and student-friendly for applicants from around the world.
            </motion.p>
          </div>
        </div>
      </section>


      {/* Why Choose SBCE Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose SBCE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Globally Recognized Curriculum",
                description: "As an autonomous institution, affiliated to APJ Abdul Kalam Technological University, our programs are designed to meet international educational and industry standards."
              },
              {
                icon: "🔬",
                title: "State-of-the-Art Facilities",
                description: "Well-equipped laboratories, research centers, and smart classrooms provide an excellent learning environment."
              },
              {
                icon: "👨‍🏫",
                title: "Experienced Faculty",
                description: "Learn from highly qualified professors with industry and research expertise."
              },
              {
                icon: "🏢",
                title: "Industry Exposure",
                description: "Internships, industrial collaborations, and global exchange programs enrich the student experience."
              },
              {
                icon: "🌎",
                title: "Diverse Campus Culture",
                description: "A multicultural student community fosters global perspectives and networking opportunities."
              },
              {
                icon: "💰",
                title: "Affordable Education",
                description: "High-quality education at competitive tuition fees compared to many Western countries."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-900 to-yellow-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Eligibility Criteria</h2>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-100">
              For Undergraduate Programs (B.E. / B.Tech)
            </h3>

            <ul className="space-y-4">
              {[
                "A pass in 10+2 (Grade XII) or equivalent examination with Mathematics, Physics and Chemistry",
                "Minimum aggregate of 60% in Mathematics, Physics and Chemistry",
                "Valid SAT scores"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <svg className="w-6 h-6 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <button
                onClick={() => window.location.href = "#apply"}
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-md transition-colors"
              >
                Check Your Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Programs</h2>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Explore our comprehensive range of globally recognized engineering programs
            designed for international students
          </p>

          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-900 text-white flex items-center justify-center text-xl">
                🎓
              </div>
              <h3 className="text-2xl font-bold text-yellow-900 ml-3">Undergraduate Programs</h3>
            </div>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
              Four-year B.E. / B.Tech programs designed to create industry-ready engineers
              with global opportunities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {undergraduatePrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                  onClick={() => openProgramDetails(program)}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{program.icon}</span>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{program.title}</h4>
                        <span className="text-sm text-yellow-800">{program.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{program.description}</p>
                    <div className="flex justify-end">
                      <button
                        className="text-yellow-900 font-medium flex items-center hover:text-yellow-700"
                      >
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Required Documents</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "📝", title: "Completed Application Form" },
              { icon: "🎓", title: "Academic Transcripts" },
              { icon: "📊", title: "SAT/GRE/GMAT Scores" },
              { icon: "🛂", title: "Passport Copy" },
              { icon: "🔤", title: "English Proficiency Test Scores" },
              { icon: "📋", title: "Statement of Purpose" }
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 text-center flex flex-col items-center hover:bg-yellow-50 transition-colors"
              >
                <span className="text-4xl mb-3">{doc.icon}</span>
                <span className="text-sm text-gray-800 font-medium">{doc.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="px-6 py-3 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Document Checklist
            </a>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Application Process</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-600"></div>

              {/* Timeline items */}
              {[
                {
                  title: "Submit Application",
                  description: "Complete the online application form with all required details and upload necessary documents.",
                  icon: "📋"
                },
                {
                  title: "Application Review",
                  description: "Our admissions team will review your application and academic credentials.",
                  icon: "🔍"
                },
                {
                  title: "Selection & Offer Letter",
                  description: "Selected candidates will receive an official offer letter from the institution.",
                  icon: "✉️"
                },
                {
                  title: "Fee Payment",
                  description: "Pay the applicable fees as mentioned in your offer letter to secure your seat.",
                  icon: "💳"
                },
                {
                  title: "Visa Process",
                  description: "Apply for a student visa with your offer letter and other required documents.",
                  icon: "🛂"
                },
                {
                  title: "Welcome to SBCE",
                  description: "Arrive on campus for orientation and begin your exciting academic journey with us!",
                  icon: "🎉"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="w-full md:w-1/2 flex-grow"></div>

                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-yellow-900 text-white flex items-center justify-center z-10">
                    <span className="text-lg">{step.icon}</span>
                  </div>

                  <div className={`w-full md:w-1/2 py-4 px-6 md:px-12 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}>
                    <h3 className="text-xl font-bold text-yellow-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="apply" className="py-16 bg-yellow-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-yellow-100 mb-8">
                  Our international admissions team is ready to assist you with any
                  questions you may have about studying at SBCE. Reach out to us
                  for personalized guidance.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a href="mailto:principal@sbce.ac.in" className="text-yellow-200 hover:text-white transition-colors">
                        principal@sbce.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <a href="tel:+918590332548" className="text-yellow-200 hover:text-white transition-colors">
                        +91 85903 32548
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-yellow-200">
                        Sree Buddha College of Engineering<br />
                        Pattoor, P.O, Nooranad, Padanilam<br />
                        Kerala, 690529, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 text-gray-900">
                <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                      <option value="">Select your country</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="KSA">Saudi Arabia</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Oman">Oman</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                      <option value="">Select a program</option>
                      {undergraduatePrograms.map((program, index) => (
                        <option key={index} value={program.title}>{program.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-yellow-900 text-white font-medium rounded-md hover:bg-yellow-800 transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Modal */}
      {showModal && selectedProgram && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="text-3xl mr-3">{selectedProgram.icon}</span>
                    {selectedProgram.title}
                  </h3>
                  <p className="text-yellow-800">{selectedProgram.duration}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">{selectedProgram.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Intake</h4>
                    <p>{selectedProgram.intake} students</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Fees (International)</h4>
                    <p>{selectedProgram.fees}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Eligibility</h4>
                <p>{selectedProgram.eligibility}</p>

                <h4 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Key Subjects</h4>
                <ul>
                  <li>Engineering Mathematics</li>
                  <li>Core Domain Subjects</li>
                  <li>Technical Communication</li>
                  <li>Laboratory and Project Work</li>
                </ul>

                <h4 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Career Opportunities</h4>
                <p>Graduates can pursue careers in various multinational companies, research institutions, or pursue higher studies abroad. The program provides a strong foundation for global career opportunities.</p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    setShowModal(false);
                    document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors"
                >
                  Apply for this Program
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Page;