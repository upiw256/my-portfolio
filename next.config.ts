import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Diperlukan untuk static export di GitHub Pages
  },
  /* config options here */
};

export default nextConfig;
