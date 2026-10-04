export interface FeatureData {
  title: string;
  description: string;
  detailedDescription: string;
  images: string[];
  contributions: string[];
}

export interface ImpactStat {
  value: number;
  suffix?: string;
  label: string;
}

export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  company: string;
  summary: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
  galleryImages: string[];
  videos?: string[];
  liveUrl?: string;
  liveNote?: string;
  githubUrl?: string;
  features: FeatureData[];
  impactStats: ImpactStat[];
  challenges: string[];
  solutions: string[];
  duration: string;
  role: string;
  confidential?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: '5',
    // <!-- TODO: USER INPUT NEEDED: confirm project naming (brief suggested "BDO M&A Audit Automation Platform"; resume describes tax-department document extraction) -->
    title: 'BDO AI Document Extraction & Validation Platform',
    slug: 'bdo-document-extraction-platform',
    company: 'BDO Limited',
    summary:
      'AI-powered data extraction feature inside a .NET (C#) admin portal for the tax department, using Vision Language Models to read scanned PDF documents, plus a validation dashboard for auditors.',
    longDescription:
      'At BDO Limited I built a new feature that automates data extraction within a .NET (C#) admin portal used by the tax department. Paper documents submitted as PDFs are read by Vision Language Models (VLM) driven by custom prompt engineering, and a purpose-built validation dashboard lets auditors check the AI-extracted data against the original source documents before it feeds into tax report analysis for client companies.',
    // <!-- TODO: USER INPUT NEEDED: confirm database/other backend tools used -->
    technologies: ['.NET', 'C#', 'Prompt Engineering', 'VLM'],
    // <!-- TODO: USER INPUT NEEDED: add screenshots/demo of validation dashboard (confidentiality permitting — confirm if NDA restricts screenshots) -->
    imageUrl: undefined,
    galleryImages: [],
    features: [
      {
        title: 'AI-Powered Document Extraction',
        description: '',
        detailedDescription:
          'Scanned and paper documents submitted in PDF form are processed by Vision Language Models (VLM). Custom prompt engineering guides the model to extract the structured data the tax department needs, replacing manual data entry within the .NET (C#) admin portal.',
        images: [],
        contributions: [
          'Built the new automated data extraction feature within the .NET (C#) admin portal',
          'Implemented VLM-based extraction for scanned/paper documents submitted as PDFs',
          'Designed custom prompts to extract the required data from the documents',
        ],
      },
      {
        title: 'Validation Dashboard',
        description: '',
        detailedDescription:
          'A custom web-based dashboard for auditors to cross-check AI-extracted data against the original source documents, so every extracted value can be verified before it is used.',
        images: ["https://res.cloudinary.com/dbfuydrg0/image/upload/v1791131899/bdo-data-check-platform_wx32re.png"],
        contributions: [
          'Designed and developed the validation dashboard for auditors',
          'Enabled side-by-side comparison of AI-extracted data with the original source documents',
          'Delivered ongoing system enhancements to the dashboard',
        ],
      },
      {
        title: 'Cross-Department Workflow',
        description: '',
        detailedDescription:
          'The feature connects several teams: the company secretary handles document intake, the tax department runs extraction and validation, and the validated data supports tax report analysis for client companies.',
        images: [],
        contributions: [
          'Coordinated with the company secretary on document intake',
          'Worked with the tax department on extraction and validation requirements',
          'Ensured the extracted data could support tax report analysis for client companies',
        ],
      },
    ],
    // <!-- TODO: USER INPUT NEEDED: add BDO impact metrics if available (e.g. documents processed, time saved) — none are listed on the resume -->
    impactStats: [],
    challenges: [],
    solutions: [],
    duration: 'Jan 2026 – Mar 2026',
    role: 'Programmer',
    confidential: true,
  },
  {
    id: '1',
    title: 'Preface Public Website',
    slug: 'preface-public-website',
    company: 'Preface Technopreneur Limited',
    summary:
      'Responsive public website (TypeScript) showcasing Preface’s vision and products — campaigns, kids & adult education, corporate training and tech content.',
    longDescription: 'Preface is an EdTech company which provides education in 3 aspects: daily latest technology content to promote learning with casual lifestyle, tech education on children, and tech enabling for organisations. This responsive website is to provide a platform for customers to learn about Preface and its products.',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'HTML & CSS', 'Tailwind CSS', 'Material UI', 'Stripe', 'Vercel'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
    galleryImages: [],
    liveUrl: 'https://preface.ai',
    githubUrl: '',
    features: [
      {
        title: 'Just Start Campaign 2025',
        description: '',
        detailedDescription: 'Special events and campaigns are promoted on the website. This Just Start Campaign is a core event in 2025, which is organized by Preface and supported by its partners.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758470489/just-start-banner_ddfdiu.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758470492/just-start-events_ewizez.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758470510/just-start-media_bb1daa.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758470493/just-start-partners_mdn0zk.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758470750/aiq-test_sogowz.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758470751/aiq-test-question_rylsz6.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758470758/aiq-test-final_zhdbvt.png'
        ],
        contributions: [
          'Created AIQ Test to evaluate the AI knowledge of the participants',
          'Enabled sharing of the test results on social media',
          'Created a campaign landing page to promote the event',
          'Integrated with Contentful to manage the content of the events'
        ]
      },
      {
        title: 'Kids and Adults Education & Corporate Training',
        description: 'Kid and Adult Education & Corporate Training',
        detailedDescription: 'Regular bootcamps, seasonal bootcamps and experience days for kids and adults are displayed on the website to promote the education services. Corporate training page is also on the website to promote the corporate training services.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758468964/kid-pst_lkbnlp.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758468852/adult-pst_yael7d.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758471394/kid-pst-2_mgdapr.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758471947/pps_bq4roe.png'
        ],
        contributions: [
          'Updated the UI/UX of the website to make it more engaging and user-friendly with close collaboration with the design team',
          'Integrated with Contentful to manage the content of the courses',
          'Updated the details of the courses based on the business requirements'
        ]
      },
      {
        title: 'Top Tech News and Contents',
        description: 'Top Tech News and Contents',
        detailedDescription: 'One of the core products of Preface is the latest tech news and tech contents. In the public website, the latest tech news and contents are displayed to promote the learning of the customers.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758468868/top-tech-news_aigkz0.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758472257/blog-website_vmov7u.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758471948/content-creation-steps_ychxki.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758471952/content-creation-with-AI_mbslmv.png'
        ],
        contributions: [
          'Collaborated with the content team to come up with the top tech news section in the homepage',
          'Created a blog website to display the latest tech news and contents',
          'Integrated with Contentful to manage the content of the blog',
          'Created an interactive page to describe the content creation workflow of Preface'
        ]
      },
    ],
    impactStats: [],
    challenges: [
      'Implementing complex state management across multiple components',
      'Optimizing performance for large datasets',
      'Ensuring cross-browser compatibility',
      'Integrating third-party payment services securely'
    ],
    solutions: [
      'Used React Context and custom hooks for state management',
      'Implemented code splitting and lazy loading',
      'Comprehensive testing across different browsers',
      'Followed security best practices for payment integration'
    ],
    duration: '3 years',
    role: 'Full-Stack Developer'
  },
  {
    id: '2',
    title: 'Preface Admin Portal',
    slug: 'preface-admin-portal',
    company: 'Preface Technopreneur Limited',
    summary:
      'Ruby on Rails + PostgreSQL admin portal that automated class and order management, and a teacher payment system paying 500+ tutors accurately every month.',
    longDescription: 'The Preface Admin Portal is a comprehensive backend management system designed to streamline administrative tasks, manage user data, and provide analytics insights. Built with Ruby on Rails, it offers robust functionality for content management and user administration.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'jQuery', 'HTML & CSS', 'Sidekiq', 'Stripe', 'Heroku', 'Devise'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
    galleryImages: [],
    liveUrl: 'https://portal.preface.ai',
    liveNote: 'This is an internal staff portal, so only the sign-in page is publicly visible.',
    githubUrl: '',
    features: [
      {
        title: 'Support of Admin Operations',
        description: 'Support of Admin Operations',
        detailedDescription: 'Happenings (1-on-1 classes, B2C & B2B bootcamps, Events) Management, User Management, Payment Management, etc.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758473188/happening-listing_xwkjlk.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758473510/bulk-create-happenings_pqtahv.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758473191/create-user_nibpd7.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758473513/voucher-list_ad8euf.png'
        ],
        contributions: [
          'Revamped the data structure of the happenings to make it more flexible and scalable',
          'Supported the admin to perform operations of managing the happenings, user management, payment management, etc.',
        ]
      },
      {
        title: 'Teacher Payment System',
        description: 'Teacher Payment System',
        detailedDescription: 'Working with the finance team, I transformed a disorganised salary payment process into accurate monthly processing for 500+ tutors.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758473198/nomad-payment-listing_jnseec.png'
        ],
        contributions: [
          'Understood the pain points of the finance team and provided solutions to automate the payment system',
          'Implemented the payment system to support the teacher payment',
          'Supported the admin to perform operations of managing the teacher payment'
        ]
      },
      {
        title: 'Backend system for public website, customer portal, admin portal and the mobile app',
        description: 'Backend system for public website, customer portal, admin portal and the mobile app',
        detailedDescription: 'This project is a backend system. It provides APIs for the public website, customer portal, admin portal and the mobile app.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758474404/legacy-bootcamp-revamp_yqikyv.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758474756/invitation-code-design_kmdvn8.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758474760/event-happening-design_cltby2.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476261/api-doc_mqpvyi.png'
        ],
        contributions: [
          'Revamped the legacy bootcamp system by new happening model and its dependencies to make it more flexible and scalable',
          'Created new APIs for the public website, customer portal, admin portal and the mobile app.'
        ]
      },
    ],
    impactStats: [{ value: 500, suffix: '+', label: 'tutors paid accurately every month' }],
    challenges: [
      'Handling large datasets efficiently',
      'Implementing real-time updates without performance issues',
      'Managing complex user permissions and roles',
      'Ensuring data security and compliance'
    ],
    solutions: [
      'Implemented database indexing and query optimization',
      'Used WebSockets for real-time updates',
      'Created a flexible permission system',
      'Applied encryption and security best practices'
    ],
    duration: '3 years',
    role: 'Full Stack Developer'
  },
  {
    id: '3',
    title: 'Preface Mobile App',
    slug: 'preface-mobile-app',
    company: 'Preface Technopreneur Limited',
    summary:
      'React Native app built from scratch for coffee ordering, daily tech learning and event sign-up — launched in 3 months and reaching 200+ active users.',
    longDescription: 'The Preface Mobile App combines coffee ordering, daily tech learning and event sign-up in one React Native app for iOS and Android. Initial version built and shipped within 3 months; the app remained in active development for over 10 months with ongoing feature additions and maintenance.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Stripe', 'Eats365', 'Contentful'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
    galleryImages: [
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png'
    ],
    videos: [
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759252810/apply-voucher-to-cart_owkucd.mov',
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759254120/play-techbites-from-carousel_lylld0.mp4',
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759254223/bridge-between-website-and-app_ktcxw4.mov',
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759254254/Apple-signin_wziotb.mov',
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759254308/iOS_download_and_share_event_ticket_hfmfdr.mov',
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759253090/attendance_taking_psnm77.mp4'
    ],
    liveUrl: 'https://apps.apple.com/us/app/preface-ai/id6541761017',
    githubUrl: '',
    features: [
      {
        title: 'Cross-Platform',
        description: '',
        detailedDescription: 'Deployed on both iOS and Android.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1759253536/Screenshot_2025-10-01_at_1.31.56_AM_o7grun.png'
        ],
        contributions: [
          'Platform-specific optimizations',
          'Single codebase for both platforms'
        ]
      },
      {
        title: 'F&B Ordering System',
        description: '',
        detailedDescription: 'Customers can order food and beverages from the app to learn Tech knowledge with food and coffee in a casual way.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1759252025/Screenshot_20250922_143158_Preface_ux2gxj.jpg',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1759253051/Screenshot_20251001_012034_Preface_yr355q.jpg',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1759253045/Screenshot_20251001_012045_Preface_oeaxza.jpg'
        ],
        contributions: [
          'Integrated with Eats365 to manage the food and beverages',
          'Implemented the ordering system to allow the customers to order the food and beverages',
          'Integrated with Stripe to manage the payment of the food and beverages',
          'Implemented the Google Pay and Apple Pay to allow the customers to pay for the food and beverages',
        ]
      },
      {
        title: 'Daily Tech Learning',
        description: '',
        detailedDescription: 'Users can learn the latest tech news and contents daily by watching the techbites videos and reading the techbites articles.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465360/learn-tab_tre0w6.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1759253039/Screenshot_20251001_012108_Preface_utbx66.jpg',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1759253773/Screenshot_20251001_012116_Preface_mhv3uw.jpg'
        ],
        contributions: [
          'Integrated with Contentful to manage the content of the techbites videos and articles',
          'Implemented the video playing feature to play the techbites videos',
          'Implemented the article reading feature to read the techbites articles',
        ]
      },
    ],
    impactStats: [
      { value: 200, suffix: '+', label: 'active users' },
      { value: 3, label: 'months from scratch to launch' },
      { value: 10, suffix: '+', label: 'months of active development' },
    ],
    challenges: [
      'Ensuring consistent UI across different screen sizes',
      'Managing offline data synchronization',
      'Optimizing video streaming performance',
      'Handling different device capabilities'
    ],
    solutions: [
      'Used responsive design principles and flexible layouts',
      'Implemented local storage with sync mechanisms',
      'Optimized video compression and streaming',
      'Created device-specific feature detection'
    ],
    duration: '3 months to launch · 10+ months active development',
    role: 'Mobile Developer'
  },
  {
    id: '4',
    title: 'Preface Customer Portal',
    slug: 'preface-customer-portal',
    company: 'Preface Technopreneur Limited',
    summary:
      'React.js / Next.js customer service portal — subscriptions, payment links and class scheduling — supported and enhanced for 20,000+ active users.',
    longDescription: 'The Preface Customer Portal is a comprehensive platform designed for customers to manage their accounts, access course materials, track progress, and interact with instructors. I provided post-implementation support and enhancements for the portal, which serves 20,000+ active users.',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Stripe', 'Vercel', 'Contentful'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
    galleryImages: [
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png'
    ],
    videos: [
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759249525/series-bundle-payment-link_nnmfiy.mov',
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1759249908/2023-09-09_23-14-42_mpqwip.mp4'
    ],
    liveUrl: 'https://app.preface.ai/checkout/kids-seasonal-camp-2025-26?lang=en-GB',
    liveNote: 'The link opens a live payment-link checkout page; account features such as subscriptions and scheduling require a customer login.',
    githubUrl: '',
    features: [
      {
        title: 'Techbites Subscription',
        description: 'Techbites Subscription',
        detailedDescription: 'Techbites Subscription',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476150/subscription-list_hfleh3.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476143/stripe-payment_puvq1q.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476150/subscription-receipt_lvi8jq.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476163/techbites-video_eaysgm.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476140/user-journey_bqjsmb.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476141/subscription-bug-bash_ahtnlm.png'
        ],
        contributions: [
          'Implemented the subscription system to support the Techbites subscription',
          'Integrated with Stripe subscription to the backend payment gateway to support the payment',
          'Supported the user to manage their subscription and watch the videos',
          'Carried out Testing and Bug bash to fix the issues of the subscription system',
          'Collaborated with the content team for the ideas of the features of the subscription system'
        ]
      },
      {
        title: 'Payment Link and Scheduling System',
        description: '',
        detailedDescription: 'Payment Link for customers to buy the courses & Scheduling System for customers to schedule the classes.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758476641/payment-link-1_pir1yb.png'
        ],
        contributions: [
          'Built the dynamic payment links for packages of regular bootcamps, seasonal bootcamps, and special campaigns based on the business selling strategies',
          'Built the scheduling system for customers to schedule the classes',
          'Integrated with the backend payment gateway to support the payment',
          'Supported the user to manage their schedule and classes',
          'Carried out Testing and Bug bash to fix the issues of the scheduling system',
          'Tech support for the customers during the campaigns'
        ]
      },
    ],
    impactStats: [{ value: 20000, suffix: '+', label: 'active users supported' }],
    challenges: [
      'Creating an intuitive user interface for complex functionality',
      'Implementing real-time collaboration features',
      'Managing large amounts of user-generated content',
      'Ensuring scalability with growing user base'
    ],
    solutions: [
      'Conducted user research and iterative design improvements',
      'Used WebSocket connections for real-time features',
      'Implemented efficient content management systems',
      'Applied microservices architecture for scalability'
    ],
    duration: '3 years',
    role: 'Full Stack Developer'
  },
];

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug);
}
