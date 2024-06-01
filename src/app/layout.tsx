//react
import type { Metadata } from "next";

//css
import "./globals.css";

//fonts
import { main } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Social Net",
  description: "Projeto Rede Social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={main.className}>{children}</body>
    </html>
  );
}
