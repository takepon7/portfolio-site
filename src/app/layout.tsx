import type { Metadata } from "next";
import Link from "next/link";
import { Shippori_Mincho } from "next/font/google";
import { ContactSection } from "@/components/ContactSection";
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
    default: "Build & Culture | つくって、育てる。",
    template: "%s | Build & Culture",
  },
  description:
    "つくって、育てる。効率とロジックで仕組みを、対話と情熱で文化を編み直す。プロダクトをビルドすることと組織を育てること。Build & Culture のポートフォリオ。",
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
    title: "Build & Culture | つくって、育てる。",
    description:
      "効率とロジックで仕組みを、対話と情熱で文化を。プロダクトをビルドすることと組織を育てること。",
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
          <ContactSection
            formspreeEndpoint={
              process.env.NEXT_PUBLIC_FORMSPREE_KEY
                ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`
                : null
            }
          />
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
