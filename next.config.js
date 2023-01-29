/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'abs.twimg.com',
      'overthought.ghost.io',
      'imagedelivery.net',
    ],
  },
  assetPrefix: '/',
  basePath: '/srshah27.github.io',
}

module.exports = nextConfig
