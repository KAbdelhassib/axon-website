'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const stats = [
  { value: '10M+', label: 'Data Points Processed Daily' },
  { value: '50K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '150+', label: 'Countries Served' },
];

function AnimatedStat({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="text-center border-l-4 border-primary pl-8"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring" }}
        className="text-5xl md:text-7xl font-black text-primary mb-3"
      >
        {stat.value}
      </motion.div>
      <div className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-bold">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} className="section-padding bg-black border-y-4 border-primary relative overflow-hidden">
      {/* Parallax background decorations */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-48 h-48 border-r-4 border-t-4 border-primary opacity-30"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 border-l-4 border-b-4 border-primary opacity-30"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rotate-45"
          animate={{ rotate: [45, 55, 45] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Trusted by teams worldwide
          </h2>
          <p className="text-lg text-gray-500 font-light">
            Join thousands of organizations transforming their data strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
          {stats.map((stat, index) => (
            <AnimatedStat key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
