import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Instructs Next.js to build a static html architecture
  images: {
    unoptimized: true,   // Tells Next/Image to serve standard source assets without needing a Node server
  },
};

export default nextConfig;