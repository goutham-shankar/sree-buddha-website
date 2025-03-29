'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Instagram, Camera, Info } from 'lucide-react';

// Enhanced gallery data with more metadata
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1562774053-701939374585',
    alt: 'Modern college campus with students walking between classes',
    category: 'campus',
    date: 'September 2024',
    description: 'Our beautiful main campus during the fall semester with students heading to classes.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    alt: 'College graduation ceremony',
    category: 'events',
    date: 'June 2024',
    description: 'Annual graduation ceremony celebrating our students' achievements and future endeavors.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952',
    alt: 'State-of-the-art computer lab',
    category: 'facilities',
    date: 'March 2024',
    description: 'Our recently renovated computer lab featuring the latest technology for student projects.'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    alt: 'College library interior',
    category: 'facilities',
    date: 'February 2024',
    description: 'The main reading hall in our library, providing a quiet space for study and research.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
    alt: 'Student art exhibition',
    category: 'events',
    date: 'April 2024',
    description: 'Annual student art exhibition showcasing creative works from various departments.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a',
    alt: 'Campus gardens in spring',
    category: 'campus',
    date: 'May 2024',
    description: 'Our meticulously maintained campus gardens in full bloom during spring.'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
    alt: 'Science laboratory session',
    category: 'facilities',
    date: 'October 2024',
    description: 'Students conducting experiments in our advanced science laboratory.'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1',
    alt: 'Student sports tournament',
    category: 'events',
    date: 'November 2024',
    description: 'Annual inter-college sports tournament held at our athletics complex.'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    alt: 'Freshers' orientation day',
    category: 'events',
    date: 'August 2024',
    description: 'Welcome ceremony for new students joining our college community.'
  }
];

export default function EnhancedGalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showInfo, setShowInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [layout, setLayout] = useState('grid'); // 'grid' or 'masonry'

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Get all unique categories from gallery data
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  // Set the current index when an image is selected
  useEffect(() => {
    if (selectedImage) {
      const index = filteredImages.findIndex(img => img.id === selectedImage.id);
      setSelectedIndex(index);
    }
  }, [selectedImage, filteredImages]);

  // Next image in lightbox
  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[selectedIndex + 1]);
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedImage(filteredImages[0]);
      setSelectedIndex(0);
    }
  };

  // Previous image in lightbox
  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedImage(filteredImages[selectedIndex - 1]);
      setSelectedIndex(selectedIndex - 1);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1]);
      setSelectedIndex(filteredImages.length - 1);
    }
  };

  // Simulate loading state for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with navbar */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-yellow-800">COLLEGE NAME</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-yellow-700">Home</a>
              <a href="#" className="text-gray-600 hover:text-yellow-700">About</a>
              <a href="#" className="text-yellow-800 font-medium">Gallery</a>
              <a href="#" className="text-gray-600 hover:text-yellow-700">Academics</a>
              <a href="#" className="text-gray-600 hover:text-yellow-700">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-16">
        {/* Hero section */}
        <div className="relative mb-16 rounded-xl overflow-hidden">
          <div className="h-64 md:h-80 bg-gradient-to-r from-yellow-700 to-amber-500 flex items-center justify-center">
            <div className="text-center text-white z-10 px-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our Gallery
              </motion.h1>
              <motion.div 
                className="h-1 w-24 bg-white mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.3 }}
              ></motion.div>
              <motion.p 
                className="max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Explore our vibrant campus life through this collection of images showcasing our facilities,
                events, and daily activities.
              </motion.p>
            </div>
            
            <div className="absolute inset-0 bg-black opacity-30"></div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Controls section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${selectedCategory === category ? 'bg-yellow-800 hover:bg-yellow-900' : 'border-yellow-700 text-yellow-800 hover:bg-yellow-50'}`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* View toggle */}
          <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm">
            <Button
              variant="ghost"
              onClick={() => setLayout('grid')}
              className={`${layout === 'grid' ? 'bg-yellow-100 text-yellow-800' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span className="ml-2">Grid</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLayout('masonry')}
              className={`${layout === 'masonry' ? 'bg-yellow-100 text-yellow-800' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9"></rect>
                <rect x="14" y="3" width="7" height="5"></rect>
                <rect x="14" y="12" width="7" height="9"></rect>
                <rect x="3" y="16" width="7" height="5"></rect>
              </svg>
              <span className="ml-2">Masonry</span>
            </Button>
          </div>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-800"></div>
          </div>
        ) : (
          <>
            {/* Gallery Grid */}
            <AnimatePresence>
              <div className={`
                ${layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 
                'columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'}
              `}>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: index * 0.1 }}
                    className={layout === 'masonry' ? 'mb-6 break-inside-avoid' : ''}
                  >
                    <Card className="overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300" onClick={() => setSelectedImage(image)}>
                      <CardContent className="p-0 relative">
                        <div className={`${layout === 'grid' ? 'aspect-w-16 aspect-h-9' : ''}`}>
                          <img
                            src={`${image.src}?auto=format&fit=crop&w=800&q=80`}
                            alt={image.alt}
                            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <div className="flex justify-between items-center">
                                <Badge variant="secondary" className="capitalize bg-yellow-800 text-white">
                                  {image.category}
                                </Badge>
                                <span className="text-white text-xs opacity-70">{image.date}</span>
                              </div>
                              <p className="text-white text-sm font-medium line-clamp-2">
                                {image.alt}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </>
        )}

        {/* No results */}
        {filteredImages.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="text-yellow-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                <path d="M10.3 21H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-3.3M12 17l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No images found</h3>
            <p className="text-gray-600">Try selecting a different category filter</p>
          </div>
        )}

        {/* Enhanced Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-black/90 border-none">
            {selectedImage && (
              <div className="relative">
                {/* Close button */}
                <Button 
                  variant="ghost" 
                  className="absolute right-2 top-2 z-20 text-white bg-black/20 hover:bg-black/40 rounded-full p-2 h-auto"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={20} />
                </Button>

                {/* Info toggle */}
                <Button 
                  variant="ghost" 
                  className="absolute right-2 top-14 z-20 text-white bg-black/20 hover:bg-black/40 rounded-full p-2 h-auto"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <Info size={20} />
                </Button>

                {/* Navigation buttons */}
                <Button 
                  variant="ghost" 
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-black/40 rounded-full p-2 h-auto"
                  onClick={handlePrevious}
                >
                  <ChevronLeft size={24} />
                </Button>

                <Button 
                  variant="ghost" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-black/40 rounded-full p-2 h-auto"
                  onClick={handleNext}
                >
                  <ChevronRight size={24} />
                </Button>

                {/* Main image */}
                <div className="flex justify-center items-center min-h-[60vh]">
                  <img
                    src={`${selectedImage.src}?auto=format&fit=crop&w=1600&q=90`}
                    alt={selectedImage.alt}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                </div>

                {/* Image info panel */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="secondary" className="mb-2 capitalize bg-yellow-800 text-white">
                        {selectedImage.category}
                      </Badge>
                      <h3 className="text-white text-xl font-medium mb-1">{selectedImage.alt}</h3>
                      
                      {/* Extended info */}
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: showInfo ? 'auto' : 0, 
                          opacity: showInfo ? 1 : 0 
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 mt-2">{selectedImage.description}</p>
                        <p className="text-gray-400 text-sm mt-2">{selectedImage.date}</p>
                      </motion.div>
                    </div>

                    {/* Social sharing */}
                    <div className="flex space-x-2">
                      <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full p-2 h-auto">
                        <Instagram size={18} />
                      </Button>
                      <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full p-2 h-auto">
                        <Camera size={18} />
                      </Button>
                    </div>
                  </div>

                  {/* Navigation indicator */}
                  <div className="flex justify-center mt-4">
                    <div className="flex space-x-1">
                      {filteredImages.map((img, idx) => (
                        <div 
                          key={img.id}
                          className={`w-2 h-2 rounded-full ${idx === selectedIndex ? 'bg-white' : 'bg-white/30'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Our History</a></li>
                <li><a href="#" className="hover:text-white">Leadership</a></li>
                <li><a href="#" className="hover:text-white">Accreditation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Academics</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Programs</a></li>
                <li><a href="#" className="hover:text-white">Faculties</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Campus Life</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Clubs</a></li>
                <li><a href="#" className="hover:text-white">Facilities</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                123 College Road<br />
                City, State 12345<br />
                <a href="tel:+1234567890" className="hover:text-white">Phone: (123) 456-7890</a><br />
                <a href="mailto:info@college.edu" className="hover:text-white">Email: info@college.edu</a>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">© 2025 College Name. All rights reserved.</div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}