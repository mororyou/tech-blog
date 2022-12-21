/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'storage.googleapis.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
