import { Yusei_Magic } from "next/font/google";
import "./globals.css";

const yuseiMagic = Yusei_Magic({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "誕生日カード作成アプリ",
  description: "オリジナルの誕生日カードを作成して、大切な人をお祝いしましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={yuseiMagic.className}>{children}</body>
    </html>
  );
}