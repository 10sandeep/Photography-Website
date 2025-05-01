import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center tracking-wider">
            <span className="inline-block relative">
              About
              <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-gold"></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-serif mb-6 text-gold">The Story Behind The Lens</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                I'm Elena Noir, a fine art photographer based in Paris with a passion for capturing the extraordinary in ordinary moments. For over a decade, I've been transforming fleeting instances into timeless art.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                My work embodies the delicate dance between light and shadow, revealing emotions often hidden beneath the surface. Each photograph tells a story, inviting viewers to experience the world through my perspective.
              </p>
              <p className="text-white/80 leading-relaxed">
                Whether I'm shooting breathtaking landscapes, intimate portraits, or documenting precious wedding moments, my goal remains consistent: to create visual poetry that resonates with the soul.
              </p>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Photographer Elena Noir" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-2 border-gold z-10"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 border-2 border-gold z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;