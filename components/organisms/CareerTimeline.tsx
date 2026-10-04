'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Badge from '../atoms/Badge';
import type { ExperienceEntry } from '../../lib/profile';

interface CareerTimelineProps {
  entries: ExperienceEntry[];
  defaultOpenId?: string;
}

export default function CareerTimeline({ entries, defaultOpenId }: CareerTimelineProps) {
  const containerRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();
  // Applied after mount: the server always renders the animated path, and React
  // would otherwise keep its stale SVG attributes on a hydration mismatch.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => setReduceMotion(Boolean(prefersReducedMotion)), [prefersReducedMotion]);
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 75%', 'end 60%'] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <ol ref={containerRef} className="relative space-y-10">
      <svg
        aria-hidden="true"
        className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-1"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="timeline-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <path d="M2 0 V100" className="stroke-gray-200 dark:stroke-gray-700" strokeWidth={2} fill="none" />
        {reduceMotion ? (
          <path d="M2 0 V100" stroke="url(#timeline-gradient)" strokeWidth={2} fill="none" />
        ) : (
          <m.path d="M2 0 V100" stroke="url(#timeline-gradient)" strokeWidth={2} fill="none" style={{ pathLength }} />
        )}
      </svg>

      {entries.map((entry) => {
        const isOpen = openId === entry.id;
        const panelId = `timeline-panel-${entry.id}`;
        return (
          <li key={entry.id} className="relative pl-14">
            <m.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white dark:border-gray-900 shadow-md ${
                isOpen ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-blue-500'
              }`}
              aria-hidden="true"
            >
              <span className="text-[10px] font-bold text-white">{entry.year.slice(2)}</span>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : entry.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 rounded-xl p-5 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{entry.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{entry.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {entry.company}
                    {entry.location ? ` · ${entry.location}` : ''}
                  </p>
                </div>
                <m.svg
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </m.svg>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={panelId}
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-100 dark:border-gray-700 px-5 pb-5 pt-4">
                      <p className="text-gray-700 dark:text-gray-300">{entry.summary}</p>
                      {entry.highlights.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {entry.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" aria-hidden="true" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                      {entry.tech && entry.tech.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {entry.tech.map((tech) => (
                            <Badge key={tech} variant="primary" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          </li>
        );
      })}
    </ol>
  );
}
