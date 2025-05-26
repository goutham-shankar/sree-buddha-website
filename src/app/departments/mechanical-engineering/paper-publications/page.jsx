"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


// Publication data structure
const publicationsData = [
  {
    id: 1,
    authors: ["J.B. Sajin", "et al"],
    title: "Influence of fiber length on mechanical properties and microstructural analysis of jute fiber reinforced polymer composites",
    publication: "Materials Today: Proceedings",
    details: "https://doi.org/10.1016/j.matpr.2020.07.623",
    year: 2020,
    type: "journal"
  },
  {
    id: 2,
    authors: ["J.B. Sajin"],
    title: "Effect of Plural Spray Coating Process Parameters on Bonding Strength of Polyurea with Steel and Aluminum for Liquid Storage Applications",
    publication: "Journal of Testing and Evaluation (ASTM)",
    details: "",
    year: 2020,
    type: "journal"
  },
  {
    id: 3,
    authors: ["J.B. Sajin"],
    title: "Effect of Flame Retardant Additive with Polyurea for Explosive Environment",
    publication: "Materials Research Innovations, Taylor & Francis",
    details: "",
    year: 2019,
    type: "journal"
  },
  {
    id: 4,
    authors: ["J.B. Sajin"],
    title: "Effect of nanoparticle on emission and performance characteristics of biodiesel",
    publication: "International Journal of Ambient Energy, Taylor & Francis",
    details: "",
    year: 2019,
    type: "journal"
  },
  {
    id: 5,
    authors: ["J.B. Sajin"],
    title: "Assessment of the emission characteristics of the diesel engine with nano-particle in neem biodiesel",
    publication: "Energy sources Part A: Recovery, Utilization and Environment Effects (Taylor & Francis)",
    details: "https://doi.org/10.1080/15567036.2019.1612487",
    year: 2019,
    type: "journal"
  },
  {
    id: 6,
    authors: ["J.B. Sajin"],
    title: "Emission behavior studies on the cause of ZnO nanoparticle inclusion in neat biodiesel",
    publication: "Energy sources, Part A: Recovery, Utilization, and Environment Effects (Taylor & Francis)",
    details: "https://doi.org/10.1080/15567036.2019.1604909",
    year: 2019,
    type: "journal"
  },
  {
    id: 7,
    authors: ["J.B. Sajin"],
    title: "Emission Study on the effect of preheating the neat biodiesel on research diesel engine",
    publication: "International Journal of Ambient Energy (Taylor & Francis)",
    details: "https://doi.org/10.1080/01430750.2019.1594379",
    year: 2019,
    type: "journal"
  },
  {
    id: 8,
    authors: ["J.B. Sajin"],
    title: "Emission characteristics study of compression ignition engine fuelled with biodiesel and cerium oxide nanoparticles blends",
    publication: "International Journal of Ambient Energy, (Taylor & Francis)",
    details: "https://doi.org/10.1080/01430750.2019.1583132",
    year: 2019,
    type: "journal"
  },
  {
    id: 9,
    authors: ["J.B. Sajin"],
    title: "Performance Study of Neat Biodiesel-Gas Fuelled Diesel Engine",
    publication: "International Journal of Ambient Energy, (Taylor & Francis)",
    details: "Print ISSN: 0143-0750 Online ISSN: 2162-8246, https://doi.org/10.1080/01430750.2018.1542625",
    year: 2018,
    type: "journal"
  },
  {
    id: 10,
    authors: ["J.B. Sajin"],
    title: "Emission study of alcohol – biodiesel blends propelled diesel engine",
    publication: "International Journal of Ambient Energy, Taylor & Francis",
    details: "https://doi.org/10.1080/01430750.2018.1542629",
    year: 2018,
    type: "journal"
  },
  {
    id: 11,
    authors: ["J.B. Sajin"],
    title: "Influence of water on exhaust emissions on unmodified diesel engine propelled with biodiesel",
    publication: "Energy sources, Part A: Recovery, Utilization, and Environment Effects (Taylor & Francis)",
    details: "Print ISSN: 1556-7036 Online ISSN: 1556-7230, Volume 40, 2018 – Issue 21, Pages 2511-2517",
    year: 2018,
    type: "journal"
  },
  {
    id: 12,
    authors: ["J.B. Sajin"],
    title: "Evaluation of emission, performance and combustion characteristics of dual fuelled research diesel engine",
    publication: "Environmental Technology (Taylor & Francis)",
    details: "https://doi.org/10.1080/09593330.2018.1509888",
    year: 2018,
    type: "journal"
  },
  {
    id: 13,
    authors: ["J.B. Sajin"],
    title: "Performance and Emission Study on the effect of oxygenated additive in neat Biodiesel fuelled diesel Engine",
    publication: "Energy sources, Part A: Recovery, Utilization, and Environment Effects (Taylor & Francis)",
    details: "Volume 41, 2018 – Issue 16, Pages 2017-2027",
    year: 2018,
    type: "journal"
  },
  {
    id: 14,
    authors: ["J.B. Sajin"],
    title: "Deformation Studies in Natural Plant Fiber Composites Using Finite Element Analysis",
    publication: "International Journal of Engineering Computational Research and Technology",
    details: "ISSN (Online): 2456-9852, Volume 3, Issue 1, pp. 54-57",
    year: 2018,
    type: "journal"
  },
  {
    id: 15,
    authors: ["Sreejith Mohan"],
    title: "Control of exposure to Hexavalent chromium concentration in shielded metal arc welding fumes by nano-coating of electrodes",
    publication: "International Journal of Occupational and Environmental Health",
    details: "DoI: 10.1080/10773525.2018.1436014",
    year: 2018,
    type: "journal"
  },
  {
    id: 16,
    authors: ["Sreejith Mohan"],
    title: "Investigation on the Influence of Nano Structured Zirconia Coating on the Corrosion Inhibition of SS 304 Stainless Steel",
    publication: "Advanced Manufacturing and Materials Science",
    details: "DoI: 10.1007/978-3-319-76276-0_20",
    year: 2018,
    type: "conference"
  },
  {
    id: 17,
    authors: ["S. Senthil Saravanan"],
    title: "Mechanical behavior of carbon nanotubes reinforced AA 4032 bimodal alloys",
    publication: "Materials Today",
    details: "Volume 5, Issue 2, Part 2, Pages 6717-6721",
    year: 2018,
    type: "journal"
  },
  {
    id: 18,
    authors: ["Kiran Sankar M.S"],
    title: "Design and Fabrication of hybrid aluminium composite for automobile connecting rod",
    publication: "Advanced Manufacturing and Materials Science",
    details: "",
    year: 2018,
    type: "conference"
  },
  {
    id: 19,
    authors: ["B. Sajin"],
    title: "Finite element Analysis for deformation studies in natural fiber (Human hair) composites",
    publication: "International Journal of Applied Engineering Research (IJAER)",
    details: "ISSN 0973-4562 Volume 13, Number 9, pp. 6894-6897",
    year: 2018,
    type: "journal"
  },
  {
    id: 20,
    authors: ["B. Sajin"],
    title: "Influence of water on exhaust emissions on unmodified diesel engine propelled with biodiesel",
    publication: "Energy sources, Part A: Recovery, utilization, and Environment Effects",
    details: "ISSN: 1556-7036 (In Press)",
    year: 2018,
    type: "journal"
  },
  {
    id: 21,
    authors: ["B. Sajin"],
    title: "Finite Element Analysis for Deformation Studies in Natural Fiber (Human Hair) Composites",
    publication: "International Journal of Applied Engineering Research",
    details: "ISSN 0973-4562 Volume 13, Number 9, pp. 6894-6897",
    year: 2018,
    type: "journal"
  },
  {
    id: 22,
    authors: ["J. B. Sajin"],
    title: "Evaluation of emission, performance and combustion characteristics of dual fuelled research diesel engine",
    publication: "Environmental Technology",
    details: "Print ISSN: 0959-3330 Online ISSN: 1479-487X",
    year: 2018,
    type: "journal"
  },
  {
    id: 23,
    authors: ["S. Senthil Saravanan", "Sreejith Mohan", "J. B. Sajin"],
    title: "Synthesis of metal catalyst carbon nanotubes by arc-discharge method used for energy efficient applications",
    publication: "American Institute of Physics",
    details: "(In Press)",
    year: 2018,
    type: "journal"
  },
  {
    id: 24,
    authors: ["Trijo Tharayil"],
    title: "Effect of nanoparticle coating on the performance of a miniature loop heat pipe for electronics cooling applications",
    publication: "Journal of Heat Transfer",
    details: "",
    year: 2018,
    type: "journal"
  }
];

// Faculty members for filtering
const facultyMembers = [
  "Prof. S. Meera Bai",
  "Dr. Shamnamol G K",
  "Dr. Shilpa Lekshmi L",
  "Prof. Athulya Krishnan"
];

// Reusable components
const SectionTitle = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }) => (
  <div className="flex justify-center items-center mb-8 md:mb-12 px-2">
    <div className="w-8 sm:w-12 md:w-16 h-1 bg-yellow-900 mr-2 md:mr-4 hidden sm:block"></div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 text-center">
      {children}
    </h3>
    <div className="w-8 sm:w-12 md:w-16 h-1 bg-yellow-900 ml-2 md:ml-4 hidden sm:block"></div>
  </div>
);

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${active
        ? 'bg-yellow-900 text-white'
        : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
      } mb-2 mr-2`}
  >
    {children}
  </button>
);

const PublicationCard = ({ publication, highlight = false }) => {
  const cardClasses = highlight
    ? "bg-gradient-to-tr from-yellow-50 to-white border-l-4 border-yellow-900"
    : "bg-white hover:bg-yellow-50";

  return (
    <motion.div
      className={`p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6 ${cardClasses} transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col">
        <div className="w-full">
          <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-900">
            {publication.title}
          </h4>
          <p className="text-yellow-900 mb-2 sm:mb-3 text-sm sm:text-base">
            {publication.authors.join(", ")}
          </p>
          <p className="text-gray-700 mb-1 text-sm sm:text-base">
            <span className="font-medium">Publication:</span> {publication.publication}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm">
            {publication.details}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="bg-yellow-100 text-yellow-900 px-2 sm:px-3 py-1 rounded-full text-center text-xs sm:text-sm font-medium">
            {publication.type === 'journal' ? 'Journal' : publication.type === 'conference' ? 'Conference' : 'Book Chapter'}
          </div>
          <p className="text-gray-500 font-bold text-sm sm:text-base">{publication.year}</p>
          {publication.featured && (
            <div className="text-xs bg-yellow-900 text-white px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PublicationStats = ({ publications }) => {
  // Calculate statistics
  const stats = useMemo(() => {
    const totalPubs = publications.length;
    const journalPubs = publications.filter(p => p.type === 'journal').length;
    const conferencePubs = publications.filter(p => p.type === 'conference').length;
    const bookChapterPubs = publications.filter(p => p.type === 'book chapter').length;
    const yearCounts = publications.reduce((acc, pub) => {
      acc[pub.year] = (acc[pub.year] || 0) + 1;
      return acc;
    }, {});

    return {
      totalPubs,
      journalPubs,
      conferencePubs,
      bookChapterPubs,
      yearCounts
    };
  }, [publications]);

  const yearStats = Object.entries(stats.yearCounts).sort((a, b) => b[0] - a[0]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="text-3xl sm:text-4xl font-bold text-yellow-900 mb-2">{stats.totalPubs}</div>
        <div className="text-sm sm:text-base text-gray-700">Total Publications</div>
      </div>
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-900 mb-1">{stats.journalPubs}</div>
            <div className="text-xs sm:text-sm text-gray-700">Journals</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-900 mb-1">{stats.conferencePubs}</div>
            <div className="text-xs sm:text-sm text-gray-700">Conferences</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-900 mb-1">{stats.bookChapterPubs}</div>
            <div className="text-xs sm:text-sm text-gray-700">Book Chapters</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 sm:col-span-2 lg:col-span-1">
        <div className="mb-2 text-sm sm:text-base">Publications by Year</div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {yearStats.map(([year, count]) => (
            <div key={year} className="bg-yellow-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
              <span className="font-medium">{year}: </span>
              <span>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component
export default function ChemistryDepartmentPaperPublications() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [authorFilter, setAuthorFilter] = useState('all');
  const [publications, setPublications] = useState(publicationsData);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Get unique years for filter
  const years = useMemo(() => {
    const uniqueYears = [...new Set(publicationsData.map(pub => pub.year))];
    return uniqueYears.sort((a, b) => b - a); // Sort in descending order
  }, []);

  // Filter publications
  useEffect(() => {
    let filteredData = [...publicationsData];

    // Filter by publication type
    if (filter !== 'all') {
      filteredData = filteredData.filter(pub => pub.type === filter);
    }

    // Filter by year
    if (yearFilter !== 'all') {
      filteredData = filteredData.filter(pub => pub.year === parseInt(yearFilter));
    }

    // Filter by author
    if (authorFilter !== 'all') {
      filteredData = filteredData.filter(pub =>
        pub.authors.some(author => author === authorFilter)
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filteredData = filteredData.filter(pub =>
        pub.title.toLowerCase().includes(term) ||
        pub.publication.toLowerCase().includes(term) ||
        pub.authors.some(author => author.toLowerCase().includes(term))
      );
    }

    setPublications(filteredData);
  }, [filter, searchTerm, yearFilter, authorFilter]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
              Department Of Mechanical Engineering
            </h1>
            <div className="w-20 sm:w-40 h-1 bg-yellow-900 mx-auto mb-4 sm:mb-8" aria-hidden="true" />

            <SectionSubtitle>PUBLICATIONS/CONFERENCE DETAILS</SectionSubtitle>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
       
 

        {/* Publications List */}
        <section>
          {publications.length > 0 ? (
            <div className="space-y-4 sm:space-y-6">
              {publications.map(pub => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-16">
              <div className="text-6xl sm:text-9xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">No publications found</h3>
              <p className="text-gray-600 text-sm sm:text-base">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setYearFilter('all');
                  setAuthorFilter('all');
                  setSearchTerm('');
                }}
                className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-yellow-900 text-white rounded-lg hover:bg-yellow-800 transition-colors text-sm sm:text-base"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {publications.length > 0 && (
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
            Showing {publications.length} of {publicationsData.length} publications
          </div>
        )}
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-2 rounded-full bg-yellow-900 text-white shadow-lg hover:bg-yellow-800 transition-colors z-10"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}