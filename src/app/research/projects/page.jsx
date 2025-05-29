import React from 'react';
import Image from 'next/image';
import jack from '@/assets/images/research/jackfruit.jpg';
import weed from '@/assets/images/research/waterweed.jpg';
import coconut from '@/assets/images/research/coconutoil.jpg';

export default function Projects() {
  const studentProjects = [
    {
      title: "Jackfruit Dressing and Packing Machine",
      description: "Developed a Jackfruit Dressing Machine which will cut and separate the inner core and outer hard skin and collect the fruit separately",
      image: jack
    },
    {
      title: "Water Weed Harvester",
      description: "The mechanism was developed to facilitate the removal of weed from water bodies.",
      image: weed
    },
    {
      title: "Domestic Coconut Oil Extraction machine",
      description: "This machine extracts oil from raw coconut for domestic purpose",
      image: coconut
    }
  ];

  const fundedProjects = [
  {
    id: 1,
    amount: "48.48 Lakhs",
    faculty: "Dr. Jaya Mary Jacob",
    department: "BT&BCE",
    year: "2017",
    org: "DBT, Govt. of India",
    project: "Biotechnology interventions for quantum dot synthesis and their application for biosensor development"
  },
  {
    id: 2,
    amount: "14 Lakhs",
    faculty: "Dr. M S Senthil Saravan",
    department: "ME",
    year: "2021",
    org: "AICTE",
    project: "Processing and thermal analysis of carbon based thermal interface material (TIM) for electronics applications"
  },
  {
    id: 3,
    amount: "11 Lakhs",
    faculty: "Dr. Trijo Tharayil",
    department: "ME",
    year: "2021",
    org: "AICTE",
    project: "Thermal Management of concrete roof using nano particle coated heat pipes and pulsating heat pipes"
  },
  {
    id: 4,
    amount: "3.9 Lakhs",
    faculty: "Dr. Trijo Tharayil",
    department: "ME",
    year: "2022",
    org: "ANERT (KERALA)",
    project: "Thermal Management of Batteries in Electric Vehicles Using Pulsating Heat Pipes"
  },
  {
    id: 5,
    amount: "3 Lakhs",
    faculty: "Dr. Sreejith Mohan",
    department: "ME",
    year: "2018",
    org: "KSCSTE",
    project: "Design and Development of low fume welding electrodes"
  },
  {
    id: 6,
    amount: "2 Lakhs",
    faculty: "Dr. Jaya Mary Jacob",
    department: "BT&BCE",
    year: "2019",
    org: "APJ Abdul Kalam Technological University",
    project: "Development of biogenic carbon dot based smart Nano bionic systems for enhanced photosynthetic CO2 reduction"
  },
  {
    id: 7,
    amount: "2 Lakhs",
    faculty: "Dr. Trijo Tharayil",
    department: "ME",
    year: "2019",
    org: "APJ Abdul Kalam Technological University",
    project: "Concrete roof cooling using nano particle coated heat pipes for sustainability"
  },
  {
    id: 8,
    amount: "2 Lakhs",
    faculty: "Ms. Regi P Mohan",
    department: "CE",
    year: "2019",
    org: "APJ Abdul Kalam Technological University",
    project: "Nano Chemical Stabilization of Expansive Kuttanad Clays"
  },
  {
    id: 9,
    amount: "2 Lakhs",
    faculty: "Dr. Shamnamol G K",
    department: "BT&BCE",
    year: "2022",
    org: "APJ Abdul Kalam Technological University",
    project: "The corrosion inhibition prospective of collagen/zinc oxide nanocomposites coating on biomedical grade 316L stainless steel in simulated body fluid"
  },
  {
    id: 10,
    amount: "1.5 Lakhs",
    faculty: "Ms. Meera Bai S",
    department: "BT&BCE",
    year: "2023",
    org: "ANERT (KERALA)",
    project: "Seaweeds as a Renewable Bio resource for production of Bio-oil and Bio-char through pyrolysis _a sustainable approach for Bioenergy"
  },
  {
    id: 11,
    amount: "85000",
    faculty: "Dr. M. S. Senthil Saravanan",
    department: "ME",
    year: "2022",
    org: "APJ Abdul Kalam Technological University",
    project: "Processing and Characterization of Carbon Nanotube based Aluminum Metal matrix composite as heat sink material"
  },
  {
    id: 12,
    amount: "50000",
    faculty: "Ms. Pavitha P.P.",
    department: "ECE",
    year: "2022",
    org: "Icreate Ahmedabad",
    project: "Solar Powered Electric Car"
  },
  {
    id: 13,
    amount: "45000",
    faculty: "Dr. Trijo Tharayil",
    department: "ME",
    year: "2021",
    org: "APJ Abdul Kalam Technological University",
    project: "Thermal Management of Batteries in Electric Vehicles Using Pulsating Heat Pipe"
  },
  {
    id: 14,
    amount: "45000",
    faculty: "Prof. Meera Bai S",
    department: "BT&BCE",
    year: "2023",
    org: "APJ Abdul Kalam Technological University",
    project: "Exploring Sustainable Bioenergy Production: Sargassum tenerrimum Pyrolysis for Bio-oil and Biochar Synthesis"
  },
  {
    id: 15,
    amount: "45000",
    faculty: "Dr. Archana Rajendran",
    department: "BT&BCE",
    year: "2023",
    org: "APJ Abdul Kalam Technological University",
    project: "Synthesis and characterization of calcium phosphate based bio ceramics through a waste-to-wealth approach for biomedical applications"
  },
  {
    id: 16,
    amount: "45000",
    faculty: "Ms. Shobha Elizabeth",
    department: "CE",
    year: "2023",
    org: "APJ Abdul Kalam Technological University",
    project: "Experimental investigation on effect of age of alkali activator on the characteristics of slag-fly ash- based alkali activated"
  },
  {
    id: 17,
    amount: "45000",
    faculty: "Ms. Cinaya Tony",
    department: "CE",
    year: "2020",
    org: "KSITM",
    project: "Mapathon Project"
  },
  {
    id: 18,
    amount: "36000",
    faculty: "Ms. Sreelekshmi S",
    department: "CE",
    year: "2023",
    org: "KSCSTE-NATPAC",
    project: "KSTP Phase II Project"
  },
  {
    id: 19,
    amount: "20000",
    faculty: "Dr. Shamnamol G K",
    department: "BT&BCE",
    year: "2021",
    org: "APJ Abdul Kalam Technological University",
    project: "Biosynthesis of Zinc oxide nanoparticles using banana empty fruit bunch extract for corrosion mitigation"
  },
  {
    id: 20,
    amount: "20000",
    faculty: "Dr. J. B. Sajin",
    department: "ME",
    year: "2022",
    org: "APJ Abdul Kalam Technological University",
    project: "Design and feasibility studies on natural cellulose for baby diapers"
  },
  {
    id: 21,
    amount: "20000",
    faculty: "Dr. Sreejith Mohan",
    department: "ME",
    year: "2018",
    org: "KSCSTE",
    project: "Design and Development of low fume welding electrodes"
  },
  {
    id: 22,
    amount: "10000",
    faculty: "Vaisakh P S",
    department: "ME",
    year: "2018",
    org: "KSCSTE",
    project: "Jack fruit Dressing and Packing Machine"
  },
  {
    id: 23,
    amount: "11000",
    faculty: "Vaisakh P S",
    department: "ME",
    year: "2017",
    org: "KSCSTE",
    project: "Semi-Automatic Jack fruit Dressing Machine"
  },
  {
    id: 24,
    amount: "10000",
    faculty: "Ms. Regi P Mohan",
    department: "CE",
    year: "2019",
    org: "KSCSTE",
    project: "Study on strength, durability, and microstructural characteristics of concrete with pumice powder"
  },
  {
    id: 25,
    amount: "10000",
    faculty: "Ms. Shobha Elizabeth Thomas",
    department: "CE",
    year: "2019",
    org: "KSCSTE",
    project: "Experimental investigation on strength and durability properties of modified reactive powder concrete with nano silica"
  },
  {
    id: 26,
    amount: "10000",
    faculty: "Mr. Unnikrishnan S.",
    department: "CE",
    year: "2019",
    org: "KSCSTE",
    project: "Performance evaluation of different fibers for strengthening of unreinforced masonry walls"
  },
  {
    id: 27,
    amount: "10000",
    faculty: "Dr. Trijo Tharayil",
    department: "ME",
    year: "2019",
    org: "KSCSTE",
    project: "Thermal performance analysis of heat pipe with nanoparticle coated wick for concrete roof cooling"
  },
  {
    id: 28,
    amount: "10000",
    faculty: "Dr. Trijo Tharayil",
    department: "ME",
    year: "2019",
    org: "KSCSTE",
    project: "Concrete roof cooling using capillary driven heat pipes for sustainability"
  },
  {
    id: 29,
    amount: "10000",
    faculty: "Dr. Trijo Tharayil",
    department: "ME",
    year: "2020",
    org: "KSCSTE",
    project: "Concrete roof cooling using capillary driven heat pipes for sustainability"
  },
  {
    id: 30,
    amount: "10000",
    faculty: "Ms. Pavitha P.P.",
    department: "ECE",
    year: "2021",
    org: "KSCSTE",
    project: "Integrated Water purity Analyser"
  },
  {
    id: 31,
    amount: "10000",
    faculty: "Mr. Sabi S.",
    department: "ECE",
    year: "2021",
    org: "KSCSTE",
    project: "Mask with intelligent system to provide air quality level and respiratory rate"
  },
  {
    id: 32,
    amount: "10000",
    faculty: "Ms. Meera Bai S.",
    department: "ME",
    year: "2021",
    org: "KSCSTE",
    project: "Biopolymer based composite production from Marantaarundinacea using Diospyrosmalabarica and its Characterization Studies"
  },
  {
    id: 33,
    amount: "10000",
    faculty: "Dr. Malu Ravi",
    department: "BT&BCE",
    year: "2021",
    org: "KSCSTE",
    project: "Analysis of Shatavarigulam for shelf life interfering microbial flora"
  },
  {
    id: 34,
    amount: "10000",
    faculty: "Mr. Vaisakh P S",
    department: "ME",
    year: "2021",
    org: "KSCSTE",
    project: "Design and fabrication of automatic virus disinfection unit"
  },
  {
    id: 35,
    amount: "10000",
    faculty: "Mr. Kalesh K K",
    department: "ME",
    year: "2021",
    org: "KSCSTE",
    project: "Development of Modular micro farm coupled with an efficient biogas digester"
  },
  {
    id: 36,
    amount: "10000",
    faculty: "Dr. J. B. Sajin",
    department: "ME",
    year: "2021",
    org: "KSCSTE",
    project: "Bio-degradable palm sheath Fiber reinforced PLA composites for Industrial applications"
  },
  {
    id: 37,
    amount: "10000",
    faculty: "Dr. M S Senthil Saravanan",
    department: "ME",
    year: "2021",
    org: "KSCSTE",
    project: "Processing and thermal analysis of carbon nanotube based aluminium metal matrix composite for heat transfer application"
  },
  {
    id: 38,
    amount: "10000",
    faculty: "Ms. Abhilasha Parthan",
    department: "EEE",
    year: "2021",
    org: "KSCSTE",
    project: "A novel regenerating braking system with dual input super boost converter for a BLDC driven electric vehicle"
  },
  {
    id: 39,
    amount: "5000",
    faculty: "Dr. J. B. Sajin",
    department: "ME",
    year: "2023",
    org: "APJ Abdul Kalam Technological University",
    project: "Design and Feasibility Studies on Eco-Friendly Sanitary Napkin Layered by Pulverized Broken Used Bricks"
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
              Projects
            </h1>
            <div className="w-16 sm:w-32 h-1 bg-yellow-900 mx-auto mb-3" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Best Funded Projects Section */}
        <section className="mb-8 sm:mb-12">
  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
    Best Funded Projects from Faculties
  </h2>
  <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm mb-6">
    {/* Summary Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-600">Total Projects</p>
        <p className="text-2xl font-bold text-yellow-900">{fundedProjects.length}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-600">Total Funding</p>
        <p className="text-2xl font-bold text-yellow-900">
          {fundedProjects.reduce((acc, curr) => {
            const amount = curr.amount.includes('Lakhs') 
              ? parseFloat(curr.amount.split(' ')[0]) * 100000
              : parseFloat(curr.amount);
            return acc + amount;
          }, 0).toLocaleString('en-IN', { 
            style: 'currency', 
            currency: 'INR',
            maximumFractionDigits: 0 
          })}
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-600">Departments</p>
        <p className="text-2xl font-bold text-yellow-900">
          {new Set(fundedProjects.map(p => p.department)).size}
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-600">Latest Year</p>
        <p className="text-2xl font-bold text-yellow-900">
          {Math.max(...fundedProjects.map(p => parseInt(p.year)))}
        </p>
      </div>
    </div>

    <p className="text-sm sm:text-base text-gray-700 mb-4">
      Best Funded Projects of Faculty Members
    </p>
    
    {/* Filter Options */}
    <div className="mb-4 flex flex-wrap gap-2">
      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
        <option value="">All Departments</option>
        {Array.from(new Set(fundedProjects.map(p => p.department))).map(dept => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>
      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
        <option value="">All Years</option>
        {Array.from(new Set(fundedProjects.map(p => p.year))).sort().map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>

    {/* Project List */}
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <ol className="list-decimal list-inside space-y-6 text-sm sm:text-base text-gray-700">
        {fundedProjects.map((project, index) => (
          <li key={index} className="pl-2 relative hover:bg-yellow-50 p-3 rounded-lg transition-colors">
            <div className="inline">
              <span className="font-semibold">{project.faculty}</span>, Associate Professor ({project.department}) 
              has received research {project.amount.includes('Lakhs') ? 'grant worth' : 'funding of'} Rs. {' '}
              <span className="text-yellow-900 font-semibold">{project.amount}</span> from {' '}
              <span className="text-yellow-800">{project.org}</span>
              {project.org === 'KSCSTE' && ' (Kerala State Council for Science, Technology and Environment)'} 
              {project.amount === "48.48 Lakhs" && ' under the Biotechnology Career Advancement and Re-orientation Programme (Bio-CARe) for women Scientists'} 
              {' '}for the Project titled "{project.project}" in {project.year}.
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
</section>

        {/* Student Projects Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
            Best Engineering Projects from UG Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {studentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transition-shadow duration-300">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}