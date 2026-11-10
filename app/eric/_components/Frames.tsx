import Image from "next/image";
import type { ImageSlot } from "../content";
import { asset } from "../_lib/utils";
import { cn } from "@/lib/utils";

// Every image sits in a fixed aspect-ratio box with object-cover, so a real
// image of a slightly different size still fits without moving the layout.

function SlotImage({ image, sizes, className }: { image: ImageSlot; sizes: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-[#06112e]", className)} style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <Image src={asset(image.src)} alt={image.alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function BrowserFrame({ image, sizes }: { image: ImageSlot; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a1634] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-white/[0.06] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 h-4 flex-1 rounded-md bg-white/[0.06]" />
      </div>
      <SlotImage image={image} sizes={sizes} />
    </div>
  );
}

export function PhoneFrame({ image, sizes }: { image: ImageSlot; sizes: string }) {
  return (
    <div className="mx-auto w-full max-w-[17rem] rounded-[2.2rem] border border-white/15 bg-[#0a1634] p-2.5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="relative overflow-hidden rounded-[1.7rem] bg-[#06112e]">
        <div aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/70" />
        <SlotImage image={image} sizes={sizes} />
      </div>
    </div>
  );
}

export function FramedImage({ image, sizes }: { image: ImageSlot; sizes: string }) {
  if (image.frame === "phone") return <PhoneFrame image={image} sizes={sizes} />;
  if (image.frame === "browser") return <BrowserFrame image={image} sizes={sizes} />;
  return <SlotImage image={image} sizes={sizes} className="rounded-xl border border-white/10" />;
}
