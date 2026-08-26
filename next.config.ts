import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The API routes use Node.js runtime features (cookies and SQLite), so the
  // application must be deployed as a self-hosted Node server.
  output: "standalone",
  // Keep the native SQLite package outside the webpack bundle. Output file
  // tracing then copies its JavaScript loader and native addon into the
  // standalone release.
  serverExternalPackages: ["better-sqlite3"],
  outputFileTracingIncludes: {
    "/*": [
      "./node_modules/better-sqlite3/**/*",
      "./node_modules/bindings/**/*",
    ],
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Better Auth endpoints are slashless. Let the catch-all route receive the
  // original API path instead of Next's page-oriented slash redirect.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
