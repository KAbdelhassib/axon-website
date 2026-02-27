'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Map, Database, Zap, Code, Shield, Users } from 'lucide-react';

const platformFeatures = [
  {
    icon: Map,
    title: 'Interactive Mapping',
    description: 'Build stunning visualizations with our powerful mapping engine. Support for multiple basemaps, custom styling, and real-time data layers.',
    features: ['Custom basemaps', 'Vector tiles', 'Real-time updates', '3D terrain'],
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Handle massive datasets with ease. Our distributed architecture processes billions of records in seconds.',
    features: ['Batch processing', 'Stream processing', 'ETL pipelines', 'Data validation'],
  },
  {
    icon: Zap,
    title: 'Analytics Engine',
    description: 'Run complex spatial queries and analyses at scale. From proximity searches to predictive modeling.',
    features: ['Spatial SQL', 'ML models', 'Custom algorithms', 'A/B testing'],
  },
  {
    icon: Code,
    title: 'APIs & SDKs',
    description: 'Integrate seamlessly with your tech stack. RESTful APIs, GraphQL, and SDKs for all major languages.',
    features: ['REST API', 'GraphQL', 'Python SDK', 'JavaScript SDK'],
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built for the most demanding security requirements. SOC 2 Type II certified with end-to-end encryption.',
    features: ['SSO/SAML', 'Role-based access', 'Audit logs', 'Data encryption'],
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Work together seamlessly. Share insights, create team workspaces, and manage permissions effortlessly.',
    features: ['Team workspaces', 'Sharing controls', 'Comments', 'Version history'],
  },
];

export default function PlatformPage() {
  return (
    <main className="pt-16 bg-dark">
      {/* Hero */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <Image
          src="/images/digital-map.webp"
          alt="Digital map background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-darker/60 to-darker" />
        <div className="absolute top-0 right-0 w-96 h-96 border-r-4 border-b-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              A platform built for
              <span className="block mt-4 text-gradient">
                spatial intelligence
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-12 font-light">
              Everything you need to analyze, visualize, and act on location data
            </p>
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false} className="h-full bg-gray-900">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                      <feature.icon className="text-black" size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">{feature.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Platform Screenshot Showcase */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">See It In Action</h2>
            <p className="text-lg text-gray-500 font-light">Powerful tools designed for real-world impact</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] border-2 border-gray-800 overflow-hidden group"
            >
              <Image
                src="/images/nova.png"
                alt="AXON dashboard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Real-Time Dashboard</h3>
                <p className="text-gray-400 text-sm mt-2">Monitor all your spatial data streams in one view</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/3] border-2 border-gray-800 overflow-hidden group"
            >
              <Image
                src="/images/screenshot-demo.png"
                alt="AXON analytics"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-black text-white uppercase tracking-wide">Advanced Analytics</h3>
                <p className="text-gray-400 text-sm mt-2">Run complex spatial queries with visual results</p>
              </div>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] border-2 border-gray-800 overflow-hidden group"
            >
              <Image
                src="/images/nova-2.png"
                alt="Data layers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-base font-black text-white uppercase tracking-wide">Data Layers</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/3] border-2 border-gray-800 overflow-hidden group"
            >
              <Image
                src="/images/stock-analytics.jpg"
                alt="Analytics view"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-base font-black text-white uppercase tracking-wide">Analytics View</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[4/3] border-2 border-gray-800 overflow-hidden group"
            >
              <Image
                src="/images/platform-overview.png"
                alt="Platform overview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-base font-black text-white uppercase tracking-wide">Full Overview</h3>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 border border-primary/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-t-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-500 mb-12 font-light">
              Join thousands of teams already using AXON
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
