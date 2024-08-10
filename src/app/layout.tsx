import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import AuthGoogleProvider from "@/components/providers/google-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eurohunter-queue",
  description: "Empowered by EuroHunter, Watch yourself in queue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthGoogleProvider>{children}</AuthGoogleProvider>
      </body>
    </html>
  );
}
