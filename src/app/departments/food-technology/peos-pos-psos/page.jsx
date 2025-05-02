"use client";

import React from 'react';

export default function FoodTechnologyPEOSPSO() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
     
      
      {/* Main Program Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-6 pb-2 border-b-2 ">
          Food Technology
        </h2>
        
        {/* PSO Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
            Program Specific Outcomes (PSOs)
          </h3>
          <ul className="space-y-5">
            <li>
              <h4 className="font-semibold text-lg">PSO1</h4>
              <p>
                Develop and deliver novel designs/ processes / products that could cater to the food technology industrial demands to improve the social ecosystems.
              </p>
            </li>
            <li>
              <h4 className="font-semibold text-lg">PSO2</h4>
              <p>
                Carryout research of appreciable significance and produce quality publication.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}