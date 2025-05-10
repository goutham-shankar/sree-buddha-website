import React from 'react';

export default function Team() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header section */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-600 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Activities</h1>
            <div className="h-1 w-20 bg-white opacity-80 my-4"></div>
          </div>

          <div className="p-6 md:p-10">
            {/* Content section with text and image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-gray-700 text-lg leading-relaxed">
                <p>
                  In today's highly competitive world, students need a combination of strong functional skills and a positive, professional outlook to succeed. Corporations are increasingly seeking individuals with both analytical abilities and interpersonal strengths. Our placement activities are designed to bridge this gap, aligning the needs of recruiters with the aspirations of students. By focusing on comprehensive training and real-world exposure, we aim to prepare students for the dynamic demands of the job market, ensuring they have the tools and confidence to excel in their chosen careers.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="/assets/images/activity.png" 
                  alt="placement-activity" 
                  className="rounded-lg shadow-md max-h-64 object-contain"
                />
              </div>
            </div>
            
            {/* Highlighted text */}
            <div className="bg-amber-50 p-6 rounded-lg mb-6 text-center">
              <p className="text-amber-800 font-bold text-lg">
                We already signed MoU with ICT Academy Kerala for the facilitation of Students training.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}