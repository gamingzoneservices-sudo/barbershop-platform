/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the WASM version
  swcMinify: false, // temporarily disable minification (will be handled by WASM)
}

module.exports = nextConfig