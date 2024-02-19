/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*/"
            : "/api/",
      },
      {
        source: "/admin/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/admin/:path*/"
            : "/assets/admin/:path*/",
      },
      {
        source: "/static/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/static/:path*/"
            : "/static/:path*/",
      },
    ];
  },
};

module.exports = nextConfig;
