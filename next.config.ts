import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ofwqnvguhipwxlganxhg.supabase.co",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
};

export default nextConfig;
