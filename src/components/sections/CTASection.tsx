'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-darker relative overflow-hidden">
      <AnimatedBackground variant="waves" intensity="medium" color="primary" />
      
      {/* Bold geometric element */}
      <div className="absolute inset-0 border border-primary/10" />
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 border-r-4 border-b-4 border-primary opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
            Ready to transform your spatial data?
          </h2>
          <p className="text-lg text-gray-500 mb-12 font-light max-w-2xl mx-auto">
            Start your free trial today and experience the power of location intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
          <p className="mt-8 text-xs text-gray-600 uppercase tracking-widest">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
