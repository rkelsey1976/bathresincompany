export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bathresincompany.co.uk/#organization",
    "name": "Bath Resin Company",
    "alternateName": ["BR Landscapes", "BR/Bath Resin Company"],
    "legalName": "Bath Resin Company",
    "description": "Family-run resin driveway and landscaping specialists in Bath, Somerset. Over 20 years of experience creating beautiful, lasting outdoor spaces. Professional resin bound driveways, tarmac services, garden transformations, and landscaping. NVQ qualified, CPCS certified, City & Guilds trained, SWQR streetworks approved.",
    "url": "https://bathresincompany.co.uk",
    "telephone": "07944268119",
    "email": "Bathresincompany@gmail.com",
    "foundingDate": "2004",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5-10"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bath",
      "addressRegion": "Somerset",
      "postalCode": "BA1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.3758",
      "longitude": "-2.3599"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Resin Driveway and Landscaping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Resin Bound Driveways",
            "description": "Premium resin bound driveway installation with 15-year guarantee"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tarmac Driveways",
            "description": "Professional tarmac installation and resurfacing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping Services",
            "description": "Complete garden design and landscaping transformations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Resin Pathways",
            "description": "Slip-resistant pathways and access routes"
          }
        }
      ]
    },
    "knowsAbout": [
      "Resin Bound Surfacing",
      "Driveway Installation",
      "Garden Design",
      "Landscaping",
      "Tarmac Services",
      "Groundworks",
      "Pathway Construction"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Bath"
      },
      {
        "@type": "City",
        "name": "Bristol"
      },
      {
        "@type": "City",
        "name": "Chippenham"
      },
      {
        "@type": "City",
        "name": "Trowbridge"
      },
      {
        "@type": "City",
        "name": "Frome"
      },
      {
        "@type": "City",
        "name": "Bradford-on-Avon"
      },
      {
        "@type": "City",
        "name": "Melksham"
      },
      {
        "@type": "City",
        "name": "Warminster"
      },
      {
        "@type": "City",
        "name": "Westbury"
      },
      {
        "@type": "City",
        "name": "Corsham"
      },
      {
        "@type": "City",
        "name": "Keynsham"
      },
      {
        "@type": "City",
        "name": "Midsomer Norton"
      },
      {
        "@type": "City",
        "name": "Radstock"
      },
      {
        "@type": "City",
        "name": "Wells"
      },
      {
        "@type": "City",
        "name": "Glastonbury"
      },
      {
        "@type": "City",
        "name": "Shepton Mallet"
      },
      {
        "@type": "City",
        "name": "Devizes"
      },
      {
        "@type": "City",
        "name": "Calne"
      },
      {
        "@type": "City",
        "name": "Swindon"
      },
      {
        "@type": "State",
        "name": "Somerset"
      },
      {
        "@type": "State",
        "name": "Wiltshire"
      }
    ],
    "serviceType": [
      "Resin Driveways",
      "Resin Bound Driveways",
      "Landscaping",
      "Garden Transformations",
      "Tarmac Services",
      "Pathways",
      "Driveway Repairs",
      "Garden Design",
      "Patio Installation"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Bank Transfer, Card Payment",
    "currenciesAccepted": "GBP",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "NVQ Groundworks and Compacting"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "CPCS Machine Qualifications"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "City and Guilds Resin Bound Surfacing"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "SWQR Streetworks"
      }
    ],
    "award": "15-Year Guarantee on Resin Driveways",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jameson Mola"
        },
        "reviewBody": "I've worked with brad and his team on multiple projects including high-end porcelain patios, landscaping and resin driveways. The professionalism he brings in labour management, eye for detail and quality of work adds great value to our clients projects.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Russell Hodges"
        },
        "reviewBody": "I commissioned Brad from the Bath Resin company to renew my driveway. The drive was previously broken, 600x600 slabs that were also poorly laid. We arranged for Brad to carry out the work whilst I was away on holiday. I am extremely impressed with the end result. All of the work was completed whilst I was away, and I returned to a fantastic new resin driveway. I would highly recommend Brad and his team at the Bath Resin Company, they produce top quality work.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michelle Oakley"
        },
        "reviewBody": "Just wanted to say how delighted we are with our wrap around patio. It wasn't an easy job to landscape, install the correct drainage and ensure symmetry with the tiles inside the house but Bath Resin nailed it. Brad is meticulous with the fine detail and the patio is perfect. It is always one of the first things people compliment when visiting out home.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
