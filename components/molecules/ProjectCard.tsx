'use client';

import React, { useRef } from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import Typography from '../atoms/Typography';
import Badge from '../atoms/Badge';
import type { ImpactStat } from '../../lib/projects';

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  highlight?: ImpactStat;
  className?: string;
  slug: string;
  index?: number;
}

const MAX_TILT = 8;
const spring = { stiffness: 250, damping: 20, mass: 0.5 };

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  company,
  description,
  technologies,
  imageUrl,
  highlight,
  className = '',
  slug,
  index = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (reduceMotion || e.pointerType !== 'mouse') return;
    rotateY.set(((x / rect.width) - 0.5) * 2 * MAX_TILT);
    rotateX.set(((y / rect.height) - 0.5) * -2 * MAX_TILT);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <m.div
      className="h-full"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: (index % 3) * 0.12 }}
    >
      <Link href={`/projects/${slug}`} className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
        <m.div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className={`group relative h-full flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl ${className}`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: 'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(99, 102, 241, 0.16), transparent 45%)' }}
          />

          <div className="aspect-video overflow-hidden rounded-lg">
            {imageUrl ? (
              <CldImage
                alt={title}
                src={imageUrl}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width="500"
                height="500"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium">Internal enterprise tool</span>
              </div>
            )}
          </div>

          <div className="pt-6 flex flex-col flex-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-1">
              {company}
            </span>
            <Typography variant="h3" size="xl" weight="semibold" className="mb-2">
              {title}
            </Typography>

            {highlight && (
              <span className="self-start mb-3 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/40 px-3 py-1 text-xs font-semibold text-green-800 dark:text-green-300">
                {highlight.value.toLocaleString('en-US')}
                {highlight.suffix} {highlight.label}
              </span>
            )}

            <Typography variant="p" color="secondary" className="mb-4">
              {description}
            </Typography>

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <Badge key={tech} variant="primary" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <span className="mt-auto inline-flex items-center font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
              View details
              <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </m.div>
      </Link>
    </m.div>
  );
};

export default ProjectCard;
