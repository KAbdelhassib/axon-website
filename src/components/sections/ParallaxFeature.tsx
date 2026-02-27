'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Zap, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process billions of data points in milliseconds with our optimized cloud infrastructure',
    image: '/images/nova.png',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy anywhere with multi-region support and enterprise-grade reliability',
    image: '/images/screenshot-demo.png',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and SOC 2 compliance keep your data safe and secure',
    image: '/images/platform-overview.png',
  },
];

export function ParallaxFeature() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="py-40 bg-black relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y, rotate }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[800px] h-[800px] border-4 border-primary/10" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/20 pointer-events-none"
      />

      <Container>
        <ScrollReveal direction="up" className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Built for Performance
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Enterprise-grade infrastructure designed for speed, scale, and security
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                direction="up"
                delay={index * 0.2}
              >
                <motion.div
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  {/* Image background */}
                  <div className="relative h-72 mb-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <motion.img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="w-16 h-16 bg-primary flex items-center justify-center">
                        <Icon className="text-black" size={32} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="w-0 group-hover:w-full h-1 bg-primary mt-6 transition-all duration-500" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
