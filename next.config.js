/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["replicate.delivery", "pds.joongang.co.kr"],
  },
};

module.exports = nextConfig;
