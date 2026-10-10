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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
      },
    ];
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
