"use client";

import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Memoized components for better performance
const AchievementCard = memo(({ image, description, id }) => (
    <div
        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        data-testid={`achievement-card-${id}`}
    >
        <div className="aspect-w-16 aspect-h-9">
            <div className="relative w-full h-48 sm:h-56">
                <Image
                    src={image}
                    alt={`Achievement ${id}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                    priority={id === 1}
                />
            </div>
        </div>
        <div className="p-5">
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
));

AchievementCard.displayName = 'AchievementCard';

const GalleryImage = memo(({ num, src, alt }) => (
    <div
        className="group relative aspect-square rounded-lg overflow-hidden shadow-md border border-gray-200"
        data-testid={`gallery-image-${num}`}
    >
        <div className="relative w-full h-full">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <span className="text-white p-4 text-sm font-medium">{alt}</span>
        </div>
    </div>
));

GalleryImage.displayName = 'GalleryImage';

const TabButton = memo(({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-6 rounded-xl py-3 font-medium text-sm whitespace-nowrap transition-colors ${active
            ? 'bg-yellow-900 text-white shadow-lg'
            : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
        aria-selected={active}
        role="tab"
    >
        {children}
    </button>
));

TabButton.displayName = 'TabButton';

const AchievementListItem = memo(({ achievement, index }) => (
    <div
        className="p-3 md:p-4 border-l-4 border-yellow-900 bg-yellow-50 hover:bg-yellow-100 transition-colors rounded-r-md"
        data-testid={`achievement-item-${index}`}
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
));

AchievementListItem.displayName = 'AchievementListItem';

export default function MechanicalEngineeringDepartmentAchievements() {
    const [activeTab, setActiveTab] = useState('featured');
    const [showAllAchievements, setShowAllAchievements] = useState(false);

    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    const toggleShowAllAchievements = useCallback(() => {
        setShowAllAchievements(prev => !prev);
    }, []);

    const handleSelectChange = useCallback((e) => {
        setActiveTab(e.target.value);
    }, []);

    // List of achievements for the bulleted list section
    const otherAchievements = [
        "The Semi-Automatic Jack Fruit Dressing and Packing Machine developed by a group of final-year Mechanical Engineering students (Mr. Dhananjay Rajesh, Mr. Anoop U Kurup, Mr. Amal Dev, and Mr. Harikrishnan S) received recognition from the Govt. of Kerala.",
        "A memento was presented to Prof. Anilkumar A V, Head of Department of Mechanical Engineering, and project mentor Mr. Vaisakh P S, by Hon. Minister for Education Prof. C Raveendranath at the 'Jack Fest 2018' in Thrissur.",
        "The 'Semi-automatic Jackfruit Dressing and Packing Machine' was selected as one of the best innovative projects at TEKON 2018, a technical fest organized by APJ Abdul Kalam Technological University (KTU) and Kerala State Council for Science, Technology and Environment (KSCSTE).",
        "Eight SAEINDIA student members won prizes at the southern section Tier-II competitions at Saintgits College of Engineering.",
        "Six SAEINDIA student members won prizes at the National Level Tier-III competitions at MLR Institute of Technology, Hyderabad.",
        "Mr. Amjith TR, Assistant Professor, was awarded the Best Program Officer of the National Service Scheme (NSS) Technical Cell, Kerala, during 2017-18.",
        "Dr. Trijo Tharayil received the award for the best technical paper at the National Conference on 'Recent Advances in Mechanical Engineering' (RAME 2018) held at Sree Buddha College of Engineering, Alappuzha, Kerala, April 17-18, 2018.",
        "Dr. Sreejith Mohan, Associate Professor, was an invited speaker at the 4th Global Nano Technology Congress and Expo (GNCE) held in Dubai, April 16-18, 2018.",
        "Dr. Sreejith Mohan received a fund of Rs. 3,00,000 for his R&D project titled 'Design and Development of Low Fume Welding Electrodes' from the Kerala State Council for Science, Technology and Environment (KSCSTE).",
        "Vaisakh P S received funds from KSCSTE for projects on 'Jackfruit Dressing and Packing Machine' in 2018 (Rs 10,000).",
        "Vaisakh P S received funds from KSCSTE for projects on 'Semi-Automatic Jackfruit Dressing Machine' in 2017 (Rs 11,000)."
    ];

    // Featured achievements data
    const featuredAchievements = [
        {
            id: 1,
            image: "/assets/images/departments/achievements/mechanical_achievements_1.jpg",
            description: "The Semi-Automatic Jack Fruit Dressing and Packing Machine developed by final-year Mechanical Engineering students received recognition from the Govt. of Kerala. A memento was presented by Hon. Minister for Education at the 'Jack Fest 2018' in Thrissur."
        },
        {
            id: 2,
            image: "/assets/images/departments/achievements/mechanical_achievements_4.jpg",
            description: "The 'Semi-automatic Jackfruit Dressing and Packing Machine' was selected as one of the best innovative projects at TEKON 2018, a technical fest organized by APJ Abdul Kalam Technological University and KSCSTE."
        },
        {
            id: 3,
            image: "/assets/images/departments/achievements/mechanical_achievements_7.jpg",
            description: "Eight SAEINDIA student members won prizes at the southern section Tier-II competitions, with six of them also winning prizes at the National Level Tier-III competitions at MLR Institute of Technology, Hyderabad."
        }
    ];

    // Gallery images
    const galleryImages = [
        {
            num: 1,
            src: "/assets/images/departments/achievements/mechanical_achievements_1.jpg",
            alt: "Jack Fruit Dressing Machine - Govt Recognition"
        },
        {
            num: 2,
            src: "/assets/images/departments/achievements/mechanical_achievements_2.jpg",
            alt: "Jack Fruit Dressing Machine - Demo"
        },
        {
            num: 3,
            src: "/assets/images/departments/achievements/mechanical_achievements_3.jpg",
            alt: "Jack Fruit Dressing Machine - Close Up"
        },
        {
            num: 4,
            src: "/assets/images/departments/achievements/mechanical_achievements_4.jpg",
            alt: "TEKON 2018 Best Innovative Project"
        },
        {
            num: 5,
            src: "/assets/images/departments/achievements/mechanical_achievements_7.jpg",
            alt: "SAEINDIA Competition Winners"
        },
        {
            num: 6,
            src: "/assets/images/departments/achievements/mechanical_achievements_9.jpg",
            alt: "Mr. Amjith TR - Best NSS Program Officer"
        },
        {
            num: 7,
            src: "/assets/images/departments/achievements/mechanical_achievements_10.jpg",
            alt: "Dr. Trijo Tharayil - Best Technical Paper Award"
        }
    ];

    // Display limited or all achievements based on state
    const displayedAchievements = showAllAchievements ? otherAchievements : otherAchievements.slice(0, 5);

    const tabIds = {
        featured: 'featured-tab',
        spotlight: 'spotlight-tab',
        gallery: 'gallery-tab',
        list: 'list-tab'
    };

    const tabPanelIds = {
        featured: 'featured-panel',
        spotlight: 'spotlight-panel',
        gallery: 'gallery-panel',
        list: 'list-panel'
    };

    return (
        <div className="bg-white">
            {/* Header Section */}
            <header className="relative bg-gradient-to-b from-yellow-50 to-white">
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
                            Department Of Mechanical Engineering
                        </h1>
                        <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" aria-hidden="true" />
                        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">Achievements</h2>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Dropdown */}
            <div className="md:hidden bg-yellow-800 sticky top-0 z-10">
                <label htmlFor="mobile-tab-select" className="sr-only">Select achievement category</label>
                <select
                    id="mobile-tab-select"
                    value={activeTab}
                    onChange={handleSelectChange}
                    className="w-full p-4 bg-yellow-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 font-medium"
                    aria-label="Select achievement category"
                >
                    <option value="featured">Featured Achievements</option>
                    <option value="spotlight">Student Spotlight</option>
                    <option value="gallery">Achievement Gallery</option>
                    <option value="list">All Achievements</option>
                </select>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 hidden md:block sticky top-0 z-10 bg-white shadow-sm"
                aria-label="Achievement categories"
                role="tablist"
            >
                <div className="flex overflow-x-auto gap-2">
                    <TabButton
                        active={activeTab === 'featured'}
                        onClick={() => handleTabChange('featured')}
                        aria-controls={tabPanelIds.featured}
                        id={tabIds.featured}
                    >
                        Featured Achievements
                    </TabButton>
                    <TabButton
                        active={activeTab === 'spotlight'}
                        onClick={() => handleTabChange('spotlight')}
                        aria-controls={tabPanelIds.spotlight}
                        id={tabIds.spotlight}
                    >
                        Student Spotlight
                    </TabButton>
                    <TabButton
                        active={activeTab === 'gallery'}
                        onClick={() => handleTabChange('gallery')}
                        aria-controls={tabPanelIds.gallery}
                        id={tabIds.gallery}
                    >
                        Achievement Gallery
                    </TabButton>
                    <TabButton
                        active={activeTab === 'list'}
                        onClick={() => handleTabChange('list')}
                        aria-controls={tabPanelIds.list}
                        id={tabIds.list}
                    >
                        All Achievements
                    </TabButton>
                </div>
            </nav>

            {/* Content Sections */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                {/* Featured Achievements Tab */}
                <div
                    role="tabpanel"
                    id={tabPanelIds.featured}
                    aria-labelledby={tabIds.featured}
                    className={activeTab === 'featured' ? 'block' : 'hidden'}
                >
                    <div className="space-y-8 md:space-y-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-900 pl-4">
                            Outstanding Recent Achievements
                        </h3>

                        {/* Hero achievement */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2">
                                    <div className="relative h-64 md:h-80 lg:h-full w-full">
                                        <Image
                                            src="/assets/images/departments/achievements/mechanical_achievements_4.jpg"
                                            alt="Best Innovative Project Award in TEKON 2018"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 lg:w-1/2 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm font-medium mb-4">
                                        Project Excellence
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Best Innovative Project Award in TEKON 2018</h3>
                                    <p className="text-base md:text-lg text-gray-700">
                                        The "Semi-automatic Jackfruit Dressing and Packing Machine" was selected as one of the best innovative projects at TEKON 2018, a technical fest organized by APJ Abdul Kalam Technological University (KTU) and Kerala State Council for Science, Technology and Environment (KSCSTE). The event was inaugurated by Hon. Governor of Kerala, Shri. Justice P. Sathasivam.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Other featured achievements */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {featuredAchievements.map((achievement) => (
                                <AchievementCard
                                    key={achievement.id}
                                    {...achievement}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Faculty Spotlight Tab */}
                <div
                    role="tabpanel"
                    id={tabPanelIds.spotlight}
                    aria-labelledby={tabIds.spotlight}
                    className={activeTab === 'spotlight' ? 'block' : 'hidden'}
                >
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-900 pl-4">
                            Student Spotlight
                        </h3>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8 border border-gray-200">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                                    <div className="relative">
                                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-yellow-500">
                                            <Image
                                                src=""
                                                alt="mech"
                                                fill
                                                sizes="(max-width: 768px) 192px, 224px"
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-900 text-white px-4 py-1 rounded-full text-sm font-bold">
                                            10/10 CGPA
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 md:pl-12 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"></h3>
                                    <div className="mb-4 flex flex-wrap justify-center md:justify-start gap-2">
                                        <span className="bg-yellow-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">Academic Excellence</span>
                                        <span className="bg-yellow-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">B.Tech Mech</span>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg">

                                    </p>
                                </div></div>



                        </div>
                    </div>
                </div>

                {/* Achievement Gallery Tab */}
                <div
                    role="tabpanel"
                    id={tabPanelIds.gallery}
                    aria-labelledby={tabIds.gallery}
                    className={activeTab === 'gallery' ? 'block' : 'hidden'}
                >
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-900 pl-4">
                            Achievement Gallery
                        </h3>

                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                            {galleryImages.map((image) => (
                                <GalleryImage
                                    key={image.num}
                                    num={image.num}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Achievements List Tab */}
                <div
                    role="tabpanel"
                    id={tabPanelIds.list}
                    aria-labelledby={tabIds.list}
                    className={activeTab === 'list' ? 'block' : 'hidden'}
                >
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
                                    <label htmlFor="sort-select" className="sr-only">Sort achievements</label>
                                    <select
                                        id="sort-select"
                                        className="border border-yellow-300 rounded-md py-2 px-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                        aria-label="Sort achievements"
                                    >
                                        <option>Sort by Date</option>
                                        <option>Sort by Category</option>
                                        <option>Sort by Faculty</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                {displayedAchievements.map((achievement, index) => (
                                    <AchievementListItem
                                        key={index}
                                        achievement={achievement}
                                        index={index}
                                    />
                                ))}
                            </div>

                            {!showAllAchievements && (
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={toggleShowAllAchievements}
                                        className="px-5 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-800 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2"
                                        aria-expanded={showAllAchievements}
                                        aria-controls="achievement-list"
                                    >
                                        Show All Achievements
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}