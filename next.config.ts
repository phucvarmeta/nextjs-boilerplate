import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  /* config options here */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
