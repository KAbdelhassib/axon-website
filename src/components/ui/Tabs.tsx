'use client';

import { useState, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[];
  defaultTab?: string;
}

export function Tabs({ tabs, defaultTab, className, ...props }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Tab Headers */}
      <div className="flex border-b-2 border-gray-900 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative px-6 py-3 font-bold uppercase tracking-wider text-sm transition-colors',
              activeTab === tab.id
                ? 'text-primary'
                : 'text-gray-500 hover:text-white'
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map((tab) => (
          <div key={tab.id} hidden={activeTab !== tab.id}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
