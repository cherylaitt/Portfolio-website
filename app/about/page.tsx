import type { Metadata } from 'next';
import AboutSection from '../../components/organisms/AboutSection';
import ContactSection from '../../components/organisms/ContactSection';
import { isResumeAvailable } from '../../lib/resume';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Career journey, education and languages of Cheryl Lai — from intern to Full Stack Software Engineer at Preface and Programmer at BDO.',
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <ContactSection resumeAvailable={isResumeAvailable()} />
    </>
  );
}
