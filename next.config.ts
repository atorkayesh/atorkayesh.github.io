import type { NextConfig } from "next";

// Served from the root of https://atorkayesh.github.io, so no basePath is needed.
// If the site ever moves to a subfolder (e.g. user.github.io/repo), set it here.
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
