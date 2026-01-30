"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactFormModal from "@/components/ContactFormModal";

const backgroundImages = [
  "/hero-texture.jpg",
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
  "/hero-5.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setFadeState('fade-in');
      }, 500); // Half of transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white py-12 sm:py-20 overflow-hidden" style={{ filter: 'contrast(1.1) brightness(0.95)' }}>
      {/* Geometric Decorative Elements */}
      <div className="hero-geometric-pattern"></div>
      <div className="hero-corner-accent hero-corner-accent-top-left"></div>
      <div className="hero-corner-accent hero-corner-accent-top-right"></div>
      <div className="hero-corner-accent hero-corner-accent-bottom-left"></div>
      <div className="hero-corner-accent hero-corner-accent-bottom-right"></div>
      
      {/* Rotating Background Images with Gradient Overlays */}
      <div className="absolute inset-0">
        {/* Rotating background images - only load first 2 immediately, rest lazy */}
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex && fadeState === 'fade-in'
                ? 'opacity-100 z-0'
                : index === currentImageIndex && fadeState === 'fade-out'
                ? 'opacity-0 z-0'
                : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={index === 0 ? 85 : index === 1 ? 80 : 75}
              loading={index <= 1 ? undefined : "lazy"}
            />
          </div>
        ))}
        {/* Multi-layer gradients for depth - using tweaked texture colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4B89A]/50 via-[#C19A6B]/30 to-[#D4B89A]/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/80 via-[#4D4D4D]/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D4D4D]/50 via-transparent to-[#4D4D4D]/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E8D4B8]/15 to-[#D4B89A]/25 z-10"></div>
        {/* Stronger dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
        {/* Warmer beige/tan overlay from texture */}
        <div className="absolute inset-0 bg-[#F5E6D3]/20 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 text-center lg:text-left relative">
            {/* Text backdrop for better readability */}
            <div className="absolute inset-0 bg-black/30 rounded-lg -m-4 blur-xl z-0 pointer-events-none"></div>
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
                <span className="text-white drop-shadow-lg">Resin Driveways</span>
                <br />
                <span className="text-[#F5E6D3] drop-shadow-lg">in Bath, Somerset</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-white drop-shadow-lg">
                Professional Driveway Installation & Landscaping
              </h2>
              <p className="text-base text-gray-100 mb-2 drop-shadow-md">
                <span className="font-semibold text-[#F5E6D3]">Bath Resin Company</span> - Family-run specialists
              </p>
              {/* 15-Year Guarantee Badge */}
              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <svg className="w-6 h-6 text-[#D4B89A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold text-white drop-shadow-lg">15-Year Guarantee on All Resin Driveways</span>
              </div>
              <p className="text-base sm:text-lg mb-8 text-gray-200 max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
                Serving Bath, Somerset, and Wiltshire. Over 20 years of experience with NVQ, CPCS, City & Guilds, and SWQR qualifications.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 relative z-20">
              <button
                onClick={() => setIsFormModalOpen(true)}
                className="bg-gradient-to-br from-[#C19A6B] via-[#D4B89A] via-[#E8D4B8] to-[#D4B89A] text-black px-10 py-5 rounded-xl font-bold text-lg hover:from-[#E8D4B8] hover:via-[#F5E6D3] hover:via-[#FAF5ED] hover:to-[#E8D4B8] transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-[0_0_40px_rgba(232,212,184,0.8),0_0_20px_rgba(245,230,211,0.6)] hover:scale-110 hover:brightness-110 border-2 border-black/20 hover:border-[#E8D4B8]/60 relative z-20 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get a Free Quote
              </button>
              <a
                href="tel:07944268119"
                className="bg-gradient-to-r from-white/10 via-white/20 to-white/10 border-2 border-white/40 text-white px-10 py-5 rounded-xl font-bold text-lg hover:border-white/60 hover:from-white/20 hover:via-white/30 hover:to-white/20 transition-all flex items-center gap-2 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07944 268119
              </a>
            </div>
            <a
              href="#about"
              onClick={(e) => handleAnchorClick(e, '#about')}
              className="inline-block text-gray-200 hover:text-white transition-colors font-medium drop-shadow-md"
            >
              Read More ↓
            </a>
          </div>
          
          {/* Hero Images Gallery */}
          <div className="lg:col-span-1">
            {/* Logo above images */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <a 
                href="#home" 
                onClick={(e) => handleAnchorClick(e, '#home')}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Bath Resin Company Logo"
                  width={250}
                  height={83}
                  className="h-12 sm:h-16 md:h-20 w-auto"
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 lg:h-40 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:-rotate-3 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4B89A]/25 via-transparent to-[#E8D4B8]/15 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                <Image
                  src="/hero-1.jpg"
                  alt="Bath Resin Company - Resin driveway project"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={80}
                />
              </div>
              <div className="relative h-32 lg:h-40 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-3 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4B89A]/25 via-transparent to-[#E8D4B8]/15 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                <Image
                  src="/hero-2.jpg"
                  alt="Resin driveway installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
              <div className="relative h-32 lg:h-40 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 hover:-rotate-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4B89A]/25 via-transparent to-[#E8D4B8]/15 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                <Image
                  src="/hero-3.jpg"
                  alt="Landscaping project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
              <div className="relative h-32 lg:h-40 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4B89A]/25 via-transparent to-[#E8D4B8]/15 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                <Image
                  src="/hero-4.jpg"
                  alt="Resin driveway project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </section>
  );
}
