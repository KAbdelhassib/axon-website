'use client';

import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface MediaPlaceholderProps {
  type?: 'image' | 'video' | 'gif' | 'youtube';
  aspectRatio?: 'square' | 'video' | 'wide';
  src?: string;
  youtubeId?: string;
  alt?: string;
  autoPlay?: boolean;
  className?: string;
}

export function MediaPlaceholder({
  type = 'image',
  aspectRatio = 'video',
  src,
  youtubeId,
  alt = 'Product demo',
  autoPlay = false,
  className = '',
}: MediaPlaceholderProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
  };

  // YouTube embed
  if (type === 'youtube' && youtubeId) {
    return (
      <div className={`relative ${aspectClasses[aspectRatio]} ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}${autoPlay ? '?autoplay=1&mute=1' : ''}`}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-4 border-gray-800"
        />
      </div>
    );
  }

  if (src) {
    if (type === 'video') {
      return (
        <div className={`relative ${aspectClasses[aspectRatio]} ${className}`}>
          <video
            src={src}
            autoPlay={autoPlay}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    if (type === 'gif') {
      return (
        <div className={`relative ${aspectClasses[aspectRatio]} ${className}`}>
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      );
    }

    return (
      <div className={`relative ${aspectClasses[aspectRatio]} ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  // Placeholder when no src is provided
  return (
    <div
      className={`relative ${aspectClasses[aspectRatio]} bg-gray-900 border-4 border-gray-800 overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      {/* Geometric corners */}
      <div className="absolute top-0 right-0 w-24 h-24 border-r-4 border-t-4 border-primary opacity-30" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-4 border-b-4 border-primary opacity-30" />

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        {type === 'video' ? (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 bg-primary flex items-center justify-center cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Play className="text-black" size={32} strokeWidth={2.5} fill="currentColor" />
          </motion.div>
        ) : (
          <div className="w-16 h-16 bg-primary/20 flex items-center justify-center">
            <ImageIcon className="text-primary" size={32} strokeWidth={2} />
          </div>
        )}
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Type label */}
      <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 border-l-2 border-primary">
        <span className="text-xs font-black uppercase tracking-wider text-primary">
          {type === 'video' ? 'Video Demo' : type === 'gif' ? 'Interactive GIF' : 'Product Screenshot'}
        </span>
      </div>
    </div>
  );
}
