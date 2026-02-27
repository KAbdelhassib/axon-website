import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  href?: string;
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, href, hover = true, children, ...props }, ref) => {
    const cardStyles = cn(
      'minimal-card p-8',
      hover && 'minimal-card-hover hover:translate-y-[-2px]',
      className
    );

    if (href) {
      return (
        <Link href={href} className="block">
          <div className={cardStyles} ref={ref} {...props}>
            {children}
          </div>
        </Link>
      );
    }

    return (
      <div className={cardStyles} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6', className)} {...props}>
    {children}
  </div>
);

export const CardContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);