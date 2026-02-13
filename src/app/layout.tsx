import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOGIC & HEART | logic-and-heart.com",
  description:
    "ロジックで組み、心で動かす。アプリケーション開発と人事哲学。再現性のある成長の方程式を実装します。",
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
