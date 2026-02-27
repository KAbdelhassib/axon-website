'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Cloud, Database, Layers, Server, Box, Cpu } from 'lucide-react';
import Link from 'next/link';

interface Partner {
  name: string;
  icon: React.ElementType;
  href: string;
}

const partners: Partner[] = [
  { name: 'Google Cloud', icon: Cloud, href: '/platform' },
  { name: 'AWS', icon: Server, href: '/platform' },
  { name: 'Azure', icon: Box, href: '/platform' },
  { name: 'Snowflake', icon: Database, href: '/platform' },
  { name: 'Databricks', icon: Layers, href: '/platform' },
  { name: 'Oracle', icon: Cpu, href: '/platform' },
];

export function CloudPartners() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <AnimatedBackground variant="dots" intensity="subtle" color="primary" />
      <div className="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-4 border-b-4 border-primary/20" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Bring geospatial into your cloud ecosystem
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            The only 100% cloud-native GIS platform: no silos, no ETL, no governance compromises
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={partner.href}>
                  <div className="aspect-square bg-gray-900 border-2 border-gray-800 hover:border-primary transition-all group flex flex-col items-center justify-center p-6">
                    <Icon 
                      className="text-gray-600 group-hover:text-primary transition-colors mb-3" 
                      size={40} 
                      strokeWidth={1.5} 
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors text-center">
                      {partner.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
