'use client';

import React from 'react';
import { m, type Variants } from 'framer-motion';
import Typography from '../atoms/Typography';
import { techIcons, type TechIcon } from '../../lib/techIcons';

const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function TechLogo({ icon }: { icon: TechIcon }) {
  const glow = icon.hex ? `${icon.hex}99` : 'rgba(59,130,246,0.6)';
  return (
    <m.li variants={item} className="group relative flex-shrink-0 px-5 sm:px-7">
      <div
        role="img"
        aria-label={icon.name}
        style={{ '--glow': glow, color: icon.hex ?? undefined } as React.CSSProperties}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-900 dark:text-white transition duration-200 ease-out group-hover:scale-110 group-hover:shadow-lg group-hover:drop-shadow-[0_0_12px_var(--glow)] motion-reduce:transform-none"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d={icon.path} />
        </svg>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-9 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 translate-y-1 transition duration-150 group-hover:opacity-100 group-hover:translate-y-0 dark:bg-white dark:text-gray-900"
      >
        {icon.name}
      </span>
    </m.li>
  );
}

export default function TechMarquee({ className = '' }: { className?: string }) {
  return (
    <section aria-labelledby="tech-stack-heading" className={`py-16 bg-white dark:bg-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography variant="h2" size="2xl" weight="bold" className="text-center mb-2">
          <span id="tech-stack-heading">Tech I Build With</span>
        </Typography>
        <Typography variant="p" color="secondary" className="text-center mb-4">
          Hover a logo to pause and see what it is.
        </Typography>
      </div>

      <m.div
        className="marquee marquee-mask overflow-hidden pt-12 pb-6"
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="marquee-track flex w-max">
          <ul className="flex" aria-label="Technologies">
            {techIcons.map((icon) => (
              <TechLogo key={icon.name} icon={icon} />
            ))}
          </ul>
          <ul className="marquee-duplicate flex" aria-hidden="true">
            {techIcons.map((icon) => (
              <TechLogo key={icon.name} icon={icon} />
            ))}
          </ul>
        </div>
      </m.div>
    </section>
  );
}
