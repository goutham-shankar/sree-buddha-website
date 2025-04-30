"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


// Section Title Component - reused from previous components
const SectionTitle = ({ children }) => (
  <h2 className="cs-dept-section-title text-[#845714] text-2xl md:text-3xl pb-2 border-b-2 border-[#845714] mb-8">
    {children}
  </h2>
);

// Contact Card Component
const ContactCard = ({ icon, title, children }) => (
  <motion.div
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-center mb-4">
      <div className="bg-[#845714]/10 p-3 rounded-full">
        <span className="text-[#845714] text-2xl">{icon}</span>
      </div>
    </div>
    <h3 className="text-[#845714] text-xl font-semibold mb-3 text-center">{title}</h3>
    <div className="text-center">{children}</div>
  </motion.div>
);

export default function PlacementCell() {
  useEffect(() => {
    // You can initialize any libraries or effects here
  }, []);

  return (
    <div className="bg-[#E6E6E6] text-gray-800 font-['Poppins',sans-serif] p-5 md:p-8">
      <header className="py-6 mb-6 border-b-3 border-[#845714]">
        <h1 className="text-[#845714] text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          Placement Cell
        </h1>
        <p className="text-lg md:text-xl">
          Building Careers • Connecting Talent • Shaping Futures
        </p>
      </header>

      <motion.div
        className="h-[400px] bg-gray-800 relative overflow-hidden my-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full">
          <Image
            src="/assets/images/profile_pic.png"
            alt="Students in a placement interview"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <motion.div
          className="absolute bottom-0 left-0 p-6 md:p-8 bg-black/70 text-white w-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Your Gateway to Professional Success
          </h2>
          <p className="text-lg">
            Connecting talented students with industry-leading employers
          </p>
        </motion.div>
      </motion.div>

      <section className="py-8" aria-labelledby="placement-about">
        <SectionTitle>About The Placement Cell</SectionTitle>
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-lg space-y-4">
            <p>
              The Placement Cell at Sree Buddha College of Engineering serves as the bridge between our talented students and
              the professional world. We are dedicated to preparing our students for successful careers through comprehensive
              training, workshops, and industry connections.
            </p>
            <p>
              Our placement programs focus on enhancing technical skills, soft skills, and interview preparation to ensure
              our students are industry-ready. We maintain strong relationships with leading companies across sectors to
              facilitate recruitment drives, internships, and industry interactions.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-8" aria-labelledby="placement-officer">
        <SectionTitle>Placement Officer</SectionTitle>
        <motion.div
          className="bg-white rounded-lg p-6 shadow-md mb-10 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="min-w-[150px] w-[150px] h-[150px] relative rounded-full overflow-hidden border-4 border-[#845714]">
            <Image
              src="/images/placement-officer.jpg"
              alt="R. Pradeep Kumar - Placement Officer"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-[#845714]">R. Pradeep Kumar</h3>
            <p className="text-xl mb-4">Placement Officer</p>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#845714]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>09446472562, 09656164464</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#845714]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:placementcell@sbce.ac.in" className="hover:text-[#845714] transition-colors">
                  placementcell@sbce.ac.in
                </a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#845714]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:sbceplacementcell@gmail.com" className="hover:text-[#845714] transition-colors">
                  sbceplacementcell@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#845714]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                <a href="https://www.sbce.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#845714] transition-colors">
                  www.sbce.ac.in
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-8" aria-labelledby="contact-options">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            }
            title="Call Us"
          >
            <p className="mb-2">09446472562</p>
            <p>09656164464</p>
          </ContactCard>

          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
            title="Email Us"
          >
            <p className="mb-2">
              <a href="mailto:placementcell@sbce.ac.in" className="hover:text-[#845714] transition-colors">
                placementcell@sbce.ac.in
              </a>
            </p>
            <p>
              <a href="mailto:sbceplacementcell@gmail.com" className="hover:text-[#845714] transition-colors">
                sbceplacementcell@gmail.com
              </a>
            </p>
          </ContactCard>

          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            }
            title="Visit Us"
          >
            <p>Sree Buddha College of Engineering</p>
            <p>Pattoor P.O, Padanilam</p>
            <p>Alappuzha, Kerala - 690529</p>
          </ContactCard>
        </div>
      </section>

      <section className="py-8" aria-labelledby="placement-stats">
        <SectionTitle>Placement Highlights</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "95%", label: "Placement Rate" },
            { value: "150+", label: "Companies" },
            { value: "₹12 LPA", label: "Highest Package" },
            { value: "500+", label: "Students Placed" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl text-[#845714] font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-8" aria-labelledby="map-location">
        <SectionTitle>Location</SectionTitle>
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.4370289554703!2d76.63980737489798!3d9.212530691475758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06175636a5fcf9%3A0x8c3c160158a8b47f!2sPattoor%2C%20P.O%2C%20Nooranad%2C%20Padanilam%2C%20Kerala%20690529!5e0!3m2!1sen!2sin!4v1682782892424!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SBCE Location Map"
          ></iframe>
        </div>
      </section>


    </div>
  );
}