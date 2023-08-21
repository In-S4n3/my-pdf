"use client";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            inter.className,
            "min-h-screen relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 "
          )}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
