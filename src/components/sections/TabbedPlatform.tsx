'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { BarChart3, Map, Sparkles, Code2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type TabId = 'analytics' | 'visualization' | 'ai' | 'development';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

interface TabContent {
  title: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  mediaType: 'image' | 'video' | 'gif';
  mediaSrc?: string;
}

const tabs: Tab[] = [
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'visualization', label: 'Visualization', icon: Map },
  { id: 'ai', label: 'AI Agents', icon: Sparkles },
  { id: 'development', label: 'App Development', icon: Code2 },
];

const tabContent: Record<TabId, TabContent> = {
  analytics: {
    title: 'Powerful spatial analysis, the low-code way',
    description: 'Transform complex geospatial data into actionable insights with our intuitive analytics platform.',
    features: [
      'Automated analysis with drag-and-drop interface',
      '100+ ready-to-go analysis components with native ML & AI integrations',
      'Automate deployment with APIs, AI Agents & MCP tools',
    ],
    cta: {
      text: 'Learn more',
      href: '/platform',
    },
    mediaType: 'image',
    mediaSrc: '/images/stock-analytics.jpg',
  },
  visualization: {
    title: 'Unmatched data visualization capabilities',
    description: 'Bring your spatial data to life with stunning, interactive visualizations that drive decisions.',
    features: [
      'Billions of data points visualized with ease',
      'Interact with maps & dashboards through natural language',
      'Instant insights for all users with AI Agents',
    ],
    cta: {
      text: 'Learn more',
      href: '/platform',
    },
    mediaType: 'image',
    mediaSrc: '/images/nova.png',
  },
  ai: {
    title: 'AI Agents for more accessible insights',
    description: 'Leverage the power of AI to democratize spatial intelligence across your organization.',
    features: [
      'Build custom AI Agents & tools tailored to your needs',
      'Support end-to-end decision-making for your whole organization',
      'Enterprise-grade: your models, end-points & cloud',
    ],
    cta: {
      text: 'Learn more',
      href: '/platform',
    },
    mediaType: 'image',
    mediaSrc: '/images/nova-2.png',
  },
  development: {
    title: 'Accelerated, scalable app development',
    description: 'Build powerful spatial applications with our comprehensive developer toolkit.',
    features: [
      'No complex back-end ETLs; apps run in your data warehouse',
      'Enterprise-grade, framework-agnostic development',
      'Visualization using deck.gl, web-GL and GPU technology',
    ],
    cta: {
      text: 'Learn more',
      href: '/solutions',
    },
    mediaType: 'image',
    mediaSrc: '/images/screenshot-demo.png',
  },
};

export function TabbedPlatform() {
  const [activeTab, setActiveTab] = useState<TabId>('analytics');
  const content = tabContent[activeTab];

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <AnimatedBackground variant="lines" intensity="subtle" color="primary" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            One Location Intelligence platform for all users
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Redefine how GIS serves your organization with an end-to-end platform built for the enterprise
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 border-2 font-bold uppercase tracking-wider text-sm transition-all ${
                  isActive
                    ? 'bg-primary text-black border-primary'
                    : 'bg-gray-900 text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} strokeWidth={2.5} />
                  {tab.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div>
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                {tabs.find((t) => t.id === activeTab)?.icon && (
                  <div className="text-black">
                    {(() => {
                      const Icon = tabs.find((t) => t.id === activeTab)!.icon;
                      return <Icon size={32} strokeWidth={2.5} />;
                    })()}
                  </div>
                )}
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                {content.title}
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                {content.description}
              </p>

              <ul className="space-y-4 mb-8">
                {content.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                    <span className="text-gray-300 font-light">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href={content.cta.href}>
                <Button variant="outline" className="group">
                  {content.cta.text}
                  <ArrowRight 
                    size={18} 
                    className="ml-2 group-hover:translate-x-1 transition-transform" 
                  />
                </Button>
              </Link>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MediaPlaceholder
                  type={content.mediaType}
                  src={content.mediaSrc}
                  aspectRatio="square"
                  autoPlay={content.mediaType === 'video' || content.mediaType === 'gif'}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
