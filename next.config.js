const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'nomics.com', 'assets.coingecko.com'],
  },
};

module.exports = withPWA(nextConfig);
