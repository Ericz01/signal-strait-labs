"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type WorkItem = {
  id: string;
  title: string;
  tags: string[];
  featured?: boolean;
  card: React.ReactNode;
  detail: React.ReactNode;
};

type Props = {
  filters: Array<{ id: string; label: string }>;
  items: WorkItem[];
  cardCta: string;
  closeLabel: string;
};

const hashFor = (id: string) => `#case-${id}`;

// Filter buttons, the card grid, and one native <dialog> per case study.
// Every case study is in the server HTML (inside its closed dialog), so the
// full text is readable by search engines; this component only adds the
// filtering and the open/close behaviour. A case can be linked directly with
// /eric#case-<id>.
export function WorkExplorer({ filters, items, cardCta, closeLabel }: Props) {
  const [active, setActive] = useState(filters[0]?.id ?? "all");
  const dialogs = useRef(new Map<string, HTMLDialogElement>());

  const open = useCallback((id: string) => {
    const dialog = dialogs.current.get(id);
    if (!dialog || dialog.open) return;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.documentElement.style.overflow = "hidden";
    history.replaceState(null, "", hashFor(id));
  }, []);

  const onClose = useCallback((id: string) => {
    document.documentElement.style.overflow = "";
    if (location.hash === hashFor(id)) history.replaceState(null, "", location.pathname + location.search);
  }, []);

  // Open a case study linked directly by its hash.
  useEffect(() => {
    const id = location.hash.startsWith("#case-") ? location.hash.slice(6) : "";
    if (id && dialogs.current.has(id)) open(id);
  }, [open]);

  useEffect(() => () => void (document.documentElement.style.overflow = ""), []);

  const visible = items.filter((item) => active === "all" || item.tags.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ssl-bg",
              active === f.id
                ? "border-ssl-gold bg-ssl-gold text-ssl-bg"
                : "border-white/15 text-slate-200 hover:border-white/40 hover:text-white"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {items.map((item) => {
          const shown = visible.includes(item);
          return (
            <li key={item.id} hidden={!shown} className={cn(item.featured && "sm:col-span-2")}>
              <article className="eric-card eric-card-hover group relative h-full overflow-hidden rounded-2xl">
                {item.card}
                <button
                  type="button"
                  onClick={() => open(item.id)}
                  aria-haspopup="dialog"
                  aria-label={`${cardCta}: ${item.title}`}
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ssl-gold"
                />
              </article>
            </li>
          );
        })}
      </ul>

      {items.map((item) => (
        <dialog
          key={item.id}
          id={`case-${item.id}`}
          ref={(el) => {
            if (el) dialogs.current.set(item.id, el);
            else dialogs.current.delete(item.id);
          }}
          aria-labelledby={`case-${item.id}-title`}
          onClose={() => onClose(item.id)}
          onClick={(e) => {
            // Click on the backdrop (outside the panel) closes it.
            if (e.target === e.currentTarget) e.currentTarget.close();
          }}
          className="eric-dialog overflow-y-auto"
        >
          <div className="sticky top-0 z-10 flex justify-end bg-gradient-to-b from-[#030b22] via-[#030b22]/90 to-transparent px-4 pb-4 pt-4 sm:px-6">
            <button
              type="button"
              autoFocus
              onClick={(e) => (e.currentTarget.closest("dialog") as HTMLDialogElement | null)?.close()}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-ssl-bg/80 px-4 text-sm font-medium text-slate-200 transition-colors hover:border-ssl-gold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M4.3 4.3a1 1 0 0 1 1.4 0L10 8.6l4.3-4.3a1 1 0 1 1 1.4 1.4L11.4 10l4.3 4.3a1 1 0 0 1-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 0 1-1.4-1.4L8.6 10 4.3 5.7a1 1 0 0 1 0-1.4Z" />
              </svg>
              {closeLabel}
            </button>
          </div>
          {item.detail}
        </dialog>
      ))}
    </div>
  );
}
