import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Linkedin, Twitter, Github, Youtube } from 'lucide-react';

const footerLinks = {
  platform: [
    { name: 'Overview', href: '/platform' },
    { name: 'AXON AI Assistant', href: '/demo' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Security', href: '/platform#security' },
  ],
  solutions: [
    { name: 'Real Estate', href: '/solutions' },
    { name: 'Supply Chain', href: '/solutions' },
    { name: 'Transportation', href: '/solutions' },
    { name: 'Urban Planning', href: '/solutions' },
  ],
  resources: [
    { name: 'Documentation', href: '/resources' },
    { name: 'Video Tutorials', href: '/resources' },
    { name: 'Code Examples', href: '/demo#code' },
    { name: 'Support', href: '/contact' },
  ],
  company: [
    { name: 'About QuantorX', href: '/company' },
    { name: 'Customers', href: '/company#testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/company#careers' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-gray-900 text-gray-500">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <span className="text-black font-black text-lg">A</span>
                </div>
                <span className="text-white text-xl font-black tracking-tight">AXON</span>
              <span className="text-[9px] text-gray-600 uppercase tracking-widest ml-2">AI Assistant</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 border-l border-gray-800 pl-6">
                <span className="text-gray-600 text-[10px] uppercase tracking-widest">Powered by</span>
                <Image
                  src="/images/quantorx-logo.svg"
                  alt="QuantorX"
                  width={90}
                  height={26}
                  className="brightness-0 invert opacity-50 hover:opacity-80 transition-opacity"
                />
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div className="text-xs text-gray-500 uppercase tracking-wider">
              © 2025 QuantorX. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
