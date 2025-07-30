import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import officeImg from '../assets/office.jpeg';
import libraryImg from '../assets/library.jpeg';
import conferenceImg from '../assets/CaseStudy.jpeg';
import receptionImg from '../assets/GouravMishra.jpeg';
import privateOfficeImg from '../assets/office2.jpeg';
import archiveImg from '../assets/details.jpeg';


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: officeImg,
      title: 'Main Office Chamber',
      description: 'Professional consultation room'
    },
    {
      url: libraryImg,
      title: 'Law Library',
      description: 'Extensive legal research facility'
    },
    {
      url: conferenceImg,
      title: 'Conference Room',
      description: 'Client meeting space'
    },
    {
      url: receptionImg,
      title: 'Reception Area',
      description: 'Welcoming client space'
    },
    {
      url: privateOfficeImg,
      title: 'Private Office',
      description: 'Advocate working chamber'
    },
    {
      url: archiveImg,
      title: 'Legal Documents Archive',
      description: 'Organized case files'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm tracking-wide uppercase">Our Office</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Professional Environment
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step into our professional legal chambers designed to provide comfort and confidence during your legal consultations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-fit transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-xl">{images[selectedImage].title}</h3>
                <p className="text-gray-200">{images[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;