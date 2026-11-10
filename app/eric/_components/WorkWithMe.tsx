import Link from "next/link";
import { profile, workWithMe } from "../content";
import { isSet, linkProps } from "../_lib/utils";

export function WorkWithMe() {
  // Until a booking link is set, "Book a call" goes to the contact form below.
  const bookHref = isSet(profile.bookingUrl) ? profile.bookingUrl : "#contact";

  return (
    <section id="work-with-me" aria-labelledby="eric-wwm-heading" className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl border border-ssl-gold/25 bg-[linear-gradient(135deg,#0b1d4d,#01081b_60%)] px-6 py-14 sm:px-12 md:py-20">
        <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(26,89,204,0.55),transparent_65%)]" />
        <div aria-hidden="true" className="absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.22),transparent_65%)]" />
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-ssl-gold">{workWithMe.eyebrow}</p>
        <h2 id="eric-wwm-heading" className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {workWithMe.heading}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{workWithMe.body}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href={workWithMe.servicesCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-ssl-gold px-6 py-3 text-sm font-semibold text-ssl-bg transition-colors hover:bg-[#d4b273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ssl-bg"
          >
            {workWithMe.servicesCta.label}
          </Link>
          <a
            {...linkProps(bookHref)}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ssl-bg"
          >
            {workWithMe.bookCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
