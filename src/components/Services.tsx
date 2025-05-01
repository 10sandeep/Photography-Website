import React from 'react';
import { servicesData } from '../data/servicesData';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center tracking-wider text-white">
          <span className="inline-block relative">
            Services
            <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-gold"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="group relative overflow-hidden"
            >
              <div className="p-8 h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 relative z-10 transition-all duration-500 group-hover:bg-white/10">
                <h3 className="text-xl font-serif text-gold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <div className="mt-auto">
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-serif text-white">${service.price}</span>
                    {service.suffix && (
                      <span className="ml-1 text-white/70">{service.suffix}</span>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-white/70 text-sm flex items-start">
                        <span className="text-gold mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-block px-6 py-2 border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 uppercase tracking-wider text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;