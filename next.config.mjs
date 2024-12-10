/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // We only want to configure client-side webpack
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,  // Prevents webpack from trying to polyfill 'fs'
        path: false, // Prevents webpack from trying to polyfill 'path'
        crypto: false // Prevents webpack from trying to polyfill 'crypto'
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};


export default nextConfig;
