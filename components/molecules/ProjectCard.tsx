'use client';

import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  className = '',
  slug,
}) => {
  return (
    <Card className={`overflow-hidden ${className}`} hover>
      {imageUrl && (
        <div className="aspect-video overflow-hidden rounded-lg">
          <CldImage
            alt={title}
            src={imageUrl}
            className="w-full h-full object-cover"
            width="500" // Transform the image: auto-crop to square aspect_ratio
            height="500"
          />
        </div>
      )}
      
      <div className="p-6">
        <Typography variant="h3" size="xl" weight="semibold" className="mb-2">
          {title}
        </Typography>
        
        <Typography variant="p" color="secondary" className="mb-4">
          {description}
        </Typography>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Link
            href={`/projects/${slug}`}
            className="w-full inline-block hover:underline"
          >
              Details
          </Link>
          {/* {liveUrl && (
            <Button variant="outline" size="sm" onClick={() => window.open(liveUrl, '_blank')}>
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" onClick={() => window.open(githubUrl, '_blank')}>
              GitHub
            </Button>
          )} */}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
