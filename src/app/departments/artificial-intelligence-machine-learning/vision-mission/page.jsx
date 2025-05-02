"use client";

import React from 'react';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Initialize Poppins font with display swap for better loading performance
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AIMLVisionMission() {
  // SEO metadata
  const pageTitle = "Artificial Intelligence and Machine Learning - Vision and Mission";
  const pageDescription = "Learn about the vision and mission of the Artificial Intelligence and Machine Learning Department at Sree Buddha College of Engineering.";
  const lastUpdated = "2025-04-27";
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/departments/artificial-intelligence-machine-learning" />
      </Head>

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 ${poppins.variable} font-sans`}>
        <motion.div 
          className="space-y-8 md:space-y-10"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.header variants={fadeIn} className="text-center mb-10">
            <h1 className="sr-only">Artificial Intelligence and Machine Learning Department</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              VISION AND MISSION
            </h2>
            
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8 rounded" aria-hidden="true"></div>
          </motion.header>
          
          <motion.section 
            variants={fadeIn}
            className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100"
            aria-labelledby="vision-heading"
          >
            <h3 id="vision-heading" className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
              VISION
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be globally recognized in the field of Artificial Intelligence and Machine Learning through the production 
              of competent professionals and the conduct of applied research for the benefit of society.
            </p>
          </motion.section>
          
          <motion.section 
            variants={fadeIn}
            className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100"
            aria-labelledby="mission-heading"
          >
            <h3 id="mission-heading" className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
              MISSION
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-4 list-none">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mr-3 mt-0.5">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>To establish an essential environment with required infrastructure and faculty for imparting domain knowledge.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mr-3 mt-0.5">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>To bring out the competent and industry ready students by practicing theoretical aspects with experiential learning.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mr-3 mt-0.5">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>To prepare the students with holistic personality by means of appropriate technical and communication skills for solving real world problems.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mr-3 mt-0.5">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>To foster academia-business collaborations in the area of artificial intelligence.</span>
              </li>
            </ul>
          </motion.section>
          
          {/* AI/ML Themed Decorative Element */}
          <motion.div 
            variants={fadeIn}
            className="flex justify-center opacity-10 my-6"
            aria-hidden="true"
          >
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 10V70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M30 25L90 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M30 55L90 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="60" cy="10" r="4" fill="currentColor"/>
              <circle cx="60" cy="70" r="4" fill="currentColor"/>
              <circle cx="30" cy="25" r="4" fill="currentColor"/>
              <circle cx="30" cy="55" r="4" fill="currentColor"/>
              <circle cx="90" cy="25" r="4" fill="currentColor"/>
              <circle cx="90" cy="55" r="4" fill="currentColor"/>
            </svg>
          </motion.div>
          
          
        </motion.div>
      </div>
    </>
  );
}