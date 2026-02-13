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
    default: "Build & Culture | Ryosuke",
    template: "%s | Build & Culture",
  },
  description:
    "東京都板橋区の人事プロフェッショナル。AIを活用したアプリ開発と、組織文化づくり（Build & Culture）を探求・発信するポートフォリオサイト。",
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
    title: "Build & Culture | Ryosuke",
    description: "つくって、育てる。開発と組織文化のあわいで。",
    siteName: "Build & Culture",
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
          {/* Contact */}
          <section id="contact" className="py-16 sm:py-24 md:py-28 lg:py-32">
            <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
              <p className="mb-10 text-sm tracking-[0.22em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-12 md:mb-16">
                Contact
              </p>
              <p className="mb-8 max-w-lg text-[0.95rem] tracking-[0.02em] leading-[2.1] text-[#2D2D2D]/85 sm:text-[1rem] sm:leading-[2.15] md:mb-10">
                お仕事の相談や感想など、お気軽にご連絡ください。
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="mailto:your-email@example.com"
                  className="inline-block rounded-lg border border-[#2D2D2D]/15 bg-[#F9F8F6] px-5 py-2.5 text-[0.9rem] tracking-[0.02em] text-[#2D2D2D]/90 transition-colors hover:border-[#B5A48B]/40 hover:bg-[#F0EDE8] hover:text-[#2D2D2D] sm:px-6 sm:py-3 sm:text-[0.95rem]"
                >
                  メール
                </a>
                <a
                  href="https://note.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-[#2D2D2D]/15 bg-[#F9F8F6] px-5 py-2.5 text-[0.9rem] tracking-[0.02em] text-[#2D2D2D]/90 transition-colors hover:border-[#B5A48B]/40 hover:bg-[#F0EDE8] hover:text-[#2D2D2D] sm:px-6 sm:py-3 sm:text-[0.95rem]"
                >
                  note
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-[#2D2D2D]/15 bg-[#F9F8F6] px-5 py-2.5 text-[0.9rem] tracking-[0.02em] text-[#2D2D2D]/90 transition-colors hover:border-[#B5A48B]/40 hover:bg-[#F0EDE8] hover:text-[#2D2D2D] sm:px-6 sm:py-3 sm:text-[0.95rem]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
        <footer className="mt-auto border-t border-[#2D2D2D]/10 px-6 pt-16 pb-12 sm:px-8 sm:pt-20 md:px-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
              <p className="text-xs tracking-[0.05em] text-gray-400 sm:text-sm">
                © 2026 Build & Culture / Ryosuke
              </p>
              <p className="text-xs tracking-[0.03em] text-gray-400">
                ※このサイトの内容は個人の見解であり、所属する組織の意見を代表するものではありません。
              </p>
            </div>
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
