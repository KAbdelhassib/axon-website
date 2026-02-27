import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Github, Youtube } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'Overview', href: '/platform' },
    { label: 'AXON AI Assistant', href: '/demo' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Security', href: '/platform#security' },
  ],
  solutions: [
    { label: 'Real Estate', href: '/solutions' },
    { label: 'Supply Chain', href: '/solutions' },
    { label: 'Transportation', href: '/solutions' },
    { label: 'Urban Planning', href: '/solutions' },
  ],
  resources: [
    { label: 'Documentation', href: '/resources' },
    { label: 'Video Tutorials', href: '/resources' },
    { label: 'Code Examples', href: '/demo#code' },
    { label: 'Support', href: '/contact' },
  ],
  company: [
    { label: 'About QuantorX', href: '/company' },
    { label: 'Customers', href: '/company#testimonials' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/company#careers' },
  ],
};

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-gray-900 text-gray-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-12 lg:py-16">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            {/* Logo and QuantorX */}
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

            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              © {new Date().getFullYear()} QuantorX. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
