interface Review {
  author: string;
  role?: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    author: "JAMESON MOLA",
    role: "PROJECT MANAGER IZEO CONSTRUCTION",
    text: "I've worked with brad and his team on multiple projects including high-end porcelain patios, landscaping and resin driveways. The professionalism he brings in labour management, eye for detail and quality of work adds great value to our clients projects.",
    rating: 5,
  },
  {
    author: "RUSSELL HODGES",
    text: "I commissioned Brad from the Bath Resin company to renew my driveway. The drive was previously broken, 600x600 slabs that were also poorly laid. We arranged for Brad to carry out the work whilst I was away on holiday. I am extremely impressed with the end result. All of the work was completed whilst I was away, and I returned to a fantastic new resin driveway. I would highly recommend Brad and his team at the Bath Resin Company, they produce top quality work.",
    rating: 5,
  },
  {
    author: "MICHELLE OAKLEY",
    text: "Just wanted to say how delighted we are with our wrap around patio. It wasn't an easy job to landscape, install the correct drainage and ensure symmetry with the tiles inside the house but Bath Resin nailed it. Brad is meticulous with the fine detail and the patio is perfect. It is always one of the first things people compliment when visiting out home.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="py-8 sm:py-12 bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#D4B89A]">REVIEWS</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See what our customers say about our work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#D4B89A] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <div className="flex-grow mb-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  &quot;{review.text}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {review.author}
                </h3>
                {review.role && (
                  <p className="text-sm text-gray-500">{review.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
