import React, { useEffect, useRef, useState } from 'react';
import { Camera, ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const parallaxEffect = scrolled * 0.4;
      heroRef.current.style.transform = `translateY(${parallaxEffect}px)`;
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
      >
        {/* Main background image */}
        <div
          className="absolute inset-0 bg-center bg-cover h-screen"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1622482319442-7c95d8ca5260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-center items-center text-center z-10">
        {/* Logo/icon */}
        <div className={`mb-6 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} transition-all duration-1000 ease-out`}>
          <div className="inline-flex items-center justify-center p-2 rounded-full border-2 border-white/30 mb-8">
            <Camera size={36} className="text-white" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Title with typewriter effect */}
        <h1 
          ref={textRef}
          className={`text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wider ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`}
        >
          <span className="block overflow-hidden">
            <span className="block transform font-light">DEVANSH SHANKAR</span>
          </span>
          <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl text-white/80 font-light tracking-widest">FILMS</span>
        </h1>
        
        {/* Tagline */}
        <p className={`text-xl md:text-2xl text-white/80 max-w-xl mb-4 font-light ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
          Capturing emotions, freezing moments, telling stories through the lens.
        </p>
        
        {/* Separator line */}
        <div className={`w-24 h-px bg-white/30 my-8 ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} transition-all duration-1000 delay-1000`}></div>
        
        {/* CTA buttons */}
        <div className={`flex flex-col md:flex-row gap-6 mt-8 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-1200`}>
          <button
            onClick={scrollToPortfolio}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-colors duration-300 uppercase tracking-widest text-sm group flex items-center justify-center"
          >
            View Portfolio
            <ChevronDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors duration-300 uppercase tracking-widest text-sm"
          >
            Book a Session
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1500`}>
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;