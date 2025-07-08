//next.config.mjs or
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-website",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
