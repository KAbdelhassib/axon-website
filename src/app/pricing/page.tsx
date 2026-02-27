'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small teams and projects',
    features: [
      'Up to 5 users',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'API access',
      'Standard maps',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$199',
    description: 'For growing teams with advanced needs',
    features: [
      'Up to 25 users',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Full API access',
      'Custom maps',
      'Advanced integrations',
      'Collaboration tools',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Enterprise analytics',
      'Dedicated support',
      'Custom SLA',
      'On-premise options',
      'Advanced security',
      'Custom integrations',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="pt-16 bg-dark">
      {/* Hero */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <Image
          src="/images/platform-overview.png"
          alt="Platform overview"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-darker/60 to-darker" />
        <div className="absolute top-0 right-0 w-96 h-96 border-r-4 border-b-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-gray-400 font-light">
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hover={false}
                  className={`h-full flex flex-col ${
                    plan.highlighted
                      ? 'border-2 border-primary shadow-glow-strong scale-105 bg-black'
                      : 'bg-gray-900'
                  }`}
                >
                  <CardHeader>
                    {plan.highlighted && (
                      <div className="bg-primary text-black text-xs font-black px-4 py-2 inline-block mb-6 uppercase tracking-widest">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-6xl font-black text-primary">{plan.price}</span>
                      {plan.price !== 'Custom' && (
                        <span className="text-gray-500 ml-2 text-sm uppercase">/month</span>
                      )}
                    </div>
                    <p className="text-gray-500 mb-8 text-sm">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="text-primary mr-3 flex-shrink-0 mt-0.5" size={20} strokeWidth={3} />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.highlighted ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-tight">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: 'Can I change plans later?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
                },
                {
                  q: 'Is there a free trial?',
                  a: 'Yes! All plans include a 14-day free trial with full access to all features.',
                },
                {
                  q: 'What happens after the trial ends?',
                  a: "You'll be automatically enrolled in your selected plan. Cancel anytime during the trial with no charges.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
