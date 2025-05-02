"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaLinkedin, FaResearchgate, FaGoogle } from "react-icons/fa";
import { FiLoader, FiMail, FiPhone, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";

function Principal() {
  const [principalData, setPrincipalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [expandedBio, setExpandedBio] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  
  const bioRef = useRef(null);
  const achievementsRef = useRef(null);
  const publicationsRef = useRef(null);
  
  const controls = useAnimation();
  const isInView = useInView(bioRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    const fetchPrincipalData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI}/api/principal?populate=*`
        );
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setPrincipalData(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching principal data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPrincipalData();
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-yellow-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <FiLoader className="text-5xl mb-4" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg"
        >
          Loading principal information...
        </motion.p>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 border-l-4 border-red-500 p-8 text-center rounded-lg my-8 max-w-2xl mx-auto shadow-lg"
      >
        <h2 className="text-2xl font-bold text-red-700">Oops!</h2>
        <p className="my-4">We couldn't load the principal's information.</p>
        <p className="text-sm text-gray-600 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            ↻
          </motion.span>
          Try Again
        </button>
      </motion.div>
    );
  }

  const renderContent = (content, limit = false) => {
    if (!content) return null;
    
    // Split content into paragraphs
    const paragraphs = content.split(/\n+/);
    
    // If limit is true and not expanded, show only first paragraph
    const displayParagraphs = (limit && !expandedBio) 
      ? paragraphs.slice(0, 1) 
      : paragraphs;
    
    return displayParagraphs.map((paragraph, index) => (
      <motion.p 
        key={index}
        custom={index}
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="my-4 leading-7 text-justify text-gray-700"
      >
        {paragraph}
      </motion.p>
    ));
  };

  // Mocked publications data (replace with API data when available)
  const publications = [
    "Research paper on Advanced Engineering Materials and Design (International Journal of Engineering, 2022)",
    "Innovations in Mechanical Engineering Education (Engineering Education Journal, 2021)",
    "Sustainable Engineering Practices in Kerala (Journal of Sustainable Development, 2020)"
  ];

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section with Animation */}
      <motion.div 
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-yellow-900 mb-2">The Principal</h1>
        <div className="h-1 w-36 bg-gradient-to-r from-transparent via-yellow-900 to-transparent mx-auto"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Profile Image with Interactive Effects */}
        <motion.div 
          className="lg:w-1/3 relative rounded-lg overflow-hidden shadow-xl group mx-auto lg:mx-0 max-w-md"
          whileHover={{ scale: 1.02 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-w-3 aspect-h-4 bg-gray-100">
            {principalData?.Principal_image?.url ? (
              <img 
                src={`${process.env.NEXT_PUBLIC_STRAPI}${principalData.Principal_image.url}`} 
                alt={principalData.Principal_Name || "Principal"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <img 
                src="/images/principal.png" 
                alt="Principal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>
          
          {/* Profile Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/95 via-yellow-900/85 to-transparent text-white p-6 transform translate-y-0 lg:translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-semibold mb-1">{principalData.Principal_Name || "Dr. K Krishnakumar"}</h3>
            <p className="text-yellow-100 font-light mb-4">The Principal</p>
            
            {/* Contact Links that Appear on Hover */}
            <div className="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-2">
              <a href="mailto: principal@sbce.ac.in" className="text-white hover:text-yellow-200 flex items-center gap-2 text-sm">
                <FiMail /> principal@sbce.ac.in
              </a>
              <a href="tel:+91-1234567890" className="text-white hover:text-yellow-200 flex items-center gap-2 text-sm">
                <FiPhone /> +91-1234-567890
              </a>
              <div className="flex gap-3 pt-2">
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                  <FaLinkedin className="text-white" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                  <FaResearchgate className="text-white" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                  <FaGoogle className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-2/3"
          ref={bioRef}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tabbed Navigation */}
          <div className="flex border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-4 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'about' 
                  ? 'text-yellow-900 border-b-2 border-yellow-900' 
                  : 'text-gray-500 hover:text-yellow-700'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'achievements' 
                  ? 'text-yellow-900 border-b-2 border-yellow-900' 
                  : 'text-gray-500 hover:text-yellow-700'
              }`}
            >
              Achievements
            </button>
            <button 
              onClick={() => setActiveTab('publications')}
              className={`px-4 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'publications' 
                  ? 'text-yellow-900 border-b-2 border-yellow-900' 
                  : 'text-gray-500 hover:text-yellow-700'
              }`}
            >
              Publications
            </button>
          </div>

          {/* Tab Content - About */}
          {activeTab === 'about' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border-l-4 border-yellow-900 pl-4 mb-6">
                <h2 className="text-3xl font-semibold text-yellow-900 mb-1">{principalData.Principal_Name || "Dr. K Krishnakumar"}</h2>
                <p className="text-lg text-gray-600 italic">The Principal</p>
              </div>
              
              <div className="relative bg-white p-6 rounded-lg mb-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <FaQuoteLeft className="absolute top-3 left-3 text-2xl text-yellow-200" />
                {renderContent(principalData?.Principal_Info, true)}
                <FaQuoteRight className="absolute bottom-3 right-3 text-2xl text-yellow-200" />
                
                {principalData?.Principal_Info?.split(/\n+/).length > 1 && (
                  <div className="flex justify-center mt-4">
                    <button 
                      onClick={() => setExpandedBio(!expandedBio)}
                      className="flex items-center gap-2 text-yellow-700 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-4 py-2 rounded-full text-sm transition-all duration-300"
                    >
                      {expandedBio ? (
                        <>
                          Show Less <FiChevronUp />
                        </>
                      ) : (
                        <>
                          Read More <FiChevronDown />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg flex gap-4 items-center">
                <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
                  <FiExternalLink className="text-xl text-yellow-800" />
                </div>
                <div>
                  <p className="text-sm text-yellow-900">
                    Contact the principal's office to schedule an appointment or for any inquiries.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab Content - Achievements */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              ref={achievementsRef}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-6">Academic & Professional Highlights</h3>
                
                <div className="space-y-6">
                  {/* Education Timeline */}
                  <div className="relative pl-8 border-l-2 border-yellow-200 hover:border-yellow-700 transition-colors duration-300">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="mb-1 text-xs text-yellow-600 font-semibold uppercase tracking-wider">Education</div>
                    <h4 className="text-lg font-medium">Ph.D. from IIT Madras</h4>
                    <p className="text-gray-600 text-sm">Mechanical Engineering</p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-yellow-200 hover:border-yellow-700 transition-colors duration-300">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="mb-1 text-xs text-yellow-600 font-semibold uppercase tracking-wider">Industry Experience</div>
                    <h4 className="text-lg font-medium">Joint Director of Technical Education</h4>
                    <p className="text-gray-600 text-sm">Government of Kerala (Until 2019)</p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-yellow-200 hover:border-yellow-700 transition-colors duration-300">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="mb-1 text-xs text-yellow-600 font-semibold uppercase tracking-wider">Research</div>
                    <h4 className="text-lg font-medium">75+ Research Publications</h4>
                    <p className="text-gray-600 text-sm">International and national journals and conferences</p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-yellow-200 hover:border-yellow-700 transition-colors duration-300">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="mb-1 text-xs text-yellow-600 font-semibold uppercase tracking-wider">Projects</div>
                    <h4 className="text-lg font-medium">Research & Consultancy</h4>
                    <p className="text-gray-600 text-sm">DST, ISRO, KSCSTE sponsored projects</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Tab Content - Publications */}
          {activeTab === 'publications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              ref={publicationsRef}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-6">Selected Publications</h3>
                
                <div className="space-y-6">
                  {publications.map((publication, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-300 border border-gray-100"
                      whileHover={{ scale: 1.01 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1 } 
                      }}
                    >
                      <h4 className="font-medium text-yellow-900">{publication}</h4>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-xs text-gray-500">Cited by: 42</div>
                        <a href="#" className="text-yellow-600 hover:text-yellow-800 text-sm flex items-center gap-1">
                          View Paper <FiExternalLink size={14} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                    View All Publications
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Awards & Recognition Section */}
      <motion.div 
        className="bg-gradient-to-r from-yellow-900/5 to-yellow-600/5 p-8 rounded-xl shadow-sm border border-yellow-100 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-yellow-900 mb-6 flex items-center">
          <span className="mr-2">🏆</span> Awards & Recognition
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 hover:border-yellow-200 border border-transparent">
            <div className="text-lg font-medium text-yellow-900 mb-2">Outstanding Educator Award</div>
            <p className="text-gray-600 text-sm">Awarded for excellence in engineering education and leadership</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 hover:border-yellow-200 border border-transparent">
            <div className="text-lg font-medium text-yellow-900 mb-2">Research Excellence</div>
            <p className="text-gray-600 text-sm">Recognition for contributions to mechanical engineering research</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 hover:border-yellow-200 border border-transparent">
            <div className="text-lg font-medium text-yellow-900 mb-2">Lifetime Achievement</div>
            <p className="text-gray-600 text-sm">For dedicated service to technical education in Kerala</p>
          </div>
        </div>
      </motion.div>
      
      {/* Message from Principal - Animated Card */}
      <motion.div 
        className="bg-yellow-900 text-white rounded-xl overflow-hidden shadow-xl mb-12 relative"
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="relative z-10 p-8">
          <h3 className="text-2xl font-semibold mb-4">Message from the Principal</h3>
          
          <motion.p 
            className="text-yellow-100 italic mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            "Our institution is committed to providing quality education and fostering innovation. 
            We strive to create an environment where students can excel academically and develop 
            as responsible citizens who contribute meaningfully to society."
          </motion.p>
          
          <div className="flex justify-end">
            <div className="text-right">
              <div className="font-semibold">{principalData.Principal_Name || "Dr. K Krishnakumar"}</div>
              <div className="text-yellow-200 text-sm">The Principal</div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Contact Section */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-yellow-900 mb-6">Contact the Principal</h3>
            <p className="text-gray-600 mb-6">
              For appointments, queries, or feedback, please contact the principal's office.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <FiMail className="text-yellow-800" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto: principal@sbce.ac.in" className="text-yellow-900 hover:underline"> principal@sbce.ac.in</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <FiPhone className="text-yellow-800" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <a href="tel:+918590332584" className="text-yellow-900 hover:underline">+91 8590332548</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <FiExternalLink className="text-yellow-800" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Office Hours</div>
                  <div className="text-yellow-900">Monday - Friday, 9:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Principal;