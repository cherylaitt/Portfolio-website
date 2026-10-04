import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CldImage from '../../../components/atoms/CloudImage';
import Typography from '../../../components/atoms/Typography';
import Button from '../../../components/atoms/Button';
import Card from '../../../components/atoms/Card';
import VideoSection from '../../../components/molecules/VideoSection';
import FeatureCarousel from '../../../components/molecules/FeatureCarousel';
import Reveal from '../../../components/motion/Reveal';
import CountUp from '../../../components/motion/CountUp';
import { getProject, projects } from '../../../lib/projects';
import { profile } from '../../../lib/profile';

type PageProps = { params: Promise<{ slug: string }> };

const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, '');

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const hasPublicLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 md:pt-20">
      {/* Sub-navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm" aria-label="Project">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button variant="ghost" size="sm" href="/#projects">
              ← Back to Portfolio
            </Button>
            <div className="flex space-x-4">
              {project.liveUrl && (
                <Button variant="outline" size="sm" href={project.liveUrl} external>
                  Visit Live Site
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" href={project.githubUrl} external>
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {project.company}
            </p>
            <Typography variant="h1" size="5xl" weight="bold" className="mb-6">
              {project.title}
            </Typography>
            <Typography variant="p" size="xl" color="secondary" className="mb-8 max-w-4xl mx-auto">
              {project.longDescription}
            </Typography>
            
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <Typography variant="span" size="sm" weight="medium">{project.role}</Typography>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <Typography variant="span" size="sm" weight="medium">{project.duration}</Typography>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <Typography variant="span" size="sm" weight="medium">{project.technologies.length} Technologies</Typography>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative max-w-4xl mx-auto">
            {project.imageUrl ? (
              <Card className="overflow-hidden" shadow="lg">
                <CldImage
                  alt={project.title}
                  src={project.imageUrl}
                  className="w-full h-full object-cover"
                  width="800"
                  height="400"
                  priority
                />
              </Card>
            ) : (
              <Card className="overflow-hidden" shadow="lg" padding="none">
                {/* <!-- TODO: USER INPUT NEEDED: add screenshots/demo of validation dashboard (confidentiality permitting — confirm if NDA restricts screenshots) --> */}
                <div className="aspect-[2/1] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center text-white">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-xl font-semibold">Internal enterprise tool</p>
                  <p className="max-w-md text-white/80">
                    Screenshots of this internal tool are not currently available.
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      {project.impactStats.length > 0 && (
        <section className="pb-8" aria-label="Impact">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className={`grid gap-6 grid-cols-1 ${project.impactStats.length > 1 ? 'sm:grid-cols-3' : ''}`}>
              {project.impactStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.1}>
                  <div className="flex flex-col-reverse items-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-8 text-center text-white shadow-lg">
                    <dt className="mt-2 text-sm font-medium text-white/85">{stat.label}</dt>
                    <dd className="text-4xl font-bold">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Project Details & Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <Card className="p-8 h-full">
                <Typography variant="h3" size="2xl" weight="bold" className="mb-6 flex items-center">
                  <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Technology Stack
                </Typography>
                <Typography variant="p" color="secondary" className="mb-6">
                  Built with modern, industry-standard technologies for optimal performance and maintainability.
                </Typography>
                <div className="grid grid-cols-2 gap-3">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <Typography variant="span" weight="medium">{tech}</Typography>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-8 h-full">
                <Typography variant="h3" size="2xl" weight="bold" className="mb-6 flex items-center">
                  <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Project Details
                </Typography>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <Typography variant="span" size="sm" color="muted">Role</Typography>
                        <Typography variant="span" weight="semibold" className="block">{project.role}</Typography>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <Typography variant="span" size="sm" color="muted">Duration</Typography>
                        <Typography variant="span" weight="semibold" className="block">{project.duration}</Typography>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <Typography variant="span" size="sm" color="muted">Technologies Used</Typography>
                        <Typography variant="span" weight="semibold" className="block">{project.technologies.length} tools</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <Typography variant="h2" size="4xl" weight="bold" className="mb-6">
              Key Features I Contributed To
            </Typography>
            <Typography variant="p" size="lg" color="secondary" className="max-w-3xl mx-auto">
              Explore the features in which I contributed to this project.
            </Typography>
          </Reveal>

          <div className="space-y-16">
            {project.features.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 2) * 0.1} amount={0.15}>
                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FeatureCarousel images={feature.images} title={feature.title} />

                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <Typography variant="h3" size="2xl" weight="bold">
                          {feature.title}
                        </Typography>
                      </div>
                      
                      <Typography variant="p" size="lg" color="secondary" className="leading-relaxed mb-6">
                        {feature.detailedDescription}
                      </Typography>
                      
                      <div className="space-y-4">
                        <Typography variant="h4" size="lg" weight="semibold" className="text-green-600 dark:text-green-400">
                          Key Contributions
                        </Typography>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {feature.contributions.map((contribution) => (
                            <div key={contribution} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <Typography variant="span" size="sm" color="secondary">
                                {contribution}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Videos */}
      {project.videos && project.videos.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VideoSection 
              videos={project.videos}
              title={project.title}
            />
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasPublicLinks ? (
            <>
              <div className="text-center mb-12">
                <Typography variant="h2" size="4xl" weight="bold" className="mb-6">
                  See It in Production
                </Typography>
                <Typography variant="p" size="lg" color="secondary" className="max-w-3xl mx-auto mb-8">
                  This project is live and owned by {project.company}. It may have changed since I last worked on it.
                </Typography>
              </div>

              <div className={`grid grid-cols-1 gap-8 mb-12 ${project.liveUrl && project.githubUrl ? 'md:grid-cols-2' : 'max-w-xl mx-auto'}`}>
                {project.liveUrl && (
                  <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <Typography variant="h3" size="xl" weight="semibold" className="mb-4">
                      Live Product
                    </Typography>
                    <Typography variant="p" color="secondary" className="mb-6">
                      {project.liveNote ?? `View the production version at ${hostname(project.liveUrl)}.`}
                    </Typography>
                    <Button variant="primary" size="lg" className="w-full" href={project.liveUrl} external>
                      Visit {hostname(project.liveUrl)}
                    </Button>
                  </Card>
                )}

                {project.githubUrl && (
                  <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <Typography variant="h3" size="xl" weight="semibold" className="mb-4">
                      Source Code
                    </Typography>
                    <Typography variant="p" color="secondary" className="mb-6">
                      Browse the code repository for this project.
                    </Typography>
                    <Button variant="outline" size="lg" className="w-full" href={project.githubUrl} external>
                      View Source Code
                    </Button>
                  </Card>
                )}
              </div>
            </>
          ) : (
            <Reveal className="text-center mb-12">
              <Typography variant="h2" size="3xl" weight="bold" className="mb-4">
                Want to Hear More?
              </Typography>
              <Typography variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto mb-8">
                This is an internal tool, so there&apos;s no public demo — but I&apos;m happy to walk through the
                approach and what I built.
              </Typography>
              <Button variant="primary" size="lg" href={`mailto:${profile.email}`}>
                Contact Me
              </Button>
            </Reveal>
          )}

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 rounded-full px-6 py-3">
              <Typography variant="span" size="sm" color="muted">
                Want to see more projects?
              </Typography>
              <Button variant="ghost" size="sm" href="/#projects">
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
