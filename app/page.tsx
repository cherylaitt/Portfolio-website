import React from 'react';
import Hero from '../components/organisms/Hero';
import TechMarquee from '../components/organisms/TechMarquee';
import ProjectsSection from '../components/organisms/ProjectsSection';
import SkillsSection from '../components/organisms/SkillsSection';
import ContactSection from '../components/organisms/ContactSection';
import { isResumeAvailable } from '../lib/resume';

export default function Home() {
  const resumeAvailable = isResumeAvailable();

  return (
    <>
      <Hero resumeAvailable={resumeAvailable} />
      <TechMarquee />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection resumeAvailable={resumeAvailable} />
    </>
  );
}
