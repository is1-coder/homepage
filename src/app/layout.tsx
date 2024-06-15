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
      </head>
      <body className={notoSansJP.className}>
        <MantineProvider>
          <Header height={"150px"} />
          {/* Headerのheightと同じ値のmtを指定 */}
          <Container size="xl" mt="150px" py="md">
            <main>{children}</main>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
