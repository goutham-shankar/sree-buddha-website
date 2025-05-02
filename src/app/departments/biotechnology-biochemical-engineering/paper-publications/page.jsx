"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


// Publication data structure
const publicationsData = [
  {
    id: 1,
    authors: ["Prof. S. Meera Bai"],
    title: "Study of thermal stability and characterization of novel bioplastic as a potential alternate for synthetic fiber replacement in polymer composite",
    publication: "Biomass Conversion and Biorefinery",
    details: "2023, https://doi.org/10.1007/s13399-023-05205-6",
    year: 2023,
    type: "journal",
    featured: true
  },
  {
    id: 2,
    authors: ["Dr. Shamnamol G K"],
    title: "A short review on natural precursors-plant-based fluorescent carbon dots for the targeted detection of metal ions",
    publication: "Sustainable Chemistry for the Environment",
    details: "2024, https://doi.org/10.1016/j.scenv.2024.100114",
    year: 2024,
    type: "journal"
  },
  {
    id: 3,
    authors: ["Dr. Shamnamol G K"],
    title: "Turn Off Fluorescence Sensor for the Detection of Ferric Ion in Water Using Green Synthesized Wrightia coccinea Carbon Quantum Dot",
    publication: "Journal of Fluorescence",
    details: "2024, https://link.springer.com/article/10.1007/s10895-024-03760-3",
    year: 2024,
    type: "journal"
  },
  {
    id: 4,
    authors: ["Dr. Shamnamol G K"],
    title: "Insight on the corrosion inhibition of nanocomposite chitosan/boron nitride integrated epoxy coating system against mild steel",
    publication: "Corrosion Communications",
    details: "2023, https://doi.org/10.1016/j.corcom.2022.09.001",
    year: 2023,
    type: "journal"
  },
  {
    id: 5,
    authors: ["Dr. Shamnamol G K"],
    title: "Exploring the Corrosion Inhibition Efcacy of Epoxy Merged Silver Nanoparticle Synthesized Using Garcinia gummi‐gutta Leaf Extract in acidic medium",
    publication: "Journal of Bio- and Tribo-Corrosion",
    details: "2023, https://doi.org/10.1007/s40735-023-00802-4",
    year: 2023,
    type: "journal"
  },
  {
    id: 6,
    authors: ["Dr. Shamnamol G K"],
    title: "Experimental and theoretical evidence for effective corrosion mitigation in mild steel",
    publication: "Anti-Corrosion Methods and Materials",
    details: "2023, https://doi.org/10.1108/ACMM-03-2022-2630",
    year: 2023,
    type: "journal",
    featured: true
  },
  {
    id: 7,
    authors: ["Dr. Shamnamol G K"],
    title: "Unraveling the synergistic effect of cationic and anionic salt on the corrosion inhibition performance of Garcinia gummi-gutta leaf extract against mild steel in HCl medium",
    publication: "Results in Chemistry",
    details: "2023, https://doi.org/10.1016/j.rechem.2022.100728",
    year: 2023,
    type: "journal"
  },
  {
    id: 8,
    authors: ["Prof. S. Meera Bai"],
    title: "Biomass: Resources and Sustainable Utilization",
    publication: "Bioeconomy for Sustainability",
    details: "2024, https://doi.org/10.1007/978-981-97-1837-5_1",
    year: 2024,
    type: "book chapter"
  },
  {
    id: 9,
    authors: ["Prof. S. Meera Bai"],
    title: "Investigation of Thermal Characteristics of the Seaweeds Collected from Kollam Coastal Area for Utilization as a Feedstock for Bio-Oil Production",
    publication: "International Conference on New Horizons in Biotechnology (NHBT-2023)",
    details: "2023, International",
    year: 2023,
    type: "conference"
  },
  {
    id: 10,
    authors: ["Prof. S. Meera Bai"],
    title: "Exploring seaweed pyrolysis for sustainable biomass utilization",
    publication: "Proceedings of the International Conference on \"Smart and Green Materials for Biotechnology, Biochemical and Mechanical Applications\"(Ic-Sgmat)",
    details: "2023, International, ISBN: 978-81-965345-2-3",
    year: 2023,
    type: "conference"
  },
  {
    id: 11,
    authors: ["Prof. S. Meera Bai"],
    title: "Utilizing Seaweeds as a Sustainable Bioresource for Pyrolysis- Based Biochar Production",
    publication: "Proceedings of the International Conference on \"Smart and Green Materials for Biotechnology, Biochemical and Mechanical Applications\"(Ic-Sgmat)",
    details: "2023, International, ISBN: 978-81-965345-2-3",
    year: 2023,
    type: "conference"
  },
  {
    id: 12,
    authors: ["Dr. Shamnamol G K"],
    title: "Assessment of the mild steel corrosion inhibition competence of Garcinia gummi-gutta leaf extract: Evaluation by XPS, thermodynamic, and kinetic parameters",
    publication: "IOP Conference Series: Earth and Environmental Science",
    details: "2023, International, ISSN: 1755-1315",
    year: 2023,
    type: "conference"
  },
  {
    id: 13,
    authors: ["Dr. Shilpa Lekshmi L"],
    title: "A Review on Anti-inflammatory Effect and Molecular Mechanism of Major Phytocompounds from Selected Medicinal Plants Widely Found in Kerala",
    publication: "Proceedings of the International Conference on \"Smart and Green Materials for Biotechnology, Biochemical and Mechanical Applications\"(Ic-Sgmat)",
    details: "2023, International, ISBN: 978-81-965345-2-3",
    year: 2023,
    type: "conference"
  },
  {
    id: 14,
    authors: ["Dr. Shilpa Lekshmi L"],
    title: "Utilizing Fruit Waste as An Organic Medium for Culture of Microalgae",
    publication: "Proceedings of the International Conference on \"Smart and Green Materials for Biotechnology, Biochemical and Mechanical Applications\"(Ic-Sgmat)",
    details: "2023, International, ISBN: 978-81-965345-2-3",
    year: 2023,
    type: "conference"
  },
  {
    id: 15,
    authors: ["Prof. Athulya Krishnan"],
    title: "A Review on Nutritional Composition and Value-Added Products of Passion Fruit",
    publication: "Proceedings of the International Conference on \"Smart and Green Materials for Biotechnology, Biochemical and Mechanical Applications\"(Ic-Sgmat)",
    details: "2023, International, ISBN: 978-81-965345-2-3",
    year: 2023,
    type: "conference"
  },
  {
    id: 16,
    authors: ["Dr. Shamnamol G K"],
    title: "Carbon Dots: Synthesis, Properties and Application: A Mini Review",
    publication: "Proceedings of the International Conference on \"Smart and Green Materials for Biotechnology, Biochemical and Mechanical Applications\"(Ic-Sgmat)",
    details: "2023, International, ISBN: 978-81-965345-2-3",
    year: 2023,
    type: "conference"
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
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }) => (
  <div className="flex justify-center items-center mb-12">
    <div className="w-16 h-1 bg-yellow-900 mr-4"></div>
    <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
      {children}
    </h3>
    <div className="w-16 h-1 bg-yellow-900 ml-4"></div>
  </div>
);

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active
        ? 'bg-yellow-900 text-white'
        : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100'
    }`}
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
      className={`p-6 rounded-lg shadow-md mb-6 ${cardClasses} transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-5/6">
          <h4 className="font-bold text-lg mb-2 text-gray-900">
            {publication.title}
          </h4>
          <p className="text-yellow-900 mb-3">
            {publication.authors.join(", ")}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Publication:</span> {publication.publication}
          </p>
          <p className="text-gray-600 text-sm">
            {publication.details}
          </p>
        </div>
        <div className="md:w-1/6 flex flex-col items-end justify-center mt-4 md:mt-0">
          <div className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-center text-sm font-medium mb-2">
            {publication.type === 'journal' ? 'Journal' : publication.type === 'conference' ? 'Conference' : 'Book Chapter'}
          </div>
          <p className="text-gray-500 font-bold">{publication.year}</p>
          {publication.featured && (
            <div className="mt-2 text-xs bg-yellow-900 text-white px-2 py-1 rounded">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="text-4xl font-bold text-yellow-900 mb-2">{stats.totalPubs}</div>
        <div className="text-gray-700">Total Publications</div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-4xl font-bold text-yellow-900 mb-2">{stats.journalPubs}</div>
            <div className="text-gray-700">Journals</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-900 mb-2">{stats.conferencePubs}</div>
            <div className="text-gray-700">Conferences</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-900 mb-2">{stats.bookChapterPubs}</div>
            <div className="text-gray-700">Book Chapters</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="mb-2">Publications by Year</div>
        <div className="flex flex-wrap gap-2">
          {yearStats.map(([year, count]) => (
            <div key={year} className="bg-yellow-50 px-3 py-1 rounded-full">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
                Department Of Biotechnology & Biochemical Engineering
              </h1>
              <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" aria-hidden="true" />
              
              <SectionSubtitle>PUBLICATIONS/CONFERENCE DETAILS</SectionSubtitle>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          

          {/* Publications List */}
          <section>
            {publications.length > 0 ? (
              <div className="space-y-6">
                {publications.map(pub => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-9xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No publications found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => {
                    setFilter('all');
                    setYearFilter('all');
                    setAuthorFilter('all');
                    setSearchTerm('');
                  }}
                  className="mt-6 px-6 py-2 bg-yellow-900 text-white rounded-lg hover:bg-yellow-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </section>
          
          {publications.length > 0 && (
            <div className="mt-8 text-center text-sm text-gray-500">
              Showing {publications.length} of {publicationsData.length} publications
            </div>
          )}
        </main>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-2 rounded-full bg-yellow-900 text-white shadow-lg hover:bg-yellow-800 transition-colors"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
   
  );
}