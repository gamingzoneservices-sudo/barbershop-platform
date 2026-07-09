/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com', // Google Maps photos
      'images.unsplash.com',       // Placeholder images
      'your-supabase-project.supabase.co', // Supabase storage
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  i18n: {
    locales: ['de', 'ar', 'en'],
    defaultLocale: 'de',
    localeDetection: true,
  },
  
  experimental: {
    optimizePackageImports: ['framer-motion', 'date-fns'],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig