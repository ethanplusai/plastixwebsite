export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  challenges: string[];
  solutions: string[];
  content: string;
  relatedServices: string[];
}

export const industries: Industry[] = [
  {
    slug: 'plastic-surgery',
    title: 'Marketing for Plastic Surgeons',
    shortTitle: 'Plastic Surgery',
    description: 'Comprehensive marketing solutions designed specifically for plastic surgery practices.',
    metaDescription: 'Marketing services for plastic surgeons. SEO, content marketing, lead generation, and digital advertising strategies that grow your plastic surgery practice.',
    heroHeadline: 'Grow Your Plastic Surgery Practice',
    heroSubheadline: 'Proven marketing strategies that deliver new surgical patients and build your reputation.',
    challenges: [
      'High competition for surgical keywords',
      'Long patient decision cycles',
      'Building trust before consultation',
      'Differentiating from competitors',
      'Attracting high-value surgical patients'
    ],
    solutions: [
      'SEO strategies targeting surgical procedures',
      'Content marketing that educates and builds trust',
      'Patient testimonial and before/after campaigns',
      'Reputation management and review generation',
      'Targeted advertising to qualified prospects'
    ],
    content: `Plastic surgery practices face unique marketing challenges. Patients considering surgical procedures conduct extensive research, compare multiple surgeons, and take months to make decisions. Your marketing must build trust, demonstrate expertise, and stay top-of-mind throughout this journey.

At Plastix Marketing, we specialize exclusively in marketing for aesthetic practices. Our team understands the nuances of promoting surgical procedures, from rhinoplasty to mommy makeovers. We know what patients are searching for, what concerns they have, and how to position your practice as the obvious choice.

Our comprehensive approach combines SEO dominance, compelling content, strategic advertising, and marketing automation to create a patient acquisition engine for your practice. We've helped plastic surgeons achieve 400% increases in website traffic, 805+ new leads per month, and significant growth in surgical consultations.`,
    relatedServices: ['seo', 'content-marketing', 'lead-generation', 'digital-advertising', 'web-design']
  },
  {
    slug: 'medical-spa',
    title: 'Marketing for Medical Spas',
    shortTitle: 'Medical Spa',
    description: 'Marketing strategies that drive patient traffic and build loyalty for medical spa practices.',
    metaDescription: 'Medical spa marketing services. Content marketing, marketing automation, SEO, and lead generation strategies designed specifically for med spa practices.',
    heroHeadline: 'Grow Your Medical Spa',
    heroSubheadline: 'Content marketing and automation strategies that build a loyal patient base.',
    challenges: [
      'Competition from day spas and salons',
      'Educating patients on medical-grade treatments',
      'Building recurring patient relationships',
      'Managing multiple service promotions',
      'Standing out in crowded markets'
    ],
    solutions: [
      'Content marketing that differentiates medical services',
      'Marketing automation for patient retention',
      'Membership program promotion',
      'Social media showcasing real results',
      'Email marketing for repeat visits'
    ],
    content: `Medical spas operate in a unique space between medical practices and traditional spas. Your marketing must communicate the medical-grade quality of your treatments while creating the aspirational, lifestyle appeal that draws patients in.

Plastix Marketing understands the med spa business model. We know that patient retention and repeat visits are as important as new patient acquisition. Our strategies focus on building a loyal patient base that returns regularly for treatments and refers friends.

From content marketing that educates patients on the benefits of medical-grade treatments to automation that nurtures relationships and drives repeat bookings, we create comprehensive marketing systems for med spa growth. Our clients see significant increases in new patient inquiries, improved retention rates, and higher patient lifetime values.`,
    relatedServices: ['content-marketing', 'marketing-automation', 'social-media', 'seo', 'lead-generation']
  },
  {
    slug: 'coolsculpting',
    title: 'Marketing for CoolSculpting Practices',
    shortTitle: 'CoolSculpting',
    description: 'Specialized marketing strategies that drive leads for CoolSculpting and body contouring services.',
    metaDescription: 'CoolSculpting marketing services. SEO, sales enablement, and marketing technology strategies that generate leads for body contouring practices.',
    heroHeadline: 'Grow Your CoolSculpting Practice',
    heroSubheadline: 'SEO, marketing technology, and sales strategy for body contouring success.',
    challenges: [
      'Explaining the CoolSculpting difference',
      'Competing with other body contouring options',
      'Converting consultations to treatments',
      'Pricing objection handling',
      'Building before/after galleries'
    ],
    solutions: [
      'SEO targeting body contouring searches',
      'Educational content on CoolSculpting technology',
      'Sales enablement for consultation conversion',
      'Strategic use of before/after results',
      'Promotional campaign management'
    ],
    content: `CoolSculpting and body contouring represent a significant opportunity for aesthetic practices, but success requires specialized marketing and sales expertise. Patients considering CoolSculpting have specific questions about results, timeline, and how it compares to alternatives.

Our CoolSculpting marketing strategies address these concerns head-on. We create educational content that explains the technology, showcases real results, and positions your practice as the expert choice for body contouring.

Beyond lead generation, we focus heavily on sales enablement—helping your consultation team convert interested prospects into treatments. Our comprehensive approach to CoolSculpting marketing includes SEO, content, advertising, and sales support to maximize your investment in the technology.`,
    relatedServices: ['seo', 'sales-enablement', 'content-marketing', 'digital-advertising', 'lead-generation']
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map(i => i.slug);
}

