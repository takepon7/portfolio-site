import type { Metadata } from "next";
import { Shippori_Mincho, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ContactSection } from "@/components/ContactSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "optional",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "optional",
});

const SITE_TITLE = "Ryosuke Takeda — Claude Codeで個人開発";
const SITE_DESCRIPTION =
  "Claude Codeで、アプリやサービスをひとりで作っています。本業は人事。睡眠・キャリア・介護・英語学習など、自分や身近な人の課題を形にしています。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Ryosuke Takeda",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Ryosuke Takeda", url: SITE_URL }],
  creator: "Ryosuke Takeda",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  robots: { index: true, follow: true },
  keywords: [
    "個人開発者",
    "個人事業主",
    "人事",
    "複業",
    "People Ops",
    "AI開発",
    "Claude Code",
    "Next.js",
    "Flutter",
    "Supabase",
    "Claude API",
    "SaaS",
    "DX",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Ryosuke Takeda",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${shipporiMincho.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ryosuke Takeda",
              alternateName: "竹田 良輔",
              url: SITE_URL,
              jobTitle: "個人開発者 / Indie Developer",
              description: SITE_DESCRIPTION,
              knowsAbout: ["Next.js", "Flutter", "Supabase", "Stripe", "Claude API", "DX", "People Ops"],
              sameAs: [
                "https://github.com/takepon7",
                "https://qiita.com/takepon7",
                "https://zenn.dev/takepon7",
                "https://x.com/takepon_7",
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-paper text-ink font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          本文へスキップ
        </a>
        <ScrollProgress />
        <CommandPalette />
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
        <footer className="mt-auto border-t border-ink/10 px-6 pt-16 pb-12 sm:px-8 sm:pt-20 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-3 text-center font-mono sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[0.72rem] tracking-[0.05em] text-ink/45">
                © 2026 Ryosuke Takeda
              </p>
              <p className="text-[0.72rem] tracking-[0.08em] text-ink/45">
                現場のドメイン知識 × AI実装力
              </p>
            </div>
            <p className="mt-4 text-center text-[0.7rem] leading-relaxed tracking-[0.02em] text-ink/40 sm:text-left">
              本サイトは個人としての活動・見解であり、所属する組織を代表するものではありません。
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
