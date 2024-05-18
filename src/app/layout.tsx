import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";

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
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
