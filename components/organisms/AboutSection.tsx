'use client';

import React from 'react';
import Typography from '../atoms/Typography';
import Card from '../atoms/Card';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`py-20 bg-white dark:bg-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Typography variant="h2" size="4xl" weight="bold" className="mb-6">
              About Me
            </Typography>
            
            <Typography variant="p" size="lg" color="secondary" className="mb-6">
              I&apos;m a passionate Full Stack Developer with over 5 years of experience creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and love turning complex problems into simple, beautiful solutions.
            </Typography>
            
            <Typography variant="p" size="lg" color="secondary" className="mb-8">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </Typography>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Typography variant="h3" size="2xl" weight="bold" color="accent" className="mb-2">
                  5+
                </Typography>
                <Typography variant="p" color="secondary">
                  Years of Experience
                </Typography>
              </div>
              <div>
                <Typography variant="h3" size="2xl" weight="bold" color="accent" className="mb-2">
                  50+
                </Typography>
                <Typography variant="p" color="secondary">
                  Projects Completed
                </Typography>
              </div>
              <div>
                <Typography variant="h3" size="2xl" weight="bold" color="accent" className="mb-2">
                  20+
                </Typography>
                <Typography variant="p" color="secondary">
                  Happy Clients
                </Typography>
              </div>
              <div>
                <Typography variant="h3" size="2xl" weight="bold" color="accent" className="mb-2">
                  15+
                </Typography>
                <Typography variant="p" color="secondary">
                  Technologies
                </Typography>
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Typography variant="h1" size="6xl" weight="bold" className="text-white">
                  💻
                </Typography>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <Typography variant="h1" size="2xl">
                🚀
              </Typography>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
              <Typography variant="h1" size="xl">
                ⚡
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
