import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          className={cn(
            'w-full px-5 py-4 border-2 border-gray-800',
            'bg-darker text-white placeholder:text-gray-600',
            'focus:outline-none focus:border-primary transition-all duration-300',
            'disabled:bg-gray-900 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
