"use client";

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';



// Initialize Poppins font
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function EEEDepartmentFacilities() {
    const [activeTab, setActiveTab] = useState('overview');
    
    // Labs data for easier management and display
    const labs = [
        {
            id: "electrical-workshop",
            name: "Basic Electrical Engineering Workshop",
            description: "Basic Electrical engineering workshop is intended to make the students aware of the basics of electrical engineering which includes different types of wiring, measurement of energy, etc.",
            image: "/assets/images/departments/facilities/eee/eee_facility1.jpg",
            inCharge: "Ms. Chama R Chandran",
            staff: "Mr. Sudheesh M S"
        },
        {
            id: "electrical-machines",
            name: "Electrical Machines Lab",
            description: "This lab facilitates different AC and DC machines. This lab gives students an idea of starting, speed controlling, loading, and different other experiments in electrical machines.",
            image: "/assets/images/departments/facilities/eee/eee_facility2.jpg",
            inCharge: "Mr. Sheleel F",
            staff: "Ms. Chitra P"
        },
        {
            id: "power-system",
            name: "Power System & High Voltage Engg Lab",
            description: "This lab facilitates different hardware and software experiments in power systems, including major experiments like impulse waveform generation, different types of relays, earth resistance measurement, cable, and transformer oil testing.",
            image: "/assets/images/departments/facilities/eee/eee_facility3.jpg",
            inCharge: "Ms. Gayathri V",
            staff: "Ms. Chitra P"
        },
        {
            id: "measurement",
            name: "Measurements and Instrumentation Lab",
            description: "This lab facilitates different types of transducers used for measurement in the field of electrical engineering.",
            image: "/assets/images/departments/facilities/eee/eee_facility4.jpg",
            inCharge: "Ms. Juna John Daniel",
            staff: "Ms. Chithra P B"
        },
        {
            id: "electronics",
            name: "Electronics Circuits Lab",
            description: "This lab facilitates different electronic circuits using semiconductor switches like op-amp, diodes, MOSFET, JFET, ICs, etc.",
            image: "/assets/images/departments/facilities/eee/eee_facility5.jpg",
            inCharge: "Mr. Ananthu V",
            staff: "Mr. Sudheesh M S"
        },
        {
            id: "power-electronics",
            name: "Power Electronics Lab",
            description: "This lab facilitates different types of firing circuits of SCR, DIAC, TRIAC, MOSFET, and drives for DC motors. It also includes software simulation of variable speed control of different motors.",
            image: "/assets/images/departments/facilities/eee/eee_facility6.jpg",
            inCharge: "Ms. Vijina K",
            staff: "Ms. Chithra P B"
        },
        {
            id: "systems-control",
            name: "Systems and Control Lab",
            description: "This lab facilitates different types of servomotors, time response circuits, controllers, and control circuits.",
            image: "/assets/images/departments/facilities/eee/eee_facility7.jpg",
            inCharge: "Mr. Vishnu J",
            staff: "Mr. Ratheesh"
        },
        {
            id: "digital-embedded",
            name: "Digital Circuits and Embedded Systems Lab",
            description: "This lab facilitates microprocessors 8085 and 8086, microcontroller 8051, and experiments in IC trainer kits.",
            image: "/assets/images/departments/facilities/eee/eee_facility7.jpg",
            inCharge: "Mr. Sreekanth P K",
            staff: "Mr. Ratheesh R"
        },
        {
            id: "pg-systems",
            name: "PG Systems Lab",
            description: "This lab facilitates different simulation software like MATLAB, Maxwell, and PSIM.",
            image: "/assets/images/departments/facilities/eee/eee_facility8.jpg",
            inCharge: "Ms. Abhilasha Parthan",
            staff: "Mr. Ratheesh R"
        },
        {
            id: "pg-research",
            name: "PG Research Lab",
            description: "This lab facilitates different special electrical machines with their driver circuit and software supporting them.",
            image: "/assets/images/departments/facilities/eee/eee_facility9.jpg",
            inCharge: "Ms. Abhilasha Parthan",
            staff: "Mr. Ratheesh R"
        },
        {
            id: "seminar-hall",
            name: "Seminar Hall",
            description: "A well-equipped seminar hall with more than 100 seating capacity.",
            image: null,
            inCharge: "Ms. Sindhu V",
            staff: "Mr. Sudheesh M S"
        }
    ];

    // Research topics data
    const researchTopics = [
        "Design of new kinds of electrical machines, e.g. design of rotary linear switched reluctance motor for applications involving hybrid motion.",
        "Position, speed & torque control of various electrical machines through different methods, e.g. Sensor-less control of BLDC motors.",
        "Development of environment-friendly electric drives, e.g. Implementation of low-cost converter for an autonomous photovoltaic water pumping system.",
        "Development of energy-saving schemes, e.g. Energy regeneration during the braking of electric vehicles.",
        "Fault detection in various machines, e.g. Novel bearing fault detection and analysis of induction machines.",
        "Development of sensors for condition monitoring of electrical machines, e.g. Development of cost-effective sensor for estimation of dissolved moisture in transformer oil."
    ];

    return (
        <div className={`eee-department-facilities ${poppins.className}`}>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-2">
                        Department of Civil Engineering
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
                            className={`py-2 px-4 font-medium text-sm ${activeTab === 'research' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
                            onClick={() => setActiveTab('research')}
                        >
                            Research & Consultancy
                        </button>
                        <button
                            className={`py-2 px-4 font-medium text-sm ${activeTab === 'library' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
                            onClick={() => setActiveTab('library')}
                        >
                            Department Library
                        </button>
                        <button
                            className={`py-2 px-4 font-medium text-sm ${activeTab === 'labs' ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-gray-500 hover:text-yellow-800'}`}
                            onClick={() => setActiveTab('labs')}
                        >
                            Laboratories
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Department Overview</h3>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                The Department of Electrical & Electronics Engineering is dedicated to the current needs of industry with the flexibility to tune its programmes according to the different requirements. Application of the state-of-the-art technology in various fields is one of the main focuses in the activities of the department. The department is well-equipped for training the students with a streamlined curriculum that provides an ambient atmosphere for learning and acquiring new skills. The department focuses on providing sound theoretical background as well as good practical exposure to the students for their future endeavors.
                            </p>
                            
                            <h3 className="text-lg font-semibold mb-3 text-gray-800">Laboratory Facilities</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {labs.map((lab, index) => (
                                    <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-2 border-yellow-900 hover:bg-yellow-50 transition-colors cursor-pointer" onClick={() => setActiveTab('labs')}>
                                        <h4 className="font-medium text-gray-800">{lab.name}</h4>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg shadow-sm">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Research Focus</h4>
                                    <p className="text-gray-600">Specialized research in electrical machines and innovative technology development.</p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-lg shadow-sm">
                                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Industry Alignment</h4>
                                    <p className="text-gray-600">Curriculum designed according to current industry needs and technological advancements.</p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg shadow-sm">
                                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-800">Library Resources</h4>
                                    <p className="text-gray-600">Dedicated department library with specialized texts, reference books, and technical journals.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Research Tab */}
                    {activeTab === 'research' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Research and Consultancy</h3>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                In order to fit into the modern era of technology advancement, the Dept. of EEE lays considerable importance to in-house research. Due to the presence of a PG programme in the dept. in the area of Electrical Machines, much of the researches take place in this domain. These researches are carried out by the PG students, under the guidance of various faculties of the department.
                            </p>
                            
                            <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Research Areas</h4>
                            <div className="space-y-4 mb-6">
                                {researchTopics.map((topic, index) => (
                                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-yellow-50 transition-colors">
                                        <div className="mr-4 flex-shrink-0">
                                            <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900 font-semibold">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{topic}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-gradient-to-r from-yellow-50 to-white p-5 rounded-lg border-l-4 border-yellow-600 mt-6">
                                <h4 className="font-semibold text-gray-800 mb-2">Research Infrastructure</h4>
                                <p className="text-gray-700">
                                    To support these researches, in addition to the regular electrical machines lab, there is a full-fledged research lab in the department with custom-designed Induction Motor, BLDC motor and SRM motor drives and their controllers for analysis and advanced machine design & control software such as Maxwell, Simplorer, and MATLAB. Apart from the research carried out in the PG stream, many developments are also done by the UG students under the guidance of various faculties in the department.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Library Tab */}
                    {activeTab === 'library' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Department Library</h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <p className="text-gray-700 mb-4">
                                        Apart from a highly equipped Central Library, the Electrical and Electronics Engineering Department separately owns a standard library. This Department Library has several foreign and well-known publishers' books and study materials related to Electrical Engineering along with the textbooks and reference books prescribed by the University of Kerala as part of the Electrical Engineering curriculum.
                                    </p>
                                    <p className="text-gray-700">
                                        The Department is proud as the Faculty Members and students rely on the library faithfully for their reference, development, and research activities.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-3">Available Resources</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Textbooks and Reference Books</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Technical Journals and Magazines</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Study Materials for Electrical Engineering</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">IEEE Publications</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <p className="text-gray-700 mb-4">
                                    Apart from the above-mentioned texts and references, the Department also takes the initiative in subscribing to various Technical Journals and Magazines. The Faculty Members and students having IEEE Membership help in updating the Department.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Labs Tab */}
                    {activeTab === 'labs' && (
                        <div>
                            <h3 className="text-xl font-semibold mb-5 text-gray-800">Laboratory Facilities</h3>
                            
                            <div className="grid grid-cols-1 gap-8">
                                {labs.map((lab, index) => (
                                    <div key={lab.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <div className="md:flex">
                                            {lab.image && (
                                                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                                                    <img 
                                                        src={lab.image} 
                                                        alt={lab.name} 
                                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-6 md:w-3/5">
                                                <h4 className="text-xl font-semibold text-gray-800 mb-3">{lab.name}</h4>
                                                <p className="text-gray-700 mb-4">{lab.description}</p>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                    <div className="bg-gray-50 p-3 rounded">
                                                        <div className="font-semibold text-gray-700 mb-1">Lab in Charge</div>
                                                        <div className="text-gray-600">{lab.inCharge}</div>
                                                    </div>
                                                    <div className="bg-gray-50 p-3 rounded">
                                                        <div className="font-semibold text-gray-700 mb-1">Technical Staff</div>
                                                        <div className="text-gray-600">{lab.staff}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}