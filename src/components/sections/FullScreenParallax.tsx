'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FullScreenParallaxProps {
  image: string;
  title: string;
  subtitle?: string;
  overlay?: 'dark' | 'primary';
}

export function FullScreenParallax({
  image,
  title,
  subtitle,
  overlay = 'dark',
}: FullScreenParallaxProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            overlay === 'primary'
              ? 'bg-gradient-to-b from-black/80 via-black/60 to-black/80'
              : 'bg-gradient-to-b from-black/70 via-black/40 to-black/70'
          }`}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-primary mx-auto mb-8"
        />
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-8 text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-primary mx-auto mt-8"
        />
      </motion.div>
    </section>
  );
}
