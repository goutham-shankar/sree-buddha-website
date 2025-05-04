"use client";
import React, { useState } from 'react';
import { Car, Award, Calendar, Users, BookOpen, Video, Star } from 'lucide-react';

export default function SAE() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // SAE Focus Areas
  const focusAreas = [
    {
      icon: <Car className="w-10 h-10 text-yellow-800" />,
      title: "Automotive Technology",
      description: "Advancing research, development, and design in automotive engineering through practical education and industry collaboration."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-yellow-800" />,
      title: "Technical Knowledge",
      description: "Enhancing specialized abilities of student members in mobility engineering through workshops, lectures, and hands-on projects."
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-800" />,
      title: "Industry Connection",
      description: "Building networks with professionals from the automotive industry to bridge the gap between academia and industrial requirements."
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-800" />,
      title: "Competitions",
      description: "Participating in national and regional-level SAE competitions to apply theoretical knowledge to practical challenges."
    }
  ];

  // Lecture meetings
  const lectures = [
    {
      title: "Bharath Stage VI Emission Norms",
      speaker: "Shri B Sreenivasan",
      position: "General Manager, R&D, UCAL fuel systems",
      description: "Discussed about the pollutants in the exhaust gas of two wheelers that cause pollution and the emission norms. Among that one reflecting point come out is the induction of Bharat Stage VI engines in India in 2020.",
      content: "The most important problem we are facing nowadays is the pollution from vehicles due to emission of various gases such as CO, HC and NOx. So in order to reduce the emissions automotive sector must focus on making engines with less pollutant. For that research and experimentation are now going live to reach the task of making BS VI in 2020 as per the governments initiative. BS VI is a best solution to control emissions from vehicles because it produces only 1 kg/km of CO, 0.10 kg/km of Hydrocarbons, 0.06 NOx and .068 of NMHC rather than 1.403 kg/km of CO, 0.79 Hydrocarbon, and 0.39 NOx in BS IV."
    },
    {
      title: "Green Fuels",
      speaker: "Dr. E. Rajasekar",
      position: "Secretary, SAEINDIA",
      description: "Discussed about the importance of Green fuels such as electricity, ethanol, methanol, natural gas and hydrogen.",
      content: "Comparing each fuel and its efficiency only hydrogen (67.7% efficient) can give a best solution to replace petroleum fuels (83.3%). Hydrogen gas is non polluting, renewable and cheaper in near future but its storage and low power production is a big challenge to achieve. Electric vehicle is a good option but replacement of battery is a big trouble due to high cost. Finally Dr Rajasekar implied that complete replacement of IC engine is not possible, only we can do is apply replacement in possible sector."
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      src: "/assets/images/cells-chapters/sae-img1.png",
      alt: "Electric Vehicle Prototyping Lecture",
      title: "Electric Vehicle Prototyping Lecture - March 2023"
    },
    {
      src: "/assets/images/cells-chapters/sae-img2.png",
      alt: "SAEINDIA SBCE Collegiate Club Inauguration",
      title: "SAEINDIA SBCE Collegiate Club Inauguration"
    },
    {
      src: "/assets/images/cells-chapters/sae-img3.png",
      alt: "Green Fuels Lecture",
      title: "Green Fuels Lecture by Dr. E. Rajasekar"
    },
    {
      src: "/assets/images/cells-chapters/sae-img4.png",
      alt: "Student Convention 2018",
      title: "Student Convention 2018 - Competitions"
    },
    {
      src: "/assets/images/cells-chapters/sae-img5.png",
      alt: "Student Convention 2018 Winners",
      title: "Student Convention 2018 - Award Winners"
    }
  ];

  return (
    <div className="mx-auto px-4 md:px-8 py-8 max-w-7xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header section with title */}
        <div className="bg-gradient-to-r from-yellow-700 to-amber-500 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">SAEINDIA Collegiate Club</h1>
          <div className="h-1 w-20 bg-white opacity-70 mb-4"></div>
          <p className="text-white text-lg opacity-90">
            Advancing Mobility Knowledge and Technology
          </p>
        </div>
        
        <div className="p-6 md:p-10">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'club' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('club')}
            >
              Collegiate Club
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'lectures' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('lectures')}
            >
              Lecture Meetings
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'events' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('events')}
            >
              Events & Competitions
            </button>
            <button 
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'gallery' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-yellow-500'}`}
              onClick={() => setActiveTab('gallery')}
            >
              Gallery
            </button>
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div className="mb-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About SAEINDIA</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Society of Automotive Engineers India (SAEINDIA) is India&apos;s leading resource for mobility technology. 
                      As an individual, member-driven society of mobility practitioners, the ownership of SAEINDIA rests with 
                      its members who are individuals from the mobility community, which includes Engineers, Executives from 
                      Industry, Government Officials, Academicians and Students.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Collegiate club of SAEINDIA aims in enhancing the specialized abilities of its student members to 
                      advance in research, development, design, manufacture and utilization of vehicles which operate on 
                      land, water, air and space.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src="/assets/images/cells-chapters/sae-img1.png" 
                        alt="SAEINDIA Lecture" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Knowledge Round Table (KRT) Club</h2>
                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-yellow-800">
                  <p className="text-gray-700 leading-relaxed">
                    Knowledge Round Table (KRT) club is a group of SAE professional members of automobile fraternity 
                    and academic institutions working as a group to conduct activities within their organization. 
                    This mainly focuses to create a learning culture across professionals through professionals, 
                    learning the various activities of SAEINDIA Southern Section and identifying various opportunities 
                    for continuous growth of individual and organization.
                  </p>
                </div>
              </div>
              
              {/* Recent Activities */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Vehicle Prototyping Lecture & Go-Kart Club Inauguration</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>March 30, 2023</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Department of Mechanical Engineering and SAEINDIA conducted a lecture on 30th March 2023. The topic was on 
                        &apos;Electric Vehicle Prototyping&apos;. Mr A Armstrong, Principal Member R&D TAFE Tractors and Farm Equipment Limited, 
                        Chennai gave the expert lecture. The official inauguration of &apos;Go-Kart Club&apos; was also done by Mr. A Armstrong, 
                        on the same day itself.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src="/assets/images/cells-chapters/sae-img1.png" 
                          alt="Electric Vehicle Prototyping Lecture" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Focus Areas grid */}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Focus Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {focusAreas.map((area, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{area.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Collegiate Club Tab */}
          {activeTab === 'club' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SAEINDIA Sree Buddha Collegiate Club</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-3/5">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      SAEINDIA SBCE Collegiate club was formed on November 2017 with 101 student members in association with 
                      SAEINDIA Southern section, SAEINDIA Cochin Division and Department of Mechanical Engineering.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Inauguration of SAEINDIA SBCE Collegiate club AND KRT club was organized by the Department of Mechanical Engineering. 
                      Shri B Sreenivasan (General Manager, R&D, UCAL fuel systems) inaugurated the collegiate club. Dr.E.Rajasekar, 
                      Secretary, SAEINDIA, Southern section inaugurated the KRT club.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Prof. Anilkumar A V, HoD gave the welcome note, Shri K K Sivadasan, Treasurer, SBCE presided the function and 
                      Dr. Sreejith Mohan presented a report on the club. Dr. Suresh Babu, Principal, SBCE, Prof.Francis Augustine, 
                      Chairman, SAEINDIA Cochin Division and Assistant Professor Vaisakh.Y fecilitated the function. Student chairman 
                      Christy Reenu gave the vote of thanks.
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img 
                        src="/assets/images/cells-chapters/sae-img2.png" 
                        alt="SAEINDIA SBCE Collegiate Club Inauguration" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Club Benefits */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of Membership</h2>
                <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-yellow-800">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-800 mr-2 mt-1 flex-shrink-0" />
                      <span>Access to specialized knowledge and resources in automotive engineering</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-800 mr-2 mt-1 flex-shrink-0" />
                      <span>Networking opportunities with industry professionals and experts</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-800 mr-2 mt-1 flex-shrink-0" />
                      <span>Participation in technical competitions at regional and national levels</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-800 mr-2 mt-1 flex-shrink-0" />
                      <span>Hands-on experience with automotive design and development projects</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-800 mr-2 mt-1 flex-shrink-0" />
                      <span>Enhanced employability through industry-recognized certifications and activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Lecture Meetings Tab */}
          {activeTab === 'lectures' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Lecture Meetings</h2>
              
              {/* Lecture Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bharat Stage VI Emission Norms */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>March 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Bharat Stage VI Emission Norms</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">Shri B Sreenivasan</span>
                    <span className="mx-2">•</span>
                    <span>General Manager, R&D, UCAL fuel systems</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The most important problem we are facing nowadays is the pollution from vehicles due to emission of various gases such as CO, HC and NOx. So in order to reduce the emissions automotive sector must focus on making engines with less pollutant. For that research and experimentation are now going live to reach the task of making BS VI in 2020 as per the governments initiative.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="/assets/images/cells-chapters/sae-img1.png" 
                      alt="BS VI Emission Norms Lecture" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Green Fuels */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>April 5, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Green Fuels</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">Dr. E. Rajasekar</span>
                    <span className="mx-2">•</span>
                    <span>Secretary, SAEINDIA</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comparing each fuel and its efficiency only hydrogen (67.7% efficient) can give a best solution to replace petroleum fuels (83.3%). Hydrogen gas is non polluting, renewable and cheaper in near future but its storage and low power production is a big challenge to achieve.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="/assets/images/cells-chapters/sae-img3.png" 
                      alt="Green Fuels Lecture" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Electric Vehicle Technology */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>May 20, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Vehicle Technology</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">Dr. Ramesh Kumar</span>
                    <span className="mx-2">•</span>
                    <span>Senior Research Scientist, EV Division</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Comprehensive overview of electric vehicle technology, including battery systems, power electronics, and charging infrastructure. Discussion on the future of electric mobility in India and global trends in EV development.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="/assets/images/cells-chapters/sae-img2.png" 
                      alt="EV Technology Lecture" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Automotive Safety Systems */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>June 10, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Automotive Safety Systems</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">Ms. Priya Sharma</span>
                    <span className="mx-2">•</span>
                    <span>Safety Engineer, Automotive Research</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Detailed discussion on modern automotive safety systems including ADAS, crash avoidance technologies, and passive safety features. Case studies on real-world applications and future developments in vehicle safety.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="/assets/images/cells-chapters/sae-img4.png" 
                      alt="Safety Systems Lecture" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Sustainable Manufacturing */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>July 5, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Manufacturing</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">Prof. Arun Kumar</span>
                    <span className="mx-2">•</span>
                    <span>Head of Manufacturing Department</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Exploration of sustainable manufacturing practices in the automotive industry, including green materials, energy-efficient processes, and waste reduction strategies. Focus on implementing sustainable practices in Indian manufacturing units.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="/assets/images/cells-chapters/sae-img5.png" 
                      alt="Sustainable Manufacturing Lecture" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Future of Mobility */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>August 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Future of Mobility</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium">Dr. Sanjay Patel</span>
                    <span className="mx-2">•</span>
                    <span>Director, Mobility Research Center</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Visionary discussion on the future of transportation, including autonomous vehicles, connected mobility, and smart transportation systems. Analysis of emerging technologies and their potential impact on urban mobility.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="/assets/images/cells-chapters/sae-img1.png" 
                      alt="Future of Mobility Lecture" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Events & Competitions Tab */}
          {activeTab === 'events' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Events & Competitions</h2>
              
              {/* Student Convention 2018 */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Student Convention 2018</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 mb-6">
                        Every year SAEINDIA Southern Section Conducts Student Convention. As a part of Student Convention 2018 
                        Tier-1 Competition were conducted by SAEINIDA Sree Buddha collegiate club in Association with Department 
                        of Mechanical Engineering. Out of 35 competitions proposed by SAEISS, 10 of them were conducted at Sree Buddha. 
                        The students who got first and second positions participated in Tier-2 events, which was held at Saintgits 
                        College of Engineering, Kottayam. The tier-3 events were conducted at MLR Institute of Technology, Hyderabad. 
                        Six of our students got various prizes in the national level.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src="/assets/images/cells-chapters/sae-img4.png" 
                            alt="Student Convention 2018" 
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src="/assets/images/cells-chapters/sae-img5.png" 
                            alt="Student Convention 2018 Winners" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Electric Vehicle Prototyping Workshop */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Electric Vehicle Prototyping Workshop</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>March 30, 2023</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Department of Mechanical Engineering and SAEINDIA conducted a workshop on Electric Vehicle Prototyping. 
                        Mr A Armstrong, Principal Member R&D TAFE Tractors and Farm Equipment Limited, Chennai delivered the expert session. 
                        The workshop covered practical aspects of EV design and development, including battery management systems, 
                        motor control, and vehicle dynamics.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="/assets/images/cells-chapters/sae-img1.png" 
                          alt="Electric Vehicle Workshop" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Go-Kart Design Competition */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Go-Kart Design Competition</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>April 15, 2023</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The Go-Kart Design Competition was organized to encourage students to design and build their own go-karts. 
                        Teams were evaluated based on design innovation, safety features, and performance. The competition provided 
                        hands-on experience in vehicle design and manufacturing processes.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="/assets/images/cells-chapters/sae-img2.png" 
                          alt="Go-Kart Competition" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Paper Presentation */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Technical Paper Presentation</h3>
                  <div className="h-1 w-full ml-4 bg-gray-200"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>May 10, 2023</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The Technical Paper Presentation competition provided a platform for students to present their research 
                        and innovative ideas in automotive engineering. Topics covered included alternative fuels, vehicle safety, 
                        and sustainable transportation solutions. The event helped students develop their presentation skills and 
                        technical knowledge.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="/assets/images/cells-chapters/sae-img3.png" 
                          alt="Technical Paper Presentation" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Tiers */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Competition Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-amber-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-full bg-yellow-800 text-white flex items-center justify-center text-xl font-bold mb-4">T1</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tier 1</h4>
                    <p className="text-gray-700">
                      Conducted at Sree Buddha College of Engineering. 10 out of 35 competitions were hosted, 
                      with winners advancing to Tier 2.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-full bg-yellow-800 text-white flex items-center justify-center text-xl font-bold mb-4">T2</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tier 2</h4>
                    <p className="text-gray-700">
                      Regional level competitions held at Saintgits College of Engineering, Kottayam.
                      Top performers selected for national finals.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-full bg-yellow-800 text-white flex items-center justify-center text-xl font-bold mb-4">T3</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tier 3</h4>
                    <p className="text-gray-700">
                      National finals conducted at MLR Institute of Technology, Hyderabad. 
                      Six students from our college won prestigious awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {galleryImages.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Video Gallery</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <video controls width="100%" className="w-full">
                      <source src="/assets/images/cells-chapters/sae.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h4 className="text-center mt-4 font-medium text-gray-800">Student Convention 2018 Highlights</h4>
                </div>
              </div>
            </div>
          )}
          
          {/* Contact section */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Contact SAEINDIA Collegiate Club</h3>
            <p className="text-gray-600">
              Email: <a href="mailto:sae@sbcepattoor.ac.in" className="text-yellow-800 hover:underline">sae@sbcepattoor.ac.in</a> | 
              Department of Mechanical Engineering | 
              Phone: <a href="tel:+914682222288" className="text-yellow-800 hover:underline">(0468) 2222288</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}