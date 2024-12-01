import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SignUpModal from "@/components/sign-up.modal";
import SignInModal from "@/components/sign-in.modal";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/auth-context";
import ProtectedRoute from "@/components/protected-route";

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
        <AuthProvider>
          <ProtectedRoute>
            <SignUpModal />
            <SignInModal />
            {children}
            <Toaster />
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
