"use client";

import React from 'react';
import { Poppins } from 'next/font/google';
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

export default function CivilEngineeringVisionMission() {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 ${poppins.variable} font-sans`}>
      <motion.div 
        className="space-y-8 md:space-y-10"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.header variants={fadeIn} className="text-center mb-10">
          <h1 className="sr-only">Civil Engineering Department</h1>
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
            To breed professionally competent Civil Engineers for a sustainable society.
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
          <ul className="text-gray-600 leading-relaxed space-y-3 list-disc pl-5">
            <li>Provide theoretical, practical and industry knowledge in Civil Engineering.</li>
            <li>Encourage students for higher studies, lifelong learning and research.</li>
            <li>Motivate students to apply knowledge and expertise for the development of a sustainable society.</li>
          </ul>
        </motion.section>
        
      </motion.div>
    </div>
  );
}