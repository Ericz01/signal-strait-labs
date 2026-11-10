import { proof } from "../content";
import { isSet } from "../_lib/utils";
import { Counter } from "./Counter";

// Real numbers only. Stats still set to TODO are dropped, and the whole bar is
// hidden until at least one is real.
export function ProofBar() {
  const stats = proof.stats.filter((s): s is typeof s & { value: number } => typeof s.value === "number" && isSet(s.value));
  if (stats.length === 0) return null;

  return (
    <section aria-labelledby="eric-proof-heading" className="relative px-4 pt-16 sm:px-6 md:pt-20">
      <h2 id="eric-proof-heading" className="sr-only">
        {proof.heading}
      </h2>
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2 bg-ssl-bg px-5 py-7 md:px-6">
            <dt className="order-2 text-sm leading-snug text-slate-300">
              {s.label}
              {isSet(s.detail) && <span className="block text-slate-400">{s.detail}</span>}
            </dt>
            <dd className="order-1 font-display text-3xl font-bold tracking-tight text-ssl-gold sm:text-4xl">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
