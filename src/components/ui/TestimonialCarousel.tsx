'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = false,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 border-l-4 border-primary p-8 md:p-12"
        >
          <Quote className="text-primary mb-6" size={48} />
          <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
            "{currentTestimonial.content}"
          </blockquote>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mr-4">
              <span className="text-black text-xl font-black">
                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-black text-white uppercase tracking-wide text-sm">{currentTestimonial.name}</div>
              <div className="text-gray-500 text-xs">{currentTestimonial.role}, {currentTestimonial.company}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prevTestimonial}
          className="p-3 bg-gray-900 border-2 border-gray-800 hover:border-primary text-gray-400 hover:text-primary transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-2 transition-all',
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-700 hover:bg-gray-600 w-2'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-3 bg-gray-900 border-2 border-gray-800 hover:border-primary text-gray-400 hover:text-primary transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
