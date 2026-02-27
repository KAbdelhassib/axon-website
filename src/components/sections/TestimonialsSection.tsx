'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'VP of Analytics',
    company: 'RetailCorp',
    content: 'AXON transformed how we analyze store performance. We identified optimal locations for 50 new stores, increasing revenue by 35% in the first year.',
  },
  {
    name: 'David Thompson',
    role: 'Chief Data Officer',
    company: 'LogiTech Solutions',
    content: 'The platform\'s real-time capabilities are game-changing. We reduced delivery times by 22% and saved millions in logistics costs.',
  },
  {
    name: 'Sarah Kim',
    role: 'Director of Planning',
    company: 'Urban Development Agency',
    content: 'AXON helped us engage communities and make data-driven decisions on infrastructure projects. The visualization tools are incredibly powerful.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Strategy',
    company: 'FinanceFirst Bank',
    content: 'We use AXON to analyze market trends and optimize branch locations. The insights have been invaluable for our expansion strategy.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-gray-500 font-light">
            See what our customers have to say
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div>
      </Container>
    </section>
  );
}
