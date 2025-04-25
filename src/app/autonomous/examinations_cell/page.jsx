'use client';
import React from 'react';
import DownloadButton from '@/components/common/DownloadButton';
import { motion } from 'framer-motion';

export default function Page() {
  const notifications = [
    {
      id: 1,
      path: "/assets/documents/autonomous/examination_cell/notification-auto.pdf",
      title: "First Series Examination – Oct 2024 Notification",
      date: "2024-10-01",
      type: "Series Exam",
      icon: "",
      important: true
    },
    {
      id: 2,
      path: "/assets/documents/autonomous/examination_cell/notification-auto3.pdf",
      title: "Retest – Nov 2024 Notification",
      date: "2024-11-15",
      type: "Retest",
      icon: ""
    },
    {
      id: 3,
      path: "/assets/documents/autonomous/examination_cell/Registration-Notification.pdf",
      title: "End Semester Registration Notification – Jan 2025",
      date: "2025-01-05",
      type: "Registration",
      icon: "",
      important: true
    },
    {
      id: 4,
      path: "/assets/documents/autonomous/examination_cell/S1-PG-END-SEMESTER-EXAMINATION-NOTIFICATION.pdf",
      title: "S1 PG End Semester Examination Notification – Jan 2025",
      date: "2025-10-1",
      type: "End Semester",
      icon: ""
    }
  ];

  const forms = [
    {
      id: 1,
      path: "/assets/documents/autonomous/examination_cell/APPLICATION-FORM-OF-ATTENDANCE.pdf",
      title: "Application Form of Attendance",
      description: "Form for attendance related matters",
      icon: ""
    },
    {
      id: 2,
      path: "/assets/documents/autonomous/examination_cell/APPLICATION-FORM-TO-AVAIL-THE-SERVICE-OF-SCRIBE.pdf",
      title: "Application Form to Avail the Service of Scribe",
      description: "Special arrangements for examinations",
      icon: ""
    },
    {
      id: 3,
      path: "/assets/documents/autonomous/examination_cell/RETEST-FORM-2024.pdf",
      title: "Retest Form – 2024",
      description: "Application for retest examination",
      icon: ""
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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
        <div className="container mx-auto px-4 py-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Examination Cell</h1>
            <p className="text-xl md:text-2xl text-yellow-100">
              Notifications, Forms, and Important Updates
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Notifications Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Latest Notifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{notification.icon}</span>
                      <div>
                        <p className="text-sm text-gray-500">{notification.type}</p>
                        <h3 className="text-lg font-semibold text-gray-900">{notification.title}</h3>
                      </div>
                    </div>

                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      Date: {new Date(notification.date).toLocaleDateString()}
                    </p>
                    <DownloadButton
                      title="Download"
                      link={notification.path}
                      className="inline-flex items-center px-4 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Forms Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Examination Forms
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {forms.map((form, index) => (
              <motion.div
                key={form.id}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{form.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{form.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{form.description}</p>
                  <DownloadButton
                    title="Download Form"
                    link={form.path}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        
      </div>
    </div>
  );
}