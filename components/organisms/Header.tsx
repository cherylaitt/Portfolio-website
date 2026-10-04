'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, m } from 'framer-motion';
import Button from '../atoms/Button';
import { DownloadIcon } from '../atoms/SocialIcons';
import { profile } from '../../lib/profile';

interface HeaderProps {
  className?: string;
  resumeAvailable?: boolean;
}

type NavId = 'home' | 'about' | 'projects' | 'skills' | 'contact';

const navItems: { id: NavId; name: string; href: string }[] = [
  { id: 'home', name: 'Home', href: '/' },
  { id: 'about', name: 'About', href: '/about' },
  { id: 'projects', name: 'Projects', href: '/#projects' },
  { id: 'skills', name: 'Skills', href: '/#skills' },
  { id: 'contact', name: 'Contact', href: '/#contact' },
];

const homeSections: NavId[] = ['home', 'projects', 'skills', 'contact'];

const Header: React.FC<HeaderProps> = ({ className = '', resumeAvailable = false }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavId>('home');

  useEffect(() => {
    const onScroll = () => {
      const hero = pathname === '/' ? document.getElementById('home') : null;
      const threshold = hero ? hero.offsetHeight - 96 : 16;
      setIsScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as NavId);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    homeSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const activeId: NavId | null =
    pathname === '/' ? activeSection : pathname.startsWith('/about') ? 'about' : pathname.startsWith('/projects') ? 'projects' : null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-gray-200 dark:border-gray-700'
          : 'bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm border-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-[height] duration-300 ${isScrolled ? 'h-14' : 'h-16 md:h-20'}`}>
          <Link href="/" className="flex-shrink-0 text-xl font-bold text-blue-600 dark:text-blue-400">
            {profile.displayName}
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {isActive && (
                    <m.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/50"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {resumeAvailable && (
            <div className="hidden md:block">
              <Button variant="primary" size="sm" href={profile.resumePath} download>
                <DownloadIcon className="w-4 h-4 mr-1.5" />
                Resume
              </Button>
            </div>
          )}

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <m.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                      activeId === item.id
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {resumeAvailable && (
                  <div className="px-3 py-2">
                    <Button variant="primary" size="sm" className="w-full" href={profile.resumePath} download>
                      Download Resume
                    </Button>
                  </div>
                )}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
