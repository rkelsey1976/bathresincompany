"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/520462917_724981610452706_4977734472763914770_n.jpg",
    alt: "Resin bound driveway installation",
  },
  {
    src: "/images/gallery/534684338_748840368066830_3949569465307143283_n.jpg",
    alt: "Professional resin driveway",
  },
  {
    src: "/images/gallery/537569546_754472764170257_7562291006898665826_n (1).jpg",
    alt: "Garden landscaping project",
  },
  {
    src: "/images/gallery/594132339_839910372293162_5910545460222262064_n.jpg",
    alt: "Resin pathway installation",
  },
  {
    src: "/images/gallery/518374493_725822217035312_4448164576050516145_n.jpg",
    alt: "Driveway transformation",
  },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Our <span className="text-[#D4B89A]">Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of completed projects showcasing quality resin driveways and landscaping work
            </p>
          </div>

          {/* Main Gallery Display */}
          <div className="relative mb-6">
            {/* Large Featured Image */}
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl border-2 border-gray-300">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover transition-opacity duration-500"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {currentIndex + 1} / {galleryImages.length}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-3 mt-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-[#D4B89A] scale-110 shadow-lg'
                      : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                    quality={60}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
