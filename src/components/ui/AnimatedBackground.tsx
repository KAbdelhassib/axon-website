'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'waves' | 'dots' | 'lines' | 'grid';
  intensity?: 'subtle' | 'medium' | 'strong';
  color?: 'primary' | 'white' | 'gray';
}

export function AnimatedBackground({
  variant = 'waves',
  intensity = 'subtle',
  color = 'primary',
}: AnimatedBackgroundProps) {
  const opacityMap = {
    subtle: 0.03,
    medium: 0.08,
    strong: 0.15,
  };

  const colorMap = {
    primary: '#fbbf24',
    white: '#ffffff',
    gray: '#6b7280',
  };

  const opacity = opacityMap[intensity];
  const strokeColor = colorMap[color];

  if (variant === 'waves') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Wave 1 */}
          <motion.path
            d="M0,100 Q400,50 800,100 T1600,100 T2400,100 V0 H0 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            opacity={opacity}
            initial={{ pathOffset: 0 }}
            animate={{ pathOffset: [0, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Wave 2 */}
          <motion.path
            d="M0,150 Q600,100 1200,150 T2400,150 V0 H0 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            opacity={opacity * 0.6}
            initial={{ pathOffset: 1 }}
            animate={{ pathOffset: [1, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Wave 3 */}
          <motion.path
            d="M0,200 Q500,160 1000,200 T2000,200 T3000,200 V0 H0 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            opacity={opacity * 0.4}
            initial={{ pathOffset: 0.5 }}
            animate={{ pathOffset: [0.5, 1.5] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'lines') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0"
              y1={`${20 + i * 20}%`}
              x2="100%"
              y2={`${20 + i * 20}%`}
              stroke={strokeColor}
              strokeWidth="1"
              opacity={opacity}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [opacity, opacity * 1.5, opacity]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(20)].map((_, i) => {
            const x = (i % 5) * 20 + 10;
            const y = Math.floor(i / 5) * 20 + 10;
            return (
              <motion.circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r="2"
                fill={strokeColor}
                opacity={opacity}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [opacity, opacity * 2, opacity],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${strokeColor} 1px, transparent 1px), linear-gradient(90deg, ${strokeColor} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          opacity: opacity,
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `linear-gradient(${strokeColor} 1px, transparent 1px), linear-gradient(90deg, ${strokeColor} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
    );
  }

  return null;
}
