import React, { useEffect, useRef } from "react";
import { Camera, Award, Clock, Heart } from "lucide-react";
import ABOUTME from '../assets/photography 3.jpg'

const About = () => {
  const statsRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const stats = [
    { icon: <Camera size={24} />, value: "10+", label: "Years Experience" },
    { icon: <Award size={24} />, value: "35", label: "Awards Won" },
    { icon: <Heart size={24} />, value: "250+", label: "Happy Clients" },
    { icon: <Clock size={24} />, value: "1200+", label: "Photo Sessions" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: ABOUTME,
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
            opacity: 0.03,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section heading with animated underline */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-16">
            <p className="text-white/60 uppercase tracking-widest text-xs mb-3">
              The Person Behind The Lens
            </p>
            <h2 className="text-3xl md:text-5xl font-serif tracking-wide relative inline-flex flex-col items-center">
              About Me
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent mt-6"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image with parallax effect */}
            <div className="relative" ref={imageRef}>
              <div className="aspect-[4/5] overflow-hidden bg-gray-900">
                <img
                  src={ABOUTME}
                  alt="Devansh Shankar - Professional Photographer"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105 hover:opacity-100"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/20 z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-white/20 z-10"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 border border-white/50 z-10"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border border-white/50 z-10"></div>

              {/* Signature overlay */}
              <div className="absolute -bottom-12 right-0 transform rotate-6">
                <span className="font-serif italic text-2xl text-white/80">
                  Devansh
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8" ref={contentRef}>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-6 text-white font-light tracking-wide">
                  Capturing{" "}
                  <span className="relative inline-block">
                    moments
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/30"></span>
                  </span>{" "}
                  that last forever
                </h3>

                <div className="space-y-6 text-white/80">
                  <p className="leading-relaxed">
                    I'm <strong className="text-white">Devansh Shankar</strong>,
                    a professional photographer with a passion for storytelling
                    through visual art. Based in Mumbai but working worldwide, I
                    specialize in transforming fleeting moments into timeless
                    treasures.
                  </p>

                  <p className="leading-relaxed">
                    My journey began over a decade ago with a simple camera and
                    an insatiable curiosity about the world. Today, that same
                    curiosity drives me to explore the delicate interplay
                    between light, emotion, and composition in every frame I
                    capture.
                  </p>

                  <p className="leading-relaxed">
                    Whether I'm shooting breathtaking landscapes, intimate
                    portraits, or documenting precious wedding moments, my
                    philosophy remains consistent: to reveal the extraordinary
                    in seemingly ordinary moments.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="pl-6 border-l border-white/30 italic text-white/70 my-8">
                "Photography is the story I fail to put into words."
              </blockquote>

              {/* Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 border border-white/30 hover:border-white/60 text-white/90 hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 opacity-0 translate-y-8 transition-all duration-1000"
            ref={statsRef}
            style={{ transitionDelay: "300ms" }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center"
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="text-white/60 mb-3">{stat.icon}</div>
                <div className="text-3xl font-serif text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
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

export default About;
