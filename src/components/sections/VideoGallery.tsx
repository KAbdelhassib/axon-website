'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { Play, Film } from 'lucide-react';

interface VideoShowcase {
  title: string;
  description: string;
  duration: string;
  thumbnail?: string;
  videoSrc?: string;
}

const videos: VideoShowcase[] = [
  {
    title: 'Platform Overview',
    description: 'Get a complete tour of AXON\'s powerful features in under 3 minutes',
    duration: '2:45',
    thumbnail: undefined, // '/images/thumbnails/platform-overview.jpg'
    videoSrc: undefined, // '/videos/platform-overview.mp4'
  },
  {
    title: 'Advanced Analytics',
    description: 'See how to perform complex spatial analysis with drag-and-drop simplicity',
    duration: '4:20',
    thumbnail: undefined,
    videoSrc: undefined,
  },
  {
    title: 'AI-Powered Insights',
    description: 'Discover how AI agents transform raw data into actionable intelligence',
    duration: '3:15',
    thumbnail: undefined,
    videoSrc: undefined,
  },
  {
    title: 'Real-Time Visualization',
    description: 'Watch billions of data points come to life with interactive maps',
    duration: '5:00',
    thumbnail: undefined,
    videoSrc: undefined,
  },
];

export function VideoGallery() {
  return (
    <section className="section-padding bg-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Film className="text-primary" size={32} strokeWidth={2.5} />
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Product Demos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            See AXON in Action
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Watch how leading organizations leverage AXON to transform their spatial data workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6">
                <MediaPlaceholder
                  type="video"
                  src={video.videoSrc}
                  aspectRatio="video"
                  alt={video.title}
                />
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-black/90 px-3 py-1 border-l-2 border-primary">
                  <span className="text-xs font-bold text-white">{video.duration}</span>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-20 h-20 bg-primary flex items-center justify-center">
                    <Play className="text-black" size={32} strokeWidth={2.5} fill="currentColor" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide">
                {video.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
