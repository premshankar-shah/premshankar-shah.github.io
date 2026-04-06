import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const isProd = process.env.NODE_ENV === "production";

// Set NEXT_PUBLIC_BASE_PATH env var to your repo name when deploying to a sub-path.
// e.g. for premshankar-shah.github.io/portfolio  → set REPO_NAME=portfolio in GitHub Actions
// For root domain (premshankar-shah.github.io)   → leave REPO_NAME empty
const repoName = process.env.REPO_NAME || "";
const basePath = isProd && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "export",          // static HTML export for GitHub Pages
  trailingSlash: true,       // required for GitHub Pages routing
  basePath,                  // e.g. "/portfolio" or "" for root domain
  assetPrefix: basePath,
  images: {
    unoptimized: true,       // next/image doesn't work with static export
  },
};

export default withMDX(nextConfig);
