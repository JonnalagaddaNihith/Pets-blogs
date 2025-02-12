const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow images from any hostname with https
      },
    ],
    domains: ['dccwebsiteimages.s3.ap-south-1.amazonaws.com', 'cdn.pixabay.com'],
  },
}

module.exports = withContentlayer(nextConfig)