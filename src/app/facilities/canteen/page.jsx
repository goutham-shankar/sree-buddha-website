import React from 'react';
import { Camera } from 'lucide-react';
import photo from '@/assets/images/facilities/canteen.jpg'

const CanteenPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      {/* Breadcrumb - helps with navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <nav className="text-sm">
          <ol className="list-none p-0 flex text-gray-500">
            <li className="flex items-center">
              <a href="#" className="hover:text-amber-700">Home</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-amber-700">Facilities</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-amber-800 font-medium">Canteen</li>
          </ol>
        </nav>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero section with actual canteen image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img 
              src={photo.src}
              alt="College Canteen" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Our Canteen Facility</h2>
              <p className="text-sm md:text-base">A modern dining space for students and staff</p>
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">CANTEEN</h1>
                <div className="w-16 h-1 bg-amber-800 mb-6"></div>
                
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Our college offers a spacious canteen facility within the premises, managed directly by the college administration to ensure the highest standards of quality and service.
                  </p>
                  
                  <p className="mb-4">
                    Students and staff enjoy a variety of food and snack items at reasonable rates, all prepared with attention to quality and nutrition. The canteen prides itself on its family atmosphere, serving delicacies with a homemade flavor, cooked to perfection and delivered with exceptional courtesy.
                  </p>
                  
                  <p className="mb-4">
                    We provide ample seating to accommodate everyone, even during peak hours. Our modern, hygienic kitchen is maintained by staff who prioritize cleanliness and food safety.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="text-amber-800 font-bold mb-2">Variety</div>
                    <p className="text-sm text-gray-600">Wide selection of nutritious meals and snacks</p>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="text-amber-800 font-bold mb-2">Affordable</div>
                    <p className="text-sm text-gray-600">Student-friendly prices without compromising quality</p>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="text-amber-800 font-bold mb-2">Hygienic</div>
                    <p className="text-sm text-gray-600">Modern facilities with strict cleanliness standards</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 mt-8 md:mt-0 md:ml-10">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-medium text-amber-800 mb-3">Opening Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 3:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-800 text-white p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Today s Special</h3>
                  <p className="text-amber-100 mb-2">Check out our daily specials for fresh, seasonal offerings at special prices.</p>
                  <button className="mt-2 bg-white text-amber-800 px-4 py-2 rounded font-medium hover:bg-amber-100 transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      
    </div>
  );
};

export default CanteenPage;