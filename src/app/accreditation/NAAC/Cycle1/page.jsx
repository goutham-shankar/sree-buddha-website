import React from "react";

const NAACCycle1Page = () => {
  return (
    <div className="min-h-screen py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-2">NAAC CYCLE 1</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-yellow-800 mb-4">NAAC Accreditation</h2>
          <div className="h-1 w-24 bg-white mx-auto rounded mb-6"></div>
          <p className="text-lg italic text-yellow-800 max-w-3xl mx-auto bg-white p-3 rounded-md">
            First NAAC Accredited Self-financing Engineering College under
            University of Kerala
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-yellow-700">
            <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-700">
              The National Assessment & Accreditation Council (NAAC) has granted
              Accreditation &apos;B&apos; Grade status to Sree Buddha College of Engineering
              Pattoor, Nooranad. It is worthy to note that the SBCE is the first
              College of Engineering under the University of Kerala to get
              accredited by the NAAC so far. In the state level, the College is the
              third College of Engineering accredited by NAAC.
            </p>
            
            <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-700">
              As part of accreditation, the NAAC Peer Team comprising of Prof. E.K. Reman
              (Birla Institute of Technology & Science, Pilani) as Chairman, Prof.
              Muthukalingan Krishnan of Bharathidasam University, 
              Tiruchirappalli (member co-ordinator), Dr. Satish C Sharma Indian
              Institute of Technology Roorkee (member) and Prof. D.R. Bhaskar
              (member) of Jamin Millia Islamia University New Delhi visited and
              assessed the College during September 18th to 20th 2014.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              The standing committee meeting of the NAAC Council held on 11th December 2014
              recommended for Accreditation with Grading &apos;B&apos; to the Sree Buddha
              College of Engineering, Pattoor Nooranad which is a reputation to the
              Institution.
            </p>
          </div>
        </div>

        {/* Certificate and Team Visit Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Certificate - Enhanced Responsive Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
            <div className="w-full aspect-square sm:aspect-auto sm:h-full flex items-center justify-center bg-yellow-100">
              <img
                src="/assets/images/accreditation/cycle1.png"
                alt="Certificate of NAAC Accreditation"
                className="w-full h-auto max-h-[500px] object-contain"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/90 to-transparent text-white p-4 text-center font-medium">
              <span>Certificate of Accreditation</span>
            </div>
          </div>

          {/* Team Visit */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-yellow-700">
            <h3 className="text-2xl font-bold text-yellow-900 mb-2">NAAC Team Visit</h3>
            <div className="h-1 w-16 bg-white rounded mb-6"></div>
            
            <p className="mb-4 text-gray-700 leading-relaxed">
              A NAAC Peer Team comprising of eminent academic experts visited Sree
              Buddha College of Engineering on 18, 19 and 20 September 2014. NAAC
              is an autonomous organization established in 1994 by the University
              Grants Commission with Bangaluru as its Headquarters.
            </p>
            
            <p className="mb-4 text-gray-700 leading-relaxed">
              The visit of the NAAC Team was to acquaint themselves with the strengths and
              weakness of the college with reference to quality assurance. During
              the Team&apos;s visit, it held discussions with the representatives of
              the college management, students, alumni and parents.
            </p>
            
            <p className="mb-4 text-gray-700 leading-relaxed">
              They also visited departments, libraries, workshops, college office, college
              hostels and also assessed the functioning of NSS and Physical
              education departments. On 18 Sep. evening the students staged
              different cultural programmes to showcase the essence of the culture
              of Kerala.
            </p>
            
            <h4 className="text-xl font-semibold text-yellow-800 mt-6 mb-4">Distinguished Team Members:</h4>
            <ul className="space-y-4">
              <li className="p-3 bg-white rounded-md border-l-4 border-yellow-700">
                <span className="block font-semibold text-yellow-900">Prof. K. E. Raman</span>
                <span className="italic text-yellow-700">(Chairman)</span>
                <span className="block text-sm text-gray-700 mt-1">Senior Professor and Acting Director, BITS Pilani</span>
              </li>
              <li className="p-3 bg-white rounded-md border-l-4 border-yellow-700">
                <span className="block font-semibold text-yellow-900">Prof. Muthukalingan Krishnan</span>
                <span className="italic text-yellow-700">(Member Co-ordinator)</span>
                <span className="block text-sm text-gray-700 mt-1">Professor & Head, Department of Environmental Biotechnology, Bharathidasan University, Tiruchirapalli</span>
              </li>
              <li className="p-3 bg-white rounded-md border-l-4 border-yellow-700">
                <span className="block font-semibold text-yellow-900">Dr. Satish C Sharma</span>
                <span className="italic text-yellow-700">(Member)</span>
                <span className="block text-sm text-gray-700 mt-1">Professor in Mechanical & Industrial Engineering Department, IIT Roorkee</span>
              </li>
              <li className="p-3 bg-white rounded-md border-l-4 border-yellow-700">
                <span className="block font-semibold text-yellow-900">Prof. D. R. Bhaskar</span>
                <span className="italic text-yellow-700">(Member)</span>
                <span className="block text-sm text-gray-700 mt-1">Department of Electronics and Communication Engineering, Jamia Millia Islamia University, New Delhi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NAACCycle1Page;