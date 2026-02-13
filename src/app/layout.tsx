import type { Metadata } from "next";
import Link from "next/link";
import { Shippori_Mincho } from "next/font/google";
import { ProfileSection } from "@/components/ProfileSection";
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
      <body className="flex min-h-screen flex-col bg-[#F9F8F6] text-[#2D2D2D] font-sans antialiased">
        <div className="flex-1">
          {children}
          <ProfileSection />
        </div>
        <footer className="mt-auto border-t border-[#2D2D2D]/10 px-6 py-12 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs tracking-[0.05em] text-gray-400 sm:text-sm">
              © 2026 Logic & Heart / Ryosuke
            </p>
            <Link
              href="https://note.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.05em] text-gray-400 transition-colors hover:text-[#B5A48B] sm:text-sm"
            >
              note
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
