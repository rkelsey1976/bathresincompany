"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Qualifications() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const qualifications = [
    {
      name: "NVQ Groundworks",
      description: "Groundworks and compacting",
      icon: "🏗️",
      image: "/images/gallery/520462917_724981610452706_4977734472763914770_n.jpg",
    },
    {
      name: "CPCS",
      description: "Machine qualifications",
      icon: "⚙️",
      image: "/images/gallery/534684338_748840368066830_3949569465307143283_n.jpg",
    },
    {
      name: "City & Guilds",
      description: "Resin bound surfacing",
      icon: "🎓",
      image: "/images/gallery/537569546_754472764170257_7562291006898665826_n (1).jpg",
    },
    {
      name: "SWQR",
      description: "Streetworks",
      icon: "🛣️",
      image: "/images/gallery/594132339_839910372293162_5910545460222262064_n.jpg",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Our <span className="text-[#D4B89A]">Qualifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certified professionals with industry-recognized qualifications
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {qualifications.map((qual, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] md:w-[300px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-[#D4B89A] transition-all hover:shadow-2xl group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={qual.image}
                      alt={`${qual.name} qualification work`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-[#D4B89A]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                        {qual.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {qual.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {qual.description}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <div className="w-16 h-1 bg-[#D4B89A] rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scroll Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {qualifications.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 300;
                    const gap = 24;
                    scrollContainerRef.current.scrollTo({
                      left: index * (cardWidth + gap),
                      behavior: "smooth",
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#D4B89A] transition-colors"
                aria-label={`Go to qualification ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-2 border-gray-300">
            <p className="text-gray-700 text-center text-lg">
              All our team members are fully qualified and certified, ensuring the highest standards of workmanship and safety on every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
