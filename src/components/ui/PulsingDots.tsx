'use client';

import { motion } from 'framer-motion';

interface PulsingDotsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: 'primary' | 'white';
}

export function PulsingDots({ 
  position = 'top-right',
  color = 'primary' 
}: PulsingDotsProps) {
  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  };

  const colorClass = color === 'primary' ? 'bg-primary' : 'bg-white';

  return (
    <div className={`absolute ${positionClasses[position]} flex gap-2`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 ${colorClass} opacity-40`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
