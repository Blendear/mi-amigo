/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing-page",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["https://mi-amigo-green.vercel.app"],
    //   website of this project, so that images are loaded on the live website too
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
