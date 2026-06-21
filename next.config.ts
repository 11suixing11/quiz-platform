import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/quiz-platform",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
