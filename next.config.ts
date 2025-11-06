// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 👇 Enables full static export for Cloudflare or any static hosting
  output: 'export',

  // 👇 Required because Cloudflare Pages can't use Next.js built-in image optimization
  images: {
    unoptimized: true,

    // Optional: Allow remote images if your site uses them
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
};

export default nextConfig;
