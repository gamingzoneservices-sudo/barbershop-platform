/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use SWC with WASM fallback
  swcMinify: false, // disable minification to avoid native binary use
  experimental: {
    // Optional: force WASM if available
  },
}

module.exports = nextConfig