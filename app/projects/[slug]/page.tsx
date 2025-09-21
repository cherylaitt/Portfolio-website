'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';
import Typography from '../../../components/atoms/Typography';
import Button from '../../../components/atoms/Button';
import Badge from '../../../components/atoms/Badge';
import Card from '../../../components/atoms/Card';
import ImageCarousel from '../../../components/molecules/ImageCarousel';
import VideoSection from '../../../components/molecules/VideoSection';
import FeatureImageGallery from '../../../components/molecules/FeatureImageGallery';
import Link from 'next/link';

interface FeatureData {
  title: string;
  description: string;
  detailedDescription: string;
  images: string[];
  contributions: string[];
}

interface ProjectData {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  galleryImages: string[];
  videos?: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: FeatureData[];
  challenges: string[];
  solutions: string[];
  duration: string;
  role: string;
}

const projectData: Record<string, ProjectData> = {
  'preface-public-website': {
    id: '1',
    title: 'Preface Public Website',
    slug: 'preface-public-website',
    description: '',
    longDescription: ' Preface is an EdTech company which provides education in 3 aspects: daily latest technology content to promote learning with casual lifestyle, tech education on children, and tech enabling for organisations. This responsive website is to provide a platform for customers to learn about Preface and its products.',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Stripe', 'Vercel'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
    galleryImages: [],
    liveUrl: 'https://preface.ai',
    githubUrl: 'https://github.com/preface',
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
  'preface-admin-portal': {
    id: '2',
    title: 'Preface Admin Portal',
    slug: 'preface-admin-portal',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    longDescription: 'The Preface Admin Portal is a comprehensive backend management system designed to streamline administrative tasks, manage user data, and provide analytics insights. Built with Ruby on Rails, it offers robust functionality for content management and user administration.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'jQuery', 'Sidekiq', 'Stripe', 'Heroku', 'Bootstrap'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
    galleryImages: [],
    liveUrl: 'https://admin.preface.ai',
    githubUrl: 'https://github.com/preface/admin',
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
        detailedDescription: 'Teacher Payment System',
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
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758474760/event-happening-design_cltby2.png'
        ],
        contributions: [
          'Revamped the legacy bootcamp system by new happening model and its dependencies to make it more flexible and scalable',
          'Created new APIs for the public website, customer portal, admin portal and the mobile app.'
        ]
      },
    ],
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
    duration: '8 months',
    role: 'Backend Developer'
  },
  'preface-mobile-app': {
    id: '3',
    title: 'Preface Mobile App',
    slug: 'preface-mobile-app',
    description: 'A beautiful weather dashboard that displays current weather conditions and forecasts with interactive maps and charts.',
    longDescription: 'The Preface Mobile App brings the educational experience to mobile devices, offering students and instructors a seamless way to access courses, submit assignments, and track progress on the go. Built with React Native, it provides a native-like experience across iOS and Android platforms.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Stripe', 'Eats365', 'Firebase', 'Redux'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
    galleryImages: [
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png'
    ],
    videos: [
      'https://res.cloudinary.com/dbfuydrg0/video/upload/v1758466200/preface-mobile-demo_ghi789.mp4'
    ],
    liveUrl: 'https://apps.apple.com/preface',
    githubUrl: 'https://github.com/preface/mobile',
    features: [
      {
        title: 'Cross-Platform',
        description: 'Native compatibility across iOS and Android platforms',
        detailedDescription: 'Built with React Native for true native performance across iOS and Android. Features platform-specific optimizations, native UI components, and seamless integration with device features like camera, GPS, and push notifications.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png'
        ],
        contributions: [
          'True native performance',
          'Platform-specific optimizations',
          'Single codebase for both platforms',
          'Native device feature integration'
        ]
      },
      {
        title: 'Offline Access',
        description: 'Offline content access and synchronization capabilities',
        detailedDescription: 'Advanced offline-first architecture with intelligent caching, background synchronization, and conflict resolution. Users can access course materials, take notes, and complete assignments even without internet connectivity.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png'
        ],
        contributions: [
          'Intelligent content caching',
          'Background synchronization',
          'Conflict resolution system',
          'Seamless online/offline transitions'
        ]
      },
      {
        title: 'Push Notifications',
        description: 'Smart push notifications for course updates and reminders',
        detailedDescription: 'Intelligent notification system with personalized messaging, smart scheduling, and engagement tracking. Features include rich notifications with media, deep linking, and analytics for optimizing user engagement.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png'
        ],
        contributions: [
          'Personalized notification content',
          'Smart delivery scheduling',
          'Rich media notifications',
          'Advanced engagement analytics'
        ]
      },
      {
        title: 'In-App Payments',
        description: 'Seamless in-app payment processing for courses and subscriptions',
        detailedDescription: 'Integrated payment system with support for multiple payment methods, subscription management, and secure transaction processing. Features include Apple Pay, Google Pay, and traditional card payments with PCI compliance.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png'
        ],
        contributions: [
          'Multiple payment method support',
          'Secure transaction processing',
          'Subscription management',
          'PCI compliance and security'
        ]
      },
      {
        title: 'Video Streaming',
        description: 'High-quality video streaming for course content',
        detailedDescription: 'Advanced video streaming with adaptive bitrate, offline downloading, and interactive features. Supports multiple video formats, subtitle integration, and analytics for tracking viewing behavior and engagement.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png'
        ],
        contributions: [
          'Adaptive bitrate streaming',
          'Offline video downloading',
          'Interactive video features',
          'Comprehensive viewing analytics'
        ]
      },
      {
        title: 'Progress Tracking',
        description: 'Comprehensive progress tracking and analytics dashboard',
        detailedDescription: 'Advanced progress tracking with detailed analytics, achievement systems, and personalized learning paths. Features include completion tracking, skill assessments, and detailed reports for learners and instructors.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png'
        ],
        contributions: [
          'Detailed progress analytics',
          'Achievement and badge systems',
          'Personalized learning paths',
          'Comprehensive reporting tools'
        ]
      }
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
    duration: '10 months',
    role: 'Mobile Developer'
  },
  'preface-customer-portal': {
    id: '4',
    title: 'Preface Customer Portal',
    slug: 'preface-customer-portal',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
    longDescription: 'The Preface Customer Portal is a comprehensive platform designed for customers to manage their accounts, access course materials, track progress, and interact with instructors. It provides a personalized learning experience with advanced features for course management and progress tracking.',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Stripe', 'Vercel'],
    imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
    galleryImages: [
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
      'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png'
    ],
    liveUrl: 'https://portal.preface.ai',
    githubUrl: 'https://github.com/preface/customer-portal',
    features: [
      {
        title: 'Personalized Dashboard',
        description: 'Smart dashboard with personalized course recommendations',
        detailedDescription: 'AI-powered dashboard that provides personalized course recommendations based on learning history, preferences, and skill assessments. Features include customizable widgets, quick access to recent activities, and intelligent content curation.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png'
        ],
        contributions: [
          'AI-powered recommendations',
          'Customizable dashboard widgets',
          'Personalized learning paths',
          'Quick access to key features'
        ]
      },
      {
        title: 'Interactive Content',
        description: 'Rich interactive course content with multimedia support',
        detailedDescription: 'Engaging interactive content with embedded videos, simulations, quizzes, and hands-on exercises. Supports multiple content formats including SCORM packages, interactive presentations, and collaborative learning tools.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png'
        ],
        contributions: [
          'Rich multimedia content',
          'Interactive simulations and exercises',
          'SCORM compliance support',
          'Collaborative learning tools'
        ]
      },
      {
        title: 'Assignment System',
        description: 'Complete assignment submission and grading system',
        detailedDescription: 'Comprehensive assignment management system with automated grading, plagiarism detection, and detailed feedback tools. Supports various file formats, peer review functionality, and detailed analytics for instructors.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png'
        ],
        contributions: [
          'Automated grading system',
          'Plagiarism detection',
          'Peer review functionality',
          'Detailed feedback and analytics'
        ]
      },
      {
        title: 'Progress Tracking',
        description: 'Advanced progress tracking with achievement badges',
        detailedDescription: 'Sophisticated progress tracking with gamification elements, achievement badges, and detailed learning analytics. Features include skill mapping, competency tracking, and personalized learning recommendations based on performance.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png'
        ],
        contributions: [
          'Gamification and achievement systems',
          'Detailed learning analytics',
          'Skill mapping and competency tracking',
          'Personalized learning recommendations'
        ]
      },
      {
        title: 'Community Features',
        description: 'Engaging community features and discussion forums',
        detailedDescription: 'Robust community platform with discussion forums, study groups, peer mentoring, and collaborative learning spaces. Features include real-time chat, video conferencing integration, and community moderation tools.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png'
        ],
        contributions: [
          'Discussion forums and study groups',
          'Peer mentoring and collaboration',
          'Real-time chat and video integration',
          'Community moderation tools'
        ]
      },
      {
        title: 'Mobile Responsive',
        description: 'Fully responsive design optimized for all devices',
        detailedDescription: 'Mobile-first responsive design that provides optimal user experience across all devices. Features include touch-optimized interfaces, offline capabilities, and progressive web app (PWA) functionality for native app-like experience.',
        images: [
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
          'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png'
        ],
        contributions: [
          'Touch-optimized interfaces',
          'Offline functionality',
          'Progressive Web App features',
          'Cross-device synchronization'
        ]
      }
    ],
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
    duration: '7 months',
    role: 'Frontend Developer'
  }
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Typography variant="h1" size="4xl" weight="bold" className="mb-4">
            Project Not Found
          </Typography>
          <Typography variant="p" size="lg" color="secondary" className="mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </Typography>
          <Link href="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Button variant="ghost" size="sm">
                ← Back to Portfolio
              </Button>
            </Link>
            <div className="flex space-x-4">
              {project.liveUrl && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Typography variant="h1" size="5xl" weight="bold" className="mb-6">
              {project.title}
            </Typography>
            <Typography variant="p" size="xl" color="secondary" className="mb-8 max-w-4xl mx-auto">
              {project.longDescription}
            </Typography>
            
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <Typography variant="span" size="sm" weight="medium">{project.role}</Typography>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <Typography variant="span" size="sm" weight="medium">{project.duration}</Typography>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <Typography variant="span" size="sm" weight="medium">{project.technologies.length} Technologies</Typography>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden" shadow="lg">
              <CldImage
                alt={project.title}
                src={project.imageUrl}
                className="w-full h-full object-cover"
                width="800"
                height="400"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Typography variant="h2" size="4xl" weight="bold" className="mb-6">
              Key Features & Capabilities
            </Typography>
            <Typography variant="p" size="lg" color="secondary" className="max-w-3xl mx-auto">
              Explore the comprehensive features that make this project stand out and deliver exceptional value to users.
            </Typography>
          </div>

          <div className="space-y-16">
            {project.features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Feature Images */}
                  <FeatureImageGallery 
                    images={feature.images}
                    title={feature.title}
                  />

                  {/* Feature Content */}
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <Typography variant="h3" size="2xl" weight="bold">
                        {feature.title}
                      </Typography>
                    </div>
                    
                    <Typography variant="p" size="lg" color="secondary" className="leading-relaxed mb-6">
                      {feature.detailedDescription}
                    </Typography>
                    
                    <div className="space-y-4">
                      <Typography variant="h4" size="lg" weight="semibold" className="text-green-600 dark:text-green-400">
                        Key Contributions
                      </Typography>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feature.contributions.map((contribution, contributionIndex) => (
                          <div key={contributionIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <Typography variant="span" size="sm" color="secondary">
                              {contribution}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details & Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <Typography variant="h3" size="2xl" weight="bold" className="mb-6 flex items-center">
                <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technology Stack
              </Typography>
              <Typography variant="p" color="secondary" className="mb-6">
                Built with modern, industry-standard technologies for optimal performance and maintainability.
              </Typography>
              <div className="grid grid-cols-2 gap-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <Typography variant="span" weight="medium">{tech}</Typography>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <Typography variant="h3" size="2xl" weight="bold" className="mb-6 flex items-center">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Project Details
              </Typography>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <Typography variant="span" size="sm" color="muted">Role</Typography>
                      <Typography variant="span" weight="semibold" className="block">{project.role}</Typography>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <Typography variant="span" size="sm" color="muted">Duration</Typography>
                      <Typography variant="span" weight="semibold" className="block">{project.duration}</Typography>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <Typography variant="span" size="sm" color="muted">Technologies Used</Typography>
                      <Typography variant="span" weight="semibold" className="block">{project.technologies.length} tools</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Typography variant="h2" size="3xl" weight="bold" className="text-center mb-12">
            Project Gallery
          </Typography>
          <div className="max-w-4xl mx-auto">
            <ImageCarousel 
              images={project.galleryImages}
              title={project.title}
            />
          </div>
        </div>
      </section>

      {/* Project Videos */}
      {project.videos && project.videos.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VideoSection 
              videos={project.videos}
              title={project.title}
            />
          </div>
        </section>
      )}

      {/* Feature Implementation Journey */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Typography variant="h2" size="4xl" weight="bold" className="mb-6">
              Feature Implementation Journey
            </Typography>
            <Typography variant="p" size="lg" color="secondary" className="max-w-3xl mx-auto">
              Discover how complex challenges were transformed into robust solutions, resulting in exceptional features that deliver real value.
            </Typography>
          </div>

          <div className="space-y-12">
            {project.challenges.map((challenge, index) => (
              <Card key={index} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <Typography variant="h3" size="xl" weight="semibold" className="text-red-600 dark:text-red-400">
                        Challenge {index + 1}
                      </Typography>
                    </div>
                    <Typography variant="p" color="secondary" className="leading-relaxed">
                      {challenge}
                    </Typography>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <Typography variant="h3" size="xl" weight="semibold" className="text-green-600 dark:text-green-400">
                        Solution {index + 1}
                      </Typography>
                    </div>
                    <Typography variant="p" color="secondary" className="leading-relaxed">
                      {project.solutions[index]}
                    </Typography>
                    <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                      <Typography variant="span" size="sm" weight="medium" className="text-green-700 dark:text-green-300">
                        Result: Enhanced feature functionality and improved user experience
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <Typography variant="h3" size="2xl" weight="bold" className="text-blue-600 dark:text-blue-400">
                  Feature Impact
                </Typography>
              </div>
              <Typography variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
                Through innovative problem-solving and technical excellence, each feature was carefully crafted to deliver maximum value while maintaining optimal performance and user experience.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Typography variant="h2" size="4xl" weight="bold" className="mb-6">
              Experience These Features Live
            </Typography>
            <Typography variant="p" size="lg" color="secondary" className="max-w-3xl mx-auto mb-8">
              Ready to see these powerful features in action? Explore the live demo or dive into the technical implementation details.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {project.liveUrl && (
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Typography variant="h3" size="xl" weight="semibold" className="mb-4">
                  Live Demo
                </Typography>
                <Typography variant="p" color="secondary" className="mb-6">
                  Experience all the features and capabilities in a real, interactive environment.
                </Typography>
                <Button 
                  variant="primary" 
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  Explore Live Demo
                </Button>
              </Card>
            )}

            {project.githubUrl && (
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <Typography variant="h3" size="xl" weight="semibold" className="mb-4">
                  Source Code
                </Typography>
                <Typography variant="p" color="secondary" className="mb-6">
                  Dive deep into the technical implementation and see how these features were built.
                </Typography>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  View Source Code
                </Button>
              </Card>
            )}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 rounded-full px-6 py-3">
              <Typography variant="span" size="sm" color="muted">
                Want to see more projects?
              </Typography>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}