import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  // A 404 has no canonical URL; do not inherit the home page one.
  alternates: { canonical: null },
  description:
    "The page you are looking for does not exist. Go to the Signal Strait Labs home page or browse our services.",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-ssl-bg px-4 py-24">
      <Image src="/images/blur-blue-amber-1200.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-80" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ssl-bg/55" />
      <div className="glass-card-dark w-full max-w-xl rounded-3xl px-8 py-12 text-center md:px-12">
        <p aria-hidden="true" className="font-display text-7xl font-extrabold text-gold-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="primary" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="glass-chip border-white/20 text-white hover:bg-white/15">
            <Link href="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
