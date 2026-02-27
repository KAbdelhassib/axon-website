'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Building2, Smartphone, DollarSign, ShoppingBag, Megaphone, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Industry {
  name: string;
  icon: React.ElementType;
  problem: string;
  solution: string;
  href: string;
}

const industries: Industry[] = [
  {
    name: 'Telecommunications',
    icon: Smartphone,
    problem: 'Decision-making with vast amounts of sensitive data requires robust security and real-time capabilities.',
    solution: 'Ensure data privacy while leveraging live insights for on-demand network planning.',
    href: '/solutions',
  },
  {
    name: 'Financial Services',
    icon: DollarSign,
    problem: 'Rigid, legacy data systems slow down decision-making in a fast-moving market.',
    solution: 'Use AXON for flexible, seamless analytics and easily make smarter financial decisions.',
    href: '/solutions',
  },
  {
    name: 'Retail',
    icon: ShoppingBag,
    problem: 'Integrating massive datasets across multiple sources can be overwhelming.',
    solution: 'Seamlessly combine Location Intelligence for smarter omnichannel retail decisions.',
    href: '/solutions',
  },
  {
    name: 'Marketing & Advertising',
    icon: Megaphone,
    problem: 'Reaching the right audience requires precision at scale.',
    solution: 'Leverage hyper-local data to pinpoint target customers and maximize ROI.',
    href: '/solutions',
  },
  {
    name: 'Transport & Logistics',
    icon: Truck,
    problem: 'Optimizing fleets and planning mobility at scale is complex and resource-intensive.',
    solution: 'Leverage advanced spatial analytics to enhance efficiency and reduce costs.',
    href: '/solutions',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    problem: 'Managing asset and risk data at scale can be complex and costly.',
    solution: 'Work with hyper-local intelligence to optimize decision-making and reduce expenses.',
    href: '/solutions',
  },
];

export function IndustrySection() {
  return (
    <section className="section-padding bg-darker relative overflow-hidden">
      <AnimatedBackground variant="grid" intensity="subtle" color="gray" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            What&apos;s happening in your industry?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Discover how leading organizations across sectors leverage spatial intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <ScrollReveal
                key={industry.name}
                direction="up"
                delay={index * 0.1}
              >
                <Link href={industry.href}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gray-900 border-2 border-gray-800 p-8 hover:border-primary transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6">
                      <Icon className="text-black" size={24} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wide">
                      {industry.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 font-light leading-relaxed">
                      {industry.problem}
                    </p>

                    <p className="text-gray-300 text-sm mb-6 font-light leading-relaxed">
                      {industry.solution}
                    </p>

                    <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                      Learn more
                      <ArrowRight size={16} strokeWidth={3} />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
