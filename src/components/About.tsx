import React, { useEffect, useRef } from "react";
import { Camera, Heart, Clock } from "lucide-react";
import FOUNDER from'../assets/Founder.jpg'
import COFOUNDER from '../assets/Co-Founder.jpg'

const About = () => {
  const studioRef = useRef(null);
  const foundersRef = useRef(null);

  // Simple animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (studioRef.current) observer.observe(studioRef.current);
    if (foundersRef.current) observer.observe(foundersRef.current);

    return () => {
      if (studioRef.current) observer.unobserve(studioRef.current);
      if (foundersRef.current) observer.unobserve(foundersRef.current);
    };
  }, []);

  const stats = [
    { icon: <Camera size={24} />, value: "5+", label: "Years Experience" },
    { icon: <Heart size={24} />, value: "250+", label: "Happy Clients" },
    { icon: <Clock size={24} />, value: "1200+", label: "Photo Sessions" },
  ];

  const founders = [
    {
      name: "Jayadratha Nayak",
      role: "Founder & Lead Photographer",
      image: FOUNDER,
      bio: "With over 5 years of experience,Jayadratha has developed a unique visual style that blends artistic composition with authentic emotion. His work has been featured in several exhibitions and publications."
    },
    {
      name: "Bhabani Shankar Behera",
      role: "Co-Founder & Creative Director",
      image: COFOUNDER,
      bio: "Bhabani brings his expertise in visual storytelling and creative direction to every project. His background in fine arts and digital media helps shape the studio's distinctive aesthetic approach."
    },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Studio Section */}
        <div 
          ref={studioRef}
          className="opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">About Our Studio</h2>
            <div className="h-px w-16 bg-white/40 mx-auto mb-8"></div>
            
            <p className="text-white/80 leading-relaxed mb-8">
              We're <strong className="text-white">Devansh Shankar Films</strong>, a professional photography studio with a passion for storytelling through visual art. Based in Mumbai but working worldwide, we specialize in transforming fleeting moments into timeless treasures.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              Our approach combines technical excellence with an artistic vision, allowing us to create imagery that resonates with emotion and authenticity. Whether capturing wedding celebrations, portrait sessions, or commercial projects, we bring the same dedication to creating photographs that tell your unique story.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 border border-white/10 bg-white/5"
              >
                <div className="text-white/60 mb-3">{stat.icon}</div>
                <div className="text-2xl font-serif text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-20 h-px w-full bg-white/10"></div>
        
        {/* Founders Section */}
        <div 
          ref={foundersRef}
          className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-500"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Meet Our Founders</h2>
            <div className="h-px w-16 bg-white/40 mx-auto mb-8"></div>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our studio is led by two passionate photographers with complementary skills and a shared vision for creating remarkable imagery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Image */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 mb-6 md:mb-0 flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{founder.role}</p>
                    <p className="text-white/80">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-white/30 hover:border-white/60 text-white/90 hover:text-white transition-colors duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default About;