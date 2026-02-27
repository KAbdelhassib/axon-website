'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background image with parallax - user's 1.png */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="AXON background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Grey hue overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </motion.div>

      {/* Animated geometric elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 border-2 border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 border-2 border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30 + i * 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Yellow glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 blur-[150px]" />

      <Container className="relative z-10">
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Powered by QuantorX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="text-gray-500 text-sm uppercase tracking-widest font-semibold">
              Powered by
            </span>
            <img
              src="/images/quantorx-logo.svg"
              alt="QuantorX"
              className="h-10 brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight"
          >
            AGENTIC AI
            <br />
            <span className="text-gradient">GIS PLATFORM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Transform how your teams work with spatial data through intelligent automation.
            Built for enterprise scale, designed for effortless collaboration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button variant="primary" size="lg" className="group text-lg px-10 py-5">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={22} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-5">
              Watch Demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-sm text-gray-600 uppercase tracking-wider"
          >
            No credit card required • 14-day free trial
          </motion.p>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary" size={32} />
      </motion.div>
    </section>
  );
}
