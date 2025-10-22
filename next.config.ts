// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 👈 enables static export
  images: {
    unoptimized: true, // 👈 required for static sites (no Next.js image optimization)
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
};

export default nextConfig;
