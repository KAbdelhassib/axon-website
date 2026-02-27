'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { Zap, TrendingUp, Target } from 'lucide-react';

interface AnimatedFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  gifSrc?: string;
}

const features: AnimatedFeature[] = [
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Watch data flow through our pipeline at lightning speed, with live updates visible in milliseconds',
    gifSrc: undefined, // '/gifs/real-time-processing.gif'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'See how AI models identify patterns and forecast trends before they happen',
    gifSrc: undefined, // '/gifs/predictive-analytics.gif'
  },
  {
    icon: Target,
    title: 'Precision Mapping',
    description: 'Interactive demonstration of pinpoint accuracy across global datasets',
    gifSrc: undefined, // '/gifs/precision-mapping.gif'
  },
];

export function AnimatedFeatures() {
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Features in Motion
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Experience the power of AXON through interactive demonstrations
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReverse ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={isReverse ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                    <Icon className="text-black" size={32} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated GIF */}
                <div className={isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <MediaPlaceholder
                    type="gif"
                    src={feature.gifSrc}
                    aspectRatio="video"
                    alt={feature.title}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
