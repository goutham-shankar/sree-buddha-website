"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Publication data structure for Civil Engineering Department
const publicationsData = [
  {
    id: 1,
    authors: ["Anusree Lal", "Ameena Khan"],
    title: "Experimental Investigation on Nano-Modified Cellular Lightweight Concrete",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 47-53, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 2,
    authors: ["Anusree Lal", "Lisha John"],
    title: "Experimental Investigation on Performance of Self Compacting Copper Slag Admixed Concrete Using AR Glass Fiber",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 175-180, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 3,
    authors: ["Ashok Mathew", "Aakhila Beegum S."],
    title: "Strengthening of Geopolymer Reinforced Concrete Corbel Using GFRP and CFRP Sheets",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 189-194, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 4,
    authors: ["Ashok Mathew", "Krishnendhu Ajith"],
    title: "A Review on Experimental and Analytical Study on Strengthening of Reinforced Concrete T-Beams Using External Prestressing",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 156-160, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 5,
    authors: ["Ashok Mathew", "Krishnendhu Ajith"],
    title: "Experimental and Analytical Study on Strengthening of Reinforced Concrete T-Beams Using External Prestressing",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 465-474, ISBN: 978-3-030-26364-5, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2",
    year: 2020,
    type: "conference",
    featured: true
  },
  {
    id: 6,
    authors: ["Aswathy Lal B.", "Aneesha S."],
    title: "Experimental Study on Partial Replacement of Coarse Aggregate by E Waste in Geopolymer Concrete",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 76-81, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 7,
    authors: ["Aswathy Lal B.", "Muthulakshmi Ajay"],
    title: "Study on Properties of Internally Cured Self Compacting Concrete Using Sintered Fly Ash Aggregates",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 149-155, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 8,
    authors: ["Aswathy Lal", "Muthulakshmi Ajay"],
    title: "Experimental Investigation on Performance of Internally Cured Self Compacting Concrete Using Sintered Fly Ash Aggregates",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 183-191, ISBN: 978-3-030-26364-5, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2_18",
    year: 2020,
    type: "conference"
  },
  {
    id: 9,
    authors: ["Cinaya Tony", "Delsha Dominic"],
    title: "Experimental Investigation on Performance of Fly Ash Based ECC Modified with Powder Rubber and Polypropylene Fibres",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 136-141, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 10,
    authors: ["Gopakumar", "Anusree P. S."],
    title: "Experimental Investigation on Strength Characteristics of Fibre Reinforced Foam Concrete Based Panels",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 82-90, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 11,
    authors: ["Gopakumar", "Anusree P. S."],
    title: "Investigation on Strength Characteristics of Silica Fume Incorporated Foamed Concrete",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 193-203, ISBN: 978-3-030-26365-2, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2_19",
    year: 2020,
    type: "conference"
  },
  {
    id: 12,
    authors: ["Gouri Antherjanam", "Basma B."],
    title: "Effect of Silica Fume in the Mechanical Properties of Ambient Cured GGBS Based Geopolymer Concrete",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 155-164, ISBN: 978-3-030-26364-2, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2",
    year: 2020,
    type: "conference"
  },
  {
    id: 13,
    authors: ["Gouri Antherjanam", "Revathy V."],
    title: "Strength Comparison of Cement Mortar and Geopolymer Mortar",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 175-184, ISBN: 978-3-030-26364-2, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2",
    year: 2020,
    type: "conference"
  },
  {
    id: 14,
    authors: ["Greeshma Subhash", "Gopika Krishnan"],
    title: "Effect of GGBS on Self-compacting Recycled Aggregate Concrete",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 165-173, ISBN: 978-3-030-26364-2, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2",
    year: 2020,
    type: "conference"
  },
  {
    id: 15,
    authors: ["Namitha Chandran", "Keerthy Y."],
    title: "Retrofitting of RC Beam Using Nano modified Fiber Reinforced Mortar",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 54-57, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 16,
    authors: ["Namitha Chandran", "Neetha B. Rachel"],
    title: "Strengthening of Rcc Beams Using Gfrp Laminates and Cement Mortar",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 182-188, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 17,
    authors: ["Pradeep P.", "Hari S. Nair", "Beena Mol"],
    title: "Effect of Pre-soaked Light Expanded Clay Aggregate on Strength, Durability and Flexural Behavior of High-performance Concrete",
    publication: "Journal of Engineering Science and Technology",
    details: "2019, Vol 14, No.5, pp. 2629-2642",
    year: 2019,
    type: "journal",
    featured: true
  },
  {
    id: 18,
    authors: ["Pradeep", "Beena Mol"],
    title: "Comparative Study on the Effect of Light Weight Aggregates on the Properties of High Performance Concrete",
    publication: "Journal of Engineering Science and Technology",
    details: "2020, Vol 15, No.1, pp. 305-319",
    year: 2020,
    type: "journal",
    featured: true
  },
  {
    id: 19,
    authors: ["Pradeep P.", "Aparna V. S."],
    title: "Experimental Investigation on Internally Cured Fibre Reinforced Concrete Using LECA",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 35-39, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 20,
    authors: ["Pradeep P.", "Sonu A."],
    title: "Performance Evaluation of Internally Cured Fiber Reinforced Concrete Using Sintered Flyash Aggregate",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 206-211, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 21,
    authors: ["Regi P. Mohan", "Aayisha A."],
    title: "An Experimental Study on Addition of Carbon Nanotubes to Improve the Performance of UHPC",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 811-819, ISBN: 978-3-030-26364-5, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2",
    year: 2020,
    type: "conference"
  },
  {
    id: 22,
    authors: ["Regi P. Mohan", "Aayisha A."],
    title: "An Experimental Study on Addition of Carbon Nanotubes to Improve the Performance of UHPC",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 131-134, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 23,
    authors: ["Regi P. Mohan", "Salabham Sunil"],
    title: "Experimental Study on Fungal Concrete with Rice Husk Ash as Partial Replacement of Cement",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 202-205, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 24,
    authors: ["Ritzy R.", "Anju Mary Thomas"],
    title: "Experimental Investigation of Structural Crack in Existing School Building and Strengthening the Member by Repair and Retrofitting Technique",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 123-129, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 25,
    authors: ["Ritzy R.", "Aswathy N. N."],
    title: "Effect of Metakaolin in the Mechanical Properties of Ambient Cured Flyash based Geopolymer Concrete Incorporating Copper Slag",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 41-46, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 26,
    authors: ["Ritzy R.", "Parvathy Raj"],
    title: "Experimental Investigation on Partial Replacement by E –Waste and Silica Fume in Concrete",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 30-34, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 27,
    authors: ["Ritzy R.", "Subin Geevarghese"],
    title: "Forensic Vulnerability Assessment of a Two Storey Rcc School building",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 41-46, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 28,
    authors: ["Ritzy", "Aswathy N. N."],
    title: "Effect of Metakaolin in the Mechanical Properties of Ambient Cured Flyash Based Geopolymer Concrete",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 871-879, ISBN: 978-3-030-26364-5, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2_80",
    year: 2020,
    type: "conference"
  },
  {
    id: 29,
    authors: ["Sreelekshmi S.", "Divya Sasidharan"],
    title: "Effect of Internal Curing Using Light Expanded Clay Aggregate on Self Compacting Concrete",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 99-105, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 30,
    authors: ["Unnikrishnan S.", "Suraj S."],
    title: "In Plane Strengthening of Masonry Walls Using Steel Wire Mesh",
    publication: "Proceedings of the Third Annual Conference Series on Engineering Education for Facing the Future (E2F2'19): Recent Advances in Civil Engineering (RACE'19)",
    details: "2019, pp. 161-167, ISBN: 978-93-5361-297-9, Sree Buddha College of Engineering, Pattoor, Kerala",
    year: 2019,
    type: "conference"
  },
  {
    id: 31,
    authors: ["Unnikrishnan", "Suraj S."],
    title: "Strengthening of Concrete Block Masonry Walls Using Steel Wire Mesh",
    publication: "Proceedings of Structural Engineering and Construction Management (SECON'19), Lecture Notes in Civil Engineering, SPRINGER, Cham.",
    details: "2020, Vol 46, pp. 749-762, ISBN: 978-3-030-26364-5, Federal Institute of Science and Technology (FISAT), Angamaly, https://doi.org/10.1007/978-3-030-26365-2_69",
    year: 2020,
    type: "conference"
  }
];

// Faculty members for filtering
const facultyMembers = [
  "Anusree Lal",
  "Ashok Mathew",
  "Aswathy Lal B.",
  "Gopakumar",
  "Gouri Antherjanam",
  "Greeshma Subhash",
  "Namitha Chandran",
  "Pradeep P.",
  "Regi P. Mohan",
  "Ritzy R.",
  "Sreelekshmi S.",
  "Unnikrishnan S."
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
          {stats.bookChapterPubs > 0 && (
            <div>
              <div className="text-4xl font-bold text-yellow-900 mb-2">{stats.bookChapterPubs}</div>
              <div className="text-gray-700">Book Chapters</div>
            </div>
          )}
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
export default function CivilEngineeringDepartmentPaperPublications() {
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
              Department Of Civil Engineering
            </h1>
            <div className="w-40 h-1 bg-yellow-900 mx-auto mb-8" aria-hidden="true" />
            
            <SectionSubtitle>PUBLICATIONS/CONFERENCE DETAILS</SectionSubtitle>
            <div className="text-center text-xl text-gray-700 mt-4">
              Academic Year: 2019-20
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filters Section */}
        

        {/* Publications List */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Publications & Conference Papers</h3>
          
          {publications.length > 0 ? (
            <div className="space-y-6">
              {publications.map(pub => (
                <PublicationCard key={pub.id} publication={pub} highlight={pub.featured} />
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