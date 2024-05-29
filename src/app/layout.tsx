import type { Metadata } from "next";
import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "@/components/header/Header";
import { notoSansJP } from "@/utils/fonts";

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
        <ColorSchemeScript />
      </head>
      <body className={notoSansJP.className}>
        <MantineProvider>
          <Header />
          <Container my="xl">{children}</Container>
        </MantineProvider>
      </body>
    </html>
  );
}
