'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Map, BarChart3, Layers, Zap, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Advanced Mapping',
    description: 'Create stunning interactive maps with rich spatial data visualization and real-time updates.',
  },
  {
    icon: BarChart3,
    title: 'Spatial Analytics',
    description: 'Unlock insights with powerful geospatial analysis tools and predictive modeling capabilities.',
  },
  {
    icon: Layers,
    title: 'Data Integration',
    description: 'Connect seamlessly with your existing data sources and workflows for unified analysis.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process billions of data points in real-time with our optimized cloud infrastructure.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy anywhere with multi-region support and enterprise-grade reliability.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and granular access controls keep your data safe.',
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-darker">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Powerful features designed to transform how you work with spatial data
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={true} className="h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                    <feature.icon className="text-black" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
