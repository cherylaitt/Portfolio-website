import React from 'react';
import Link from 'next/link';
import Typography from '../atoms/Typography';
import { GitHubIcon, LinkedInIcon } from '../atoms/SocialIcons';
import { profile } from '../../lib/profile';

interface FooterProps {
  className?: string;
}

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
];

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-900 text-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Typography variant="h3" size="xl" weight="bold" color="accent" className="mb-4">
              {profile.displayName}
            </Typography>
            <p className="mb-4 text-gray-400">
              {profile.title} based in {profile.location}, building production web, mobile and AI-powered products end-to-end.
            </p>
            <div className="flex space-x-4">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors break-all">
                  {profile.email}
                </a>
              </p>
              <p>{profile.location}</p>
              <p>Open to new opportunities</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {profile.displayName}. All rights reserved. Built with Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
