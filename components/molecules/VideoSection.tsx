'use client';

import React, { useState, useRef, useEffect } from 'react';
import Typography from '../atoms/Typography';
import Card from '../atoms/Card';
import Button from '../atoms/Button';

interface VideoSectionProps {
  videos: string[];
  title: string;
  className?: string;
}

export default function VideoSection({ videos, title, className = '' }: VideoSectionProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goToPrevious = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Reset video when changing
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [currentVideoIndex]);

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className={`${className}`}>
      <div className="text-center mb-16">
        <Typography variant="h2" size="4xl" weight="bold" className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Project Videos
        </Typography>
        <Typography variant="p" size="lg" color="secondary" className="max-w-2xl mx-auto">
          Watch the {title} in action and see how it works in real-time
        </Typography>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Main Video Display */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-black">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                key={videos[currentVideoIndex]}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                poster=""
              >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                <source src={videos[currentVideoIndex]} type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Play/Pause Overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300 ${
                  isHovered && !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={togglePlayPause}
              >
                <div className="bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {videos.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className={`absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300 z-10 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  } hover:scale-110 hover:shadow-xl`}
                  aria-label="Previous video"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className={`absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all duration-300 z-10 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  } hover:scale-110 hover:shadow-xl`}
                  aria-label="Next video"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Video Counter */}
            {videos.length > 1 && (
              <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentVideoIndex + 1} / {videos.length}
              </div>
            )}

            {/* Progress Bar */}
            {videos.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                  style={{ width: `${((currentVideoIndex + 1) / videos.length) * 100}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Video Thumbnail Navigation */}
        {videos.length > 1 && (
          <div className="mt-8">
            <div className="flex justify-center space-x-4 overflow-x-auto pb-2 scrollbar-hide">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => goToVideo(index)}
                  className={`flex-shrink-0 w-40 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 relative ${
                    index === currentVideoIndex
                      ? 'border-blue-500 ring-4 ring-blue-200 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                >
                  <video
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors duration-200">
                    <div className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Modern Dots Indicator */}
        {videos.length > 1 && (
          <div className="flex justify-center mt-6 space-x-3">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentVideoIndex
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
