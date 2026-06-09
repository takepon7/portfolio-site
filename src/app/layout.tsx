import type { Metadata } from "next";
import { Shippori_Mincho, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ContactSection } from "@/components/ContactSection";
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

const SITE_TITLE = "Ryosuke Takeda — 業務の痛みを、システムで解く";
const SITE_DESCRIPTION =
  "人事／People Opsの現場を10年以上見てきた個人開発者。介護・中小企業・HR・英語学習の現場の痛みを、AIプロダクトとして実装・販売しています。";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Ryosuke Takeda",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "個人開発者",
    "個人事業主",
    "People Ops",
    "AI開発",
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
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Ryosuke Takeda — 業務の痛みを、システムで解く",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero/hero-main.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${shipporiMincho.variable} ${jetBrainsMono.variable}`}>
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
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-3 text-center font-mono sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[0.72rem] tracking-[0.05em] text-gray-400">
                © 2026 Ryosuke Takeda
              </p>
              <p className="text-[0.72rem] tracking-[0.08em] text-gray-400">
                現場のドメイン知識 × AI実装力
              </p>
            </div>
            <p className="mt-4 text-center text-[0.7rem] leading-relaxed tracking-[0.02em] text-gray-400/80 sm:text-left">
              本サイトは個人としての活動・見解であり、所属する組織を代表するものではありません。
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
