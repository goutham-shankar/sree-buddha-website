"use client"

import React, { useEffect, memo, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ComputerScienceDepartment() {
  // Department building images
  const buildingImages = [
    "/images/cs-dept-building/cs-dept-building.png",
    "/images/cs-dept-building/cs-dept-building2.png",
  ];

  const AnimatedSection = memo(({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  ));

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI}/api/galleries?populate=*`);
        const data = await response.json();

        // Filter images for CS department
        let filteredImages = data.data.filter(item =>
          item.Department?.toLowerCase() === "cs"
        );

        // Sort images by date (newest first)
        filteredImages.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Extract small image URLs
        let imageUrls = filteredImages.flatMap(item =>
          item.images.map(img => {
            let smallImageUrl = img.formats?.small?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI}${img.formats.small.url}`
              : `${process.env.NEXT_PUBLIC_STRAPI}${img.url}`; // Fallback if small version doesn't exist
            return smallImageUrl;
          })
        );

        setImages(imageUrls); // Update state
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <header className="relative bg-white py-12 lg:py-16">
        <div className="absolute inset-0 bg-yellow-900 opacity-10 pattern-diagonal-lines pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-2">
              Department Of Computer Science And Engineering
            </h1>
            <div className="w-24 h-1 bg-yellow-800 mx-auto my-4" />
            <p className="text-center text-yellow-900 font-medium">Innovation • Excellence • Future</p>
          </AnimatedSection>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cs-dept-hero.jpg"
            alt="Computer Science Students Working Together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Shaping Tomorrow's Tech Leaders</h2>
            <p className="text-lg text-gray-100">Join our vibrant community of innovators and problem-solvers</p>
          </div>
        </div>
      </section>

      {/* Department Profile Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-yellow-800 mr-3 rounded-md"></span>
            Department Profile
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The department of Computer Science and Engineering was started in Sree
              Buddha College of Engineering in the year 2002. The department currently offers the programmes B.Tech. in computer
              science and Engineering with sanctioned intake of 240, B.Tech Computer Science
              and Engineering with specialization in Artificial Intelligence and Machine
              Learning, sanctioned intake 60, M.Tech. in Computer Science and Engineering,
              and Ph.D. programmes.
            </p>

            <p>
              The department plays a crucial role in equipping students
              with current and relevant knowledge in computer Science and Engineering through
              various opportunities, including internships, hands-on training, bridge
              courses, add-on courses, and workshops to prepare them to meet the demands of
              the industry. In addition to promoting academic excellence, the department frequently
              organizes a variety of activities, including hackathons, faculty development
              programs, industry interactions, and social events which provides a platform
              for students and faculty to engage with distinguished researchers and explore
              emerging trends in computer science. The department is accredited by NBA since
              November 2019. In alignment with outcome-based learning and
              the National Educational Policy, the department establishes high standards for
              its curriculum and industry engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Department Highlights Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 flex items-center">
            <span className="w-2 h-8 bg-yellow-800 mr-3 rounded-md"></span>
            Department Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Academic Excellence & Research</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Strong faculty expertise in core computing areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cutting-edge research in emerging technologies; like Artificial Intelligence, Internet of Things, Machine Learning and Deep Learning</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Industry Exposure and Research Collaborations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Strong partnerships with tech companies for internships, projects, and placements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Presence of technology incubators and startup ecosystems for entrepreneurship</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">State-of-the-Art Infrastructure</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Well-equipped labs for AI & ML, Deep Learning and IoT</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>High-performance computing clusters for research</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access to industry-grade software, cloud platforms, and simulation tools</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Skill Development & Student Success</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Focus on hands-on learning, hackathons, and coding competitions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Specialization tracks in Data Science, Artificial Intelligence, Machine Learning and IoT</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-yellow-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Strong placement records with top global recruiters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 flex items-center">
            <span className="w-2 h-8 bg-yellow-800 mr-3 rounded-md"></span>
            Department Gallery
          </h2>

          {images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative h-48 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={src}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center py-10">
              <p className="text-gray-500">Loading gallery images...</p>
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-8 text-center">
              <button className="px-6 py-2 bg-yellow-800 text-white rounded-md hover:bg-yellow-900 transition-colors shadow-sm">
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}