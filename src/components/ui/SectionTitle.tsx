import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  center?: boolean;
  maxWidth?: string;
}

export function SectionTitle({
  title,
  subtitle,
  center = false,
  maxWidth = '640px',
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        center && 'mx-auto text-center',
        className
      )}
      style={{ maxWidth: center ? maxWidth : undefined }}
      {...props}
    >
      <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-body-color dark:text-body-color-dark md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
