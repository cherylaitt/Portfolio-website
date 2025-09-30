'use client';

import React from 'react';
import Typography from '../atoms/Typography';
import ProjectCard from '../molecules/ProjectCard';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Preface Public Website',
      slug: 'preface-public-website',
      description: 'Preface is an EdTech company which provides education in 3 aspects: daily latest technology content to promote learning with casual lifestyle, tech education on children, and tech enabling for organisations. This responsive website is to provide a platform for customers to learn about Preface and its products.',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'HTML & CSS', 'Tailwind CSS', 'Material UI', 'Stripe', 'Vercel'],
      imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
      liveUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'Preface Admin Portal',
      slug: 'preface-admin-portal',
      description: 'The Preface Admin Portal is a comprehensive backend management system designed to streamline administrative tasks, manage user data, and provide analytics insights. Built with Ruby on Rails, it offers robust functionality for content management and user administration.',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'jQuery', 'HTML & CSS', 'Sidekiq', 'Stripe', 'Heroku', 'Devise'],
      imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
      liveUrl: 'https://example.com',
    },
    {
      id: '3',
      title: 'Preface Mobile App',
      slug: 'preface-mobile-app',
      description: 'The Preface Mobile App brings the educational experience to mobile devices, offering students and instructors a seamless way to access courses, submit assignments, and track progress on the go. Built with React Native, it provides a native-like experience across iOS and Android platforms.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Stripe', 'Eats365', 'Contentful'],
      imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
      liveUrl: 'https://example.com',
    },
    {
      id: '4',
      title: 'Preface Customer Portal',
      slug: 'preface-customer-portal',
      description: 'The Preface Customer Portal is a comprehensive platform designed for customers to manage their accounts, access course materials, track progress, and interact with instructors. It provides a personalized learning experience with advanced features for course management and progress tracking.',
      technologies: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Stripe', 'Vercel', 'Contentful'],
      imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465720/customer-portal-login-page_ztcpl8.png',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" size="4xl" weight="bold" className="mb-4">
            My Projects
          </Typography>
          <Typography variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </Typography>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              className="cursor-pointer"
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              slug={project.slug}
            />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <Typography variant="p" size="lg" weight="medium">
              View More on GitHub
            </Typography>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
