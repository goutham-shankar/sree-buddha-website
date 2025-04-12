'use client';
import React, { useState, useEffect } from 'react';
import { FileText, Download, AlertCircle, Loader } from 'lucide-react';

function HandbookPage() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = 'http://13.51.85.192:1337/api/handbooks?populate=*';

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch handbooks');
        }
        
        const data = await response.json();
        
        // Map the response to extract handbook names and PDF URLs
        const files = data.data.map((item) => ({
          name: item.attributes?.handbook_name || item.handbook_name,
          path: `http://13.51.85.192:1337${item.attributes?.pdf_name[0]?.url || item.pdf_name[0].url}`,
        }));

        setPdfFiles(files);
        setError(null);
      } catch (error) {
        console.error('Error fetching PDF files:', error);
        setError('Unable to load handbooks. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPdfFiles();
  }, []);

  const handleClick = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      {/* Breadcrumb */}
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
              <a href="#" className="hover:text-amber-700">Academics</a>
              <svg className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            {/* <li className="">Handbooks</li>
             */}
             <li className="font-medium" style={{ color: "#845714" }}>Handbooks</li>

          </ol>
        </nav>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          

          {/* Content section */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4"  style={{ color: "#845714" }}>HANDBOOKS</h1>
            <div className="w-16 h-1 bg-amber-800 mb-6"></div>
            
            <p className="text-gray-600 mb-8">
              Access official college handbooks containing policies, procedures, and important information for students, 
              faculty, and staff. Click on any handbook to view or download the PDF.
            </p>
            
            {/* Loading state */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader className="w-10 h-10 text-amber-600 animate-spin mb-4" />
                <p className="text-gray-600">Loading handbooks...</p>
              </div>
            )}
            
            {/* Error state */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-600">{error}</span>
                </div>
              </div>
            )}
            
            {/* Handbooks list */}
            {!loading && !error && pdfFiles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfFiles.map((pdf, index) => (
                  <div 
                    key={index}
                    onClick={() => handleClick(pdf.path)}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex items-center cursor-pointer group"
                  >
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 group-hover:text-amber-700 transition-colors">{pdf.name}</h3>
                      <p className="text-sm text-gray-500">PDF Document</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                ))}
              </div>
            )}
            
            {/* Empty state */}
            {!loading && !error && pdfFiles.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">No handbooks available</h3>
                <p className="text-gray-600">Check back later for updated documents.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HandbookPage;