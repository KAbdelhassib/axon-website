'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FloatingElements } from '@/components/ui/FloatingElements';
import { Download, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Resource {
  tag: string;
  title: string;
  description: string;
  downloadUrl: string;
}

const resources: Resource[] = [
  {
    tag: 'REPORT',
    title: 'The State of Spatial Analytics 2026',
    description: 'A look at AI, cloud-native, data governance and more in spatial analytics. Backed by insights from 200+ professionals.',
    downloadUrl: '/resources',
  },
  {
    tag: 'WHITEPAPER',
    title: 'Spatial Data Governance in the Time of AI',
    description: 'Learn how to bring spatial data into your governance strategy, so your analyses stay accurate, auditable, and compliant.',
    downloadUrl: '/resources',
  },
  {
    tag: 'GUIDE',
    title: 'Applied AI for Spatial Analytics',
    description: 'Real examples, tools, and best practices to help you go from exploring AI to applying it in your spatial workflows.',
    downloadUrl: '/resources',
  },
];

export function FeaturedResources() {
  return (
    <section className="section-padding bg-black border-y-2 border-gray-900 relative overflow-hidden">
      <FloatingElements count={4} color="primary" size="md" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Check out our resources
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Join our growing spatial community with expert insights and actionable guides
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 border-l-4 border-primary p-8 hover:bg-gray-800 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <FileText className="text-black" size={20} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  {resource.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                {resource.title}
              </h3>

              <p className="text-gray-400 text-sm mb-8 font-light leading-relaxed">
                {resource.description}
              </p>

              <Link href={resource.downloadUrl} className="inline-flex items-center justify-center font-bold transition-all duration-300 border-2 border-primary text-primary hover:bg-primary hover:text-black px-6 py-3 text-base uppercase tracking-wider w-full group">
                  <Download size={18} strokeWidth={2.5} className="mr-2" />
                  Download now
                  <ArrowRight 
                    size={16} 
                    className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                  />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/resources" className="inline-flex items-center justify-center font-bold transition-all duration-300 bg-primary text-black hover:shadow-glow-strong px-8 py-4 text-lg uppercase tracking-wider group">
              View all resources
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
