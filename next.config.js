/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { optimizePackageImports: ["lucide-react"] },
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] }
};
