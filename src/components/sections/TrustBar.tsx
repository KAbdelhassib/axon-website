'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'Verizon', logo: 'VZ' },
  { name: 'T-Mobile', logo: 'TM' },
  { name: 'Vodafone', logo: 'VF' },
  { name: 'AT&T', logo: 'AT' },
  { name: 'Sprint', logo: 'SP' },
  { name: 'Orange', logo: 'OR' },
  { name: 'Deutsche Telekom', logo: 'DT' },
  { name: 'BT Group', logo: 'BT' },
  { name: 'China Mobile', logo: 'CM' },
  { name: 'NTT', logo: 'NT' },
  { name: 'Telefonica', logo: 'TF' },
  { name: 'América Móvil', logo: 'AM' },
];

export function TrustBar() {
  // Double the array for seamless loop
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-black border-y-2 border-gray-900 relative overflow-hidden">
      {/* Animated wave lines in background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,50 Q250,30 500,50 T1000,50 T1500,50 T2000,50"
            stroke="#fbbf24"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ 
              pathLength: 1,
              pathOffset: [0, 1, 0],
            }}
            transition={{
              pathLength: { duration: 2 },
              pathOffset: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          />
        </svg>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-12 font-bold">
            Trusted by world&apos;s leading telecommunications companies
          </p>
        </motion.div>
        
        {/* Infinite Scrolling Logo Ticker */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {doubledClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 border-2 border-gray-800 bg-gray-900 flex items-center justify-center hover:border-primary transition-all group cursor-pointer">
                  <span className="text-gray-600 group-hover:text-primary font-black text-base tracking-tight transition-colors">
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
