import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingIncludes: {
    "/api/**/*": ["./app/generated/client/**/*"],

    "/*": ["./app/generated/client/**/*"],
  },
};

export default nextConfig;
