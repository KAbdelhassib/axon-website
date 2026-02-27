'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, FileText, Video, Code, Download, ExternalLink } from 'lucide-react';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    items: [
      { name: 'Getting Started', type: 'Guide', link: '#' },
      { name: 'API Reference', type: 'Documentation', link: '#' },
      { name: 'Best Practices', type: 'Guide', link: '#' },
    ],
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn through step-by-step video guides',
    items: [
      { name: 'Platform Overview', type: 'Video', link: '#' },
      { name: 'Advanced Mapping', type: 'Video', link: '#' },
      { name: 'Data Integration', type: 'Video', link: '#' },
    ],
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real-world success stories',
    items: [
      { name: 'Retail Chain Optimization', type: 'Case Study', link: '#' },
      { name: 'Urban Planning Initiative', type: 'Case Study', link: '#' },
      { name: 'Logistics Transformation', type: 'Case Study', link: '#' },
    ],
  },
  {
    icon: Code,
    title: 'Code Examples',
    description: 'Sample code and integration templates',
    items: [
      { name: 'React Integration', type: 'Code', link: '#' },
      { name: 'Python SDK Examples', type: 'Code', link: '#' },
      { name: 'API Quickstart', type: 'Code', link: '#' },
    ],
  },
];

const whitepapers = [
  {
    title: 'The Future of Location Intelligence',
    description: 'Trends and innovations shaping spatial analytics in 2026',
    pages: '24 pages',
  },
  {
    title: 'Enterprise Data Security Guide',
    description: 'Best practices for securing spatial data at scale',
    pages: '32 pages',
  },
  {
    title: 'ROI of Spatial Analytics',
    description: 'Measuring business impact with location data',
    pages: '18 pages',
  },
];

export default function ResourcesPage() {
  return (
    <main className="pt-16 bg-dark">
      {/* Hero */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <Image
          src="/images/nova.png"
          alt="AXON platform"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-darker/60 to-darker" />
        <div className="absolute top-0 right-0 w-96 h-96 border-r-4 border-b-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Resources & Learning
            </h1>
            <p className="text-lg text-gray-400 font-light">
              Everything you need to master location intelligence with AXON
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={true} className="h-full bg-gray-900">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                      <category.icon className="text-black" size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">{category.title}</h3>
                    <p className="text-gray-400 mb-6 text-sm">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          className="flex items-center justify-between p-3 hover:bg-gray-800 transition-colors group border-l-2 border-transparent hover:border-primary"
                        >
                          <div>
                            <div className="font-bold text-white group-hover:text-primary transition-colors text-sm uppercase tracking-wide">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500">{item.type}</div>
                          </div>
                          <ExternalLink className="text-gray-500 group-hover:text-primary transition-colors" size={18} />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Whitepapers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-tight">Featured Whitepapers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whitepapers.map((paper, index) => (
                <Card key={index} hover={true} className="bg-gray-900">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                      <Download className="text-black" size={24} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide">{paper.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{paper.description}</p>
                    <p className="text-xs text-gray-500 mb-4">{paper.pages}</p>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-t-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Need help getting started?
            </h2>
            <p className="text-lg text-gray-500 mb-12 font-light">
              Our team is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg">
                Schedule Training
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
