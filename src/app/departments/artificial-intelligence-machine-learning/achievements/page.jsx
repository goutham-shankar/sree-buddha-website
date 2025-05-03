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

const GalleryImage = memo(({ num }) => (
    <div
        className="group relative aspect-square rounded-lg overflow-hidden shadow-md border border-gray-200"
        data-testid={`gallery-image-${num}`}
    >
        <div className="relative w-full h-full">
            <Image
                src={`/assets/images/departments/achievements/ai_achievements_${num}.jpg`}
                alt={`Achievement ${num}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <span className="text-white p-4 text-sm font-medium">Achievement {num}</span>
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

export default function DepartmentAchievements() {
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

    // Empty achievements list
    const otherAchievements = [];

    // Empty featured achievements
    const featuredAchievements = [];

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
                            Department Of AI ML Engineering
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

                        {/* Hero achievement - empty */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2">
                                    <div className="relative h-64 md:h-80 lg:h-full w-full">
                                        <Image
                                            src="/assets/images/departments/achievements/ai_achievements_2.jpg"
                                            alt="Achievement"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 lg:w-1/2 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm font-medium mb-4">
                                        Academic Excellence
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Eighth Semester Toppers</h3>
                                    <p className="text-base md:text-lg text-gray-700">
                                        Congratulations to our academic toppers from CSAI departments who achieved exceptional results in the Eighth Semester B.Tech Degree Examinations of the First Autonomous Batch (2020-2024).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Other featured achievements - empty grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {featuredAchievements.map((achievement) => (
                                <AchievementCard
                                    key={achievement.id}
                                    {...achievement}
                                />
                            ))}
                            {featuredAchievements.length === 0 && (
                                <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-8">
                                    <p className="text-gray-500">No featured achievements to display.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Student Spotlight Tab */}
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
                                                src="/assets/images/departments/achievements/placeholder_student.jpg"
                                                alt="Student"
                                                fill
                                                sizes="(max-width: 768px) 192px, 224px"
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-900 text-white px-4 py-1 rounded-full text-sm font-bold">
                                            Achievement
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 md:pl-12 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">STUDENT NAME</h3>
                                    <div className="mb-4 flex flex-wrap justify-center md:justify-start gap-2">
                                        <span className="bg-yellow-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">Category</span>
                                        <span className="bg-yellow-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded-full">Department</span>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg">
                                        Student achievement description will be displayed here.
                                    </p>
                                </div>
                            </div>
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
                            {[1, 2,].map((num) => (
                                <GalleryImage key={num} num={num} />
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                href="#view-full-gallery"
                                className="inline-block bg-yellow-900 hover:bg-yellow-800 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2"
                                aria-label="View the full gallery of achievements"
                            >
                                View Full Gallery
                            </Link>
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
                                            `Showing ${Math.min(5, otherAchievements.length)} of ${otherAchievements.length} achievements`}
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
                                        <option>Sort by Student Name</option>
                                    </select>
                                </div>
                            </div>

                            {displayedAchievements.length > 0 ? (
                                <div className="space-y-3 md:space-y-4">
                                    {displayedAchievements.map((achievement, index) => (
                                        <AchievementListItem
                                            key={index}
                                            achievement={achievement}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">No achievements to display.</p>
                                </div>
                            )}

                            {!showAllAchievements && otherAchievements.length > 5 && (
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