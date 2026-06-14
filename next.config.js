/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/resume",
        destination: "/resume/2026.pdf",
        permanent: false,
      },
      {
        source: "/cv",
        destination: "/resume/2026.pdf",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
