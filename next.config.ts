import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,   // Tells Next/Image to serve standard source assets without needing a Node server
  },
};

export default nextConfig;
