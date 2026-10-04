import React from 'react';
import Typography from '../atoms/Typography';
import Reveal from '../motion/Reveal';
import { languages, skillGroups } from '../../lib/profile';

interface SkillsSectionProps {
  className?: string;
}

const groupAccents: Record<string, string> = {
  Mobile: 'from-pink-500 to-rose-500',
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-emerald-500 to-teal-500',
  AI: 'from-purple-500 to-indigo-500',
  'Soft / Technical': 'from-amber-500 to-orange-500',
  Languages: 'from-sky-500 to-blue-600',
};

const chipClasses =
  'inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 transition duration-150 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-300 motion-reduce:transform-none';

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = '' }) => {
  const groups = [
    ...skillGroups.map((group) => ({ category: group.category, items: group.skills })),
    { category: 'Languages', items: languages.map((lang) => `${lang.name} (${lang.level})`) },
  ];

  return (
    <section id="skills" className={`py-20 bg-white dark:bg-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <Typography variant="h2" size="4xl" weight="bold" className="mb-4">
            Skills & Technologies
          </Typography>
          <Typography variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
            The tools and practices I use to ship across mobile, web, backend and AI.
          </Typography>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 0.1} className="h-full">
              <div className="h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${groupAccents[group.category] ?? 'from-blue-500 to-purple-600'}`} aria-hidden="true" />
                  <Typography variant="h3" size="xl" weight="semibold">
                    {group.category}
                  </Typography>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className={chipClasses}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
