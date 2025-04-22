import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://sadguru-science-classes.vercel.app/assets/Gallery/analysis.png',
    alt: 'Parents and Teacher Meeting',
    category: 'Interactions'
  },
  {
    id: 2,
    src: 'https://sadguru-science-classes.vercel.app/assets/Gallery/doubtsolving.png',
    alt: 'Doubt Solving Session',
    category: 'Interactions'
  },
  {
    id: 3,
    src: 'https://sadguru-science-classes.vercel.app/assets/Gallery/farewell.png',
    alt: 'Class X and XII Farewell Session-24.',
    category: 'Events'
  },
  {
    id: 4,
    src: 'https://sadguru-science-classes.vercel.app/assets/Gallery/computerlab.png',
    alt: 'Computer Labs to grade students based on Computer Based Tests (CBT).',
    category: 'Classrooms'
  },
  {
    id: 5,
    src: 'https://sadguru-science-classes.vercel.app/assets/AboutUs/mission.png',
    alt: 'Classrooms equiped with Smart Boards to make learning modern',
    category: 'Classrooms'
  },
  {
    id: 6,
    src: 'https://sadguru-science-classes.vercel.app/assets/Gallery/testsession.png',
    alt: '8 step Exams to prepare students for Board or semester Exams',
    category: 'Interactions'
  },
  {
    id: 7,
    src: 'https://sadguru-science-classes.vercel.app/assets/Gallery/PTAmeeting.png',
    alt: 'One -on- One meeting with Parents to discuss individual student reports and growth.',
    category: 'Interactions'
  }
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filterCategories = ['all', 'Interactions', 'Classrooms', 'Events'];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Take a visual tour of our facilities, classrooms, laboratories, and events to get a glimpse of the 
            SADGURU SCIENCE CLASSES experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 text-sm ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg group cursor-pointer h-64"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white bg-primary-600/80 px-4 py-2 rounded-full text-sm">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute right-0 top-0 bg-white rounded-full p-1 transform translate-x-1/2 -translate-y-1/2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} className="text-gray-800" />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded"
            />
            <div className="bg-white p-4 rounded-b">
              <p className="text-gray-800 font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;