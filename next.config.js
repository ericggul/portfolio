/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["replicate.delivery", "pds.joongang.co.kr", "cdn.theculturetrip.com", "www.urban75.org"],
  },
};

module.exports = nextConfig;
