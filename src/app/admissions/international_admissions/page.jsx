import React from 'react';
import { GraduationCap, Globe, BookOpen, DollarSign, FileCheck, Plane, Users, Calendar } from 'lucide-react';
import "./style.css"


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">International Admissions</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Begin your global education journey with us
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-gray-600">Countries Represented</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold">2000+</h3>
            <p className="text-gray-600">International Students</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-600">Programs Offered</p>
          </div>
        </div>

        {/* Admission Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileCheck className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Application</h3>
              <p className="text-gray-600">Submit your online application with required documents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Application Fee</h3>
              <p className="text-gray-600">Pay the non-refundable application fee</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Document Review</h3>
              <p className="text-gray-600">Academic credentials evaluation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Plane className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">4. Visa Process</h3>
              <p className="text-gray-600">Assistance with student visa application</p>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Opens</h3>
              <p className="text-gray-600">January 1, 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Deadline</h3>
              <p className="text-gray-600">June 30, 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Classes Begin</h3>
              <p className="text-gray-600">September 1, 2025</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
