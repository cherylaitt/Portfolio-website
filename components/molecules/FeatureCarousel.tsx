'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { AnimatePresence, m, useInView, useReducedMotion } from 'framer-motion';

interface FeatureCarouselProps {
  images: string[];
  title: string;
  interval?: number;
  className?: string;
}

const arrowClasses =
  'absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-2 text-gray-800 shadow-lg transition duration-150 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transform-none';

export default function FeatureCarousel({ images, title, interval = 4500, className = '' }: FeatureCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const count = images.length;

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused || !inView || reduceMotion || lightboxIndex !== null) return;
    const id = setInterval(() => go(1), interval);
    return () => clearInterval(id);
  }, [count, paused, inView, reduceMotion, lightboxIndex, interval, go]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? i : (i + 1) % count));
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? i : (i - 1 + count) % count));
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, count]);

  const handleTouchEnd = (e: React.TouchEvent, onSwipe: (delta: number) => void) => {
    if (touchStartX === null) return;
    const distance = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(distance) > 50) onSwipe(distance > 0 ? 1 : -1);
    setTouchStartX(null);
  };

  if (count === 0) {
    return (
      <div className={`flex h-64 sm:h-80 flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-6 text-center ${className}`}>
        <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Screenshots aren&apos;t available for this internal tool.
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        ref={rootRef}
        className={`space-y-4 ${className}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="group relative h-64 sm:h-80 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900"
          role="region"
          aria-roledescription="carousel"
          aria-label={`${title} screenshots`}
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => handleTouchEnd(e, go)}
        >
          <AnimatePresence initial={false}>
            <m.button
              key={index}
              type="button"
              className="absolute inset-0 cursor-zoom-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Enlarge image ${index + 1} of ${count}`}
            >
              <CldImage
                alt={`${title} — image ${index + 1}`}
                src={images[index]}
                className="h-full w-full object-cover"
                width="700"
                height="320"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </m.button>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {index + 1} / {count}
          </div>

          {count > 1 && (
            <>
              <button type="button" onClick={() => go(-1)} className={`${arrowClasses} left-3`} aria-label="Previous image">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button type="button" onClick={() => go(1)} className={`${arrowClasses} right-3`} aria-label="Next image">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-gradient-to-r from-blue-500 to-purple-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <m.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image viewer`}
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxIndex(null);
            }}
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => handleTouchEnd(e, (d) => setLightboxIndex((i) => (i === null ? i : (i + d + count) % count)))}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
              aria-label="Close image viewer"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((lightboxIndex - 1 + count) % count)}
                  className={`${arrowClasses} left-3 sm:left-6`}
                  aria-label="Previous image"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % count)}
                  className={`${arrowClasses} right-3 sm:right-6`}
                  aria-label="Next image"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            <CldImage
              alt={`${title} — image ${lightboxIndex + 1}`}
              src={images[lightboxIndex]}
              className="max-h-full max-w-full rounded-lg object-contain"
              width="1200"
              height="800"
              sizes="100vw"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {lightboxIndex + 1} of {count}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
