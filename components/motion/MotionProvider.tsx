'use client';

import React from 'react';
import { LazyMotion, MotionConfig } from 'framer-motion';

const loadFeatures = () => import('../../lib/motionFeatures').then((mod) => mod.default);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
