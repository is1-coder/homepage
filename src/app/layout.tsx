import type { Metadata } from "next";
import "./global.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "soshida",
  description: "soshida homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          async
          src="https://embed.zenn.studio/js/listen-embed-event.js"
        ></script>
      </head>
      <body>
        <Header />
        <main className="container mx-auto p-[--main-padding]">{children}</main>
      </body>
    </html>
  );
}
