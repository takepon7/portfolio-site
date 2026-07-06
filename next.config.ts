import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // AVIF優先（WebPより2〜3割軽い）。変換結果はCDNにキャッシュされる。
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
