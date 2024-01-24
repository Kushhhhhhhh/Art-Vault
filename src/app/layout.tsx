import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Sidebar from "../components/ui/sidebar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Art Vault",
  description: "Establish a repository for your artistic endeavors and professional imagery with Art Vault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
      <div className="border-b flex justify-center items-center">
          <div className="flex h-16 items-center px-4 container mx-auto">
            <Link href='/'>
            <Image
              src="/album.png"
              width="100"
              height="100"
              alt="app-logo"
            /></Link>
            <p className="text-xl font-medium text-center">Art Vault</p>
          </div>
      </div>
        <div className="flex">
          <Sidebar />
          <div className="w-full mr-4 px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
