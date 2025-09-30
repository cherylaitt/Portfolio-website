import React from 'react';
import Header from '../components/organisms/Header';
import Hero from '../components/organisms/Hero';
import ProjectsSection from '../components/organisms/ProjectsSection';
import AboutSection from '../components/organisms/AboutSection';
import SkillsSection from '../components/organisms/SkillsSection';
import ContactSection from '../components/organisms/ContactSection';
import Footer from '../components/organisms/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        {/* <AboutSection /> */}
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
