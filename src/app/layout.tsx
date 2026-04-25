import type { Metadata } from "next";
import Link from "next/link";
import { Shippori_Mincho } from "next/font/google";
import { ContactSection } from "@/components/ContactSection";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Ryosuke Takeda | Corporate Engineer × AI Developer",
    template: "%s | Ryosuke Takeda",
  },
  description:
    "人事・HR領域のバックグラウンドを持つコーポレートエンジニア。Next.js / Supabase / Claude APIを使ったSaaS開発とAI業務自動化を実践。",
  keywords: [
    "コーポレートエンジニア",
    "人事",
    "HR",
    "AI開発",
    "Next.js",
    "Supabase",
    "Claude API",
    "SaaS",
    "ポートフォリオ",
  ],
  openGraph: {
    title: "Ryosuke Takeda | Corporate Engineer × AI Developer",
    description:
      "人事・HR領域のバックグラウンドを持つコーポレートエンジニア。Next.js / Supabase / Claude APIを使ったSaaS開発とAI業務自動化を実践。",
    siteName: "Ryosuke Takeda",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Ryosuke Takeda | Corporate Engineer × AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryosuke Takeda | Corporate Engineer × AI Developer",
    description:
      "人事・HR領域のバックグラウンドを持つコーポレートエンジニア。Next.js / Supabase / Claude APIを使ったSaaS開発とAI業務自動化を実践。",
    images: ["/images/hero/hero-main.jpg"],
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
