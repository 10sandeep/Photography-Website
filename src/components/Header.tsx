import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Instagram, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center group"
        >
          <div className={`mr-2 transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-100'}`}>
            <Camera className="h-6 w-6 text-white/70 group-hover:text-white/80 transition-colors duration-300" strokeWidth={1.5} />
          </div>
          
          {/* Desktop Logo */}
          <span className={`hidden sm:flex font-serif text-white/100 tracking-widest transition-all duration-300 items-center ${isScrolled ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
            <span className="font-light">DEVANSH</span>
            <span className="ml-2 text-white/80">SHANKAR FILMS</span>
          </span>
          
          {/* Mobile Logo */}
          <span className={`sm:hidden font-serif text-white/100 tracking-widest transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
            <span className="font-medium">DSF</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`px-4 py-2 text-sm uppercase tracking-wider relative transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-white/70 font-medium'
                  : 'text-white/100 hover:text-white'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
              )}
            </a>
          ))}
          
          {/* Separator */}
          <span className="w-px h-5 bg-white/20 mx-2"></span>
          
          {/* Social Media Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center">
          {/* Menu Toggle - Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(12px)'
        }}
      >
        {/* Close Button for Mobile Menu */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 z-50"
          aria-label="Close menu"
        >
          <X size={24} className="text-white" />
        </button>

        {/* Centered Navigation */}
        <div className="flex items-center bg-black/90 justify-center min-h-screen text-white/30">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-2xl font-light tracking-wider transition-colors duration-300 relative ${
                  activeSection === item.id ? 'text-white/40' : 'text-white/60 hover:text-white/40'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-px bg-white/50" />
                )}
              </a>
            ))}
            
            {/* Social Media - Mobile */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-white/10 w-40">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;