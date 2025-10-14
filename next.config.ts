// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    // either style works — remotePatterns is the most explicit:
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      
    ],
    // OR, if you prefer the short form, comment out remotePatterns and use:
    // domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
};

export default nextConfig;
