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

export default function CivilDepartmentFacilities() {
    const [activeTab, setActiveTab] = useState('overview');
    
    // Labs data for easier management and display
    const labs = [
        {
            id: "survey-laboratory",
            name: "Survey Laboratory",
            description: "Survey laboratory houses both conventional and modern equipment for practical surveying. The equipment available are LYNX Measuring Chain – 20m, LYNX Measuring Chain – 30m, LYNX Cross staff, LYNX Ranging rod, LYNX Offset rod, Measuring Tape – 30 m, Arrows, LYNX Prismatic Compass with aluminium stand, LYNX Plane Table with all accessories, LYNX Dumpy Level with aluminium tripod and all standard accessories, LYNX Auto Level with aluminium tripod and all standard accessories, LYNX Levelling Staff (4m), LYNX Standard Vernier Theodolite with aluminium tripod and all standard accessories, LYNX Planimeter with box, Total Station (Sokkia CX105), wooden mallet, wooden peg, distance meter and hand held G P S.",
            image: "",
            inCharge: "Mr Pradeep P",
            staff: "Ms. Manjula Devi S"
        },
        {
            id: "concrete-laboratory",
            name: "Concrete Laboratory",
            description: "This lab provides facilities for various tests for cement and concrete which includes test for compressive strength, flexural strength, fineness, and mix design of concrete etc. The main equipment include AIMIL AIL-317E-AN-2 Compression Testing machine (2000 KN), Electrically operated single phase with three load guage of 500 KN, 1000KN, 2000KN, LYNX Sieve Shaker (Gyratory motorized), Test Sieves 20 cm Diameter- 90 microns, LYNX Vicat Needle Apparatus, Le-Chatlier's Mould with 2 glass plate & 1 Lead wt., Le-Chatlier's Flask, Longitudinal Compresometer with dial gauge, Compaction Apparatus, Vee-Bee Consistometer, LYNX Tile Flexure Strength Testing Machine, LYNX Cylindrical Metal Measures (15 lit), Density Basket, Vibrating Table (500×500 mm), Slump Testing Apparatus, Needle Vibrator, Cylindrical Mould (150 x 300mm), Beam Mould ( 100 x 100 x 500 mm), LYNX Cube Mould (150 x 150 mm) and LYNX Steel Cube mould (70mm).",
            image: "",
            inCharge: "Mr Ashok Mathew",
            staff: "Mr Renjith C R"
        },
        {
            id: "geo-tech-laboratory",
            name: "Geo-Technical Engineering Laboratory",
            description: "The laboratory has facilities for conducting practical classes for undergraduate programmes. The undergraduate students are being encouraged to take up topics in the field of Geotechnical Engineering for their project work by making use of facilities available in the laboratory. Various equipment available in the lab are LYNX Direct Shear Apparatus (motorised), Dial Guage (0.01 X 25mm), Proving Ring (2 KN), Unconfined Compression Test Apparatus, Dial Guage 0.01 X 25mm, Extractor Frame for 38mm diameter sample with mould, Soil Permeability Apparatus, Overhead Tank for soil Permeability, Rammer – 4.89 kg X 450 mm free fall, Rammer – 2.6 kg X 310 mm free fall, LYNX Consolidation Apparatus with Dial Guage, Proctor mould (Gun metal) 1000cc, Rammer – 2.6 kg X 310 mm free fall, Test Sieves 20cm diameter in Brass frame 4.75,2.36,1.18,2,1,600 microns,425 microns,300 microns,150 microns and 75 microns, LYNX Liquid Limit Test Apparatus with counter, LYNX Shrinkage Limit Apparatus, Soil Hydrometer and High speed stirrer, Core Cutter, Pycnometer, LYNX Sand Pouring Cylinder (Large) and measuring Cylinder – 1000 ml, 500 ml, 250 ml, 100 ml.",
            image: "",
            inCharge: "Ms Regi P Mohan",
            staff: "Mr Syam Raj S"
        },
        {
            id: "strength-of-materials",
            name: "Strength of Materials Lab",
            description: "The objective of the strength of materials lab is to demonstrate the basic principles in the area of strength and mechanics of materials and structural analysis to the undergraduate students through a series of experiments. In this lab, the experiments are performed to measure the properties of the materials such as impact strength, tensile strength, compressive strength, hardness, ductility etc. The equipment available are Impact Testing machine Krystal Elmec-Model KI300, Rockwell Hardness Testing Machine- Krystal Elmec, Brinell Hardness Testing Machine, Fly wheel, Compound Pendulum, Torsion of wires, Universal Testing Machine, -Model-UTK 100 – Make Krystal Elmec, Torsion Testing Machine – Model – 77K 50 – Make Krystal Elmec, Stop Watch and dial Gauge with Magnetic Stand.",
            image: "",
            inCharge: "Ms Indhu V S",
            staff: "Mr Syam Raj S"
        },
        {
            id: "transportation-lab",
            name: "Transportation Engineering Laboratory",
            description: "The Transportation Engineering Laboratory is equipped with facilities for testing of Aggregates, Bitumen and Soil. The laboratory is fully equipped for conduct of regular experiments at UG level and consultancy works. Various equipment available in the lab are Abrasion Testing Machine, Ring and Ball Apparatus (motorised), Standard Penetrometer, Ductility Testing Machine, Crushing Value Test Apparatus, Test Sieves 30cm Dia, Thickness Gauge, Length Gauge, Density Basket, CBR Test Apparatus, Impact Value With Counter and Compression Testing Machine.",
            image: "",
            inCharge: "Ms. Aswathy Lal",
            staff: "Mr Syam Raj S"
        },
        {
            id: "environmental-lab",
            name: "Environmental Engineering Lab",
            description: "The environmental lab serves to acquaint students with the details of water and wastewater analysis for water and wastewater treatment. The lab is well equipped with Flame Photometer, UV- Visible Spectrophotometer (Double beam), BOD Incubator, Laminar Air flow cabinet (Vertical), Auto Clave (Vertical) and COD Digestion Apparatus.",
            image: "",
            inCharge: "Ms Jency James",
            staff: "Ms Manjula Devi S"
        },
        {
            id: "advanced-computational",
            name: "Advanced Computational Lab",
            description: "This lab deals with the study of various distinctive features and tools used in AutoCAD in civil engineering drafting. Advanced Design and analysis softwares used are STAAD-PRO V8i, STAAD-PRO FOUNDATION, RESIST, AUTO CADD 2014, TOTAL STATION and MS PROJECT 2013.",
            image: "",
            inCharge: "Ms Namitha Chandran",
            staff: "Ms Sindhu O"
        },
        {
            id: "civil-workshop",
            name: "Civil Engineering Workshop",
            description: "This lab is intended to conduct the practical sessions of the first year B-tech students. Training sessions like setting out of building, area and volume calculation of building and building components, making of brick bonds and basics surveying using levelling instruments are conducted by using this lab facility. The items present in this lab are Micrometer(0.25mm), Aluminium Spirit Level, Hacksaw Frame, TAPARIA Pipe Wrench 14″, TAPARIA Screw Spanner 12″, Plumb Bob, Plier 8″, Vernier Calipers (0-25mm), Pipe vice 2″, Tape 15 m, Tape 5m, Try Square 10″, Screw Driver, Scale 1m(Steel), M.S.I Beam 4″, M.S. Angle 50 x 6, M.S. Channel 3″, aluminium rectangular box channel, wash basin, Europian water closet and flush tank.",
            image: "",
            inCharge: "Mr Unnikrishnan S",
            staff: "Ms Manjula Devi S"
        },
        {
            id: "structural-dynamics",
            name: "Structural Dynamics Laboratory (PG)",
            description: "Structural dynamics lab has testing facility for vibration testing and data analysis. Various lab equipment include Horizontal Shake Table with Electronic Cam (Harmonic Base Motor), Vertical Shake Table, Experimental Models Shake Table Instrumentation (Accelero Meters, Data Acquistion System and Vibration Analyser Software).",
            image: "",
            inCharge: "Ms Ritzy R",
            staff: "Mr Renjith C R"
        },
        {
            id: "structural-engineering",
            name: "Structural Engineering Laboratory (PG)",
            description: "The lab mainly facilitates the post graduate students and the research scholars to conduct the experiments related to structural engineering. Some of the facilities available in the lab are Loading Frame (100 T) 5m X 3.1m, Ultrasonic Pulse Velocitymeter, Data Acquisition System. DT-800, DATA TAKER, AIM 388 Concrete Test Hammer, Rebar Locator, Accelerated Curing Tank, Vicat Apparatus, AIM-400. Le-Chatlier Mould, AIM-414 Mould Steel for 70.6mm Cube size, AIM -344 Mould Cast iron for 150mm Cube Size, AIM-349 Cylindrical Cast iron Mould (150 x 300), AIM-346 Beam Mould (100 x 100 x 500mm), AIM-334 Slump Test Apparatus, AIM-05325 Sieves (20cm dia Brass frame X 90 micron), HITTACHI Marble Cutting Machine, HITTACHI Chap Screw Cutter, Hydraulic Jack 1000 KN Capacity with guage and hand Pump at 5m long pressure flexible hose, LVDT 25mm Load Cell 1000KN (Flat Top) with Digital Indicator, Digital Guage 25mm travel (0.01mm Least Count), LYNX Cube Mould (150mm), LYNX Cylindrical Mould (150 x 300mm), LYNX Beam Mould (100x100x500mm), LYNX Cube Mould (100mm), Manual Operated Hydraulic Floor Crane (1Ton) and 1/2 Bag mixer Machine Heavy Duty with 3HP Electric Motor.",
            image: "",
            inCharge: "Ms Indhu V S",
            staff: "Mr Syam Raj S"
        },
      
    ];

    // Research topics data
    const researchTopics = [
       
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
                                The Department of Civil Engineering is dedicated to the current needs of industry with the flexibility to tune its programmes according to the different requirements. Application of the state-of-the-art technology in various fields is one of the main focuses in the activities of the department. The department is well-equipped for training the students with a streamlined curriculum that provides an ambient atmosphere for learning and acquiring new skills. The department focuses on providing sound theoretical background as well as good practical exposure to the students for their future endeavors.
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
                                    <p className="text-gray-600">Specialized research in civil engineering and innovative technology development.</p>
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
                                In order to fit into the modern era of technology advancement, the Dept. of Civil Engineering lays considerable importance to in-house research. Due to the presence of a PG programme in the dept. in the area of Structural Engineering, much of the researches take place in this domain. These researches are carried out by the PG students, under the guidance of various faculties of the department.
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
                                    To support these researches, in addition to the regular civil engineering labs, there are full-fledged research labs in the department with advanced equipment and software such as STAAD-Pro, AutoCAD, and other analysis tools. Apart from the research carried out in the PG stream, many developments are also done by the UG students under the guidance of various faculties in the department.
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
                                        Apart from a highly equipped Central Library, the Civil Engineering Department separately owns a standard library. This Department Library has several foreign and well-known publishers&apos; books and study materials related to Civil Engineering along with the textbooks and reference books prescribed by the University of Kerala as part of the Civil Engineering curriculum.
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
                                            <span className="text-gray-700">Study Materials for Civil Engineering</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Civil Engineering Standards and Codes</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <p className="text-gray-700 mb-4">
                                    Apart from the above-mentioned texts and references, the Department also takes the initiative in subscribing to various Technical Journals and Magazines. The Faculty Members and students having professional memberships help in updating the Department.
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