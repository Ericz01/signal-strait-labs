import { ASSET_VERSION } from "../content";

/** True when a content value is real (not empty and not a TODO placeholder). */
export function isSet(value: unknown): value is string | number {
  if (typeof value === "number") return Number.isFinite(value);
  if (typeof value !== "string") return false;
  const v = value.trim();
  return v !== "" && !/^TODO\b/i.test(v) && !v.includes("[ADD");
}

/** Adds the cache-busting version to a file in public/. */
export function asset(src: string): string {
  return `${src}${src.includes("?") ? "&" : "?"}v=${ASSET_VERSION}`;
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/** Props for a link: external links open in a new tab, safely. */
export function linkProps(href: string) {
  return isExternal(href) ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
}

/** "2022 to now", "2019 to 2022", or "" while the start year is a placeholder. */
export function yearRange(start: string, end: string): string {
  if (!isSet(start)) return end === "now" ? "Current" : "";
  if (!isSet(end)) return start;
  return `${start} to ${end}`;
}
