'use client';

import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';

// Skip the entrance on the first (server-rendered) load so content is visible
// immediately; only client-side route changes get the transition.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [animateIn] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <m.div
      initial={animateIn ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  );
}
