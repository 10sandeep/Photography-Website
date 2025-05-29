import React, { useState } from 'react';
import PortfolioGallery from './PortfolioGallery';
import { portfolioData } from '../data/portfolioData';

const Portfolio: React.FC = () => {
  const categories = ['All', 'Portraits', 'Landscapes', 'Urban', 'Weddings'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-black/90 text-white/90">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center tracking-wider">
          <span className="inline-block relative">
            Portfolio
            <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-gold"></span>
          </span>
        </h2>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-2 md:space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 mb-2 transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-black'
                  : 'bg-transparent text-white/70 hover:text-white border border-white/20 hover:border-white/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <PortfolioGallery images={filteredImages} />
      </div>
    </section>
  );
};

export default Portfolio;