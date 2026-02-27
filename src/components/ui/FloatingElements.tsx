'use client';

import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  color?: 'primary' | 'white' | 'gray';
  size?: 'sm' | 'md' | 'lg';
}

export function FloatingElements({
  count = 6,
  color = 'primary',
  size = 'md',
}: FloatingElementsProps) {
  const colorMap = {
    primary: 'border-primary',
    white: 'border-white',
    gray: 'border-gray-600',
  };

  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };

  // Use deterministic positions based on index to avoid hydration mismatch
  const elements = [...Array(count)].map((_, i) => ({
    id: i,
    x: 10 + ((i * 37 + 13) % 80),  // pseudo-random but deterministic 10-90%
    y: 10 + ((i * 53 + 29) % 80),
    delay: (i * 0.4) % 2,
    duration: 15 + (i * 2.3) % 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute border-2 ${colorMap[color]} ${sizeMap[size]} opacity-10`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
