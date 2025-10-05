import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ValueScope - 미국 저평가 우량주 발견",
  description: "소액으로 시작하는 미국 주식 투자. 초보자를 위한 밸류 스크리너와 포트폴리오 시뮬레이터",
  keywords: ["미국주식", "가치투자", "배당주", "저평가주식", "포트폴리오"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
