import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  bullets: string[];
}

const services: Service[] = [
  {
    title: "Resin Driveways",
    description: "Professional resin bound driveway installation in Bath. Quality aggregates and resin for stunning, durable driveways with a 15-year guarantee.",
    image: "/images/gallery/520462917_724981610452706_4977734472763914770_n.jpg",
    bullets: [
      "15-year guarantee on all installations",
      "Permeable and environmentally friendly",
      "Wide range of colors and finishes available"
    ],
  },
  {
    title: "Landscaping",
    description: "Complete garden design and landscaping services in Bath. Transform your outdoor space with expert design, planting, and hardscaping.",
    image: "/images/gallery/537569546_754472764170257_7562291006898665826_n (1).jpg",
    bullets: [
      "Full garden design and planning",
      "Hardscaping and softscaping services",
      "Sustainable and wildlife-friendly designs"
    ],
  },
  {
    title: "Tarmac & Pathways",
    description: "Professional tarmac services and slip-resistant pathways in Bath. Quality installation and repairs for all property types.",
    image: "/images/gallery/594132339_839910372293162_5910545460222262064_n.jpg",
    bullets: [
      "Slip-resistant surface options",
      "Professional repairs and resurfacing",
      "Suitable for all property types"
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-8 sm:py-12 bg-[#FAF5ED]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
            OUR <span className="text-[#D4B89A]">SERVICES</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our installers have years of combined industry experience and will always go the extra mile to ensure all of your requirements are met.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-300 hover:border-gray-400 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  {service.title === "Resin Driveways" && (
                    <div className="flex items-center gap-1 bg-[#D4B89A]/10 px-3 py-1 rounded-full border border-[#D4B89A]/30">
                      <svg className="w-4 h-4 text-[#D4B89A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-xs font-semibold text-[#D4B89A]">15-Year Guarantee</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#D4B89A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
