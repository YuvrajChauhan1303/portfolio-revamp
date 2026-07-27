/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first (smallest), falls back to WebP automatically per-browser support
    formats: ["image/avif", "image/webp"],
    // long-lived cache for optimized image responses
    minimumCacheTTL: 31536000,
  },
  reactStrictMode: true,
};

export default nextConfig;
