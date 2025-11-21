import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Temporarily removed basePath to force cache refresh
  // basePath: '/dbs',
  // assetPrefix: '/dbs/',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

