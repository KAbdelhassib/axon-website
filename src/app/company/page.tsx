'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Target, Users, Globe, Award, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We believe location intelligence should be accessible to everyone, empowering better decisions.',
  },
  {
    icon: Users,
    title: 'Customer-First',
    description: 'Our customers success is our success. We build tools that solve real problems.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'From local communities to global enterprises, we help organizations make a difference.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We set the highest standards for our platform, our team, and our partnerships.',
  },
  {
    icon: Heart,
    title: 'Inclusive',
    description: 'We celebrate diversity and create a welcoming environment for all backgrounds.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge spatial analytics technology.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former VP of Engineering at major tech company. 15+ years in spatial data.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'PhD in Computer Science. Built distributed systems at scale for Fortune 500.',
  },
  {
    name: 'Emily Taylor',
    role: 'VP of Product',
    bio: 'Product leader with passion for data visualization and user experience.',
  },
  {
    name: 'David Kumar',
    role: 'VP of Engineering',
    bio: 'Engineering leader focused on building high-performance mapping systems.',
  },
];

const milestones = [
  { year: '2020', event: 'Company founded in San Francisco' },
  { year: '2021', event: 'Series A funding, 50+ enterprise customers' },
  { year: '2022', event: 'Launched v2.0, expanded to Europe' },
  { year: '2023', event: 'Series B funding, 500+ customers globally' },
  { year: '2024', event: 'Opened offices in London and Singapore' },
  { year: '2025', event: 'Reached 50K+ active users, launched AI features' },
];

export default function CompanyPage() {
  return (
    <main className="pt-16 bg-dark">
      {/* Hero */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <Image
          src="/images/data-visualization.jpeg"
          alt="Data visualization"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-darker/60 to-darker" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-l-4 border-t-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              Building the future of
              <span className="block mt-4 text-gradient">
                location intelligence
              </span>
            </h1>
            <p className="text-lg text-gray-400 font-light">
              We're on a mission to make spatial data accessible, powerful, and actionable for everyone.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">Our Mission</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe that understanding location data shouldn't require a team of PhDs. 
              AXON democratizes spatial analytics, putting powerful insights at everyone's fingertips.
              Whether you're optimizing delivery routes or planning smart cities, we provide the 
              tools to turn location data into competitive advantage.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false} className="bg-gray-900">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                      <value.icon className="text-black" size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-darker">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Our Journey</h2>
            <p className="text-lg text-gray-500 font-light">Key milestones in our growth</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start mb-10 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-3xl font-black text-primary">{milestone.year}</div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gray-900 border-l-4 border-primary p-6">
                    <p className="text-white font-medium">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Leadership Team</h2>
            <p className="text-lg text-gray-500 font-light">Meet the people building AXON</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false} className="bg-gray-900">
                  <CardHeader>
                    <div className="w-24 h-24 bg-primary flex items-center justify-center mx-auto mb-6">
                      <span className="text-black text-3xl font-black">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-white text-center uppercase tracking-widest">{member.name}</h3>
                    <p className="text-primary text-xs text-center mb-4 uppercase tracking-wider">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-xs text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual Culture Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/futuristic-city-map.webp"
          alt="Futuristic city visualization"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">Where Vision Meets Data</h2>
            <p className="text-gray-300 font-light">We envision cities, networks, and systems transformed by the power of spatial intelligence</p>
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Join us on our mission</h2>
            <p className="text-lg text-gray-500 mb-12 font-light">
              We're always looking for talented people to join our team
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
