"use client";

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';


// Initialize Poppins font
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function FoodTechnologyDepartmentFacilities() {
  const [activeTab, setActiveTab] = useState('overview');

  // Lab facilities data
  const labFacilities = [
    {
      id: "chemistry-lab",
      name: "FOOD CHEMISTRY LAB",
      description: "The Food Chemistry Lab serves as a hub for investigating the chemical and physical properties of food constituents. It enables students to evaluate the impact of processing and preservation techniques on the nutritional and sensory attributes of food products. Utilizing sophisticated instruments such as calorimeters and spectrophotometers, students conduct precise chemical analyses, essential for understanding food composition and behavior under diverse conditions.",
      image: "/assets/images/departments/facilities/food_technology/food_technology_facilities_1.jpg"
    },
    {
      id: "microbiology-lab",
      name: "FOOD MICROBIOLOGY LAB",
      description: "Focused on microbiological analysis, the Food Microbiology Lab trains students in employing standard culturing methods to isolate, identify, and enumerate microorganisms in food and environmental samples. Equipped with laminar airflow hoods, incubators, autoclaves, centrifuges, microscopes, and colony counters, this lab facilitates in-depth study of microbial presence and behavior, crucial for ensuring food safety and quality.",
      image: "/assets/images/departments/facilities/food_technology/food_technology_facilities_2.jpg"
    },
    {
      id: "operations-lab",
      name: "UNIT OPERATIONS LAB",
      description: "The Unit Operations Lab introduces students to fundamental principles and applications of mass and heat transfer operations in food processing. It covers essential techniques such as drying, extraction, leaching, adsorption, and heat exchange using specialized equipment like flow meters, tray dryers, rotary dryers, and distillation units. This lab emphasizes practical learning to enhance students' understanding of crucial industrial processes.",
      image: "/assets/images/departments/facilities/food_technology/food_technology_facilities_3.jpg"
    },
    {
      id: "preservation-lab",
      name: "FOOD PRESERVATION LAB",
      description: "In the Food Preservation Lab, students gain insights into various preservation methods designed to extend the shelf life of food products. They study the application of different preservatives and their permissible levels in food production, essential knowledge for maintaining food quality and safety standards. This lab equips students with skills vital for addressing challenges related to food preservation in the industry.",
      image: "/assets/images/departments/facilities/food_technology/food_technology_facilities_4.jpg"
    },
    {
      id: "processing-lab",
      name: "FOOD PROCESSING LAB",
      description: "The Food Processing Lab familiarizes students with the operation and utilization of key food production equipment. Through hands-on experience with devices such as spray dryers, deep freezers, bursting strength testers, and penetrometers, students learn practical aspects of food processing technologies. This lab prepares them to effectively apply theoretical knowledge to real-world food production scenarios.",
      image: "/assets/images/departments/facilities/food_technology/food_technology_facilities_5.jpg"
    }
  ];

  // Lab equipment by category for visualization
  const equipmentTypes = {
    "Analytical": ["Calorimeters", "Spectrophotometers", "pH meters", "Colorimeters"],
    "Processing": ["Spray dryers", "Deep freezers", "Penetrometers", "Bursting strength testers"],
    "Microbiology": ["Laminar airflow hoods", "Incubators", "Autoclaves", "Colony counters"],
    "Operations": ["Flow meters", "Tray dryers", "Rotary dryers", "Distillation units"]
  };

  return (
    <div className={`food-tech-department-facilities ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-2">
            Department of Food Technology
          </h1>
          <div className="w-24 h-1 bg-yellow-900 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-700">Facilities</h2>
        </header>

        {/* Tab Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex border-b border-gray-200 min-w-max">
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'overview' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'labs' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
              onClick={() => setActiveTab('labs')}
            >
              Laboratory Facilities
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${activeTab === 'equipment' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
              onClick={() => setActiveTab('equipment')}
            >
              Equipment
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Department Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Department of Food Technology at Sree Buddha College of Engineering offers advanced laboratory facilities personalized to provide practical training and hands-on experience in various facets of food science and technology. The labs are equipped with cutting-edge instruments and equipment essential for comprehensive exploration and analysis in food chemistry, microbiology, unit operations, preservation, and food processing.
                </p>
                
                <div className="bg-gradient-to-r from-yellow-50 to-white p-5 rounded-lg border-l-4 border-yellow-900 mb-8">
                  <h4 className="font-semibold text-gray-800 mb-2">State-of-the-Art Facilities</h4>
                  <p className="text-gray-700">
                    Our department boasts modern laboratories with the latest equipment and research tools, ensuring students have access to industry-standard technologies for comprehensive food science education and research.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Laboratory Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {labFacilities.map((lab, index) => (
                  <div 
                    key={`lab-card-${index}`} 
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setActiveTab('labs')}
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={lab.image} 
                        alt={lab.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">{lab.name}</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {lab.description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">5</div>
                  <div className="text-sm text-gray-600">Advanced Labs</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">20+</div>
                  <div className="text-sm text-gray-600">Specialized Equipment</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Practical Training</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-blue-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">Industry</div>
                  <div className="text-sm text-gray-600">Ready Skills</div>
                </div>
              </div>
            </div>
          )}

          {/* Labs Tab */}
          {activeTab === 'labs' && (
            <div>
              <h3 className="text-xl font-semibold mb-5 text-gray-800">Laboratory Facilities</h3>
              
              <div className="grid grid-cols-1 gap-8">
                {labFacilities.map((lab, index) => (
                  <div key={`lab-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <img 
                          src={lab.image} 
                          alt={lab.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 md:w-3/5">
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">{lab.name}</h4>
                        <p className="text-gray-700 mb-4">{lab.description}</p>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {(index === 0 && equipmentTypes.Analytical.map((item, i) => (
                            <span key={`equip-${i}`} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-1 rounded">
                              {item}
                            </span>
                          ))) || 
                          (index === 1 && equipmentTypes.Microbiology.map((item, i) => (
                            <span key={`equip-${i}`} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-1 rounded">
                              {item}
                            </span>
                          ))) ||
                          (index === 2 && equipmentTypes.Operations.map((item, i) => (
                            <span key={`equip-${i}`} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-1 rounded">
                              {item}
                            </span>
                          ))) ||
                          (index === 4 && equipmentTypes.Processing.map((item, i) => (
                            <span key={`equip-${i}`} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-1 rounded">
                              {item}
                            </span>
                          )))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-900">
                <p className="text-gray-700 font-medium mb-1">Note:</p>
                <p className="text-gray-700">
                  Along with the Engineering Properties of Food Materials Lab, these labs are integral to the holistic education ensuring that students of Food Technology not only grasp theoretical concepts but also develop proficiency in applying them in practical settings. By leveraging state-of-the-art facilities and comprehensive resources, the college prepares future food technologists to meet industry demands and contribute innovatively to the field of food science and technology.
                </p>
              </div>
            </div>
          )}

          {/* Equipment Tab */}
          {activeTab === 'equipment' && (
            <div>
              <h3 className="text-xl font-semibold mb-5 text-gray-800">Laboratory Equipment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {Object.entries(equipmentTypes).map(([category, items]) => (
                  <div key={`equip-${category}`} className="bg-white rounded-lg shadow-md p-5">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-4 pb-2 border-b border-gray-100">
                      {category} Equipment
                    </h4>
                    <ul className="space-y-3">
                      {items.map((item, idx) => (
                        <li key={`item-${idx}`} className="flex items-start">
                          <div className="mr-3 mt-1 flex-shrink-0">
                            <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700">{item}</p>
                            <p className="text-sm text-gray-500">
                              {category === "Analytical" && "Used for detailed chemical analysis and measurements"}
                              {category === "Processing" && "Used for food processing and production"}
                              {category === "Microbiology" && "Used for microbiological testing and analysis"}
                              {category === "Operations" && "Used for unit operations in food processing"}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Equipment Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Hands-on Experience</h5>
                      <p className="text-gray-600">
                        Students gain practical experience with industry-standard equipment, preparing them for real-world food technology applications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Research Capabilities</h5>
                      <p className="text-gray-600">
                        Advanced equipment enables cutting-edge research in food science and technology, fostering innovation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Industry Relevance</h5>
                      <p className="text-gray-600">
                        Equipment selection matches current industry standards, ensuring graduates are prepared for employment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Comprehensive Learning</h5>
                      <p className="text-gray-600">
                        Equipment spans all aspects of food technology, from analysis to processing, enabling holistic education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
       
      </div>
    </div>
  );
}