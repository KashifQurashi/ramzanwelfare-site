/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saylaniwelfare.com",
      },
    ],
  },
};

module.exports = nextConfig;
