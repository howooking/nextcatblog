/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dribbble.com', 'images.unsplash.com', 'cdn.hashnode.com'],
  },
  env: {
    mongodb_username: 'howoo',
    mongodb_password: '1234',
  },
};

module.exports = nextConfig;
