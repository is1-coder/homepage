import type { Metadata } from "next";
import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import Header from "@/components/header/Header";
import "@mantine/core/styles.css";

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
      <body>
        <MantineProvider>
          <Header />
          <Container my="xl">{children}</Container>
        </MantineProvider>
      </body>
    </html>
  );
}
