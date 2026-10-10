/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  generateEtags: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
