/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.tunem.com", "103.186.20.110"], // combine all domains in a single array
  },
  async rewrites() {
    return [
      {
        source: "/songs/:path*",
        // destination: "https://api.tunem.com/:path*", // original server
        destination: "http://103.186.20.110:8003/:path*", // original server
      },
      // AI Matcher API rewrites - proxy to Python FastAPI backend
      {
        source: "/api/ai-matcher-backend/:path*",
        destination: process.env.NEXT_PUBLIC_AI_MATCHER_API_URL
          ? `${process.env.NEXT_PUBLIC_AI_MATCHER_API_URL}/api/v1/:path*`
          : "http://localhost:8000/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
