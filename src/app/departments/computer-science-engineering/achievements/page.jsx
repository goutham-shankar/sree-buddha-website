"use client"
import React, { useState } from 'react'

export default function ComputerScienceDepartmentAchievements() {
    const [activeTab, setActiveTab] = useState('featured');
    const [showAllAchievements, setShowAllAchievements] = useState(false);

    // List of achievements for the bulleted list section
    const otherAchievements = [
        "Ms. Alina M George, S6 CSE was selected as runner-up in DISHA 18, the Career Queen Summit organized by Prayaana – the first of its kind Employability, Entrepreneurship and Innovation Lab for Women, at Infopark, Cochin on March 10th, 2018.",
        "Mr. Adithya V, S6 CSE won First place in web design as part of EKA 18, Tech-fest organized by College of Engineering, Pathanapuram on 12th and 13th March 2018.",
        "Mr. Adithya V, S6 CSE won First place in Markup as part of ASTHRA 2018 organised by St. Joseph's College of Engineering and Technology, Palai on 16th and 17th February 2018.",
        "Mr. Amal R, S6 CSE won Second place in Graphics Geek as part of National level IT Fest Technitrous 2K18 MACFAST, Thiruvalla on 11th and 12th January 2018.",
        "Mr. Ankith K, S4 CSE won First place in Mini Militia as part of SWASTHIKA 2018 organised by Mar Baselios College of Engineering, Peerumade on 8th and 9th February 2018.",
        "Mr. Adithya V, S6 CSE won First place in Spot Web as part of MAGNUM'18 held at College of Engineering, Chengannur on 12th, 13th and 14th January 2018.",
        "Mr. Adithya V, S6 CSE won First place in Web designing as part of ADVYKA 2018 organised by College of Engineering, Perumon on 16th and 17th February 2018.",
        "Mr. Akhil P Kumar, S4 CSE won First place in Mini Militia as part of SWASTHIKA 2018 organised by Mar Baselios College of Engineering, Peerumade on 8th and 9th February 2018.",
        "Mr. Mevin John Mathew, S4 CSE won First place in Mini Militia as part of SWASTHIKA 2018 organised by Mar Baselios College of Engineering, Peerumade on 8th and 9th February 2018.",
        "Best paper award in oral presentation at E2F2 2017 organized by SBCE, from 6th to 7th April 2017 - Ruhin Mary Saji, Mohammed Sayed, Drishya Gopakumar, Harish Kumar S.",
        "Sreenath R secured First position in the event Lost Compass conducted during Summit 2016 held at College of Engineering, Chengannur on September 29, 30 and October 1st 2016.",
        "Mr. Aju Thomas Yaohannan secured First position in the event Break the Code conducted during Summit 2016 held at College of Engineering, Chengannur on September 29, 30 and October 1st 2016.",
        "Mr. Aju Thomas Yaohannan secured First position in the event Lost Compass conducted during Summit 2016 held at College of Engineering, Chengannur on September 29, 30 and October 1st 2016.",
        "Mr. Sachin secured First position in the event Lost Compass conducted during Summit 2016 held at College of Engineering, Chengannur on September 29, 30 and October 1st 2016.",
        "Sreenath R participated in the event Lan Gaming conducted during Summit 2016 held at College of Engineering, Chengannur on September 29, 30 and October 1st 2016.",
        "Ms. Neenu Ann Shaji completed a 5-day training programme of the National Level Youth Entrepreneurship Development Program during the year 2015-2016 conducted by Rajiv Gandhi National Institute of Youth Development, Govt of India & ICT Academy of Tamil Nadu.",
        "Ms. Neenu Ann Shaji participated in the Computer Society of India State Student Convention held on February 19, 2016 at Sree Buddha College of Engineering, Pattoor, Alappuzha."
    ];

    // Featured achievements data
    const featuredAchievements = [
        {
            id: 1,
            image: "/assets/images/departments/achievements/cs_achievements1.jpg",
            description: "Mr Alan Raj, Ms Reshmi S Kaimal, Ms Sajishma S R and Ms Vaishnavi A K( CS8) guided by Ms Athira Shankar attended IEDC Samagra Expo 2K24 and received special mention award along with cash prize @ Adi Shankara Institute of Engineering and Technology Kalady."
        },
        {
            id: 2,
            image: "/assets/images/departments/achievements/cs_achievements2.jpg",
            description: "Arjun S Kumar & Prajith P Nair, S6 CSE won Second Place in the \"AI Image Generator\" event conducted at Nakshatra '24 @ SaintGitts College."
        },
        {
            id: 3,
            image: "/assets/images/departments/achievements/cs_achievements3.jpg",
            description: "B. Akash & Adhityan KA, S6 CSE won Second place in \"Code Optimiser\" contest conducted at Nakshatra '24 SaintGitts College."
        }
    ];

    // Display limited or all achievements based on state
    const displayedAchievements = showAllAchievements ? otherAchievements : otherAchievements.slice(0, 5);

    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="relative bg-gradient-to-b from-yellow-50 to-white">
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
                            Department Of Computer Science And Engineering
                        </h1>
                        <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" />
                        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">Achievements</h2>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className="md:hidden bg-yellow-800 sticky top-0 z-10">
                <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                    className="w-full p-4 bg-yellow-800 text-white focus:outline-none font-medium"
                >
                    <option value="featured">Featured Achievements</option>
                    <option value="spotlight">Student Spotlight</option>
                    <option value="gallery">Achievement Gallery</option>
                    <option value="list">All Achievements</option>
                </select>
            </div>

            {/* Desktop Navigation Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 hidden md:block sticky top-0 z-10 bg-white shadow-sm">
                <div className="flex overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('featured')}
                        className={`px-6 rounded-xl py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                            activeTab === 'featured' 
                                ? 'bg-yellow-900 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        Featured Achievements
                    </button>
                    <button
                        onClick={() => setActiveTab('spotlight')}
                        className={`px-6 rounded-xl py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                            activeTab === 'spotlight' 
                                ? 'bg-yellow-900 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        Student Spotlight
                    </button>
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`px-6 rounded-xl py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                            activeTab === 'gallery' 
                                ? 'bg-yellow-900 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        Achievement Gallery
                    </button>
                    <button
                        onClick={() => setActiveTab('list')}
                        className={`px-6 rounded-xl py-3 font-medium text-sm whitespace-nowrap transition-colors ${
                            activeTab === 'list' 
                                ? 'bg-yellow-900 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        All Achievements
                    </button>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                {/* Featured Achievements Tab */}
                {activeTab === 'featured' && (
                    <div className="space-y-8 md:space-y-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-900 pl-4">
                            Outstanding Recent Achievements
                        </h3>

                        {/* Hero achievement */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2">
                                    <img
                                        src="/assets/images/departments/achievements/cs_achievements10.jpg"
                                        alt="Sports Achievement"
                                        className="h-64 md:h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-6 md:p-8 lg:w-1/2 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm font-medium mb-4">
                                        Sports Excellence
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">KTU Sports Meet Gold Medalist</h3>
                                    <p className="text-base md:text-lg text-gray-700">
                                        Vijo P Varghese, third year Computer Science and Engineering student, bagged gold medal for long jump and triple jump in KTU sports meet
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Other featured achievements */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {featuredAchievements.map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img
                                            src={achievement.image}
                                            alt={`Achievement ${achievement.id}`}
                                            className="w-full h-48 sm:h-56 object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-gray-700">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Student Spotlight Tab */}
                {activeTab === 'spotlight' && (
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-900 pl-4">
                            Student Spotlight
                        </h3>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8 border border-gray-200">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                                    <div className="relative">
                                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-yellow-500">
                                            <img
                                                src="/assets/images/departments/achievements/cs_achievements11.jpg"
                                                alt="Ruksana Jalaludeen"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-900 text-white px-4 py-1 rounded-full text-sm font-bold">
                                            10/10 CGPA
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 md:pl-12 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">RUKSANA JALALUDEEN</h3>
                                    <div className="mb-4 flex flex-wrap justify-center md:justify-start gap-2">
                                        <span className="bg-yellow-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">Academic Excellence</span>
                                        <span className="bg-yellow-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">B.Tech CSE</span>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg">
                                        Third Semester B Tech Computer Science & Engineering Student secured 10 out of 10 (CGPA) in the Second Semester University Examination conducted by APJ Abdul Kalam Technological University in April 2018.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Achievement Gallery Tab */}
                {activeTab === 'gallery' && (
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-900 pl-4">
                            Achievement Gallery
                        </h3>

                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <div key={num} className="group relative aspect-square rounded-lg overflow-hidden shadow-md border border-gray-200">
                                    <img
                                        src={`/assets/images/departments/achievements/cs_achievements${num}.jpg`}
                                        alt={`Achievement ${num}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <span className="text-white p-4 text-sm font-medium">Achievement {num}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <a href="#" className="inline-block bg-yellow-900 hover:bg-yellow-800 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 shadow-sm">
                                View Full Gallery
                            </a>
                        </div>
                    </div>
                )}

                {/* All Achievements List Tab */}
                {activeTab === 'list' && (
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-900 pl-4">
                            All Department Achievements
                        </h3>

                        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                                <div className="mb-4 md:mb-0">
                                    <h4 className="text-lg font-medium text-gray-800">
                                        {showAllAchievements ?
                                            `Showing all ${otherAchievements.length} achievements` :
                                            `Showing 5 of ${otherAchievements.length} achievements`}
                                    </h4>
                                </div>
                                <div>
                                    <select className="border border-yellow-300 rounded-md py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                                        <option>Sort by Date</option>
                                        <option>Sort by Category</option>
                                        <option>Sort by Student Name</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                {displayedAchievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="p-3 md:p-4 border-l-4 border-yellow-900 bg-yellow-50 hover:bg-yellow-100 transition-colors rounded-r-md"
                                    >
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-full bg-yellow-900 text-white text-sm font-medium">
                                                {index + 1}
                                            </div>
                                            <div className="ml-3 md:ml-4">
                                                <p className="text-gray-800">{achievement}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {!showAllAchievements && (
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => setShowAllAchievements(true)}
                                        className="px-5 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors duration-300 shadow-sm"
                                    >
                                        Show All Achievements
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            
           
        </div>
    )
}