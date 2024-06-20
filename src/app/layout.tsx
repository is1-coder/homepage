import type { Metadata } from "next";
import "./global.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import Header from "@/components/Header/Header";
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
        <script
          async
          src="https://embed.zenn.studio/js/listen-embed-event.js"
        ></script>
      </head>
      <body
        className={notoSansJP.className}
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <MantineProvider>
          <Header />
          <Container size="md" p="xl">
            <main>{children}</main>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
