import React, { useState, useEffect, useRef } from 'react';
import { Camera, Users, User, Heart, Calendar, Clock, Image, Film, MapPin } from 'lucide-react';

// Sample services data with Indian pricing
const servicesData = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Capture the essence of your special day with candid moments and artistic compositions that tell your unique love story.",
    price: "₹75,000",
    suffix: "onwards",
    icon: <Heart className="w-8 h-8" strokeWidth={1.5} />,
    features: [
      "Pre-wedding consultation",
      "10 hours of coverage",
      "Two professional photographers",
      "500+ edited photos",
      "Custom wedding album",
      "Online gallery for sharing"
    ],
    popular: true,
    additionalInfo: "Travel expenses may apply outside Mumbai"
  },
  {
    id: 2,
    title: "Portrait Sessions",
    description: "Professional portrait photography that captures personality and emotion in carefully composed frames.",
    price: "₹15,000",
    suffix: "per session",
    icon: <User className="w-8 h-8" strokeWidth={1.5} />,
    features: [
      "2-hour photo session",
      "Multiple outfit changes",
      "Indoor or outdoor settings",
      "50+ edited photographs",
      "5 retouched print-ready photos",
      "Digital delivery within 7 days"
    ],
    popular: false,
    additionalInfo: "Hair and makeup services available on request"
  },
  {
    id: 3,
    title: "Family Photoshoots",
    description: "Preserve precious family moments with natural, candid photography that captures genuine connections and emotions.",
    price: "₹20,000",
    suffix: "per session",
    icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
    features: [
      "3-hour session at your preferred location",
      "Up to 8 family members included",
      "Natural and posed photography",
      "75+ edited photographs",
      "Custom family photo album",
      "Digital and print options available"
    ],
    popular: false,
    additionalInfo: "Additional family members at ₹1,000 per person"
  },
  {
    id: 4,
    title: "Commercial Photography",
    description: "Professional commercial photography for your brand, products, or services tailored to your marketing needs.",
    price: "₹35,000",
    suffix: "per day",
    icon: <Image className="w-8 h-8" strokeWidth={1.5} />,
    features: [
      "Full-day professional shoot",
      "Product styling and arrangement",
      "High-resolution images for print/web",
      "Basic photo editing and retouching",
      "Commercial usage rights included",
      "Quick turnaround time"
    ],
    popular: false,
    additionalInfo: "Detailed retouching quoted separately"
  },
  {
    id: 5,
    title: "Event Coverage",
    description: "Comprehensive event documentation with a focus on key moments, interactions, and atmosphere of your special occasion.",
    price: "₹30,000",
    suffix: "for 4 hours",
    icon: <Calendar className="w-8 h-8" strokeWidth={1.5} />,
    features: [
      "Corporate events and functions",
      "Birthday celebrations",
      "Award ceremonies",
      "150+ edited photographs",
      "Event highlight slideshow",
      "Quick digital delivery"
    ],
    popular: false,
    additionalInfo: "Additional hours at ₹5,000 per hour"
  },
  {
    id: 6,
    title: "Fine Art Photography",
    description: "Artistic photography sessions resulting in gallery-quality prints that serve as captivating visual stories for your space.",
    price: "₹50,000",
    suffix: "per project",
    icon: <Film className="w-8 h-8" strokeWidth={1.5} />,
    features: [
      "Conceptual planning session",
      "Custom artistic direction",
      "Premium fine art prints",
      "Museum-quality framing options",
      "Limited edition series",
      "Certificate of authenticity"
    ],
    popular: false,
    additionalInfo: "Custom framing available at additional cost"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-black/100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/5 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-white/5 to-transparent opacity-30"></div>
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-white/60 uppercase tracking-widest text-xs mb-3">Professional Offerings</p>
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white/90 mb-6">
            My Services
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Crafting visual stories through the lens, each service is tailored to capture your unique moments with artistic precision and emotional depth.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`px-4 py-2 text-sm border transition-all duration-300 ${
                selectedService === service.id
                  ? 'border-white/60 text-white/40 bg-white/10'
                  : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {service.title}
            </button>
          ))}
          <button
            onClick={() => setSelectedService(null)}
            className={`px-4 py-2 text-sm border transition-all duration-300 ${
              selectedService === null
                ? 'border-white/60 text-white/60 bg-white/10'
                : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/80'
            }`}
          >
            View All
          </button>
        </div>

        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-1000"
          ref={servicesRef}
        >
          {servicesData
            .filter(service => selectedService === null || service.id === selectedService)
            .map((service, index) => (
              <div
                key={service.id}
                className="group relative overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm py-1 px-3 text-xs uppercase tracking-wider text-white/60 z-20">
                    Popular Choice
                  </div>
                )}
                
                {/* Service Card */}
                <div className="p-8 h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 relative z-10 transition-all duration-500 group-hover:bg-white/10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-serif text-white/90">{service.price}</span>
                      {service.suffix && (
                        <span className="ml-1 text-white/70 text-sm">{service.suffix}</span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif text-white/90 mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6 mt-auto">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-white/70 text-sm flex items-start">
                        <span className="text-white/50 mr-2 mt-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {service.additionalInfo && (
                    <p className="text-white/50 italic text-xs mb-6">
                      {service.additionalInfo}
                    </p>
                  )}
                  
                  <div className="mt-2">
                    <a
                      href="#contact"
                      className="inline-block px-6 py-2 border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-300 uppercase tracking-wider text-sm group-hover:border-white/60"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                
                {/* Background accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              </div>
            ))}
        </div>

        {/* Custom Request */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Need a custom photography package tailored to your specific requirements?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-white/30 bg-white/5 backdrop-blur-sm text-white/70 hover:bg-white/10 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            <MapPin size={16} className="mr-2 text-white/70" />
            Request Custom Quote
          </a>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;