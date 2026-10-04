import React from 'react';
import Typography from '../atoms/Typography';
import Card from '../atoms/Card';
import Reveal from '../motion/Reveal';
import CareerTimeline from './CareerTimeline';
import { education, experience, languages, profile } from '../../lib/profile';

interface AboutSectionProps {
  className?: string;
}

const languageAccent: Record<string, string> = {
  Native: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  Advanced: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
};

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`pt-32 pb-20 bg-white dark:bg-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <Typography variant="h1" size="4xl" weight="bold" className="mb-6">
                About Me
              </Typography>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  I&apos;m {profile.name}, a {profile.title} based in {profile.location}.
                </p>
                <p>
                  My career started with a summer internship at iN and iN Management Limited in 2021, where
                  I built an animated company logo in PHP for a client website. In June 2022, while finishing
                  my BSc in Computer Science, I joined Preface Technopreneur Limited as a Full Stack Software
                  Engineer Trainee and grew into a Full Stack Software Engineer — building and maintaining
                  the public website, customer portal, admin portal and React Native mobile app until
                  August 2025.
                </p>
                <p>
                  Most recently, as a Programmer at BDO Limited (Jan – Mar 2026), I built AI-powered document
                  extraction using Vision Language Models and a validation dashboard for auditors inside a
                  .NET (C#) admin portal for the tax department.
                </p>
                <p>
                  Along the way I&apos;ve led QA through unit testing and bug bashes, hosted stakeholder
                  meetings, and mentored interns in frontend development.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-700/60">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Education</p>
                <Typography variant="h3" size="xl" weight="semibold" className="mt-2">
                  {education.degree}
                </Typography>
                <Typography variant="p" color="secondary">
                  {education.school} · {education.period}
                </Typography>
                <div className="mt-4 rounded-lg bg-white/70 dark:bg-gray-800/70 p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Final Year Project</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{education.finalYearProject}</p>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.15}>
              <Typography variant="h3" size="xl" weight="semibold" className="mb-4">
                Languages
              </Typography>
              <ul className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-1.5 pl-4 pr-1.5 shadow-sm"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">{lang.name}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        languageAccent[lang.level] ?? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300'
                      }`}
                    >
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <Typography variant="h2" size="3xl" weight="bold" className="mb-2">
                Career Timeline
              </Typography>
              <Typography variant="p" color="secondary" className="mb-8">
                Intern → Trainee → Full Stack Engineer → Programmer at BDO. Click a role for details.
              </Typography>
            </Reveal>
            <CareerTimeline entries={experience} defaultOpenId="bdo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
