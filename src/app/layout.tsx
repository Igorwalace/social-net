//react
import type { Metadata } from "next";

//css
import "./globals.css";

//fonts
import { poppins } from "./fonts/page";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
