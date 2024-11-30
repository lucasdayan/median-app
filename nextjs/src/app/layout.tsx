import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SignUpModal from "@/components/ui/sign-up.modal";
import SignInModal from "@/components/sign-in.modal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Median",
  description: "A place to read and share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SignUpModal />
        <SignInModal />
        {children}
      </body>
    </html>
  );
}
