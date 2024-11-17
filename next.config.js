/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      unoptimized: true,  // Cloudflare Pagesでの画像最適化対応
      domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // 画像ドメインの許可
    },
    // Cloudflare Pagesに最適化された設定
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
      }
      return config;
    },
  }
  
  module.exports = nextConfig