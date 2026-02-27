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
          className="grid lg:grid-cols-5 gap-20 items-center max-w-7xl mx-auto"
        >
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
            >
              AGENTIC AI <span className="text-gradient">GIS INTELLIGENCE PLATFORM</span>
            </motion.h1>

            {/* Powered by QuantorX */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-500 text-xs uppercase tracking-wide font-semibold">
                Powered by
              </span>
              <img
                src="/images/quantorx-logo.svg"
                alt="QuantorX"
                className="h-8 brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-gray-400 leading-relaxed font-light"
            >
              Transform how your teams work with spatial data through intelligent automation.
              Built for enterprise scale, designed for effortless collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" className="group px-8 py-4">
                START FREE TRIAL
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                WATCH DEMO
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xs text-gray-600 uppercase tracking-wider"
            >
              No credit card required • 14-day free trial
            </motion.p>
          </div>

          {/* Right Column - Video in Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 relative scale-110"
          >
            <div className="absolute -inset-8 bg-primary/10 blur-3xl" />
            
            {/* Laptop Mockup */}
            <div className="relative">
              {/* Laptop Screen */}
              <div className="relative bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-t-xl p-3 shadow-2xl">
                {/* Screen Bezel */}
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  {/* Video Container */}
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/wcdPpCdPtoI?si=WCuBN-3yVAOiophQ"
                      title="AXON Platform Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Laptop Base/Keyboard */}
              <div className="relative h-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-transparent" />
                {/* Trackpad indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gray-500 rounded-full" />
              </div>
              
              {/* Laptop Shadow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-3 bg-black/40 blur-xl rounded-full" />
            </div>
          </motion.div>
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
