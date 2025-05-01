import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioGalleryProps {
  images: PortfolioItem[];
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <>
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-8 space-y-5 md:space-y-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="break-inside-avoid mb-5 md:mb-8 overflow-hidden group cursor-pointer rounded-md shadow-md"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-70 h-90 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-white mb-2">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying full-size images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-10">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors duration-300"
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <div className="max-w-3xl max-h-[70vh] overflow-hidden">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-serif text-white">{selectedImage.title}</h3>
              <p className="text-white/70 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGallery;