/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['icon.horse', 'i.imgur.com'],
  },
};

module.exports = nextConfig;
