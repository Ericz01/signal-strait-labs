import { preload } from 'react-dom';

// Art-directed photo: phones get the small file, larger screens the big one.
// next/image can't build a srcset here because `images.unoptimized` is on, so
// this renders a plain <picture>. Above-the-fold photos pass `priority` to load
// eagerly, with one media-matched preload per size in the <head>.
type ResponsivePhotoProps = {
  /** Path without the "-<width>.webp" suffix, e.g. "/images/hero-nairobi-night". */
  base: string;
  smallWidth: number;
  largeWidth: number;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ResponsivePhoto({ base, smallWidth, largeWidth, alt, className, priority = false }: ResponsivePhotoProps) {
  if (priority) {
    // One preload per screen size, so each device fetches only its own file.
    preload(`${base}-${smallWidth}.webp`, { as: 'image', type: 'image/webp', media: '(max-width: 767px)', fetchPriority: 'high' });
    preload(`${base}-${largeWidth}.webp`, { as: 'image', type: 'image/webp', media: '(min-width: 768px)', fetchPriority: 'high' });
  }
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={`${base}-${largeWidth}.webp`} type="image/webp" />
      <img
        src={`${base}-${smallWidth}.webp`}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
