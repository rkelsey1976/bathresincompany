import { MetadataRoute } from 'next'

const areas = [
  'bath',
  'bristol',
  'chippenham',
  'trowbridge',
  'frome',
  'bradford-on-avon',
  'melksham',
  'warminster',
  'westbury',
  'corsham',
  'keynsham',
  'midsomer-norton',
  'radstock',
  'wells',
  'glastonbury',
  'shepton-mallet',
  'devizes',
  'calne',
  'swindon',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const areaPages = areas.map((area) => ({
    url: `https://bathresincompany.co.uk/areas/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    {
      url: 'https://bathresincompany.co.uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://bathresincompany.co.uk/driveways',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bathresincompany.co.uk/landscaping',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bathresincompany.co.uk/areas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bathresincompany.co.uk/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bathresincompany.co.uk/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://bathresincompany.co.uk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...areaPages,
  ]
}
