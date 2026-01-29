"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700 shadow-lg">
        <nav className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleAnchorClick(e, '#home')}
              className="flex items-center hover:opacity-80 transition-opacity py-4"
            >
              <Image
                src="/logo.png"
                alt="Bath Resin Company Logo"
                width={300}
                height={100}
                className="h-16 sm:h-20 md:h-24 w-auto py-2"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                item.label === 'Contact' ? (
                  <button
                    key={item.href}
                    onClick={() => {
                      setIsContactModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="bg-[#D4B89A] text-white px-4 py-2 rounded-lg hover:bg-[#E8D4B8] transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-white hover:text-[#D4B89A] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-[#D4B89A] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/98 border-t border-gray-700 animate-in slide-in-from-top">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  item.label === 'Contact' ? (
                    <button
                      key={item.href}
                      onClick={() => {
                        setIsContactModalOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full bg-[#D4B89A] text-white hover:bg-[#E8D4B8] transition-colors font-medium py-3 px-4 rounded-lg text-center"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="block text-white hover:text-[#D4B89A] transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-800"
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
    <ContactModal
      isOpen={isContactModalOpen}
      onClose={() => setIsContactModalOpen(false)}
    />
    </>
  );
}
