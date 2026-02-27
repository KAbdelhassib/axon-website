'use client';

import { motion } from 'framer-motion';
import { MediaPlaceholder } from './MediaPlaceholder';

interface ProductDemoProps {
  title?: string;
  description?: string;
  mediaType?: 'image' | 'video' | 'gif';
  mediaSrc?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
  reverse?: boolean;
}

export function ProductDemo({
  title,
  description,
  mediaType = 'video',
  mediaSrc,
  aspectRatio = 'video',
  reverse = false,
}: ProductDemoProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
      {/* Content */}
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={reverse ? 'lg:col-start-2' : ''}
        >
          {title && (
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      )}

      {/* Media */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <MediaPlaceholder
          type={mediaType}
          src={mediaSrc}
          aspectRatio={aspectRatio}
        />
      </motion.div>
    </div>
  );
}
