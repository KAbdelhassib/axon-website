'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-16 bg-dark">
      {/* Hero */}
      <section className="py-24 bg-darker relative overflow-hidden">
        <Image
          src="/images/stock-analytics.jpg"
          alt="Analytics background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-darker/60 to-darker" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-t-4 border-primary" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Get in touch
            </h1>
            <p className="text-lg text-gray-400 font-light">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 bg-dark">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card hover={false} className="bg-gray-900">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                    <Mail className="text-black" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base font-black text-white mb-3 uppercase tracking-widest">Email</h3>
                  <p className="text-gray-400 text-sm">hello@axon.com</p>
                </CardHeader>
              </Card>

              <Card hover={false} className="bg-gray-900">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                    <Phone className="text-black" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base font-black text-white mb-3 uppercase tracking-widest">Phone</h3>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </CardHeader>
              </Card>

              <Card hover={false} className="bg-gray-900">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6">
                    <MapPin className="text-black" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base font-black text-white mb-3 uppercase tracking-widest">Office</h3>
                  <p className="text-gray-400 text-sm">123 Business Street<br />San Francisco, CA 94105</p>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card hover={false} className="bg-gray-900">
                <CardHeader>
                  <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Send us a message</h2>
                  <p className="text-gray-400 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
                        <Send className="text-black" size={40} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3 uppercase">Message sent!</h3>
                      <p className="text-gray-400">We'll get back to you as soon as possible.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        label="Name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                      <Input
                        label="Company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                      <div className="w-full">
                        <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                          Message
                        </label>
                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-5 py-4 border-2 border-gray-800 bg-darker text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-all duration-300"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <Button variant="primary" size="lg" type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
