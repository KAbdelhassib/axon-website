'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const showcaseImages = [
  {
    url: '/images/nova.png',
    title: 'Nova Intelligence Engine',
    description: 'Our proprietary AI engine processes billions of data points to deliver real-time spatial insights across your entire organization.',
  },
  {
    url: '/images/platform-overview.png',
    title: 'Unified Platform Dashboard',
    description: 'A single pane of glass for all your location intelligence needs — analytics, visualization, and collaboration in one place.',
  },
  {
    url: '/images/nova-2.png',
    title: 'Advanced Spatial Analytics',
    description: 'From network planning to market analysis, leverage cutting-edge spatial algorithms that scale with your business.',
  },
  {
    url: '/images/screenshot-demo.png',
    title: 'Enterprise Workflows',
    description: 'Streamlined workflows designed for enterprise teams. Automate, collaborate, and deploy at scale with confidence.',
  },
  {
    url: '/images/stock-analytics.jpg',
    title: 'Data-Driven Decisions',
    description: 'Transform raw spatial data into actionable business intelligence that drives revenue and reduces costs.',
  },
  {
    url: '/images/data-visualization.jpeg',
    title: 'Global Scale Operations',
    description: 'Deploy across regions with multi-cloud support. Process data at any scale with our cloud-native architecture.',
  },
];

export function ImageShowcase() {
  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      {/* Background geometric decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 border-r-4 border-t-4 border-primary/10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border-l-4 border-b-4 border-primary/10" />

      <Container>
        <ScrollReveal direction="up" className="text-center mb-24">
          <span className="text-xs font-black uppercase tracking-widest text-primary mb-4 block">
            Platform Showcase
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            See AXON in Action
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Discover how our platform transforms complex spatial data into actionable insights
          </p>
        </ScrollReveal>

        <div className="space-y-40">
          {showcaseImages.map((item, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <ParallaxImage
                key={item.title}
                item={item}
                index={index}
                isReverse={isReverse}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ParallaxImage({
  item,
  index,
  isReverse,
}: {
  item: (typeof showcaseImages)[number];
  index: number;
  isReverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  const textX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [isReverse ? -60 : 60, 0]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        isReverse ? 'lg:grid-flow-dense' : ''
      }`}
    >
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className={`relative ${isReverse ? 'lg:col-start-2' : ''}`}
      >
        <div className="absolute -inset-4 bg-primary/10 blur-2xl" />
        <div className="relative overflow-hidden border-4 border-gray-800 hover:border-primary transition-colors duration-500 group">
          <motion.img
            src={item.url}
            alt={item.title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      <motion.div
        style={{ x: textX, opacity: textOpacity }}
        className={`space-y-6 ${isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
      >
        <div className="w-20 h-20 bg-primary flex items-center justify-center">
          <span className="text-black font-black text-3xl">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
          {item.title}
        </h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          {item.description}
        </p>
        <div className="w-24 h-1 bg-primary" />
      </motion.div>
    </div>
  );
}
