'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Play } from 'lucide-react';

export function VideoShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Parallax background decoration */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 border border-primary/10" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-primary/5" />
      </motion.div>

      <Container className="relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Play className="text-primary" size={32} strokeWidth={2.5} />
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              See It In Action
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Watch AXON in Action
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            See how our platform transforms complex spatial data into powerful insights
          </p>
        </ScrollReveal>

        {/* Full-width featured video */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-primary/5 blur-2xl" />
            <div className="relative aspect-video border-4 border-gray-800 hover:border-primary transition-colors duration-500">
              <iframe
                src="https://www.youtube.com/embed/QekVEzVntpw?si=O8wgI-C8zRMk-gVX"
                title="AXON Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {/* Video caption */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide">
                  Platform Overview
                </h3>
                <p className="text-gray-400 text-sm font-light mt-1">
                  Complete walkthrough of the AXON platform capabilities
                </p>
              </div>
              <div className="hidden sm:block px-4 py-2 border-2 border-primary text-primary text-xs font-black uppercase tracking-wider">
                Featured
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
