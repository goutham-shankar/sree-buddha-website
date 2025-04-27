"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ComputerScienceDepartment() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI}/api/galleries?populate=*`);
        if (!response.ok) {
          throw new Error('Failed to fetch gallery images');
        }
        
        const data = await response.json();
        
        // Filter images for CS department
        let filteredImages = data.data.filter(item => 
          item.Department?.toLowerCase() === "cs" 
        );
        
        // Sort images by date (newest first)
        filteredImages.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Extract image URLs
        let imageUrls = filteredImages.flatMap(item =>
          item.images.map(img => {
            return img.formats?.small?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI}${img.formats.small.url}`
              : `${process.env.NEXT_PUBLIC_STRAPI}${img.url}`;
          })
        );
        
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchImages();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="py-5 border-b-3 text-yellow-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-2">
            Department of Computer Science Engineering
          </h1>
          <p className="text-xl">Innovation • Excellence • Future</p>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="relative h-96 mt-8 mb-12 overflow-hidden rounded-lg mx-4">
        <div className="absolute inset-0">
          <Image 
            src="/images/cs-dept-hero.jpg" 
            alt="Computer Science Students Working Together"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Shaping Tomorrow&apos;s Tech Leaders
          </h2>
          <p className="text-lg text-gray-100">
            Join our vibrant community of innovators and problem-solvers
          </p>
        </div>
      </div>
      
      {/* Department Profile Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-amber-800 pb-3 border-b-2 text-yellow-900 mb-6">
          Department Profile
        </h2>
        <div className="text-lg space-y-4">
          <p>
            Sree Buddha College of Engineering provides world-class infrastructure, state-of-the-art facilities, and an academic 
            ambience that suit the requirements of the dynamic and highly competitive global environment. In this era of 
            Information Technology, this institution offers courses in Computer Science and Engineering with the objective of imparting 
            quality education to equip students with a solid and thorough understanding of the fundamentals and core subjects of Computer Engineering.
          </p>
            
          <p>
            The Department of Computer Science and Engineering was established in the year 2002. At present the sanctioned intake is 60 
            with a provision of admitting six diploma holders in the third semester under lateral entry scheme. The department also offers 
            M.Tech programme specialized in Computer Science and Engineering from the year 2011. The sanctioned intake at present is 18. 
            This department is accredited by NBA since November 2019.
          </p>

          <p>
            The department has well-experienced faculty with postgraduate and doctoral qualifications from prestigious institutions with 
            many publications to their credit. The faculty members regularly update their skills by attending and organizing refresher 
            courses in their areas of specialization.
          </p>
        </div>
      </section>
      
      {/* Department Highlights Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-amber-800 pb-3 border-b-2 text-yellow-900 mb-6">
          Department Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Highlight Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-amber-800 pb-3 mb-4 border-b">
              Academic Excellence & Research
            </h3>
            <ul className="space-y-3">
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Accredited by NBA since November 2019
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Faculty with postgraduate and doctoral qualifications from prestigious institutions
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Regular publications in reputed journals and conferences
              </li>
            </ul>
          </div>
          
          {/* Highlight Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-amber-800 pb-3 mb-4 border-b">
              Student Organizations
            </h3>
            <ul className="space-y-3">
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Computer Society of India (CSI) student branch
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Association for Computing Machinery (ACM) student branch
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Department association named CYBORG with active student participation
              </li>
            </ul>
          </div>
          
          {/* Highlight Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-amber-800 pb-3 mb-4 border-b">
              Industry Connections
            </h3>
            <ul className="space-y-3">
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Management of Remote Centre for IIT Bombay
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                College membership of NASSCOM
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Regular invited lectures by experts from Industries and Academia
              </li>
            </ul>
          </div>
          
          {/* Highlight Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-amber-800 pb-3 mb-4 border-b">
              Infrastructure & Resources
            </h3>
            <ul className="space-y-3">
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Well-equipped laboratories and computing facilities
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Departmental library in addition to Central library
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-amber-800 rounded-full"></span>
                Good collection of project reports, seminar reports, journals, and technical magazines
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Department Gallery Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-amber-800 pb-3 border-b-2 text-yellow-900 mb-6">
          Department Gallery
        </h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 text-yellow-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                {/* Using next/image isn't ideal here as we don't know dimensions beforehand */}
                {/* For production, consider adding width/height or using custom Image component */}
                <img 
                  src={src} 
                  alt={`CS Department Gallery Image ${index + 1}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
        
        {!isLoading && images.length === 0 && (
          <p className="text-center text-gray-500 py-10">No gallery images available.</p>
        )}
      </section>
    </div>
  );
}