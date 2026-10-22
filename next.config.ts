import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: '</how-it-works>; rel="service-doc"; type="text/html", </.well-known/service-description.json>; rel="service-desc"; type="application/json"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
