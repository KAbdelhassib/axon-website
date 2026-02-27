'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tabs } from '@/components/ui/Tabs';
import { Accordion } from '@/components/ui/Accordion';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Play, Code, Database, Zap } from 'lucide-react';

const codeExamples = [
  {
    id: 'javascript',
    label: 'JavaScript',
    content: (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
        <code>{`import { AxonClient } from '@axon/sdk';

const client = new AxonClient({
  apiKey: 'your-api-key'
});

// Create a map
const map = await client.maps.create({
  center: [-122.4194, 37.7749],
  zoom: 12,
  style: 'streets'
});

// Add data layer
await map.addLayer({
  type: 'point',
  data: locations,
  style: {
    color: '#3b82f6',
    size: 8
  }
});`}</code>
      </pre>
    ),
  },
  {
    id: 'python',
    label: 'Python',
    content: (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
        <code>{`from axon import AxonClient

client = AxonClient(api_key='your-api-key')

# Analyze spatial data
analysis = client.analyze({
    'type': 'proximity',
    'locations': locations,
    'radius': 1000
})

# Visualize results
map = client.maps.create(
    data=analysis.results,
    style='heatmap'
)

print(f"Found {len(analysis.results)} points")`}</code>
      </pre>
    ),
  },
  {
    id: 'curl',
    label: 'REST API',
    content: (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
        <code>{`# Create a dataset
curl -X POST https://api.axon.com/v1/datasets \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "store-locations",
    "type": "points",
    "data": [...]
  }'

# Run spatial query
curl -X POST https://api.axon.com/v1/query \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "within",
    "geometry": {...},
    "dataset": "store-locations"
  }'`}</code>
      </pre>
    ),
  },
];

const faqItems = [
  {
    title: 'How do I get started with the API?',
    content: 'Sign up for a free account, generate your API key from the dashboard, and follow our quickstart guide. You\'ll be making your first API call in under 5 minutes.',
  },
  {
    title: 'What data formats are supported?',
    content: 'We support GeoJSON, Shapefile, CSV (with lat/lon columns), KML, and many other standard geospatial formats. Data can be imported via API, dashboard, or direct connection to your database.',
  },
  {
    title: 'Can I integrate with my existing tools?',
    content: 'Absolutely! AXON integrates seamlessly with popular tools like Tableau, Power BI, Python/R workflows, and has native SDKs for JavaScript, Python, Java, and more.',
  },
  {
    title: 'What are the rate limits?',
    content: 'Rate limits vary by plan. Starter plans get 1,000 requests/day, Professional gets 50,000/day, and Enterprise customers get custom limits based on their needs.',
  },
  {
    title: 'Is there a free trial?',
    content: 'Yes! All plans include a 14-day free trial with full access to features. No credit card required to start.',
  },
];

export default function DemoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setDemoEmail('');
  };

  return (
    <main className="pt-16 bg-dark">
      {/* Hero */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <Image
          src="/images/animated-globe.gif"
          alt="Animated globe"
          fill
          className="object-cover opacity-20"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-darker/60 to-darker" />
        <div className="absolute top-0 left-0 w-96 h-96 border-l-4 border-b-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              See AXON in action
            </h1>
            <p className="text-lg text-gray-400 mb-12 font-light">
              Explore our interactive demo and code examples to get started quickly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                <Play className="mr-2" size={20} />
                Watch Live Demo
              </Button>
              <Button variant="outline" size="lg">
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Features Demo */}
      <section className="py-20 bg-dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Interactive Features</h2>
            <p className="text-lg text-gray-400 font-light">Click around and explore the platform</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Database,
                title: 'Data Import',
                description: 'Upload and process spatial data in seconds',
              },
              {
                icon: Zap,
                title: 'Real-time Analysis',
                description: 'Run complex queries on billions of records',
              },
              {
                icon: Code,
                title: 'API Integration',
                description: 'Connect with any application or workflow',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={true} className="text-center bg-gray-900">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="text-black" size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Interactive Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-effect p-2 aspect-video overflow-hidden mb-16"
          >
            <Image
              src="/images/animated-globe.gif"
              alt="Interactive globe demo"
              fill
              className="object-cover opacity-40"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-primary flex items-center justify-center mx-auto mb-6">
                  <Play className="text-black" size={48} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Interactive Map Demo</h3>
                <p className="text-gray-400 mb-6 text-sm">Experience real-time spatial analytics</p>
                <Button variant="primary" size="lg">Launch Interactive Demo</Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-darker">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Code Examples</h2>
            <p className="text-lg text-gray-500 font-light">Get started with our SDKs and APIs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 p-8"
          >
            <Tabs tabs={codeExamples} />
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500 font-light">Everything you need to know to get started</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion items={faqItems} />
          </motion.div>
        </Container>
      </section>

      {/* Request Demo Form */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-4 border-t-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card hover={false} className="bg-gray-900">
              <CardHeader>
                <h2 className="text-3xl font-black text-white mb-3 text-center uppercase tracking-tight">
                  Request a Personalized Demo
                </h2>
                <p className="text-gray-400 text-center text-sm">
                  See how AXON can transform your organization
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDemoRequest} className="space-y-6">
                  <Input
                    label="Work Email"
                    type="email"
                    required
                    value={demoEmail}
                    onChange={(e) => setDemoEmail(e.target.value)}
                    placeholder="you@company.com"
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    required
                    placeholder="Acme Corp"
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                  <div className="w-full">
                    <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                      What are you looking to accomplish?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-5 py-4 border-2 border-gray-800 bg-darker text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-all duration-300"
                      placeholder="Tell us about your use case..."
                    />
                  </div>
                  <Button variant="primary" size="lg" type="submit" className="w-full">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Demo Request Received!"
        size="md"
      >
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Thank you!</h3>
          <p className="text-gray-400 mb-8 text-sm">
            We've received your demo request. Our team will reach out within 24 hours to schedule a time.
          </p>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Got it
          </Button>
        </div>
      </Modal>
    </main>
  );
}
