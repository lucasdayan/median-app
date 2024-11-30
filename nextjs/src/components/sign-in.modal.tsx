"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
export default function SignInModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("signinmodal");
  return (
    <>
      {modal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="container flex items-center justify-center h-screen">
            <div className="relative w-full max-w-md space-y-6 p-6 bg-background rounded-lg shadow-lg">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </Link>

              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Sign up with email
                </h1>
                <p className="text-muted-foreground">
                  Enter your credentials below to log into your account.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Your email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button className="w-full" size="lg">
                  Log in
                </Button>
                <div className="space-y-4 text-center text-sm">
                  <Link
                    href={"/?signupmodal=true"}
                    className="inline-flex items-center text-gray-600 hover:text-gray-700"
                  >
                    Doesn't have an account? Sign up now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}