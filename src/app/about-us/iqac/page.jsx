'use client';
import React from "react";
import DownloadButton from "@/components/common/DownloadButton";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Page() {
  const meetings = [
    {
      id: 1,
      title: "Minutes-of-7-th-IQAC-meeting-held-on-13-03-2017",
      date: "2017-03-13",
      key_points: ["Quality enhancement measures", "Academic excellence initiatives", "Infrastructure development plans"]
    },
    {
      id: 2,
      title: "Minutes-of-8-th-IQAC-meeting-held-on-21-06-2017",
      date: "2017-06-21",
      key_points: ["Academic performance review", "Research collaboration proposals", "Student feedback analysis"]
    },
  ];

  const features = [
    {
      icon: "📚",
      title: "Academic Excellence",
      description: "Ensuring timely, efficient, and progressive performance of academic tasks"
    },
    {
      icon: "🎓",
      title: "Quality Programs",
      description: "Maintaining relevance and quality of academic and research programs"
    },
    {
      icon: "🤝",
      title: "Inclusive Education",
      description: "Providing equitable access to academic programs for various sections of society"
    },
    {
      icon: "💡",
      title: "Modern Teaching",
      description: "Optimization and integration of modern teaching and learning methods"
    },
    {
      icon: "🛠️",
      title: "Support Services",
      description: "Ensuring adequacy and maintenance of support structure and services"
    },
    {
      icon: "🌐",
      title: "Research Network",
      description: "Research sharing and networking with institutions globally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-yellow-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          <Image
            src="https://sbce.ac.in/assets/images/profile_pic.png"
            alt="College Campus"
            width={1920} // Set appropriate width
            height={1080} // Set appropriate height
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Internal Quality Assurance Cell
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100">
              Committed to Excellence in Higher Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About IQAC</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                In pursuance of action plan for performance evaluation, assessment, accreditation,
                and quality up-gradation of institutions of higher education, NAAC proposes that
                every accredited institution should establish an Internal Quality Assurance Cell (IQAC)
                as a post-accreditation quality sustenance measure. Since quality enhancement is a
                continuous process, the IQAC will become a part of the institution's system & work
                towards realization of the goals of quality enhancement & sustenance.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Meeting Minutes Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meeting Minutes</h2>
              <div className="grid grid-cols-1 gap-4">
                {meetings && meetings.length > 0 ? (
                  meetings.map((meeting, index) => (
                    <motion.div
                      key={meeting.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            IQAC Meeting #{meeting.id}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Date: {new Date(meeting.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                        <DownloadButton
                          title="Download Minutes"
                          link={`/assets/documents/iqac/minutes/${meeting.title}.pdf`}
                          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors"
                        />
                      </div>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {meeting.key_points.map((point, idx) => (
                          <li key={idx} className="mb-1">{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-600 text-center py-8">
                    No meeting minutes available at the moment.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}