'use client';

import React from 'react';
import { m, type Variants } from 'framer-motion';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import { DownloadIcon, GitHubIcon, LinkedInIcon } from '../atoms/SocialIcons';
import CountUp from '../motion/CountUp';
import { heroStats, profile } from '../../lib/profile';

interface HeroProps {
  className?: string;
  resumeAvailable?: boolean;
}

const headline: { text: string; accent?: boolean }[] = [
  { text: 'Hi,' },
  { text: 'I’m' },
  { text: 'Cheryl', accent: true },
  { text: 'Lai', accent: true },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const, delay },
});

const Hero: React.FC<HeroProps> = ({ className = '', resumeAvailable = false }) => {
  return (
    <section
      id="home"
      className={`relative isolate overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 ${className}`}
    >
      <div aria-hidden="true" className="hero-mesh pointer-events-none absolute inset-0 -z-10">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <m.div className="mb-8" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }}>
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">{profile.initials}</span>
              </div>
            </div>
          </m.div>

          <m.h1
            className="mb-6 text-5xl font-bold text-gray-900 dark:text-white"
            variants={container}
            initial="hidden"
            animate="visible"
            aria-label={`Hi, I’m ${profile.displayName}`}
          >
            {headline.map((w, i) => (
              <m.span
                key={i}
                variants={word}
                aria-hidden="true"
                className={`inline-block mr-[0.25em] last:mr-0 ${
                  w.accent ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : ''
                }`}
              >
                {w.text}
              </m.span>
            ))}
          </m.h1>

          <m.div {...fadeUp(0.5)}>
            <Typography variant="h2" size="2xl" weight="medium" color="secondary" className="mb-8">
              {profile.title}
            </Typography>
          </m.div>

          <Typography variant="p" size="lg" color="secondary" className="mb-12 max-w-3xl mx-auto leading-relaxed">
            {profile.heroSummary}
          </Typography>

          <m.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" {...fadeUp(0.65)}>
            <Button variant="primary" size="lg" href="#projects">
              View My Work
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Get In Touch
            </Button>
            {resumeAvailable && (
              <Button variant="ghost" size="lg" href={profile.resumePath} download>
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            )}
          </m.div>

          <m.dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4" {...fadeUp(0.8)}>
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/60 dark:border-gray-700 px-4 py-5"
              >
                <dt className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</dt>
                <dd className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </m.dl>

          <m.div className="mt-12 flex justify-center space-x-6" {...fadeUp(0.95)}>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <GitHubIcon />
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <LinkedInIcon />
            </a>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
