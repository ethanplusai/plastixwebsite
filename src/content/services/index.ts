export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  icon?: string;
  features: string[];
  benefits: string[];
  content: string;
}

export const services: Service[] = [
  {
    slug: 'branding',
    title: 'Branding Services for Aesthetic Practices',
    shortTitle: 'Branding',
    description: 'Build a distinctive brand identity that sets your practice apart from competitors.',
    metaDescription: 'Professional branding services for plastic surgeons and medical spas. Create a distinctive brand identity that attracts your ideal patients and builds lasting trust.',
    features: [
      'Logo design and visual identity',
      'Brand messaging and positioning',
      'Brand style guidelines',
      'Marketing collateral design',
      'Patient experience branding'
    ],
    benefits: [
      'Stand out from competitors',
      'Attract higher-value patients',
      'Build instant credibility',
      'Create consistent patient experience'
    ],
    content: `Your brand is more than just a logo—it's the entire experience patients have with your practice. At Plastix Marketing, we help aesthetic practices develop compelling brand identities that resonate with their ideal patients.

Our branding process begins with understanding your practice's unique value proposition, target audience, and competitive landscape. We then develop a comprehensive brand strategy that informs every touchpoint of your patient journey.

From visual identity to brand voice, we ensure consistency across all marketing channels, building the trust and recognition that drives patient loyalty.`
  },
  {
    slug: 'chatbots',
    title: 'Chatbot Solutions for Medical Practices',
    shortTitle: 'Chatbots',
    description: 'Engage website visitors 24/7 with intelligent chatbot solutions that capture leads and answer questions.',
    metaDescription: 'AI-powered chatbot solutions for plastic surgery and medical spa websites. Capture more leads, answer patient questions, and schedule consultations automatically.',
    features: [
      'Custom chatbot development',
      'Lead qualification automation',
      'Appointment scheduling integration',
      'FAQ automation',
      'CRM integration'
    ],
    benefits: [
      '24/7 lead capture',
      'Instant patient engagement',
      'Reduced staff workload',
      'Higher conversion rates'
    ],
    content: `Never miss another lead with intelligent chatbot solutions designed specifically for aesthetic practices. Our chatbots engage website visitors instantly, answer common questions, and guide potential patients toward scheduling consultations.

Unlike generic chatbot solutions, our bots are trained on aesthetic industry terminology and patient concerns. They understand the nuances of plastic surgery and med spa inquiries, providing helpful, accurate responses that build trust.

Integration with your CRM and scheduling systems means leads flow seamlessly into your practice workflow, with automatic follow-up sequences to nurture prospects.`
  },
  {
    slug: 'consulting',
    title: 'Marketing Consulting for Aesthetic Practices',
    shortTitle: 'Consulting',
    description: 'Strategic marketing consulting to optimize your practice growth and patient acquisition.',
    metaDescription: 'Expert marketing consulting for plastic surgeons and medical spas. Get strategic guidance to grow your practice, improve patient acquisition, and maximize ROI.',
    features: [
      'Marketing strategy development',
      'Competitive analysis',
      'Patient journey optimization',
      'Team training and development',
      'Performance audits'
    ],
    benefits: [
      'Expert strategic guidance',
      'Data-driven decisions',
      'Improved marketing ROI',
      'Scalable growth strategies'
    ],
    content: `Sometimes you need an expert perspective to unlock your practice's full potential. Our consulting services provide strategic guidance tailored to the unique challenges and opportunities of aesthetic practices.

We analyze your current marketing efforts, competitive landscape, and growth goals to develop actionable strategies. Whether you need help with patient acquisition, retention, or expanding services, our consultants bring decades of aesthetic industry experience.

Our consulting engagements include hands-on support, team training, and ongoing guidance to ensure successful implementation of recommended strategies.`
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing for Plastic Surgeons & Med Spas',
    shortTitle: 'Content Marketing',
    description: 'Comprehensive content marketing strategies that educate patients and drive organic traffic.',
    metaDescription: 'Content marketing services for plastic surgery practices and medical spas. Professional blog content, eBooks, and educational materials that attract and convert patients.',
    features: [
      'Blog content strategy and writing',
      'eBook and guide creation',
      'Video content planning',
      'Email newsletter content',
      'Social media content'
    ],
    benefits: [
      'Improved search rankings',
      'Established thought leadership',
      'Patient education',
      'Higher quality leads'
    ],
    content: `Content is the foundation of modern marketing. Our content marketing services help aesthetic practices become trusted authorities in their markets through strategic, educational content.

We develop comprehensive content strategies that address your ideal patients' questions and concerns throughout their decision journey. From awareness-stage blog posts to decision-stage procedure guides, every piece of content is designed to move patients closer to booking.

Our team includes writers with deep aesthetic industry expertise, ensuring medically accurate, engaging content that resonates with your target audience.`
  },
  {
    slug: 'crm-support',
    title: 'CRM Support & Implementation',
    shortTitle: 'CRM Support',
    description: 'Optimize your patient relationships with expert CRM setup, customization, and support.',
    metaDescription: 'CRM implementation and support for aesthetic practices. Optimize patient relationships, automate follow-ups, and track your entire patient journey.',
    features: [
      'CRM selection and setup',
      'Custom workflow automation',
      'Lead tracking and scoring',
      'Integration with practice systems',
      'Staff training and support'
    ],
    benefits: [
      'No leads fall through cracks',
      'Automated patient nurturing',
      'Better patient insights',
      'Improved conversion rates'
    ],
    content: `Your CRM should be your practice's command center for patient relationships. We help aesthetic practices implement and optimize CRM systems that drive conversions and improve patient retention.

From initial setup to custom workflow automation, we ensure your CRM works the way your practice works. Lead scoring, automated follow-ups, and detailed tracking give you visibility into every patient touchpoint.

Our ongoing support ensures your team maximizes CRM adoption, with training and optimization to continually improve performance.`
  },
  {
    slug: 'digital-advertising',
    title: 'Digital Advertising for Aesthetic Practices',
    shortTitle: 'Digital Advertising',
    description: 'Targeted digital advertising campaigns that deliver qualified patients to your practice.',
    metaDescription: 'Digital advertising services for plastic surgeons and medical spas. Google Ads, Facebook Ads, and display advertising campaigns that generate qualified patient leads.',
    features: [
      'Google Ads management',
      'Facebook & Instagram advertising',
      'Retargeting campaigns',
      'Display advertising',
      'Campaign optimization'
    ],
    benefits: [
      'Immediate lead generation',
      'Precise audience targeting',
      'Measurable ROI',
      'Scalable patient acquisition'
    ],
    content: `Digital advertising delivers immediate visibility and leads when executed correctly. Our digital advertising services combine aesthetic industry expertise with advanced targeting to maximize your return on ad spend.

We develop comprehensive paid media strategies across Google, Facebook, Instagram, and display networks. Each campaign is optimized for your specific goals, whether that's promoting a new service or filling your surgery schedule.

Continuous optimization based on performance data ensures your advertising budget works harder over time, with detailed reporting so you always know exactly what you're getting.`
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation for Plastic Surgeons & Med Spas',
    shortTitle: 'Lead Generation',
    description: 'Proven lead generation strategies that fill your consultation calendar with qualified patients.',
    metaDescription: 'Lead generation services for aesthetic practices. Our proven strategies deliver hundreds of new patient leads every month to plastic surgery and medical spa practices.',
    features: [
      'Multi-channel lead campaigns',
      'Landing page optimization',
      'Lead magnet development',
      'Conversion rate optimization',
      'Lead nurturing automation'
    ],
    benefits: [
      'Consistent lead flow',
      'Higher quality prospects',
      'Reduced cost per lead',
      'Predictable growth'
    ],
    content: `Lead generation is our specialty. We've helped aesthetic practices generate thousands of qualified patient leads through our proven multi-channel approach.

Our lead generation strategies combine SEO, paid advertising, content marketing, and conversion optimization to create a consistent flow of new patient inquiries. We focus on quality over quantity, ensuring leads match your ideal patient profile.

With average results of 805+ new leads per month for our clients, our track record speaks for itself. Let us build a lead generation engine for your practice.`
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation for Medical Practices',
    shortTitle: 'Marketing Automation',
    description: 'Automate your marketing workflows to nurture leads and retain patients at scale.',
    metaDescription: 'Marketing automation services for plastic surgeons and medical spas. Automate lead nurturing, patient follow-ups, and marketing campaigns for scalable growth.',
    features: [
      'Email automation workflows',
      'Lead nurturing sequences',
      'Patient reactivation campaigns',
      'Review request automation',
      'Birthday and anniversary campaigns'
    ],
    benefits: [
      'Scale without adding staff',
      'Consistent patient communication',
      'Higher patient lifetime value',
      'Improved retention rates'
    ],
    content: `Marketing automation allows your practice to deliver personalized communications at scale. We implement automation strategies that nurture leads, retain patients, and maximize lifetime value.

From initial lead capture through post-procedure follow-up, we create automated workflows that ensure every patient receives the right message at the right time. This consistent communication builds relationships without requiring constant staff attention.

Our automation implementations integrate with your existing systems, creating seamless experiences for both patients and staff.`
  },
  {
    slug: 'sales-enablement',
    title: 'Sales Enablement for Aesthetic Practices',
    shortTitle: 'Sales Enablement',
    description: 'Equip your team with tools and training to convert more consultations into procedures.',
    metaDescription: 'Sales enablement services for plastic surgery practices and medical spas. Training, tools, and processes that help your team close more consultations.',
    features: [
      'Consultation process optimization',
      'Sales training and coaching',
      'Presentation materials',
      'Follow-up process development',
      'Performance tracking'
    ],
    benefits: [
      'Higher consultation conversion',
      'Confident, skilled team',
      'Consistent sales process',
      'Increased revenue per lead'
    ],
    content: `Marketing brings leads to your door—sales enablement helps you close them. Our sales enablement services optimize every aspect of your consultation and conversion process.

We work with your patient coordinators and consultation team to develop processes, scripts, and materials that increase conversion rates. From initial phone call to consultation follow-up, every touchpoint is optimized.

Training and ongoing coaching ensure your team has the skills and confidence to present treatment options effectively and ethically.`
  },
  {
    slug: 'sem',
    title: 'Search Engine Marketing (SEM) for Aesthetic Practices',
    shortTitle: 'SEM',
    description: 'Strategic paid search campaigns that capture patients actively searching for your services.',
    metaDescription: 'SEM services for plastic surgeons and medical spas. Google Ads and Bing Ads campaigns that capture high-intent patients searching for aesthetic procedures.',
    features: [
      'Keyword research and strategy',
      'Campaign structure optimization',
      'Ad copy development',
      'Bid management',
      'Landing page optimization'
    ],
    benefits: [
      'Capture high-intent searches',
      'Immediate visibility',
      'Precise budget control',
      'Measurable results'
    ],
    content: `When patients search for aesthetic procedures, your practice needs to appear. Our SEM services ensure you're visible for the searches that matter most, capturing high-intent patients ready to book.

We develop comprehensive paid search strategies across Google and Bing, targeting procedure-specific keywords in your market. Expert bid management maximizes your visibility while controlling costs.

Continuous optimization based on conversion data improves performance over time, with transparent reporting on every dollar spent.`
  },
  {
    slug: 'seo',
    title: 'SEO for Plastic Surgeons & Medical Spas',
    shortTitle: 'SEO',
    description: 'Dominate search results with comprehensive SEO strategies designed for aesthetic practices.',
    metaDescription: 'SEO services for plastic surgery practices and medical spas. Comprehensive search engine optimization that drives organic traffic and new patient leads.',
    features: [
      'Technical SEO optimization',
      'Local SEO and Google Business',
      'Content strategy and optimization',
      'Link building',
      'Competitor analysis'
    ],
    benefits: [
      'Long-term organic traffic',
      'Reduced cost per acquisition',
      'Established authority',
      'Sustainable growth'
    ],
    content: `SEO is the foundation of sustainable practice growth. Our SEO services help aesthetic practices dominate search results for the procedures and keywords that drive patient inquiries.

We take a comprehensive approach to SEO, addressing technical issues, optimizing content, building authority through links, and maximizing local visibility. Our strategies are designed specifically for the competitive aesthetic market.

With proven results including 400% increases in website traffic and 500,000+ monthly search impressions, our SEO expertise delivers real business results.`
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing for Aesthetic Practices',
    shortTitle: 'Social Media',
    description: 'Build your brand and engage patients through strategic social media marketing.',
    metaDescription: 'Social media marketing for plastic surgeons and medical spas. Strategic content and engagement that builds your brand and attracts new patients.',
    features: [
      'Social media strategy',
      'Content creation and curation',
      'Community management',
      'Influencer partnerships',
      'Social advertising'
    ],
    benefits: [
      'Brand awareness',
      'Patient engagement',
      'Before/after showcases',
      'Trust building'
    ],
    content: `Social media is where aesthetic patients research and make decisions. Our social media marketing services help practices build engaged followings that convert to patients.

We develop platform-specific strategies for Instagram, Facebook, and TikTok, creating content that showcases your work, educates patients, and builds trust. Before-and-after photos, procedure explanations, and practice culture content all play important roles.

Strategic community management ensures you're building relationships, not just posting content.`
  },
  {
    slug: 'video-marketing',
    title: 'Video Marketing for Plastic Surgeons & Med Spas',
    shortTitle: 'Video Marketing',
    description: 'Engage patients with professional video content that showcases your expertise and results.',
    metaDescription: 'Video marketing services for aesthetic practices. Professional video production that showcases your expertise, builds trust, and drives patient conversions.',
    features: [
      'Video strategy development',
      'Professional video production',
      'Patient testimonial videos',
      'Procedure explanation videos',
      'YouTube optimization'
    ],
    benefits: [
      'Build trust quickly',
      'Showcase real results',
      'Improve SEO',
      'Stand out from competitors'
    ],
    content: `Video is the most powerful medium for building trust with potential patients. Our video marketing services help aesthetic practices create compelling video content that converts viewers into consultations.

From patient testimonials to procedure explanations, we develop video strategies that address the questions and concerns of your target patients. Professional production ensures your practice is represented at its best.

YouTube optimization and video distribution strategies ensure your content reaches the right audience across platforms.`
  },
  {
    slug: 'web-design',
    title: 'Web Design for Plastic Surgeons & Medical Spas',
    shortTitle: 'Web Design',
    description: 'Beautiful, high-converting websites designed specifically for aesthetic practices.',
    metaDescription: 'Web design services for plastic surgery practices and medical spas. Beautiful, fast, SEO-optimized websites that convert visitors into patients.',
    features: [
      'Custom website design',
      'Mobile-first development',
      'SEO-optimized architecture',
      'Conversion rate optimization',
      'Content management systems'
    ],
    benefits: [
      'Professional first impression',
      'Higher conversion rates',
      'Better SEO performance',
      'Easy content updates'
    ],
    content: `Your website is often the first impression potential patients have of your practice. Our web design services create beautiful, high-performing websites that reflect the quality of your work.

We design with conversion in mind, creating clear patient journeys that guide visitors toward booking consultations. Mobile-first development ensures a great experience on any device.

Built on modern technology with SEO best practices, our websites load fast and rank well, driving more traffic and converting more visitors into patients.`
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug);
}

