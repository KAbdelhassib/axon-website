'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-dark dark:to-dark">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="text-red-600 dark:text-red-400" size={48} />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-xl text-body-color dark:text-body-color-dark mb-8">
            We encountered an unexpected error. Our team has been notified and we're working on a fix.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
              <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                {error.message || 'Unknown error'}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={reset}
              className="group"
            >
              <RefreshCw className="mr-2 group-hover:rotate-180 transition-transform duration-500" size={20} />
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Home className="mr-2" size={20} />
                Go Home
              </Button>
            </Link>
          </div>

          {/* Support Link */}
          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            Need help?{' '}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact Support
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
