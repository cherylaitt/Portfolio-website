import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Reveal from '../motion/Reveal';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../atoms/SocialIcons';
import { profile } from '../../lib/profile';

interface ContactSectionProps {
  className?: string;
  resumeAvailable?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '', resumeAvailable = false }) => {
  return (
    <section id="contact" className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <Typography variant="h2" size="4xl" weight="bold" className="mb-6">
            Get In Touch
          </Typography>
          
          <Typography variant="p" size="lg" color="secondary" className="mb-12">
            I&apos;m always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <MailIcon className="w-8 h-8" />
              </div>
              <div className="text-center">
                <Typography variant="h4" size="lg" weight="semibold" className="mb-1">
                  Email
                </Typography>
                <a href={`mailto:${profile.email}`} className="break-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {profile.email}
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center">
                <Typography variant="h4" size="lg" weight="semibold" className="mb-1">
                  Location
                </Typography>
                <Typography variant="p" color="secondary">
                  {profile.location}
                </Typography>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center">
                <Typography variant="h4" size="lg" weight="semibold" className="mb-1">
                  Availability
                </Typography>
                <Typography variant="p" color="secondary">
                  Open to new opportunities
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="primary" size="lg" href={`mailto:${profile.email}`}>
              <MailIcon className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            {resumeAvailable && (
              <Button variant="outline" size="lg" href={profile.resumePath} download>
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            )}
          </div>
          
          <div>
            <Typography variant="h4" size="lg" weight="semibold" className="mb-6">
              Follow Me
            </Typography>
            <div className="flex justify-center space-x-6">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <GitHubIcon />
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
