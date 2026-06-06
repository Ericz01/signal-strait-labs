import Image from "next/image";

export function BrandLogo({
  priority = false,
  className = "h-10 w-auto md:h-12",
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Signal Strait Labs"
      width={240}
      height={72}
      className={`${className} object-contain object-left`}
      priority={priority}
      sizes="(max-width: 768px) 200px, 260px"
    />
  );
}
