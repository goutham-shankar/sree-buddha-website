// "use client"
// import React, { useState } from "react";
// import "./page.css";

// const ImageGallery = () => {
//   const images = [
//     "/assets/images/gallery/008.jpg",
//     "/assets/images/gallery/2-1.jpg",
//     "/assets/images/gallery/005.jpg",
//     "/assets/images/gallery/0011.jpg",
//     "/assets/images/gallery/0016.jpg",
//     "/assets/images/gallery/thumbs_334A8233.jpg",
//     "/assets/images/gallery/thumbs_334A8243-copy.jpg",
//     "/assets/images/gallery/thumbs_334A8342.jpg",
//     "/assets/images/gallery/thumbs_334A8375.jpg",
//     "/assets/images/gallery/thumbs_334A8405-copy.jpg",
//     "/assets/images/gallery/thumbs_334A8418-copy.jpg",
//     "/assets/images/gallery/thumbs_334A8462.jpg",
//     "/assets/images/gallery/thumbs_334A8522.jpg",
//     "/assets/images/gallery/thumbs_334A8536.jpg",
//     "/assets/images/gallery/thumbs_334A9128.jpg",
//     "/assets/images/gallery/thumbs_334A9153.jpg",
//     "/assets/images/gallery/thumbs_334A9153-NNNN.jpg",
//     "/assets/images/gallery/thumbs_334A9181-copy.jpg",
//     "/assets/images/gallery/thumbs_334A9201.jpg",
//     "/assets/images/gallery/thumbs_334A9208-copy.jpg",
//     "/assets/images/gallery/thumbs_334A9213.jpg",
//     "/assets/images/gallery/thumbs_334A9286.jpg",
//     "/assets/images/gallery/thumbs_334A9311.jpg",
//     "/assets/images/gallery/thumbs_334A9332.jpg",
//     "/assets/images/gallery/422d603e-3f6c-4402-a863-ff8e5bd512ae.jpeg",
//     "/assets/images/gallery/mou.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(null);

//   const handleImageClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const handleCloseModal = () => {
//     setCurrentIndex(null);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="page">
//       <div className="page_heading">Gallery</div>
//       <hr />
//       <div className="image-gallery">
//         {images.map((image, index) => (
//           <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
//             <img src={image} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       {currentIndex !== null && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
//             <button className="close-btn" onClick={handleCloseModal}>
//               &#10005;
//             </button>
//             <button className="prev-btn" onClick={handlePrev}>
//               &#10094;
//             </button>
//             <button className="next-btn" onClick={handleNext}>
//               &#10095;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;

'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';


const galleryImages= [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1562774053-701939374585',
    alt: 'Modern college campus with students walking between classes',
    category: 'campus'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    alt: 'College graduation ceremony',
    category: 'events'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952',
    alt: 'State-of-the-art computer lab',
    category: 'facilities'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    alt: 'College library interior',
    category: 'facilities'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
    alt: 'Student art exhibition',
    category: 'events'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a',
    alt: 'Campus gardens in spring',
    category: 'campus'
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const categories = ['all', 'campus', 'events', 'facilities'];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-8xl font-bold text-foreground mb-4 text-yellow-800">
            Gallery
          </h1>
          <div className="line"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our vibrant campus life through this collection of images showcasing our facilities,
            events, and daily activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image)}>
                <CardContent className="p-0 relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={`${image.src}?auto=format&fit=crop&w=800&q=80`}
                      alt={image.alt}
                      className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge variant="secondary" className="capitalize">
                          {image.category}
                        </Badge>
                        <p className="text-white text-sm font-medium">
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

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <img
                  src={`${selectedImage.src}?auto=format&fit=crop&w=1600&q=90`}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <Badge variant="secondary" className="mb-2 capitalize">
                    {selectedImage.category}
                  </Badge>
                  <p className="text-white text-lg">{selectedImage.alt}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}