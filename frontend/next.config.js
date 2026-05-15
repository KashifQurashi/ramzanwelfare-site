/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saylaniwelfare.com",
      },
      {
        protocol: "https",
        hostname: "pixnio.com",
      },
    ],
  },
};

module.exports = nextConfig;
