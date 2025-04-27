"use client";

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import "../../department_style.css";


// Initialize Poppins font
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function EEEDepartmentFacilities() {
    const [activeTab, setActiveTab] = useState('overview');

    const labs = [
        {
            id: 'electrical-workshop',
            name: 'Basic Electrical Engineering Workshop',
            description: 'Basic Electrical engineering workshop is intended to make the students aware of the basics of electrical engineering which includes different types of wiring, measurement of energy, etc.',
            image: '/assets/images/departments/facilities/eee/eee_facility1.jpg',
            inCharge: 'Ms. Chama R Chandran',
            staff: 'Mr. Sudheesh M S'
        },
        {
            id: 'electrical-machines',
            name: 'Electrical Machines Lab',
            description: 'This lab facilitates different AC and DC machines. This lab gives students an idea of starting, speed controlling, loading, and different other experiments in electrical machines.',
            image: '/assets/images/departments/facilities/eee/eee_facility2.jpg',
            inCharge: 'Mr. Sheleel F',
            staff: 'Ms. Chitra P'
        },
        {
            id: 'power-system',
            name: 'Power System & High Voltage Engg Lab',
            description: 'This lab facilitates different hardware and software experiments in power systems, including major experiments like impulse waveform generation, different types of relays, earth resistance measurement, cable, and transformer oil testing.',
            image: '/assets/images/departments/facilities/eee/eee_facility3.jpg',
            inCharge: 'Ms. Gayathri V',
            staff: 'Ms. Chitra P'
        },
        {
            id: 'measurement',
            name: 'Measurements and Instrumentation Lab',
            description: 'This lab facilitates different types of transducers used for measurement in the field of electrical engineering.',
            image: '/assets/images/departments/facilities/eee/eee_facility4.jpg',
            inCharge: 'Ms. Juna John Daniel',
            staff: 'Ms. Chithra P B'
        },
        {
            id: 'electronics',
            name: 'Electronics Circuits Lab',
            description: 'This lab facilitates different electronic circuits using semiconductor switches like op-amp, diodes, MOSFET, JFET, ICs, etc.',
            image: '/assets/images/departments/facilities/eee/eee_facility5.jpg',
            inCharge: 'Mr. Ananthu V',
            staff: 'Mr. Sudheesh M S'
        },
        {
            id: 'power-electronics',
            name: 'Power Electronics Lab',
            description: 'This lab facilitates different types of firing circuits of SCR, DIAC, TRIAC, MOSFET, and drives for DC motors. It also includes software simulation of variable speed control of different motors.',
            image: '/assets/images/departments/facilities/eee/eee_facility6.jpg',
            inCharge: 'Ms. Vijina K',
            staff: 'Ms. Chithra P B'
        },
        {
            id: 'systems-control',
            name: 'Systems and Control Lab',
            description: 'This lab facilitates different types of servomotors, time response circuits, controllers, and control circuits.',
            image: '/assets/images/departments/facilities/eee/eee_facility7.jpg',
            inCharge: 'Mr. Vishnu J',
            staff: 'Mr. Ratheesh'
        },
        {
            id: 'digital-embedded',
            name: 'Digital Circuits and Embedded Systems Lab',
            description: 'This lab facilitates microprocessors 8085 and 8086, microcontroller 8051, and experiments in IC trainer kits.',
            image: '/assets/images/departments/facilities/eee/eee_facility7.jpg',
            inCharge: 'Mr. Sreekanth P K',
            staff: 'Mr. Ratheesh R'
        },
        {
            id: 'pg-systems',
            name: 'PG Systems Lab',
            description: 'This lab facilitates different simulation software like MATLAB, Maxwell, and PSIM.',
            image: '/assets/images/departments/facilities/eee/eee_facility8.jpg',
            inCharge: 'Ms. Abhilasha Parthan',
            staff: 'Mr. Ratheesh R'
        },
        {
            id: 'research',
            name: 'PG Research Lab',
            description: 'This lab facilitates different special electrical machines with their driver circuit and software supporting them.',
            image: '/assets/images/departments/facilities/eee/eee_facility9.jpg',
            inCharge: 'Ms. Abhilasha Parthan',
            staff: 'Mr. Ratheesh R'
        },
        {
            id: 'seminar',
            name: 'Seminar Hall',
            description: 'A well-equipped seminar hall with more than 100 seating capacity.',
            image: null,
            inCharge: 'Ms. Sindhu V',
            staff: 'Mr. Sudheesh M S'
        }
    ];

    const researchTopics = [
        'Design of new kinds of electrical machines, e.g. design of rotary linear switched reluctance motor for applications involving hybrid motion.',
        'Position, speed & torque control of various electrical machines through different methods, e.g. Sensor-less control of BLDC motors.',
        'Development of environment-friendly electric drives, e.g. Implementation of low-cost converter for an autonomous photovoltaic water pumping system.',
        'Development of energy-saving schemes, e.g. Energy regeneration during the braking of electric vehicles.',
        'Fault detection in various machines, e.g. Novel bearing fault detection and analysis of induction machines.',
        'Development of sensors for condition monitoring of electrical machines, e.g. Development of cost-effective sensor for estimation of dissolved moisture in transformer oil.'
    ];

    return (
        <div className={`eee-department-facilities ${poppins.className}`}>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-2">
                        Department of Electronics & Communication Engineering
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
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                The Department of Electronics& Communication Engineering is dedicated to the current needs of industry with the flexibility to tune its programmes according to the different requirements. Application of the state-of-the-art technology in various fields is one of the main focuses in the activities of the department. The department is well-equipped for training the students with a streamlined curriculum that provides an ambient atmosphere for learning and acquiring new skills. The department focuses on providing sound theoretical background as well as good practical exposure to the students for their future endeavors.
                            </p>
                            
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Available Laboratories</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    <li>Electrical Machines Lab</li>
                                    <li>Power System & High Voltage Engg Lab</li>
                                    <li>Measurements and Instrumentation Lab</li>
                                    <li>Electronics Circuits Lab</li>
                                    <li>Power Electronics Lab</li>
                                </ul>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    <li>Systems and Control Lab</li>
                                    <li>Microprocessor and Software Lab</li>
                                    <li>Electrical and Electronics Workshop</li>
                                    <li>PG Systems Lab</li>
                                    <li>PG Research Lab</li>
                                    <li>Seminar Hall</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Research & Consultancy Tab */}
                    {activeTab === 'research' && (
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Research and Consultancy</h3>
                            <p className="mb-6 text-gray-700 leading-relaxed">
                                In order to fit into the modern era of technology advancement, the Dept. of EEE lays considerable importance to in-house research. Due to the presence of a PG programme in the dept. in the area of Electrical Machines, much of the researches take place in this domain. These researches are carried out by the PG students, under the guidance of various faculties of the department. Some of the research topics in this domain are as follows:
                            </p>
                            
                            <div className="space-y-4">
                                {researchTopics.map((topic, index) => (
                                    <div key={index} className="flex">
                                        <div className="mr-3 mt-1">
                                            <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-900 font-semibold text-sm">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 flex-1">{topic}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-900">
                                <p className="text-gray-700">
                                    To support these researches, in addition to the regular electrical machines lab, there is a full-fledged research lab in the department with custom-designed Induction Motor, BLDC motor and SRM motor drives and their controllers for analysis and advanced machine design & control software such as Maxwell, Simplorer, and MATLAB. Apart from the research carried out in the PG stream, many developments are also done by the UG students under the guidance of various faculties in the department.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Department Library Tab */}
                    {activeTab === 'library' && (
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Department Library</h3>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Apart from a highly equipped Central Library, the Electrical and Electronics Engineering Department separately owns a standard library. This Department Library has several foreign and well-known publishers' books and study materials related to Electrical Engineering along with the textbooks and reference books prescribed by the University of Kerala as part of the Electrical Engineering curriculum. The Department is proud as the Faculty Members and students rely on the library faithfully for their reference, development, and research activities.
                                </p>
                                <p>
                                    Apart from the above-mentioned texts and references, the Department also takes the initiative in subscribing to various Technical Journals and Magazines. The Faculty Members and students having IEEE Membership help in updating the Department.
                                </p>
                            </div>
                            
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-yellow-50 p-4 rounded-lg border-t-2 border-yellow-900 text-center">
                                    <div className="text-2xl font-bold text-yellow-900 mb-1">500+</div>
                                    <div className="text-sm text-gray-600">Books & References</div>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg border-t-2 border-yellow-900 text-center">
                                    <div className="text-2xl font-bold text-yellow-900 mb-1">10+</div>
                                    <div className="text-sm text-gray-600">Technical Journals</div>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg border-t-2 border-yellow-900 text-center">
                                    <div className="text-2xl font-bold text-yellow-900 mb-1">24/7</div>
                                    <div className="text-sm text-gray-600">Digital Access</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Laboratories Tab */}
                    {activeTab === 'labs' && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Laboratories</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {labs.map((lab) => (
                                    <div key={lab.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        {lab.image && (
                                            <div className="h-48 w-full overflow-hidden">
                                                <img 
                                                    src={lab.image} 
                                                    alt={lab.name} 
                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-4">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{lab.name}</h4>
                                            <p className="text-gray-600 mb-4">{lab.description}</p>
                                            <div className="text-sm text-gray-700">
                                                <div className="flex items-start mb-1">
                                                    <span className="font-semibold mr-2 min-w-[100px]">Lab in Charge:</span>
                                                    <span>{lab.inCharge}</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="font-semibold mr-2 min-w-[100px]">Technical Staff:</span>
                                                    <span>{lab.staff}</span>
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