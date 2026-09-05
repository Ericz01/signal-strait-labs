'use client';

import React, { useState } from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { services } from '@/lib/services-data';

export function ContactSection() {
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceInterest: service,
          budgetRange: budget,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '', website: '' });
      setService('');
      setBudget('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const budgetOptions = [
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000+',
    'Not sure yet',
  ];

  const serviceOptions = [
    { label: 'General inquiry', value: '' },
    ...services.map((s) => ({ label: s.title, value: s.slug })),
  ];

  const budgetSelectOptions = [
    { label: 'Select a range', value: '' },
    ...budgetOptions.map((o) => ({ label: o, value: o })),
  ];

  return (
    <section className="bg-ssl-light-bg border-t border-slate-200/60 px-6 py-20" id="contact">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-12 pb-4 pt-2 md:grid-cols-2">
        <AnimateOnScroll variant="slide-up">
          <div id="about">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-ssl-bg md:text-4xl">
              Get in Touch
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-slate-700">
              Our team is ready to discuss your requirements. Send us a message and we&apos;ll be in touch shortly.
            </p>
            
            <div className="space-y-6 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="font-bold text-ssl-bg w-20">Address:</span>
                <span>Thome, Nairobi - Kenya</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-ssl-bg w-20">Phone:</span>
                <a href="tel:+254712895903" className="hover:text-ssl-blue transition-colors">
                  +254 712 895 903
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-ssl-bg w-20">Email:</span>
                <a href="mailto:connect@signalstraitlabs.com" className="hover:text-ssl-blue transition-colors">
                  connect@signalstraitlabs.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-ssl-bg w-20">Social:</span>
                <a
                  href="https://linkedin.com/company/signal-strait-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-ssl-blue transition-colors"
                >
                  LinkedIn
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card-dark relative z-10 rounded-2xl p-8">
            <h3 className="mb-6 text-lg font-bold text-white">
              {status === 'success' ? 'Message Sent!' : 'Send Us a Message'}
            </h3>
            
            {status === 'success' ? (
              <p className="text-slate-300 text-sm">Thanks for reaching out! We&apos;ll be in touch shortly.</p>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="website" 
                  className="hidden" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  className="glass-input-dark w-full rounded-lg px-4 py-3 text-sm"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  className="glass-input-dark w-full rounded-lg px-4 py-3 text-sm"
                  placeholder="name@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Company
                </label>
                <input
                  type="text"
                  className="glass-input-dark w-full rounded-lg px-4 py-3 text-sm"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Which service are you interested in?
                </label>
                <CustomSelect options={serviceOptions} value={service} onChange={setService} placeholder="General inquiry" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Budget range
                </label>
                <CustomSelect options={budgetSelectOptions} value={budget} onChange={setBudget} placeholder="Select a range" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="glass-input-dark w-full resize-none rounded-lg px-4 py-3 text-sm"
                  placeholder="Tell us what you need"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-lg border border-ssl-gold/30 bg-ssl-blue py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-ssl-blue/20 transition-all hover:border-ssl-gold/50 hover:bg-ssl-blue/90 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {errorMessage && <p className="text-red-400 text-xs mt-2">{errorMessage}</p>}
            </form>
            )}

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

