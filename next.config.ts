import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  generateBuildId: async () => {
    // Force new build ID to bypass GitHub Pages cache
    return `build-${Date.now()}`;
  },
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

