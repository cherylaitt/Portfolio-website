'use client';

import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';

interface ImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export default function ImageCarousel({ images, title, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        if (!isHovered) {
          setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length, isHovered]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image Display */}
      <div 
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <CldImage
            alt={`${title} - Image ${currentIndex + 1}`}
            src={images[currentIndex]}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
            width="1200"
            height="750"
            priority={currentIndex === 0}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              } hover:scale-110 hover:shadow-xl`}
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className={`absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              } hover:scale-110 hover:shadow-xl`}
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Progress Bar */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-8">
          <div className="flex justify-center space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                  index === currentIndex
                    ? 'border-blue-500 ring-4 ring-blue-200 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <CldImage
                  alt={`${title} thumbnail ${index + 1}`}
                  src={image}
                  className="w-full h-full object-cover"
                  width="96"
                  height="64"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Modern Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
