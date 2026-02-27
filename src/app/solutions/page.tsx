'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Building2, TrendingUp, MapPin, Warehouse, Truck, Users } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Make smarter property decisions with location intelligence',
    benefits: [
      'Market analysis and valuation',
      'Site selection optimization',
      'Demographic insights',
      'Portfolio management',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Retail & E-commerce',
    description: 'Optimize store locations and understand customer behavior',
    benefits: [
      'Trade area analysis',
      'Customer segmentation',
      'Store performance metrics',
      'Delivery optimization',
    ],
  },
  {
    icon: Warehouse,
    title: 'Supply Chain',
    description: 'Streamline logistics with spatial analytics',
    benefits: [
      'Route optimization',
      'Warehouse placement',
      'Demand forecasting',
      'Risk assessment',
    ],
  },
  {
    icon: Truck,
    title: 'Transportation',
    description: 'Build smarter mobility solutions',
    benefits: [
      'Fleet management',
      'Traffic analysis',
      'Route planning',
      'Asset tracking',
    ],
  },
  {
    icon: MapPin,
    title: 'Urban Planning',
    description: 'Design better cities with data-driven insights',
    benefits: [
      'Infrastructure planning',
      'Zoning analysis',
      'Environmental impact',
      'Community engagement',
    ],
  },
  {
    icon: Users,
    title: 'Marketing & Sales',
    description: 'Target audiences with precision',
    benefits: [
      'Territory management',
      'Campaign optimization',
      'Market segmentation',
      'Lead scoring',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="pt-16 bg-dark">
      {/* Hero */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <Image
          src="/images/futuristic-city-map.webp"
          alt="Futuristic city map"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-darker/60 to-darker" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-t-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Solutions for every industry
            </h1>
            <p className="text-lg text-gray-400 mb-12 font-light">
              Discover how location intelligence transforms businesses across industries
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={true} className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                      <solution.icon className="text-black" size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">{solution.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary mr-3" />
                          {benefit}
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

      {/* Visual Divider */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/digital-map.webp"
          alt="Global network"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-black/60 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Trusted Worldwide</h2>
            <p className="text-gray-400 font-light mt-4">Powering spatial intelligence across every continent</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-y-4 border-primary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-gray-500 mb-12 font-light">
              Join industry leaders who trust AXON for their location intelligence needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
