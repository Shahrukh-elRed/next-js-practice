/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/oldpage",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
