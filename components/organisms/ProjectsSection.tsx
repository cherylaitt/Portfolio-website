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
      description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
      imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758464324/home-hero-banner_i85a2z.png',
      liveUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'Preface Admin Portal',
      slug: 'preface-admin-portal',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'jQuery', 'Sidekiq', 'Stripe', 'Heroku'],
      imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465036/admin-portal-happening-list-page_khrowp.png',
      liveUrl: 'https://example.com',
    },
    {
      id: '3',
      title: 'Preface Mobile App',
      slug: 'preface-mobile-app',
      description: 'A beautiful weather dashboard that displays current weather conditions and forecasts with interactive maps and charts.',
      technologies: ['React Native', 'Expo', 'Typescript', 'Stripe', 'Eats365'],
      imageUrl: 'https://res.cloudinary.com/dbfuydrg0/image/upload/v1758465821/papp-google-listing_vaxewq.png',
      liveUrl: 'https://example.com',
    },
    {
      id: '4',
      title: 'Preface Customer Portal',
      slug: 'preface-customer-portal',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      technologies: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Stripe'],
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
