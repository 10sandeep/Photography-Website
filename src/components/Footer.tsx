import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/90 py-10 text-white/70">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-serif text-white/60 tracking-wider">
              DEVANSH SHANKAR FILMS
            </a>
          </div>
          
          <div className="text-sm">
            <p>&copy; {currentYear} DEVANSH SHANKAR FILMS. All rights reserved.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;