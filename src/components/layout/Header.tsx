'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Cpu, BarChart3, Shield, CreditCard, Layers, Bot, Building2, TrendingUp, MapPin, Warehouse, Truck, Users, BookOpen, FileText, Video, Code, Headphones, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

interface DropdownItem {
  name: string;
  href: string;
  icon: React.ElementType;
  description: string;
}

interface NavItem {
  name: string;
  items: DropdownItem[];
  featured?: { title: string; description: string; href: string };
}

const navigation: NavItem[] = [
  {
    name: 'Platform',
    items: [
      { name: 'Overview', href: '/platform', icon: Layers, description: 'Full platform capabilities at a glance' },
      { name: 'AXON AI Assistant', href: '/demo', icon: Bot, description: 'Agentic AI framework for spatial intelligence' },
      { name: 'Analytics Engine', href: '/platform#analytics', icon: BarChart3, description: 'Run complex spatial queries at scale' },
      { name: 'Enterprise & Security', href: '/platform#security', icon: Shield, description: 'SOC 2 certified, end-to-end encryption' },
      { name: 'Pricing', href: '/pricing', icon: CreditCard, description: 'Transparent plans for every team size' },
    ],
    featured: {
      title: 'AXON AI Assistant',
      description: 'Our agentic AI framework that transforms how teams interact with spatial data — powered by QuantorX.',
      href: '/demo',
    },
  },
  {
    name: 'Solutions',
    items: [
      { name: 'Real Estate', href: '/solutions#real-estate', icon: Building2, description: 'Smarter property decisions with location data' },
      { name: 'Retail & E-commerce', href: '/solutions#retail', icon: TrendingUp, description: 'Optimize stores and customer insights' },
      { name: 'Supply Chain', href: '/solutions#supply-chain', icon: Warehouse, description: 'Streamline logistics with spatial analytics' },
      { name: 'Transportation', href: '/solutions#transportation', icon: Truck, description: 'Build smarter mobility solutions' },
      { name: 'Urban Planning', href: '/solutions#urban', icon: MapPin, description: 'Data-driven city design and planning' },
      { name: 'Marketing & Sales', href: '/solutions#marketing', icon: Users, description: 'Target audiences with precision' },
    ],
  },
  {
    name: 'Customers',
    items: [
      { name: 'Case Studies', href: '/resources#case-studies', icon: FileText, description: 'Real-world success stories' },
      { name: 'Testimonials', href: '/company#testimonials', icon: Users, description: 'What our customers say' },
      { name: 'About QuantorX', href: '/company', icon: Building2, description: 'The company behind AXON' },
    ],
  },
  {
    name: 'Resources',
    items: [
      { name: 'Documentation', href: '/resources', icon: BookOpen, description: 'Guides, API references, and tutorials' },
      { name: 'Video Tutorials', href: '/resources#videos', icon: Video, description: 'Step-by-step visual learning' },
      { name: 'Code Examples', href: '/demo#code', icon: Code, description: 'SDKs, APIs, and starter templates' },
      { name: 'Support', href: '/contact', icon: Headphones, description: 'Get help from our team' },
      { name: 'Contact', href: '/contact', icon: Mail, description: 'Reach out for inquiries' },
    ],
  },
];

function DropdownMenu({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-900 shadow-2xl"
    >
      <Container>
        <div className={`py-8 grid gap-8 ${item.featured ? 'lg:grid-cols-[1fr_300px]' : ''}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {item.items.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                onClick={onClose}
                className="group flex items-start gap-4 p-4 hover:bg-gray-900/60 transition-colors"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-gray-900 group-hover:bg-primary flex items-center justify-center transition-colors">
                  <subItem.icon size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{subItem.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{subItem.description}</div>
                </div>
              </Link>
            ))}
          </div>
          {item.featured && (
            <div className="hidden lg:block border-l border-gray-900 pl-8">
              <div className="bg-gray-900/50 p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">Featured</span>
                  <h4 className="text-white font-black text-lg mt-2 uppercase tracking-tight">{item.featured.title}</h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.featured.description}</p>
                </div>
                <Link
                  href={item.featured.href}
                  onClick={onClose}
                  className="mt-4 text-primary text-sm font-bold uppercase tracking-wider hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </motion.div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sticky, setSticky] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        sticky
          ? 'bg-black/80 backdrop-blur-xl border-gray-900'
          : 'bg-dark border-gray-900/50'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center space-x-2.5 transition-all group">
              <div className="w-9 h-9 bg-primary flex items-center justify-center group-hover:shadow-glow-strong transition-all">
                <span className="text-black font-black text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">AXON</span>
                <span className="text-[8px] text-gray-500 uppercase tracking-[0.2em] leading-none mt-0.5">AI Assistant</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-2 border-l border-gray-800 pl-5">
              <span className="text-[9px] text-gray-600 uppercase tracking-widest">by</span>
              <img src="/images/quantorx-logo.svg" alt="QuantorX" className="h-4 brightness-0 invert opacity-50 hover:opacity-80 transition-opacity" />
            </div>
          </div>

          {/* Desktop Navigation - 4 tabs with dropdowns */}
          <div className="hidden lg:flex lg:items-center lg:h-full">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 h-full text-sm font-medium tracking-wide transition-colors ${
                    activeDropdown === item.name ? 'text-primary' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="outline" size="sm">
              Request a demo
            </Button>
            <Button variant="primary" size="sm">
              Try for free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Desktop Dropdown Menus */}
      <AnimatePresence>
        {activeDropdown && (
          <div
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            {navigation.map((item) =>
              item.name === activeDropdown ? (
                <DropdownMenu key={item.name} item={item} onClose={() => setActiveDropdown(null)} />
              ) : null
            )}
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-900 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                    className="flex items-center justify-between w-full py-3 text-white font-bold uppercase text-sm tracking-wide"
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 space-y-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }}
                              className="flex items-center gap-3 py-2.5 text-gray-400 hover:text-primary transition-colors"
                            >
                              <subItem.icon size={16} />
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-6 border-t border-gray-900 space-y-3">
                <Button variant="ghost" size="md" className="w-full">Log in</Button>
                <Button variant="outline" size="md" className="w-full">Request a demo</Button>
                <Button variant="primary" size="md" className="w-full">Try for free</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
