import { Metadata } from 'next';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-dark">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-ping" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-3xl">A</span>
          </div>
        </div>
        <p className="text-body-color dark:text-body-color-dark text-lg font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
