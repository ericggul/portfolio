/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["replicate.delivery"],
  },
};

module.exports = nextConfig;
