"use client";

import Link from "next/link";

interface Service {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const drivewayServices: Service[] = [
  {
    title: "Resin Bound Driveways",
    description: "Premium resin bound surfacing with quality aggregates",
    link: "/driveways",
    icon: "🚗",
  },
  {
    title: "Tarmac Driveways",
    description: "Professional tarmac installation and resurfacing",
    link: "/driveways",
    icon: "🛣️",
  },
  {
    title: "Resin Pathways",
    description: "Slip-resistant pathways and access routes",
    link: "/driveways",
    icon: "🛤️",
  },
  {
    title: "Driveway Repairs",
    description: "Expert repairs and resurfacing services",
    link: "/driveways",
    icon: "🔧",
  },
];

interface MegaMenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenuPanel({ isOpen, onClose }: MegaMenuPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full bg-[#FAF5ED] border-b-2 border-gray-300 shadow-2xl z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Driveway Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {drivewayServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  onClick={onClose}
                  className="bg-[#F5E6D3] border border-gray-300 rounded-lg p-4 hover:border-gray-400 hover:bg-[#FAF5ED] transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-lg p-6 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get a Free Quote</h3>
              <p className="text-gray-700 mb-6 text-sm">
                Professional driveway installation with a 15-year guarantee. Contact us today for a free consultation.
              </p>
              <div className="space-y-3 mt-auto">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full bg-[#D4B89A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E8D4B8] transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:07944268119"
                  className="block w-full bg-transparent border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                >
                  Call 07944 268119
                </a>
                <Link
                  href="/driveways"
                  onClick={onClose}
                  className="block w-full text-gray-600 hover:text-gray-900 font-semibold text-center text-sm"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
