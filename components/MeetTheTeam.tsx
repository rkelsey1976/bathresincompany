import Image from "next/image";

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Brad",
      role: "Founder & Lead Installer",
      description: "With over 20 years of experience, Brad brings meticulous attention to detail and a passion for creating beautiful outdoor spaces.",
      image: "/images/gallery/520462917_724981610452706_4977734472763914770_n.jpg",
    },
    {
      name: "Team Member",
      role: "Resin Specialist",
      description: "Expert in resin bound surfacing with City & Guilds certification, ensuring every project meets the highest standards.",
      image: "/images/gallery/534684338_748840368066830_3949569465307143283_n.jpg",
    },
    {
      name: "Team Member",
      role: "Landscaping Expert",
      description: "Specializing in garden design and transformation, bringing creativity and expertise to every landscaping project.",
      image: "/images/gallery/537569546_754472764170257_7562291006898665826_n (1).jpg",
    },
  ];

  return (
    <section id="team" className="py-8 sm:py-12 bg-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 about-texture opacity-20 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Meet the <span className="text-[#D4B89A]">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced and qualified team is dedicated to delivering exceptional results on every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden border-2 border-gray-300 hover:border-[#D4B89A] transition-all hover:shadow-2xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#D4B89A] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-2 border-gray-300 max-w-3xl">
              <p className="text-gray-700 text-lg mb-4">
                <strong className="text-gray-900">Family-Run Excellence</strong>
              </p>
              <p className="text-gray-600">
                Three generations of experience, combined with industry-leading qualifications, ensure every project is completed to the highest standard. Our team is fully insured, NVQ qualified, and committed to delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
