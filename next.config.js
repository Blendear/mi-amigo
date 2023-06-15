//
// Table of content for this file is written at the bottom
//
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
    //hook2 - check if this remote patern is cybersecure
  },
};

module.exports = nextConfig;

//hook2 create a table of content of explainign what you do here
