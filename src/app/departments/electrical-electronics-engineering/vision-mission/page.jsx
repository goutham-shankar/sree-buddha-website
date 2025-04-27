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

export default function ElectricalElectronicsDepartment() {
  // SEO metadata
  const pageTitle = "Electrical & Electronics Department - Vision and Mission";
  const pageDescription = "Learn about the vision and mission of the Electrical & Electronics Engineering Department at Sree Buddha College of Engineering.";
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/departments/electrical-electronics" />
      </Head>

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 ${poppins.variable} font-sans`}>
        <motion.div 
          className="space-y-8 md:space-y-10"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.header variants={fadeIn} className="text-center mb-10">
            <h1 className="sr-only">Electrical & Electronics Department</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 page_heading2">
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
              To create skilful Electrical & Electronics engineers with societal commitment
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
              <li>Create professionally qualified Electrical & Electronics engineers by imparting necessary knowledge and relevant skills.</li>
              <li>Encourage students to inculcate a culture of lifelong learning necessary for jobs or higher studies.</li>
              <li>Induce human values and social commitment to meet societal needs.</li>
            </ul>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
}