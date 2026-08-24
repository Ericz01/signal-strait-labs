'use client';

import React, { useState } from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { services } from '@/lib/services-data';

export function ContactSection() {
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');

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
            <p className="mb-6 text-sm leading-relaxed text-slate-700">
              Our team is ready to discuss your requirements. Send us a message and we'll be in touch shortly.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <p>
                <strong className="text-ssl-bg">HQ:</strong> Thome, Nairobi - Kenya
              </p>
              <p>
                <strong className="text-ssl-bg">Email:</strong>{" "}
                connect@signalstraitlabs.com
              </p>
              <p>
                <strong className="text-ssl-bg">Secure Line:</strong> +254 712 895 903
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card-dark relative z-10 rounded-2xl p-8">
            <h3 className="mb-6 text-lg font-bold text-white">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  className="glass-input-dark w-full rounded-lg px-4 py-3 text-sm"
                  placeholder="Your name"
                  required
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
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg border border-ssl-gold/30 bg-ssl-blue py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-ssl-blue/20 transition-all hover:border-ssl-gold/50 hover:bg-ssl-blue/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

