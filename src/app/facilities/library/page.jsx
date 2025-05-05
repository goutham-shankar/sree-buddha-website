import React from 'react';
import './style.css';
import picone from '../../../../public/assets/images/facilities/libpicone.jpg';
import pictwo from '../../../../public/assets/images/facilities/libpictwo.jpg';
import picthree from '../../../../public/assets/images/facilities/libpicthree.jpg';
import picfour from '../../../../public/assets/images/facilities/libpicfour.jpg';
import picfive from '../../../../public/assets/images/facilities/libpicfive.jpg';
import { 
  BookOpen, Clock, Users, Database, Printer, FileText, Search, 
  Wifi, BookMarked, Building, Mail, Phone, ExternalLink 
} from 'lucide-react';

export default function CentralLibraryPage() {
  const libraryStats = [
    { number: "50,000+", label: "Books" },
    { number: "15,000+", label: "e-Journals" },
    { number: "1,500", label: "Square Meters" },
    { number: "200+", label: "Seating Capacity" }
  ];
  
  const digitalResources = [
    "IEEE POP", "ELSEVIER", "SPRINGER", "McGraw Hill",
    "ASTM Digital Library", "ASCE, ASME", "J-GATE",
    "ISO, JTC1", "NPTEL", "DELNET", "NDL"
  ];
  
  const libraryServices = [
    { icon: <BookOpen size={18} />, name: "Reference Services" },
    { icon: <FileText size={18} />, name: "Document Lending Service" },
    { icon: <Database size={18} />, name: "E-document Lending Service" },
    { icon: <Search size={18} />, name: "Current Awareness" },
    { icon: <Users size={18} />, name: "Referral Services" },
    { icon: <FileText size={18} />, name: "News Clippings" },
    { icon: <BookMarked size={18} />, name: "New Arrivals" },
    { icon: <Printer size={18} />, name: "Reprography" },
    { icon: <Printer size={18} />, name: "Online Printout" },
    { icon: <Database size={18} />, name: "CATALOGUE (Online Public Access Catalouge)" }
  ];

  const libraryStaff = [
    { name: "Ms. Disha. S", designation: "Librarian, MLIS, M.Phil", contact: "librariansbce@gmail.com" },
    { name: "Mr. Sadi. D", designation: "Library Assistant", contact: "sadievoor@gmail.com" },
    { name: "Ms. Jaya T. P", designation: "Library Assistant", contact: "jayaprakash@gmail.com" },
    { name: "Ms. Raji. T R V", designation: "Library Assistant", contact: "Rajipramod.anjana@gmail.com" },
    { name: "Ms. Bindu. S", designation: "Library Staff", contact: "Bindusathyan045@gmail.com" }
  ];

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section with Image Overlay */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={picone.src} 
            alt="Central Library Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 to-yellow-800/70"></div>
        </div>
        <div className="relative container mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Central Library</h1>
            <div className="h-1 w-24 bg-amber-400 mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl">
              Your gateway to knowledge, research, and academic excellence at the heart of our campus
            </p>
          </div>
        </div>
      </div>
      
      {/* Library Stats Section */}
      <div className="bg-white py-6 sm:py-8 shadow-md">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {libraryStats.map((stat, index) => (
              <div key={index} className="text-center p-3 sm:p-4">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-900 mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-yellow-950/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 sm:py-12">
        {/* Overview Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
            <div className="lg:w-2/3">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-900 p-2 sm:p-3 rounded-lg text-white mr-3 sm:mr-4">
                  <Building size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-950">Library Overview</h2>
              </div>
              
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-yellow-950/70 space-y-4 sm:space-y-6">
                <p>
                  The Central Library is a vital resource center catering to the faculty, 
                  students, and staff of the institute. Spanning 1,500 sq. meters, this three-story facility is located at the heart of 
                  the campus, offering a well-equipped space for study and research.
                </p>
                
                <p>
                  With a vast collection of over 50,000 books, journals, and digital resources, it supports academic excellence and
                  innovation. The library provides spacious reading areas, quiet study zones, and digital access
                  to a wide range of materials, making it an ideal place for learning and research.
                </p>
                
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-yellow-100 mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-900 mb-3 sm:mb-4">Mission Statement</h3>
                  <p className="italic text-yellow-950/80">
                  &quot;To empower our academic community with comprehensive information resources and services 
                    that foster intellectual growth, research excellence, and lifelong learning.&quot;
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src={pictwo.src} 
                  alt="Library Reading Area" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-yellow-100 p-4 sm:p-5 mt-4 sm:mt-6">
                <h3 className="font-semibold text-yellow-900 text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                  <Clock size={16} className="mr-2 sm:w-[18px] sm:h-[18px]" />
                  Library Hours
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex justify-between">
                    <span className="text-yellow-950/70">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-yellow-950/70">Saturday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-yellow-950/70">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Digital Library Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-yellow-100">
            <div className="bg-yellow-900 py-3 sm:py-4 px-4 sm:px-6">
              <div className="flex items-center">
                <div className="bg-yellow-800 p-1.5 sm:p-2 rounded-lg text-amber-200 mr-2 sm:mr-3">
                  <Database size={16} className="sm:w-5 sm:h-5" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Digital Library</h2>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                <div className="lg:w-2/3">
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-yellow-950/70 space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                    <p>
                      The Digital Library is a hub of knowledge, providing faculty, students, and research scholars with seamless access to 
                      a vast collection of online and offline electronic resources. Located on the first floor, it is designed to accommodate 40 users, 
                      offering a conducive environment for digital learning and research.
                    </p>
                    
                    <p>
                      With access to over 15,000 international journals, e-books, research papers, and technical standards, the library ensures
                      that users stay updated with the latest advancements in various fields.
                    </p>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold text-yellow-900 mb-3 sm:mb-4">Available Digital Resources:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {digitalResources.map((resource, index) => (
                      <div key={index} className="bg-amber-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-amber-200 text-center text-yellow-900 text-xs sm:text-sm font-medium">
                        {resource}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 flex items-center justify-center text-yellow-800">
                      <Wifi size={18} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-900 text-sm sm:text-base">High-Speed Internet</h4>
                      <p className="text-xs sm:text-sm text-yellow-950/70">Gigabit connectivity available throughout the library</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3 mt-4 lg:mt-0">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={picthree.src} 
                      alt="Digital Library Facilities" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="bg-amber-50 p-4 sm:p-5 rounded-lg mt-4 sm:mt-6 border border-amber-200">
                    <h3 className="font-semibold text-yellow-900 mb-2 sm:mb-3 text-sm sm:text-base">Access Information</h3>
                    <p className="text-xs sm:text-sm text-yellow-950/70 mb-3 sm:mb-4">
                      Login credentials for digital resources are provided to all registered students and faculty members.
                      Remote access is available with valid institutional credentials.
                    </p>
                    <a href="#" className="text-xs sm:text-sm flex items-center font-medium text-yellow-900 hover:text-yellow-800">
                      Learn how to access <ExternalLink size={12} className="ml-1 sm:w-3.5 sm:h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Library Services Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="bg-yellow-900 p-2 sm:p-3 rounded-lg text-white mr-3 sm:mr-4">
              <FileText size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-950">Library Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {libraryServices.map((service, index) => (
                  <div key={index} className="flex items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-yellow-100 transition hover:shadow-md hover:border-yellow-200">
                    <div className="mr-2 sm:mr-3 bg-amber-100 p-2 sm:p-2.5 rounded-lg text-yellow-800">
                      {service.icon}
                    </div>
                    <span className="text-yellow-950 font-medium text-sm sm:text-base">{service.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-yellow-100">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-900 mb-3 sm:mb-4">Additional Services</h3>
                <ul className="space-y-2 sm:space-y-3 text-yellow-950/70 text-sm sm:text-base">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-yellow-900 mt-2 mr-3"></div>
                    <span>Interlibrary loan services with partner institutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-yellow-900 mt-2 mr-3"></div>
                    <span>Research assistance and literature review support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-yellow-900 mt-2 mr-3"></div>
                    <span>Bibliography and citation management workshops</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={picfour.src} 
                  alt="Library Services" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-900 mb-3 sm:mb-4">Reference Section</h3>
                <p className="text-yellow-950/70 mb-3 sm:mb-4 text-sm sm:text-base">
                  The reference section of the library has a rich collection of international
                  editions of reference books, handbooks, conference proceedings, encyclopedias, and various reference documents.
                  The fully air-conditioned section is located on the first floor.
                </p>
                <div className="flex items-center text-xs sm:text-sm text-yellow-950/70">
                  <Clock size={14} className="mr-2 text-yellow-800 sm:w-4 sm:h-4" />
                  <span>Same operating hours as the main library</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Staff Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="bg-yellow-900 p-2 sm:p-3 rounded-lg text-white mr-3 sm:mr-4">
              <Users size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-950">Library Staff</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-yellow-100">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-yellow-200">
                <thead className="bg-yellow-50">
                  <tr>
                    <th scope="col" className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-yellow-900">Name</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-yellow-900">Designation</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-yellow-900">Contact</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-yellow-100">
                  {libraryStaff.map((staff, index) => (
                    <tr key={index}>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-yellow-950/70 text-xs sm:text-sm">{staff.name}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-yellow-950/70 text-xs sm:text-sm">{staff.designation}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                        <a href={`mailto:${staff.contact}`} className="text-yellow-900 hover:text-yellow-700">{staff.contact}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="bg-yellow-900 p-2 sm:p-3 rounded-lg text-white mr-3 sm:mr-4">
              <BookMarked size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-950">Library Gallery</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <img src={picone.src} alt="Library Exterior" className="w-full h-48 sm:h-60 object-cover" />
              <div className="p-2 sm:p-3 bg-white">
                <p className="text-yellow-900 font-medium text-sm sm:text-base">Library Building</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <img src={pictwo.src} alt="Reading Area" className="w-full h-48 sm:h-60 object-cover" />
              <div className="p-2 sm:p-3 bg-white">
                <p className="text-yellow-900 font-medium text-sm sm:text-base">Reading Area</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <img src={picfive.src} alt="Reference Section" className="w-full h-48 sm:h-60 object-cover" />
              <div className="p-2 sm:p-3 bg-white">
                <p className="text-yellow-900 font-medium text-sm sm:text-base">Reference Section</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section>
          <div className="bg-gradient-to-r from-yellow-900 to-amber-700 rounded-xl text-white overflow-hidden shadow-lg">
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Need Assistance?</h3>
              <p className="text-amber-100 mb-4 sm:mb-6 text-sm sm:text-base">
                Our library staff is here to help you with your research, access to resources, or any other library-related inquiries.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start">
                  <div className="bg-yellow-800/50 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <Mail size={16} className="text-amber-200 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Email</h4>
                    <div className="flex flex-col">
                      <a href="mailto:dlsbce@gmail.com" className="text-amber-200 hover:text-white text-xs sm:text-sm">dlsbce@gmail.com</a>
                      <a href="mailto:librariansbce@gmail.com" className="text-amber-200 hover:text-white text-xs sm:text-sm">librariansbce@gmail.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-800/50 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <Phone size={16} className="text-amber-200 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Phone</h4>
                    <a href="tel:+919947450231" className="text-amber-200 hover:text-white text-xs sm:text-sm">+91 9947 450 231</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-800/50 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <Building size={16} className="text-amber-200 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm sm:text-base">Visit Us</h4>
                    <p className="text-amber-200 text-xs sm:text-sm">Main Campus, Servepalli Radhakrishnan block</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}