export const siteConfig = {
  name: 'Plastix Marketing',
  description: 'The premier marketing agency for plastic surgeons, medical spas, and aesthetic practices. Our proven marketing strategy delivers effective lead generation and tangible results.',
  url: 'https://plastixmarketing.com',
  ogImage: 'https://plastixmarketing.com/images/og-default.jpg',
  phone: '404.737.7673',
  email: 'help@plastixmarketing.com',
  address: {
    city: 'Atlanta',
    state: 'GA',
    country: 'US'
  },
  social: {
    twitter: 'https://twitter.com/plastixmarketing',
    facebook: 'https://facebook.com/plastixmarketing',
    linkedin: 'https://linkedin.com/company/plastixmarketing'
  },
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Grow', href: '/grow' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ],
  footerLinks: {
    solutions: [
      { label: 'Branding', href: '/services/branding' },
      { label: 'Chatbots', href: '/services/chatbots' },
      { label: 'Consulting', href: '/services/consulting' },
      { label: 'Content Marketing', href: '/services/content-marketing' },
      { label: 'CRM Support', href: '/services/crm-support' },
      { label: 'Digital Advertising', href: '/services/digital-advertising' },
      { label: 'Lead Generation', href: '/services/lead-generation' },
      { label: 'Marketing Automation', href: '/services/marketing-automation' },
      { label: 'Sales Enablement', href: '/services/sales-enablement' },
      { label: 'SEM', href: '/services/sem' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Social Media', href: '/services/social-media' },
      { label: 'Video Marketing', href: '/services/video-marketing' },
      { label: 'Web Design', href: '/services/web-design' }
    ],
    specialties: [
      { label: 'Plastic Surgery Marketing', href: '/industries/plastic-surgery' },
      { label: 'Medical Spa Marketing', href: '/industries/medical-spa' },
      { label: 'Coolsculpting Marketing', href: '/industries/coolsculpting' }
    ]
  }
} as const;

export type SiteConfig = typeof siteConfig;

