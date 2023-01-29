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
  assetPrefix: 'srshah27.github.io',
  basePath: '.',
}

module.exports = nextConfig
