const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // src 디렉토리를 프로젝트 루트로 설정
  experimental: {
    appDir: true,
  },
  distDir: ".next",
  // src 폴더를 기본 경로로 사용
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

module.exports = nextConfig;
