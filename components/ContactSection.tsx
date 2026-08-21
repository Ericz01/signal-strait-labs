'use client';

import React from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function ContactSection() {
  return (
    <section className="bg-ssl-light-bg border-t border-slate-200/60 px-6 py-20" id="contact">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-12 pb-4 pt-2 md:grid-cols-2">
        <AnimateOnScroll variant="slide-up">
          <div id="about">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-ssl-bg md:text-4xl">
              Ready to Establish <br />
              <span className="text-gold-contrast">Market Command?</span>
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-700">
              Contact our engineering lab directly to analyze your current tech
              stack bottlenecks or request a targeted market attack
              infrastructure plan.
            </p>
            <div className="space-y-4 text-sm text-slate-700">
              <p>
                <strong className="text-ssl-bg">HQ:</strong> Thome, Nairobi -
                Kenya
              </p>
              <p>
                <strong className="text-ssl-bg">Email:</strong>{" "}
                connect@signalstraitlabs.com
              </p>
              <p>
                <strong className="text-ssl-bg">Secure Line:</strong> +254 712
                895 903
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="scale" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card-dark relative z-10 rounded-2xl p-8">
            <h3 className="mb-6 text-lg font-bold text-white">
              Initialize{" "}
              <span className="text-brand-gradient">Technical Discovery</span>
            </h3>
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Corporate Identity / Name
                </label>
                <input
                  type="text"
                  className="glass-input-dark w-full rounded-lg px-4 py-3 text-sm"
                  placeholder="e.g., Lead Architect or Enterprise VP"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Secure Email Endpoint
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
                  Primary Engineering Challenge
                </label>
                <textarea
                  rows={3}
                  className="glass-input-dark w-full resize-none rounded-lg px-4 py-3 text-sm"
                  placeholder="Describe the optimization parameter needed..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg border border-ssl-gold/30 bg-ssl-blue py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-ssl-blue/20 transition-all hover:border-ssl-gold/50 hover:bg-ssl-blue/90"
              >
                Initialize Technical Discovery
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
