"use client";

import { Footer } from "@/features/home/ui/Footer.styled";
import { Header } from "@/features/home/ui/Header.styled";
import Typography from "@/shared/components/Typography/Typography";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Typography variant="h4">Hello, World</Typography>
        </Header>
        <main>{children}</main>
        {/* <Footer>
          <Typography variant="h4">Hello, World</Typography>
        </Footer> */}
      </body>
    </html>
  );
}
