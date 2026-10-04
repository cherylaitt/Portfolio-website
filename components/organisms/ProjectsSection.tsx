import React from 'react';
import Typography from '../atoms/Typography';
import ProjectCard from '../molecules/ProjectCard';
import Reveal from '../motion/Reveal';
import { projects } from '../../lib/projects';
import { profile } from '../../lib/profile';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  return (
    <section id="projects" className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <Typography variant="h2" size="4xl" weight="bold" className="mb-4">
            My Projects
          </Typography>
          <Typography variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
            Production products I&apos;ve built and maintained — from AI document extraction at BDO
            to web, admin and mobile platforms at Preface.
          </Typography>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              company={project.company}
              description={project.summary}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              highlight={project.impactStats[0]}
              slug={project.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            View More on GitHub
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
