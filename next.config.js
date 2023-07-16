/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_API: process.env.HOST_API,
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE
  },
  redirects: () => {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? { source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }
        : { source: "/maintenance.html", destination: "/", permanent: false },
    ].filter(Boolean);
  }
}


module.exports = nextConfig

