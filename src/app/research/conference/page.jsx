import React from 'react';
import Image from 'next/image';
import meetone from '../../../../public/assets/images/research/meetone.jpg';
import meettwo from '../../../../public/assets/images/research/meettwo.jpg';
import dmeetone from '../../../../public/assets/images/research/dmeetone.jpg';
import dmeettwo from '../../../../public/assets/images/research/dmeettwo.jpg';
import fotor from '../../../../public/assets/images/research/Collage_Fotor.png';
import light from '../../../../public/assets/images/research/lighting.jpg';
import lighttwo from '../../../../public/assets/images/research/lightingtwo.jpg';
import news from '../../../../public/assets/images/research/newspic.png';
import'./style.css';
export default function Conferences() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative bg-gradient-to-b from-yellow-50 to-white">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10 pattern-diagonal-lines pattern-yellow-500/20 pattern-bg-white pattern-size-4" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
              Conferences Organised
            </h1>
            <div className="w-16 sm:w-32 h-1 bg-yellow-900 mx-auto mb-3" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* 2022 Conference Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm mb-6">
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Department of Electronics and Communication, Sree Buddha College of Engineering, Pattoor, Alappuzha, Kerala
              organized an Online National Conference <span className="font-bold">"REVOLUTIONIZE ELECTRONICS AND COMMUNICATION TECHNOLOGIES"</span> on 23th 
              and 24th June 2022...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-48 sm:h-64">
                <Image 
                  src={meetone}
                  alt="Conference 2022"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48 sm:h-64">
                <Image 
                  src={meettwo}
                  alt="Conference 2022"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expenditure Statement */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
            EXPENDITURE STATEMENT OF REACT'21
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  ['TOTAL REGISTERED PARTICIPANT', '34'],
                  ['PARTICIPANT FEE EXTERNAL', '32x 100 = 3200'],
                  ['PARTICIPANT FEE', '2 x300 = 600'],
                  ['TOTAL', '3800'],
                  ['PANEL MEMBER REMUNERATION', '2x 1500 = 3000'],
                  ['BALANCE', '800']
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-yellow-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* National Conclave Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
            Two day National Conclave on 'Accreditation & Bench marking'
          </h2>
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm mb-6">
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Two day National Conclave on 'Accreditation & Bench marking' conducted on 21 & 22 December 2018...
            </p>
            <div className="relative h-64 sm:h-96">
              <Image 
                src={fotor}
                alt="National Conclave"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* E2F2 2018 Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
            2ND ANNUAL CONFERENCE SERIES ON "ENGINEERING EDUCATION FOR FACING THE FUTURE (E2F2 2018)"
          </h2>
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="prose prose-sm sm:prose-base text-gray-700">
              {/* Add your conference content here */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="relative h-48 sm:h-64">
                <Image 
                  src={light}
                  alt="E2F2 2018"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48 sm:h-64">
                <Image 
                  src={news}
                  alt="E2F2 2018 News"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* E2F2 2017 Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-900 pl-3">
            Two day National Conference E2F2 2017
          </h2>
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Our college has conducted a 2 day National Conference on Eco friendly Technological innovations...
            </p>
            <div className="relative h-64 sm:h-96">
              <Image 
                src={lighttwo}
                alt="E2F2 2017"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              Chief guest inaugurating the function by lighting the lamp
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}