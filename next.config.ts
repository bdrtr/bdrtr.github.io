import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize bundle size
  experimental: {
    optimizePackageImports: ['lottie-react', 'recharts', 'bootstrap-icons'],
  },
};

export default nextConfig;

