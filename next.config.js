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
  assetPrefix : true? 'https://srshah27.github.io/srshah27' : 'https://srshah27.github.io/srshah27',
}

module.exports = nextConfig
