'use client';

import React from 'react';
import Typography from '../atoms/Typography';
import ProjectCard from '../molecules/ProjectCard';

interface Project {
  id: string;
  title: string;
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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      imageUrl: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      imageUrl: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather conditions and forecasts with interactive maps and charts.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Vite', 'CSS3'],
      imageUrl: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      imageUrl: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
    },
    {
      id: '5',
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard for scheduling posts, analyzing metrics, and managing multiple accounts.',
      technologies: ['Angular', 'Express.js', 'MongoDB', 'JWT', 'Chart.js'],
      imageUrl: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
    },
    {
      id: '6',
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness tracking application with workout planning, progress tracking, and social features.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Native Base'],
      imageUrl: '/api/placeholder/600/400',
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
