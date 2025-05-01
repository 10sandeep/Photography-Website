import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxEffect = scrolled * 0.4;
      heroRef.current.style.transform = `translateY(${parallaxEffect}px)`;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="absolute inset-0 bg-center bg-cover h-[120%]"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1745770998338-eb50b0c89b16?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ")',
            backgroundPosition: 'center',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>
      
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wider opacity-0 animate-fade-in">
          DEVANSH SHANKAR FILMS
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-xl opacity-0 animate-fade-in-delayed">
          Capturing emotions, freezing moments, telling stories through the lens.
        </p>
        <div className="mt-12 opacity-0 animate-fade-in-more-delayed">
          <a 
            href="#portfolio" 
            className="px-8 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 uppercase tracking-widest text-sm"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;