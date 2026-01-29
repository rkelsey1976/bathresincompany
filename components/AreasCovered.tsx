import Link from "next/link";

export default function AreasCovered() {
  const areas = [
    { name: "Bath", slug: "bath" },
    { name: "Bristol", slug: "bristol" },
    { name: "Chippenham", slug: "chippenham" },
    { name: "Trowbridge", slug: "trowbridge" },
    { name: "Frome", slug: "frome" },
    { name: "Bradford-on-Avon", slug: "bradford-on-avon" },
    { name: "Melksham", slug: "melksham" },
    { name: "Warminster", slug: "warminster" },
    { name: "Westbury", slug: "westbury" },
    { name: "Corsham", slug: "corsham" },
    { name: "Keynsham", slug: "keynsham" },
    { name: "Midsomer Norton", slug: "midsomer-norton" },
    { name: "Radstock", slug: "radstock" },
    { name: "Wells", slug: "wells" },
    { name: "Glastonbury", slug: "glastonbury" },
    { name: "Shepton Mallet", slug: "shepton-mallet" },
    { name: "Devizes", slug: "devizes" },
    { name: "Calne", slug: "calne" },
    { name: "Swindon", slug: "swindon" },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Areas We <span className="text-[#D4B89A]">Cover</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional landscaping and driveway services across Bath and the surrounding areas
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-2 border-gray-300 mb-8">
            <p className="text-gray-700 text-center mb-6">
              We provide expert landscaping and resin driveway services throughout the following areas:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {areas.map((area, index) => (
                <Link
                  key={index}
                  href={`/areas/${area.slug}`}
                  className="bg-white border border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 hover:bg-gray-50 transition-all block shadow-sm"
                >
                  <span className="text-gray-800 font-semibold">{area.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-gray-600 text-center mt-6 text-sm">
              Don&apos;t see your area? Contact us - we may still be able to help!
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Serving Bath, Somerset, Wiltshire, and surrounding counties
            </p>
            <Link
              href="/contact"
                className="inline-block bg-gradient-to-br from-[#C19A6B] via-[#D4B89A] via-[#E8D4B8] to-[#D4B89A] text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-[#E8D4B8] hover:via-[#F5E6D3] hover:via-[#FAF5ED] hover:to-[#E8D4B8] transition-all duration-300 shadow-2xl hover:shadow-[0_0_35px_rgba(232,212,184,0.8),0_0_15px_rgba(245,230,211,0.6)] hover:scale-110 hover:brightness-110 border-2 border-black/20 hover:border-[#E8D4B8]/60"
            >
              Check if we cover your area
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
