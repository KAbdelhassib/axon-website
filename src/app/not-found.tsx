import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-9xl font-black text-gradient">
              404
            </h1>
          </div>

          {/* Message */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-12 font-light">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or deleted.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                <Home className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t-2 border-gray-900">
            <p className="text-xs text-gray-600 mb-6 uppercase tracking-widest">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Platform', href: '/platform' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Demo', href: '/demo' },
                { name: 'Resources', href: '/resources' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-primary hover:text-primary-light font-bold transition-colors uppercase text-sm tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
