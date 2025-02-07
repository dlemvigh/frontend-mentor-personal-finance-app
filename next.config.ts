import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  devIndicators: {
    appIsrStatus: false,
    buildActivityPosition: "bottom-right"
  }
};

export default nextConfig;
