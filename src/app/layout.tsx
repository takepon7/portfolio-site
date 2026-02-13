import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Logic & Heart | Ryosuke",
    template: "%s | Logic & Heart",
  },
  description:
    "東京都板橋区の人事プロフェッショナル。AIを活用したアプリ開発と、組織開発の独自理論（Logic & Heart）を探求・発信するポートフォリオサイト。",
  keywords: [
    "人事",
    "HR",
    "組織開発",
    "AIコーディング",
    "Next.js",
    "ポートフォリオ",
    "板橋",
  ],
  openGraph: {
    title: "Logic & Heart | Ryosuke",
    description: "ロジックで組み、心で動かす。人事とエンジニアリングの融合。",
    siteName: "Logic & Heart",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={shipporiMincho.variable}>
      <body className="min-h-screen bg-[#F9F8F6] text-[#2D2D2D] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
